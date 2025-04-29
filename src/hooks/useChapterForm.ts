
import { useState, useEffect, useRef } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { useQueryClient } from '@tanstack/react-query';

export type SaveStatus = "idle" | "saving" | "saved" | "error";

export interface ChapterFormState {
  [key: string]: {
    checkboxes: { [key: string]: boolean };
    textInputs: { [key: string]: string };
  };
}

export function useChapterForm(chapterNumber: number, sectionId: string) {
  const [formState, setFormState] = useState<ChapterFormState>({});
  const [isLoading, setIsLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const { user } = useAuth();
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    loadSavedResponses();
  }, [chapterNumber, sectionId]);

  const loadSavedResponses = async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }
    
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
    setHasUnsavedChanges(true);

    // For immediate save when user clicks the save button
    if (showToast) {
      setSaveStatus("saving");
      await saveToDatabase(newState, true);
    } else {
      // Debounce the save to database operation for typing
      setSaveStatus("saving");
      saveTimeoutRef.current = setTimeout(() => {
        saveToDatabase(newState, false);
      }, 2000); // Wait for 2 seconds of inactivity before saving
    }
  };

  const saveToDatabase = async (newState: ChapterFormState, showToast: boolean) => {
    try {
      // First check if a record already exists
      const { data: existingRecord, error: checkError } = await supabase
        .from('user_chapter_responses')
        .select('id')
        .eq('user_id', user!.id)
        .eq('chapter_number', chapterNumber)
        .eq('section_id', sectionId)
        .maybeSingle();
        
      if (checkError) throw checkError;
      
      let error;
      const currentTime = new Date().toISOString();

      // If record exists, update it; otherwise insert new record
      if (existingRecord) {
        const { error: updateError } = await supabase
          .from('user_chapter_responses')
          .update({
            response_data: newState,
            updated_at: currentTime,
            completed_at: currentTime // Mark as completed when saving
          })
          .eq('id', existingRecord.id);
          
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from('user_chapter_responses')
          .insert({
            user_id: user!.id,
            chapter_number: chapterNumber,
            section_id: sectionId,
            response_data: newState,
            updated_at: currentTime,
            completed_at: currentTime // Mark as completed when saving
          });
          
        error = insertError;
      }

      if (error) throw error;
      
      // After successful save, invalidate the chapter progress query to refresh data
      queryClient.invalidateQueries({ queryKey: ["chapter-progress"] });
      
      setSaveStatus("saved");
      setHasUnsavedChanges(false);
      
      if (showToast) {
        toast.success('Progress saved');
      }
      
      // Reset save status after a delay
      setTimeout(() => {
        setSaveStatus("idle");
      }, 3000);
    } catch (error) {
      console.error('Error saving response:', error);
      setSaveStatus("error");
      
      if (showToast) {
        toast.error('Failed to save your response');
      }
    }
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
    isLoading,
    saveStatus,
    hasUnsavedChanges
  };
}
