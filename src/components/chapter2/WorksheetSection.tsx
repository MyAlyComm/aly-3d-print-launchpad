
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useChapterForm } from "@/hooks/useChapterForm";
import { BudgetSection } from './worksheet/BudgetSection';
import { ExperienceSection } from './worksheet/ExperienceSection';
import { TimeSection } from './worksheet/TimeSection';
import { GrowthSection } from './worksheet/GrowthSection';
import { LocationSection } from './worksheet/LocationSection';
import { SummarySection } from './worksheet/SummarySection';

interface WorksheetSectionProps {
  onSubmit: () => void;
}

export const WorksheetSection: React.FC<WorksheetSectionProps> = ({ onSubmit }) => {
  const { formState, saveResponse, isLoading } = useChapterForm(2, 'worksheet');
  const sectionKey = 'business-path';

  const handleCheckboxChange = (groupId: string, optionId: string, checked: boolean) => {
    const currentChecked = formState[sectionKey]?.checkboxes || {};
    saveResponse(sectionKey, {
      checkboxes: { ...currentChecked, [`${groupId}-${optionId}`]: checked }
    });
  };

  const handleTextChange = (fieldId: string, value: string) => {
    saveResponse(sectionKey, {
      textInputs: { [fieldId]: value }
    });
  };

  const checkboxes = formState[sectionKey]?.checkboxes || {};
  const textInputs = formState[sectionKey]?.textInputs || {};
  
  return (
    <section id="worksheet" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">The 3D Printing Business Path Worksheet</h2>
      
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          alt="Person planning on a laptop"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 italic text-center">Taking time to assess your unique situation before starting your journey</p>
      </div>

      <Card className="p-6">
        <div className="space-y-8">
          <BudgetSection 
            checkboxes={checkboxes}
            onCheckboxChange={handleCheckboxChange}
          />
          
          <ExperienceSection 
            checkboxes={checkboxes}
            onCheckboxChange={handleCheckboxChange}
          />
          
          <TimeSection 
            checkboxes={checkboxes}
            onCheckboxChange={handleCheckboxChange}
          />
          
          <GrowthSection 
            checkboxes={checkboxes}
            onCheckboxChange={handleCheckboxChange}
          />
          
          <LocationSection 
            checkboxes={checkboxes}
            onCheckboxChange={handleCheckboxChange}
          />
          
          <SummarySection 
            textInputs={textInputs}
            onTextChange={handleTextChange}
          />
        </div>
      </Card>
      
      <div className="flex justify-end mt-8">
        <Button onClick={onSubmit} className="bg-primary hover:bg-primary/90">
          Complete Worksheet
        </Button>
      </div>
    </section>
  );
};
