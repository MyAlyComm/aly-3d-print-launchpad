
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ExperienceSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export const ExperienceSection = ({ value, onChange }: ExperienceSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">3D Printing Experience</h3>
      <RadioGroup value={value} className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="exp-1" value="None" onClick={() => onChange('None')} />
          <Label htmlFor="exp-1">None (Never used a 3D printer)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="exp-2" value="Beginner" onClick={() => onChange('Beginner')} />
          <Label htmlFor="exp-2">Beginner (Basic familiarity but limited hands-on experience)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="exp-3" value="Intermediate" onClick={() => onChange('Intermediate')} />
          <Label htmlFor="exp-3">Intermediate (Comfortable with standard operations and troubleshooting)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="exp-4" value="Advanced" onClick={() => onChange('Advanced')} />
          <Label htmlFor="exp-4">Advanced (Extensive experience with multiple machines/materials)</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
