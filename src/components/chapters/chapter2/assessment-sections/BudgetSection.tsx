
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface BudgetSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export const BudgetSection = ({ value, onChange }: BudgetSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Budget Assessment</h3>
      <RadioGroup value={value} className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="budget-1" value="$0" onClick={() => onChange('$0')} />
          <Label htmlFor="budget-1">$0 (Focus on partnerships and dropshipping)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="budget-2" value="$500-$1,000" onClick={() => onChange('$500-$1,000')} />
          <Label htmlFor="budget-2">$500-$1,000 (Single printer startup)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="budget-3" value="$1,000-$2,000" onClick={() => onChange('$1,000-$2,000')} />
          <Label htmlFor="budget-3">$1,000-$2,000 (Quality printer or multiple budget units)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="budget-4" value="$2,000-$5,000" onClick={() => onChange('$2,000-$5,000')} />
          <Label htmlFor="budget-4">$2,000-$5,000 (Multi-printer operation)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="budget-5" value="$5,000+" onClick={() => onChange('$5,000+')} />
          <Label htmlFor="budget-5">$5,000+ (Professional setup)</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
