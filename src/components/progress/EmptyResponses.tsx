
import React from 'react';
import { FileX } from "lucide-react";

export const EmptyResponses = () => (
  <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
    <FileX className="h-12 w-12 mb-3 text-muted-foreground/60" />
    <h4 className="text-sm font-medium mb-1">No responses yet</h4>
    <p className="text-xs text-center">Complete sections in the Introduction chapter to start tracking your progress.</p>
  </div>
);
