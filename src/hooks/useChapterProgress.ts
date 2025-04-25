
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export type ChapterProgress = {
  chapter_number: number;
  completed_at: string | null;
  section_id: string;
  response_data?: Record<string, any>;
};

export function useChapterProgress() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: chapterProgresses, isLoading } = useQuery({
    queryKey: ["chapter-progress"],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from("user_chapter_responses")
        .select("chapter_number, completed_at, section_id, response_data")
        .eq("user_id", user.id);

      if (error) {
        toast.error("Failed to load chapter progress");
        throw error;
      }

      return data;
    },
    enabled: !!user,
  });

  const updateProgress = useMutation({
    mutationFn: async ({ chapterNumber, sectionId }: { chapterNumber: number; sectionId: string }) => {
      if (!user) throw new Error("User not authenticated");

      const { error } = await supabase
        .from("user_chapter_responses")
        .upsert({
          user_id: user.id,
          chapter_number: chapterNumber,
          section_id: sectionId,
          completed_at: new Date().toISOString(),
        });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chapter-progress"] });
      toast.success("Progress updated");
    },
    onError: () => {
      toast.error("Failed to update progress");
    },
  });

  // Helper function to check if a chapter is completed
  const isChapterCompleted = (chapterNumber: number) => {
    return chapterProgresses?.some(
      (progress) => progress.chapter_number === chapterNumber && progress.completed_at
    ) || false;
  };

  // Get the latest section worked on for a chapter
  const getChapterLatestSection = (chapterNumber: number) => {
    const chapterEntries = chapterProgresses?.filter(
      (progress) => progress.chapter_number === chapterNumber
    ) || [];
    
    if (chapterEntries.length === 0) return null;
    
    // Sort by completed_at date, most recent first
    return chapterEntries
      .sort((a, b) => {
        if (!a.completed_at) return 1;
        if (!b.completed_at) return -1;
        return new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime();
      })[0];
  };

  // Calculate overall course progress
  const calculateOverallProgress = () => {
    // Count unique chapters that have any activity
    const uniqueChapters = new Set();
    chapterProgresses?.forEach(progress => {
      if (progress.completed_at) {
        uniqueChapters.add(progress.chapter_number);
      }
    });
    
    const totalChapters = 13; // Updated total number of chapters
    return (uniqueChapters.size / totalChapters) * 100;
  };

  return {
    chapterProgresses,
    isLoading,
    updateProgress,
    isChapterCompleted,
    getChapterLatestSection,
    calculateOverallProgress
  };
}
