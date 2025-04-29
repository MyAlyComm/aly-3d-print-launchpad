
import React from "react";
import { Loader2, Check } from "lucide-react";

type SaveStatus = "idle" | "saving" | "saved" | "error";

interface SaveIndicatorProps {
  status: SaveStatus;
  errorMessage?: string;
}

export function SaveIndicator({ status, errorMessage }: SaveIndicatorProps) {
  if (status === "idle") return null;

  return (
    <div className="flex items-center text-sm">
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
        <span className="text-red-600">
          {errorMessage || "Failed to save"}
        </span>
      )}
    </div>
  );
}
