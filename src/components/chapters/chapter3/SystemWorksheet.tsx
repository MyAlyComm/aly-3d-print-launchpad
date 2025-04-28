
import { useState } from "react";
import { WorksheetSection } from "./worksheet/WorksheetSection";
import { SaveButton } from "./worksheet/SaveButton";
import { WorksheetFooter } from "./worksheet/WorksheetFooter";
import { useToast } from "@/components/ui/use-toast";

export const SystemWorksheet = () => {
  const { toast } = useToast();
  const [responses, setResponses] = useState({
    safeBet: "",
    strengthAligner: "",
    valueMaximizer: "",
    plusOne: "",
    metrics: "",
    monthlyCycle: "",
    marketing: "",
    challenges: "",
    strategies: "",
    revenueGoal: ""
  });
  
  const handleChange = (field: string, value: string) => {
    setResponses(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleSave = () => {
    localStorage.setItem('chapter3Worksheet', JSON.stringify(responses));
    toast({
      title: "Progress Saved",
      description: "Your responses have been saved successfully.",
      duration: 3000,
    });
  };

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
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Chapter 3 Self-Assessment: Your 3 Plus 1 Plan</h2>
      
      <p>
        Based on your Decision Tree path from Chapter 2, now it's time to create your personalized 3 Plus 1 plan:
      </p>
      
      <div className="space-y-6 mt-8">
        {sections.map((section) => (
          <WorksheetSection
            key={section.field}
            title={section.title}
            value={responses[section.field as keyof typeof responses]}
            placeholder={section.placeholder}
            onChange={(value) => handleChange(section.field, value)}
          />
        ))}
      </div>
      
      <div className="flex justify-end mt-8">
        <SaveButton onSave={handleSave} />
      </div>
      
      <WorksheetFooter />
    </div>
  );
};
