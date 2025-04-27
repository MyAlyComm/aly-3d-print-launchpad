
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
        .eq("user_id", user.id)
        .order("created_at");

      if (error) {
        toast.error("Failed to load chapter progress");
        throw error;
      }

      return data;
    },
    enabled: !!user,
  });

  const updateProgress = useMutation({
    mutationFn: async ({ chapterNumber, sectionId, responseData = {} }: { 
      chapterNumber: number; 
      sectionId: string;
      responseData?: Record<string, any>;
    }) => {
      if (!user) throw new Error("User not authenticated");

      // First check if this section already exists for the user to avoid duplicates
      const { data: existingEntries } = await supabase
        .from("user_chapter_responses")
        .select("id")
        .eq("user_id", user.id)
        .eq("chapter_number", chapterNumber)
        .eq("section_id", sectionId)
        .single();
        
      // If entry exists, update it instead of inserting a new one
      if (existingEntries) {
        const { error } = await supabase
          .from("user_chapter_responses")
          .update({
            response_data: responseData,
            completed_at: new Date().toISOString()
          })
          .eq("user_id", user.id)
          .eq("chapter_number", chapterNumber)
          .eq("section_id", sectionId);
        
        if (error) throw error;
      } else {
        // If no entry exists, insert a new one
        const { error } = await supabase
          .from("user_chapter_responses")
          .insert({
            user_id: user.id,
            chapter_number: chapterNumber,
            section_id: sectionId,
            response_data: responseData,
            completed_at: new Date().toISOString(),
          });

        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chapter-progress"] });
    },
    onError: () => {
      toast.error("Failed to update progress");
    },
  });

  const isChapterCompleted = (chapterNumber: number) => {
    const requiredSections = getRequiredSectionsForChapter(chapterNumber);
    const completedSections = chapterProgresses?.filter(
      (progress) => progress.chapter_number === chapterNumber && progress.completed_at
    ) || [];

    return requiredSections.every((section) =>
      completedSections.some((completed) => completed.section_id === section)
    );
  };

  const getChapterLatestSection = (chapterNumber: number) => {
    const chapterEntries = chapterProgresses?.filter(
      (progress) => progress.chapter_number === chapterNumber
    ) || [];
    
    if (chapterEntries.length === 0) return null;
    
    return chapterEntries
      .sort((a, b) => {
        if (!a.completed_at) return 1;
        if (!b.completed_at) return -1;
        return new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime();
      })[0];
  };

  const calculateOverallProgress = () => {
    const totalChapters = 11; // Introduction (0) + 10 chapters
    const completedChapters = Array.from({ length: totalChapters }, (_, i) => i)
      .filter(isChapterCompleted)
      .length;
    
    return (completedChapters / totalChapters) * 100;
  };

  const getRequiredSectionsForChapter = (chapterNumber: number): string[] => {
    if (chapterNumber === 0) { // Introduction
      return [
        'opportunity',
        'how-to-use',
        'book-structure',
        'chapters-overview',
        'story',
        'journey',
        'business',
        'conclusion'
      ];
    }
    
    // Return the required sections for regular chapters
    const commonSections = ['worksheet'];
    
    switch (chapterNumber) {
      case 1:
        return [...commonSections, 'arbitrage', 'timeline', 'myths', 'future'];
      case 2:
        return [...commonSections, 'theorem', 'awakening', 'revelation', 'decisionTree'];
      case 3:
        return [...commonSections, 'core-system', 'three-products', 'plus-one', 'monthly-cycles'];
      case 4:
        return [...commonSections, 'profits-framework', 'match-framework', 'commercial-licensing', 'product-trinity'];
      case 5:
        return [...commonSections, 'requirements', 'printer-selection', 'accessories', 'workspace'];
      case 6:
        return [...commonSections, 'platform-comparison', 'platform-strategy', 'month-plan'];
      case 7:
        return [...commonSections, 'foundation', 'setup-system', 'first-print', 'listings'];
      case 8:
        return [...commonSections, 'marketing-funnel', 'marketing-steps', 'troubleshooting', 'content-creation'];
      case 9:
        return [...commonSections, 'scaling-mindset', 'production-scaling', 'market-expansion', 'team-building'];
      case 10:
        return [...commonSections, 'future-value', 'competitive-moat', 'future-strategy'];
      default:
        return commonSections;
    }
  };

  return {
    chapterProgresses,
    isLoading,
    updateProgress,
    isChapterCompleted,
    getChapterLatestSection,
    calculateOverallProgress,
    getRequiredSectionsForChapter
  };
}
