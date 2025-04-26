
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const SelfAssessment = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: "skills",
      question: "What existing skills do you have that most people in the 3D printing industry lack? (Marketing, design, sales, etc.)"
    },
    {
      id: "misconceptions",
      question: "What misconceptions about 3D printing did you previously hold? How has your understanding changed?"
    },
    {
      id: "phase",
      question: "Which phase of the industry's evolution do you find most interesting, and why?"
    },
    {
      id: "niche",
      question: "What specific niche or application of 3D printing excites you the most?"
    },
    {
      id: "trend",
      question: "Based on the industry forecast, which upcoming trend do you feel best positioned to capitalize on?"
    }
  ];

  const handleComplete = () => {
    toast({
      title: "Chapter 1 Completed!",
      description: "You're ready to continue to Chapter 2."
    });
    navigate("/dashboard");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Chapter 1 Self-Assessment: Your Arbitrage Advantage</h2>
      <p className="text-gray-700">
        Before moving forward, take a moment to identify your own arbitrage advantages in the 3D printing space:
      </p>

      <div className="space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="space-y-2">
            <label htmlFor={question.id} className="text-sm font-medium text-gray-700">
              {question.question}
            </label>
            <textarea
              id={question.id}
              value={answers[question.id] || ""}
              onChange={(e) => setAnswers(prev => ({ ...prev, [question.id]: e.target.value }))}
              className="w-full min-h-[100px] p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Type your answer here..."
            />
          </div>
        ))}
      </div>

      <Button 
        onClick={handleComplete}
        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
      >
        Complete Chapter
      </Button>
    </div>
  );
};
