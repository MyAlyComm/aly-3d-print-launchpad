
import { useChapterForm } from "@/hooks/useChapterForm";
import { ChapterFormContainer } from "@/components/ui/chapter-form/ChapterFormContainer";
import { ChapterFormTextQuestion } from "@/components/ui/chapter-form/ChapterFormTextQuestion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const SystemWorksheet = () => {
  const { toast } = useToast();
  const { formState, saveResponse, isLoading } = useChapterForm(3, "worksheet");
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  
  const sections = [
    {
      field: "safeBet",
      title: "My \"Safe Bet\" core product will be:",
      placeholder: "Enter your safe bet product here..."
    },
    {
      field: "strengthAligner",
      title: "My \"Strength Aligner\" core product based on my skills from Chapter 2 will be:",
      placeholder: "Enter your strength aligner product here..."
    },
    {
      field: "valueMaximizer",
      title: "My \"Value Maximizer\" core product with high perceived value will be:",
      placeholder: "Enter your value maximizer product here..."
    },
    {
      field: "plusOne",
      title: "My first \"Plus 1\" innovation project will be:",
      placeholder: "Enter your plus one innovation project here..."
    },
    {
      field: "metrics",
      title: "The specific metrics I'll track for each product are:",
      placeholder: "List the metrics you'll track..."
    },
    {
      field: "monthlyCycle",
      title: "My monthly cycle implementation with my available time will look like:",
      placeholder: "Week 1: \nWeeks 2-3: \nWeek 4: \nMonthly Review:"
    },
    {
      field: "marketing",
      title: "My primary zero-cost marketing approaches will be:",
      placeholder: "List your marketing approaches..."
    },
    {
      field: "challenges",
      title: "The expected challenges I might face with this system are:",
      placeholder: "List potential challenges..."
    },
    {
      field: "strategies",
      title: "My strategies to overcome these challenges:",
      placeholder: "List your strategies..."
    },
    {
      field: "revenueGoal",
      title: "My 60-day revenue goal using this system is:",
      placeholder: "Enter your revenue goal..."
    }
  ];
  
  // Get answer from formState or return empty string
  const getAnswer = (field: string): string => {
    return formState?.worksheet?.textInputs?.[field] || "";
  };

  const saveAnswer = (field: string, value: string) => {
    if (value?.trim()) {
      saveResponse("worksheet", { 
        checkboxes: {}, 
        textInputs: { [field]: value } 
      }, true);
      
      setSaved(prev => ({ ...prev, [field]: true }));
      toast({
        title: "Answer saved!",
        description: "Your response has been recorded."
      });
    }
  };

  const handleAnswerChange = (field: string, value: string) => {
    saveResponse("worksheet", { 
      checkboxes: {}, 
      textInputs: { [field]: value } 
    });
    
    // Remove saved indicator when editing
    if (saved[field]) {
      setSaved(prev => ({ ...prev, [field]: false }));
    }
  };
  
  return (
    <ChapterFormContainer
      chapterNumber={3}
      sectionId="worksheet"
      title="Chapter 3 Self-Assessment: Your 3 Plus 1 Plan"
      description="Based on your Decision Tree path from Chapter 2, now it's time to create your personalized 3 Plus 1 plan:"
    >
      {sections.map((section) => (
        <ChapterFormTextQuestion
          key={section.field}
          id={section.field}
          question={section.title}
          value={getAnswer(section.field)}
          isSaved={saved[section.field]}
          onChange={(value) => handleAnswerChange(section.field, value)}
          onSave={() => saveAnswer(section.field, getAnswer(section.field))}
        />
      ))}
    </ChapterFormContainer>
  );
};
