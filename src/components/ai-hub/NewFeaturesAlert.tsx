
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export const NewFeaturesAlert = () => {
  return (
    <Alert className="bg-blue-50 border-blue-200">
      <AlertCircle className="h-4 w-4 text-blue-500" />
      <AlertTitle>New AI features available!</AlertTitle>
      <AlertDescription>
        We've just launched Lifestyle Image Generation, Product Idea Generator, and improved Description Writer. Try them today!
      </AlertDescription>
    </Alert>
  );
};
