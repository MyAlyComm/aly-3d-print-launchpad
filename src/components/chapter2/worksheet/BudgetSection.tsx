
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface BudgetSectionProps {
  checkboxes: Record<string, boolean>;
  onCheckboxChange: (groupId: string, optionId: string, checked: boolean) => void;
}

export const BudgetSection: React.FC<BudgetSectionProps> = ({ checkboxes, onCheckboxChange }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Budget Assessment</h3>
      <div className="space-y-2 ml-4">
        {[
          { id: 'zero', label: '$0 (Focus on partnerships and dropshipping)' },
          { id: 'small', label: '$500-$1,000 (Single printer startup)' },
          { id: 'medium', label: '$1,000-$2,000 (Quality printer or multiple budget units)' },
          { id: 'large', label: '$2,000-$5,000 (Multi-printer operation)' },
          { id: 'pro', label: '$5,000+ (Professional setup)' }
        ].map((option) => (
          <div key={option.id} className="flex items-start space-x-2">
            <Checkbox
              id={`budget-${option.id}`}
              checked={checkboxes[`budget-${option.id}`] || false}
              onCheckedChange={(checked) => 
                onCheckboxChange('budget', option.id, checked as boolean)
              }
            />
            <Label htmlFor={`budget-${option.id}`}>{option.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};
