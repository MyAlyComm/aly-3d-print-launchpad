
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface TimeSectionProps {
  checkboxes: Record<string, boolean>;
  onCheckboxChange: (groupId: string, optionId: string, checked: boolean) => void;
}

export const TimeSection: React.FC<TimeSectionProps> = ({ checkboxes, onCheckboxChange }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Time Availability</h3>
      <div className="space-y-2 ml-4">
        {[
          { id: 'parttime', label: 'Part-time (5-15 hours/week)' },
          { id: 'fulltime', label: 'Full-time (15-40 hours/week)' },
          { id: 'flexible', label: 'Flexible schedule' },
          { id: 'weekend', label: 'Weekends only' },
          { id: 'evening', label: 'Evening hours' }
        ].map((option) => (
          <div key={option.id} className="flex items-start space-x-2">
            <Checkbox
              id={`time-${option.id}`}
              checked={checkboxes[`time-${option.id}`] || false}
              onCheckedChange={(checked) => 
                onCheckboxChange('time', option.id, checked as boolean)
              }
            />
            <Label htmlFor={`time-${option.id}`}>{option.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};
