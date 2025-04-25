
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export interface ChapterFormState {
  [key: string]: {
    checkboxes: { [key: string]: boolean };
    textInputs: { [key: string]: string };
  };
}

export function useChapterForm(chapterNumber: number, sectionId: string) {
  const [formState, setFormState] = useState<ChapterFormState>({});
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    loadSavedResponses();
  }, [chapterNumber, sectionId]);

  const loadSavedResponses = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('user_chapter_responses')
        .select('response_data')
        .eq('user_id', user.id)
        .eq('chapter_number', chapterNumber)
        .eq('section_id', sectionId)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        setFormState(data.response_data);
      }
    } catch (error) {
      console.error('Error loading responses:', error);
      toast.error('Failed to load your previous responses');
    } finally {
      setIsLoading(false);
    }
  };

  const saveResponse = async (sectionKey: string, updates: {
    checkboxes?: { [key: string]: boolean },
    textInputs?: { [key: string]: string }
  }) => {
    if (!user) {
      toast.error('Please login to save your progress');
      return;
    }

    const newState = {
      ...formState,
      [sectionKey]: {
        checkboxes: {
          ...(formState[sectionKey]?.checkboxes || {}),
          ...(updates.checkboxes || {})
        },
        textInputs: {
          ...(formState[sectionKey]?.textInputs || {}),
          ...(updates.textInputs || {})
        }
      }
    };

    try {
      const { error } = await supabase
        .from('user_chapter_responses')
        .upsert({
          user_id: user.id,
          chapter_number: chapterNumber,
          section_id: sectionId,
          response_data: newState,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      setFormState(newState);
      toast.success('Progress saved');
    } catch (error) {
      console.error('Error saving response:', error);
      toast.error('Failed to save your response');
    }
  };

  return {
    formState,
    saveResponse,
    isLoading
  };
}
