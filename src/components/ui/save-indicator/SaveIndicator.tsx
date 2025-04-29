
import React, { useEffect, useState } from "react";
import { Loader2, Check, AlertCircle } from "lucide-react";

type SaveStatus = "idle" | "saving" | "saved" | "error";

interface SaveIndicatorProps {
  status: SaveStatus;
  errorMessage?: string;
  autoHideDuration?: number;
}

export function SaveIndicator({ 
  status, 
  errorMessage, 
  autoHideDuration = 3000 
}: SaveIndicatorProps) {
  const [visible, setVisible] = useState(true);
  
  // Auto-hide the "saved" indicator after a few seconds
  useEffect(() => {
    if (status === "saved" && autoHideDuration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, autoHideDuration);
      
      return () => clearTimeout(timer);
    } else {
      setVisible(true);
    }
  }, [status, autoHideDuration]);
  
  if (status === "idle" || !visible) return null;

  return (
    <div className="flex items-center text-sm transition-opacity duration-300">
      {status === "saving" && (
        <>
          <Loader2 className="h-3 w-3 mr-1 animate-spin text-primary" />
          <span className="text-muted-foreground">Saving...</span>
        </>
      )}
      
      {status === "saved" && (
        <>
          <Check className="h-3 w-3 mr-1 text-green-500" />
          <span className="text-green-600">Saved</span>
        </>
      )}
      
      {status === "error" && (
        <>
          <AlertCircle className="h-3 w-3 mr-1 text-red-500" />
          <span className="text-red-600">
            {errorMessage || "Failed to save"}
          </span>
        </>
      )}
    </div>
  );
}
