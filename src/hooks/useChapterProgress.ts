
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export type ChapterProgress = {
  chapter_number: number;
  completed_at: string | null;
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
        .select("chapter_number, completed_at")
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

  return {
    chapterProgresses,
    isLoading,
    updateProgress,
  };
}
