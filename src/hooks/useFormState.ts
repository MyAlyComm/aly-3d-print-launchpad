
import { useState } from 'react';
import { useChapterForm } from './useChapterForm';
import { useWindowBeforeUnload } from './useWindowBeforeUnload';
import { useToast } from '@/hooks/use-toast';

export function useFormState(
  chapterNumber: number, 
  sectionId: string,
  initialFields: Record<string, string> = {}
) {
  const { formState, saveResponse, isLoading, saveStatus, hasUnsavedChanges } = useChapterForm(chapterNumber, sectionId);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const { toast } = useToast();
  
  // Warn before unload if unsaved changes
  useWindowBeforeUnload(hasUnsavedChanges);

  // Get answer from formState or return empty string
  const getValue = (field: string): string => {
    return formState?.[sectionId]?.textInputs?.[field] || initialFields[field] || '';
  };

  const saveValue = (field: string, value: string) => {
    if (value?.trim()) {
      saveResponse(sectionId, { 
        checkboxes: {}, 
        textInputs: { [field]: value } 
      }, true);
      
      setSaved(prev => ({ ...prev, [field]: true }));
      toast({
        title: "Answer saved!",
        description: "Your response has been recorded."
      });
    }
  };

  const handleValueChange = (field: string, value: string) => {
    saveResponse(sectionId, { 
      checkboxes: {}, 
      textInputs: { [field]: value } 
    });
    
    // Remove saved indicator when editing
    if (saved[field]) {
      setSaved(prev => ({ ...prev, [field]: false }));
    }
  };

  return {
    isLoading,
    saveStatus,
    saved,
    getValue,
    saveValue,
    handleValueChange,
    hasUnsavedChanges
  };
}
