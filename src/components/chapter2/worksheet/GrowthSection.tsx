
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface GrowthSectionProps {
  checkboxes: Record<string, boolean>;
  onCheckboxChange: (groupId: string, optionId: string, checked: boolean) => void;
}

export const GrowthSection: React.FC<GrowthSectionProps> = ({ checkboxes, onCheckboxChange }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Growth Ambitions</h3>
      <div className="space-y-2 ml-4">
        {[
          { id: 'hobby', label: 'Hobby business (side income)' },
          { id: 'small', label: 'Small business (primary income source)' },
          { id: 'scaling', label: 'Scaling business (multiple employees)' },
          { id: 'franchise', label: 'Franchise potential' },
          { id: 'enterprise', label: 'Enterprise level operation' }
        ].map((option) => (
          <div key={option.id} className="flex items-start space-x-2">
            <Checkbox
              id={`growth-${option.id}`}
              checked={checkboxes[`growth-${option.id}`] || false}
              onCheckedChange={(checked) => 
                onCheckboxChange('growth', option.id, checked as boolean)
              }
            />
            <Label htmlFor={`growth-${option.id}`}>{option.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};
