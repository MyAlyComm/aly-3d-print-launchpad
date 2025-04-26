
import React, { useState } from "react";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const SelfAssessmentWorksheet = () => {
  const [formData, setFormData] = useState({
    budget: "",
    experience: "",
    timeAvailable: "",
    skills: [],
    creativeAptitude: "",
    locationType: "",
    region: "",
    country: "",
    growthAmbitions: ""
  });

  const [showSummary, setShowSummary] = useState(false);

  const handleRadioChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (skill: string) => {
    setFormData(prev => {
      const currentSkills = prev.skills as string[];
      if (currentSkills.includes(skill)) {
        return { ...prev, skills: currentSkills.filter(s => s !== skill) };
      } else {
        return { ...prev, skills: [...currentSkills, skill] };
      }
    });
  };

  const handleTextareaChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="space-y-6">
      <ChapterSection title="The 3D Printing Business Path Worksheet">
        {!showSummary ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Budget Assessment</h3>
              <RadioGroup value={formData.budget} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="budget-1" value="$0" onClick={() => handleRadioChange('budget', '$0')} />
                  <Label htmlFor="budget-1">$0 (Focus on partnerships and dropshipping)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="budget-2" value="$500-$1,000" onClick={() => handleRadioChange('budget', '$500-$1,000')} />
                  <Label htmlFor="budget-2">$500-$1,000 (Single printer startup)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="budget-3" value="$1,000-$2,000" onClick={() => handleRadioChange('budget', '$1,000-$2,000')} />
                  <Label htmlFor="budget-3">$1,000-$2,000 (Quality printer or multiple budget units)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="budget-4" value="$2,000-$5,000" onClick={() => handleRadioChange('budget', '$2,000-$5,000')} />
                  <Label htmlFor="budget-4">$2,000-$5,000 (Multi-printer operation)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="budget-5" value="$5,000+" onClick={() => handleRadioChange('budget', '$5,000+')} />
                  <Label htmlFor="budget-5">$5,000+ (Professional setup)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">3D Printing Experience</h3>
              <RadioGroup value={formData.experience} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="exp-1" value="None" onClick={() => handleRadioChange('experience', 'None')} />
                  <Label htmlFor="exp-1">None (Never used a 3D printer)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="exp-2" value="Beginner" onClick={() => handleRadioChange('experience', 'Beginner')} />
                  <Label htmlFor="exp-2">Beginner (Basic familiarity but limited hands-on experience)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="exp-3" value="Intermediate" onClick={() => handleRadioChange('experience', 'Intermediate')} />
                  <Label htmlFor="exp-3">Intermediate (Comfortable with standard operations and troubleshooting)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="exp-4" value="Advanced" onClick={() => handleRadioChange('experience', 'Advanced')} />
                  <Label htmlFor="exp-4">Advanced (Extensive experience with multiple machines/materials)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Summary and Next Steps</h3>
              <div className="space-y-2">
                <Label htmlFor="advantages">Based on my self-assessment, my primary advantages are:</Label>
                <Textarea id="advantages" placeholder="List your advantages here..." className="min-h-[100px]" onChange={(e) => handleTextareaChange('advantages', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="challenges">My potential challenges will be:</Label>
                <Textarea id="challenges" placeholder="List your challenges here..." className="min-h-[100px]" onChange={(e) => handleTextareaChange('challenges', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="markets">The markets that might be best for me to explore:</Label>
                <Textarea id="markets" placeholder="List potential markets here..." className="min-h-[100px]" onChange={(e) => handleTextareaChange('markets', e.target.value)} />
              </div>
            </div>

            <Button type="submit" className="w-full">Complete Self-Assessment</Button>
          </form>
        ) : (
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">Assessment Complete!</h3>
              <p className="mb-4">Thank you for completing your self-assessment. Keep this information in mind as we move forward to the next chapter.</p>
              <p className="mb-2 font-semibold">Next Steps:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>In Chapter 3, we'll explore the "3 Plus 1 Equals 40" system—a powerful framework that can be adapted to any path identified by this decision tree.</li>
                <li>This system will help you maximize your results while minimizing wasted effort.</li>
                <li>Make sure to keep your self-assessment results handy as we'll refer back to them.</li>
              </ul>
              <Button 
                className="mt-6" 
                variant="outline" 
                onClick={() => setShowSummary(false)}
              >
                Review Your Assessment
              </Button>
            </CardContent>
          </Card>
        )}
      </ChapterSection>
    </div>
  );
};
