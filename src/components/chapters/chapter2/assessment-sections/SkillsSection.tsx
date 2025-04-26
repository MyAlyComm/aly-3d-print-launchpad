
import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface SkillsSectionProps {
  selectedSkills: string[];
  onSkillChange: (skill: string, checked: boolean) => void;
}

export const SkillsSection = ({ selectedSkills, onSkillChange }: SkillsSectionProps) => {
  const isSkillChecked = (skill: string) => selectedSkills.includes(skill);

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Strongest Skills</h3>
      <p className="text-sm text-gray-600 mb-2">Check all that apply, prioritize your primary strength</p>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="skill-1" 
            checked={isSkillChecked('Design')}
            onCheckedChange={(checked) => onSkillChange('Design', !!checked)} 
          />
          <Label htmlFor="skill-1">Design (Creating, modifying, visualizing)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="skill-2" 
            checked={isSkillChecked('Marketing')}
            onCheckedChange={(checked) => onSkillChange('Marketing', !!checked)} 
          />
          <Label htmlFor="skill-2">Marketing (Promotion, content creation, customer acquisition)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="skill-3" 
            checked={isSkillChecked('Technical')}
            onCheckedChange={(checked) => onSkillChange('Technical', !!checked)} 
          />
          <Label htmlFor="skill-3">Technical (Engineering, troubleshooting, optimization)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="skill-4" 
            checked={isSkillChecked('Business/Sales')}
            onCheckedChange={(checked) => onSkillChange('Business/Sales', !!checked)} 
          />
          <Label htmlFor="skill-4">Business/Sales (Operations, management, selling)</Label>
        </div>
      </div>
    </div>
  );
};
