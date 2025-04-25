
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ExperienceSectionProps {
  checkboxes: Record<string, boolean>;
  onCheckboxChange: (groupId: string, optionId: string, checked: boolean) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ checkboxes, onCheckboxChange }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">3D Printing Experience</h3>
      <div className="space-y-2 ml-4">
        {[
          { id: 'none', label: 'None (Never used a 3D printer)' },
          { id: 'beginner', label: 'Beginner (Basic familiarity but limited hands-on experience)' },
          { id: 'intermediate', label: 'Intermediate (Comfortable with standard operations and troubleshooting)' },
          { id: 'advanced', label: 'Advanced (Extensive experience with multiple machines/materials)' }
        ].map((option) => (
          <div key={option.id} className="flex items-start space-x-2">
            <Checkbox
              id={`experience-${option.id}`}
              checked={checkboxes[`experience-${option.id}`] || false}
              onCheckedChange={(checked) => 
                onCheckboxChange('experience', option.id, checked as boolean)
              }
            />
            <Label htmlFor={`experience-${option.id}`}>{option.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};
