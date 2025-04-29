
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Save } from "lucide-react";
import { useChapterForm } from "@/hooks/useChapterForm";

export const SelfAssessment = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { formState, saveResponse, isLoading } = useChapterForm(1, "self-assessment");
  const [saved, setSaved] = useState<Record<string, boolean>>({});

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

  // Get answer from formState or return empty string
  const getAnswer = (id: string): string => {
    return formState?.["self-assessment"]?.textInputs?.[id] || "";
  };

  const saveAnswer = (id: string, value: string) => {
    if (value?.trim()) {
      saveResponse("self-assessment", { 
        checkboxes: {}, 
        textInputs: { [id]: value } 
      }, true);
      
      setSaved(prev => ({ ...prev, [id]: true }));
      toast({
        title: "Answer saved!",
        description: "Your response has been recorded."
      });
    }
  };

  const handleAnswerChange = (id: string, value: string) => {
    saveResponse("self-assessment", { 
      checkboxes: {}, 
      textInputs: { [id]: value } 
    });
    
    // Remove saved indicator when editing
    if (saved[id]) {
      setSaved(prev => ({ ...prev, [id]: false }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleComplete = () => {
    // Mark all current answers as submitted
    const currentAnswers: Record<string, string> = {};
    questions.forEach(q => {
      const answer = getAnswer(q.id);
      if (answer) currentAnswers[q.id] = answer;
    });
    
    // Save all responses with completed flag
    saveResponse("self-assessment", { 
      checkboxes: { completed: true },
      textInputs: currentAnswers
    }, true);
    
    toast({
      title: "Chapter 1 Completed!",
      description: "You're ready to continue to Chapter 2."
    });
    navigate("/dashboard");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center p-6">
        <div className="animate-pulse text-primary">Loading your previous answers...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-primary/90 mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Chapter 1 Self-Assessment: Your Arbitrage Advantage
      </motion.h2>
      
      <motion.p 
        className="text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Before moving forward, take a moment to identify your own arbitrage advantages in the 3D printing space:
      </motion.p>

      <motion.div 
        className="space-y-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {questions.map((question, index) => (
          <motion.div 
            key={question.id} 
            variants={itemVariants}
            className="space-y-2 bg-white p-5 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <label htmlFor={question.id} className="text-sm font-medium text-gray-700">
                Question {index + 1}:
              </label>
              {saved[question.id] && (
                <span className="flex items-center text-green-500 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Saved
                </span>
              )}
            </div>
            <p className="font-medium mb-2">{question.question}</p>
            <textarea
              id={question.id}
              value={getAnswer(question.id)}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              className="w-full min-h-[100px] p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Type your answer here..."
            />
            <div className="flex justify-end">
              <Button
                size="sm"
                variant="outline"
                onClick={() => saveAnswer(question.id, getAnswer(question.id))}
                disabled={!getAnswer(question.id)?.trim()}
                className="mt-2"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Answer
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-end pt-6">
        <Button 
          onClick={handleComplete}
          size="lg"
          className="px-8"
        >
          Complete Chapter
        </Button>
      </div>
    </div>
  );
};
