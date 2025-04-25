
import React from 'react';
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useChapterForm } from "@/hooks/useChapterForm";
import { Button } from "@/components/ui/button";
import { useQueryClient } from '@tanstack/react-query';
import confetti from 'canvas-confetti';
import { CheckCircle } from 'lucide-react';

export const SelfAssessmentSection = ({ onSubmit }: { onSubmit?: () => void }) => {
  const { formState, saveResponse, isLoading } = useChapterForm(1, 'self-assessment');
  const sectionKey = 'skills-assessment';
  const queryClient = useQueryClient();
  const [isCompleted, setIsCompleted] = React.useState(false);

  const handleTextChange = (questionId: string, value: string) => {
    // Pass false to prevent showing toast on every keystroke
    saveResponse(sectionKey, {
      textInputs: { [questionId]: value }
    }, false);
  };
  
  const handleSaveClick = () => {
    // Explicitly show toast when user clicks save button
    saveResponse(sectionKey, {}, true);
    
    // Show confetti effect on completion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    setIsCompleted(true);
    
    // Immediately refresh the progress data
    queryClient.invalidateQueries({ queryKey: ["chapter-progress"] });
    
    if (onSubmit) {
      setTimeout(() => {
        onSubmit();
      }, 1000);
    }
  };

  const textInputs = formState[sectionKey]?.textInputs || {};
  const questions = [
    {
      id: 'existing-skills',
      question: 'What existing skills do you have that most people in the 3D printing industry lack? (Marketing, design, sales, etc.)'
    },
    {
      id: 'misconceptions',
      question: 'What misconceptions about 3D printing did you previously hold? How has your understanding changed?'
    },
    {
      id: 'interesting-phase',
      question: 'Which phase of the industry\'s evolution do you find most interesting, and why?'
    },
    {
      id: 'specific-niche',
      question: 'What specific niche or application of 3D printing excites you the most?'
    },
    {
      id: 'upcoming-trend',
      question: 'Based on the industry forecast, which upcoming trend do you feel best positioned to capitalize on?'
    }
  ];

  // Check if all questions have been answered
  const allAnswered = questions.every(q => textInputs[q.id]?.trim().length > 0);

  return (
    <div id="self-assessment" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Chapter 1 Self-Assessment: Your Arbitrage Advantage</h2>
      
      {isCompleted ? (
        <Card className="p-8 text-center bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Assessment Complete!</h3>
            <p className="text-gray-600 max-w-md">
              Great job! You've completed the Chapter 1 self-assessment. Your responses have been saved.
            </p>
            <Button 
              onClick={onSubmit} 
              className="bg-green-600 hover:bg-green-700 text-white mt-4"
            >
              Continue to Next Chapter
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="p-6">
          <p className="mb-4">Before moving forward, take a moment to identify your own arbitrage advantages in the 3D printing space:</p>
          
          <div className="space-y-6">
            {questions.map((q) => (
              <div key={q.id} className="space-y-2">
                <Label htmlFor={q.id}>{q.question}</Label>
                <Textarea
                  id={q.id}
                  value={textInputs[q.id] || ''}
                  onChange={(e) => handleTextChange(q.id, e.target.value)}
                  className="min-h-[100px]"
                  placeholder="Type your answer here..."
                />
              </div>
            ))}
            
            <div className="flex justify-end mt-4">
              <Button 
                onClick={handleSaveClick}
                disabled={isLoading || !allAnswered}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
              >
                {isLoading ? "Saving..." : "Complete Assessment"}
              </Button>
            </div>
            
            {!allAnswered && (
              <p className="text-sm text-amber-600 text-center mt-2">
                Please answer all questions to complete the assessment
              </p>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};
