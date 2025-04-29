
import { useEffect } from 'react';

/**
 * Hook to prompt user before leaving page with unsaved changes
 * @param isDirty Boolean indicating if there are unsaved changes
 * @param message Message to display to user
 */
export function useWindowBeforeUnload(isDirty: boolean, message: string = 'You have unsaved changes. Are you sure you want to leave?') {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = message;
        return message;
      }
    };

    if (isDirty) {
      window.addEventListener('beforeunload', handleBeforeUnload);
      
      // For debugging purposes
      console.log('Unsaved changes detected - navigation warning enabled');
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      
      // For debugging purposes
      if (isDirty) {
        console.log('Navigation warning removed');
      }
    };
  }, [isDirty, message]);
}
