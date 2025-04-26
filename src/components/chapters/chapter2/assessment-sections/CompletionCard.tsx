
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CompletionCardProps {
  onReview: () => void;
  onNextChapter: () => void;
}

export const CompletionCard = ({ onReview, onNextChapter }: CompletionCardProps) => {
  return (
    <Card className="border-green-200 bg-green-50">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-green-800 mb-4">Assessment Complete!</h3>
        <p className="mb-4">Thank you for completing your self-assessment. Keep this information in mind as we move forward to the next chapter.</p>
        <p className="mb-2 font-semibold">Next Steps:</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>In Chapter 3, we'll explore the "3 Plus 1 Equals 40" system—a powerful framework that can be adapted to any path identified by this decision tree.</li>
          <li>This system will help you maximize your results while minimizing wasted effort.</li>
          <li>Make sure to keep your self-assessment results handy as we'll refer back to them.</li>
        </ul>
        <div className="flex flex-col space-y-4">
          <Button 
            variant="outline" 
            onClick={onReview}
          >
            Review Your Assessment
          </Button>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
            onClick={onNextChapter}
          >
            Continue to Chapter 3
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
