
import React, { useState } from "react";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { useChapterForm } from "@/hooks/useChapterForm";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { BudgetSection } from "./assessment-sections/BudgetSection";
import { ExperienceSection } from "./assessment-sections/ExperienceSection";
import { TimeAvailabilitySection } from "./assessment-sections/TimeAvailabilitySection";
import { SkillsSection } from "./assessment-sections/SkillsSection";
import { LocationSection } from "./assessment-sections/LocationSection";
import { SummarySection } from "./assessment-sections/SummarySection";
import { CompletionCard } from "./assessment-sections/CompletionCard";

export const SelfAssessmentWorksheet = () => {
  const { formState, saveResponse, isLoading } = useChapterForm(2, "worksheet");
  const [showSummary, setShowSummary] = useState(false);
  const navigate = useNavigate();

  const handleRadioChange = (field: string, value: string) => {
    saveResponse("assessment", { 
      checkboxes: {}, 
      textInputs: { [field]: value } 
    });
  };

  const handleCheckboxChange = (field: string, skill: string, checked: boolean) => {
    const currentSkills = formState.assessment?.textInputs?.[field]?.split(',').filter(Boolean) || [];
    let newSkills: string[];
    
    if (checked) {
      newSkills = [...currentSkills, skill];
    } else {
      newSkills = currentSkills.filter(s => s !== skill);
    }
    
    saveResponse("assessment", { 
      checkboxes: {}, 
      textInputs: { [field]: newSkills.join(',') } 
    });
  };

  const handleTextareaChange = (field: string, value: string) => {
    saveResponse("assessment", { 
      checkboxes: {}, 
      textInputs: { [field]: value } 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveResponse("assessment", { checkboxes: {}, textInputs: {} }, true);
    setShowSummary(true);
    toast.success("Assessment completed!");
    window.scrollTo(0, 0);
  };

  const handleNextChapter = () => {
    navigate("/dashboard/chapter-3");
  };

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  const getValue = (field: string) => formState.assessment?.textInputs?.[field] || "";
  const getSkills = (field: string) => getValue(field).split(',').filter(Boolean);

  return (
    <div className="space-y-6">
      <ChapterSection title="The 3D Printing Business Path Worksheet">
        {!showSummary ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <BudgetSection 
              value={getValue("budget")}
              onChange={(value) => handleRadioChange("budget", value)}
            />
            
            <ExperienceSection 
              value={getValue("experience")}
              onChange={(value) => handleRadioChange("experience", value)}
            />
            
            <TimeAvailabilitySection 
              value={getValue("timeAvailable")}
              onChange={(value) => handleRadioChange("timeAvailable", value)}
            />
            
            <SkillsSection 
              selectedSkills={getSkills("skills")}
              onSkillChange={(skill, checked) => handleCheckboxChange("skills", skill, checked)}
            />
            
            <LocationSection 
              locationType={getValue("locationType")}
              region={getValue("region")}
              country={getValue("country")}
              onLocationTypeChange={(value) => handleRadioChange("locationType", value)}
              onRegionChange={(value) => handleRadioChange("region", value)}
              onCountryChange={(value) => handleTextareaChange("country", value)}
            />
            
            <SummarySection 
              values={{
                advantages: getValue("advantages"),
                challenges: getValue("challenges"),
                markets: getValue("markets")
              }}
              onChange={handleTextareaChange}
            />

            <button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md">
              Complete Self-Assessment
            </button>
          </form>
        ) : (
          <CompletionCard
            onReview={() => setShowSummary(false)}
            onNextChapter={handleNextChapter}
          />
        )}
      </ChapterSection>
    </div>
  );
};
