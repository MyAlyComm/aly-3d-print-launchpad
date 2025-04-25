
import { useState, useEffect, useRef } from 'react';
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
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
        // Parse the response_data as ChapterFormState to ensure type safety
        const responseData = data.response_data as ChapterFormState;
        setFormState(responseData);
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
  }, showToast: boolean = false) => {
    if (!user) {
      toast.error('Please login to save your progress');
      return;
    }

    // Clear any existing timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
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

    // Update local state immediately
    setFormState(newState);

    // Debounce the save to database operation
    saveTimeoutRef.current = setTimeout(async () => {
      try {
        // First check if a record already exists
        const { data: existingRecord, error: checkError } = await supabase
          .from('user_chapter_responses')
          .select('id')
          .eq('user_id', user.id)
          .eq('chapter_number', chapterNumber)
          .eq('section_id', sectionId)
          .maybeSingle();
          
        if (checkError) throw checkError;
        
        let error;
        // If record exists, update it; otherwise insert new record
        if (existingRecord) {
          const { error: updateError } = await supabase
            .from('user_chapter_responses')
            .update({
              response_data: newState,
              updated_at: new Date().toISOString()
            })
            .eq('id', existingRecord.id);
            
          error = updateError;
        } else {
          const { error: insertError } = await supabase
            .from('user_chapter_responses')
            .insert({
              user_id: user.id,
              chapter_number: chapterNumber,
              section_id: sectionId,
              response_data: newState,
              updated_at: new Date().toISOString()
            });
            
          error = insertError;
        }

        if (error) throw error;
        if (showToast) {
          toast.success('Progress saved');
        }
      } catch (error) {
        console.error('Error saving response:', error);
        toast.error('Failed to save your response');
      }
    }, 2000); // Wait for 2 seconds of inactivity before saving
  };

  // Clean up the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  return {
    formState,
    saveResponse,
    isLoading
  };
}
