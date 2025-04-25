
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface LocationSectionProps {
  checkboxes: Record<string, boolean>;
  onCheckboxChange: (groupId: string, optionId: string, checked: boolean) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ checkboxes, onCheckboxChange }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Location Assessment</h3>
      <div className="space-y-2 ml-4">
        {[
          { id: 'home', label: 'Home-based operation' },
          { id: 'shared', label: 'Shared workspace/makerspace' },
          { id: 'commercial', label: 'Commercial space' },
          { id: 'mobile', label: 'Mobile operation' },
          { id: 'multiple', label: 'Multiple locations' }
        ].map((option) => (
          <div key={option.id} className="flex items-start space-x-2">
            <Checkbox
              id={`location-${option.id}`}
              checked={checkboxes[`location-${option.id}`] || false}
              onCheckedChange={(checked) => 
                onCheckboxChange('location', option.id, checked as boolean)
              }
            />
            <Label htmlFor={`location-${option.id}`}>{option.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};
