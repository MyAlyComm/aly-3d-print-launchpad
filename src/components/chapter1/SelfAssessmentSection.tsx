
import React from 'react';
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useChapterForm } from "@/hooks/useChapterForm";
import { Button } from "@/components/ui/button";

export const SelfAssessmentSection = () => {
  const { formState, saveResponse, isLoading } = useChapterForm(1, 'self-assessment');
  const sectionKey = 'skills-assessment';

  const handleTextChange = (questionId: string, value: string) => {
    saveResponse(sectionKey, {
      textInputs: { [questionId]: value }
    });
  };

  const textInputs = formState[sectionKey]?.textInputs || {};

  return (
    <div id="self-assessment" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Chapter 1 Self-Assessment: Your Arbitrage Advantage</h2>
      
      <Card className="p-6">
        <p className="mb-4">Before moving forward, take a moment to identify your own arbitrage advantages in the 3D printing space:</p>
        
        <div className="space-y-6">
          {[
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
          ].map((q) => (
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
        </div>
      </Card>
    </div>
  );
};
