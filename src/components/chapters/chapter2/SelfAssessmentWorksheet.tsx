import React, { useState } from "react";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChapterForm } from "@/hooks/useChapterForm";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const SelfAssessmentWorksheet = () => {
  const { formState, saveResponse, isLoading } = useChapterForm(2, "worksheet");
  const [showSummary, setShowSummary] = useState(false);
  const navigate = useNavigate();

  const handleRadioChange = (field: string, value: string) => {
    saveResponse("assessment", { 
      checkboxes: {}, 
      textInputs: { [field]: value } 
    });
  };

  const handleCheckboxChange = (field: string, skill: string, checked: boolean) => {
    const currentSkills = formState.assessment?.textInputs?.[field]?.split(',').filter(Boolean) || [];
    let newSkills: string[];
    
    if (checked) {
      newSkills = [...currentSkills, skill];
    } else {
      newSkills = currentSkills.filter(s => s !== skill);
    }
    
    saveResponse("assessment", { 
      checkboxes: {}, 
      textInputs: { [field]: newSkills.join(',') } 
    });
  };

  const handleTextareaChange = (field: string, value: string) => {
    saveResponse("assessment", { 
      checkboxes: {}, 
      textInputs: { [field]: value } 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveResponse("assessment", { checkboxes: {}, textInputs: {} }, true);
    setShowSummary(true);
    toast.success("Assessment completed!");
    window.scrollTo(0, 0);
  };

  const handleNextChapter = () => {
    navigate("/dashboard/chapter-3");
  };

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  const getValue = (field: string) => formState.assessment?.textInputs?.[field] || "";
  const isChecked = (field: string, value: string) => getValue(field) === value;
  const isSkillChecked = (field: string, skill: string) => {
    const skills = getValue(field).split(',');
    return skills.includes(skill);
  };

  return (
    <div className="space-y-6">
      <ChapterSection title="The 3D Printing Business Path Worksheet">
        {!showSummary ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Budget Assessment</h3>
              <RadioGroup value={getValue("budget")} className="space-y-2">
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

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">3D Printing Experience</h3>
              <RadioGroup value={getValue("experience")} className="space-y-2">
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

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Time Availability</h3>
              <RadioGroup value={getValue("timeAvailable")} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="time-1" value="1-5 hours" onClick={() => handleRadioChange('timeAvailable', '1-5 hours')} />
                  <Label htmlFor="time-1">1-5 hours (Minimal commitment)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="time-2" value="5-15 hours" onClick={() => handleRadioChange('timeAvailable', '5-15 hours')} />
                  <Label htmlFor="time-2">5-15 hours (Part-time focus)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="time-3" value="15-30 hours" onClick={() => handleRadioChange('timeAvailable', '15-30 hours')} />
                  <Label htmlFor="time-3">15-30 hours (Significant part-time)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="time-4" value="30+ hours" onClick={() => handleRadioChange('timeAvailable', '30+ hours')} />
                  <Label htmlFor="time-4">30+ hours (Full-time dedication)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Strongest Skills</h3>
              <p className="text-sm text-gray-600 mb-2">Check all that apply, prioritize your primary strength</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="skill-1" 
                    checked={isSkillChecked('skills', 'Design')}
                    onCheckedChange={(checked) => handleCheckboxChange('skills', 'Design', !!checked)} 
                  />
                  <Label htmlFor="skill-1">Design (Creating, modifying, visualizing)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="skill-2" 
                    checked={isSkillChecked('skills', 'Marketing')}
                    onCheckedChange={(checked) => handleCheckboxChange('skills', 'Marketing', !!checked)} 
                  />
                  <Label htmlFor="skill-2">Marketing (Promotion, content creation, customer acquisition)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="skill-3" 
                    checked={isSkillChecked('skills', 'Technical')}
                    onCheckedChange={(checked) => handleCheckboxChange('skills', 'Technical', !!checked)} 
                  />
                  <Label htmlFor="skill-3">Technical (Engineering, troubleshooting, optimization)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="skill-4" 
                    checked={isSkillChecked('skills', 'Business/Sales')}
                    onCheckedChange={(checked) => handleCheckboxChange('skills', 'Business/Sales', !!checked)} 
                  />
                  <Label htmlFor="skill-4">Business/Sales (Operations, management, selling)</Label>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Creative Aptitude</h3>
              <RadioGroup value={getValue("creativeAptitude")} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="creative-1" value="Visionary" onClick={() => handleRadioChange('creativeAptitude', 'Visionary')} />
                  <Label htmlFor="creative-1">Visionary (Seeing new opportunities and concepts)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="creative-2" value="Improver" onClick={() => handleRadioChange('creativeAptitude', 'Improver')} />
                  <Label htmlFor="creative-2">Improver (Enhancing and refining existing ideas)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="creative-3" value="Executor" onClick={() => handleRadioChange('creativeAptitude', 'Executor')} />
                  <Label htmlFor="creative-3">Executor (Implementing and following through)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="creative-4" value="Analytical" onClick={() => handleRadioChange('creativeAptitude', 'Analytical')} />
                  <Label htmlFor="creative-4">Analytical (Optimizing and systematizing)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Geographic Location</h3>
              
              <div className="mb-4">
                <h4 className="text-base mb-2">Location Type:</h4>
                <RadioGroup value={getValue("locationType")} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="loc-1" value="Major City" onClick={() => handleRadioChange('locationType', 'Major City')} />
                    <Label htmlFor="loc-1">Major City (Large metropolitan area)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="loc-2" value="Mid-Size City" onClick={() => handleRadioChange('locationType', 'Mid-Size City')} />
                    <Label htmlFor="loc-2">Mid-Size City (Smaller city with good infrastructure)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="loc-3" value="Suburban" onClick={() => handleRadioChange('locationType', 'Suburban')} />
                    <Label htmlFor="loc-3">Suburban (Residential area near a city)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="loc-4" value="Rural/Remote" onClick={() => handleRadioChange('locationType', 'Rural/Remote')} />
                    <Label htmlFor="loc-4">Rural/Remote (Small town or countryside)</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="mb-4">
                <h4 className="text-base mb-2">Region:</h4>
                <RadioGroup value={getValue("region")} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="reg-1" value="North America" onClick={() => handleRadioChange('region', 'North America')} />
                    <Label htmlFor="reg-1">North America (US & Canada)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="reg-2" value="Europe" onClick={() => handleRadioChange('region', 'Europe')} />
                    <Label htmlFor="reg-2">Europe</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="reg-3" value="Asia" onClick={() => handleRadioChange('region', 'Asia')} />
                    <Label htmlFor="reg-3">Asia</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="reg-4" value="Australia & New Zealand" onClick={() => handleRadioChange('region', 'Australia & New Zealand')} />
                    <Label htmlFor="reg-4">Australia & New Zealand</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="reg-5" value="Latin America" onClick={() => handleRadioChange('region', 'Latin America')} />
                    <Label htmlFor="reg-5">Latin America</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="reg-6" value="Africa" onClick={() => handleRadioChange('region', 'Africa')} />
                    <Label htmlFor="reg-6">Africa</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="reg-7" value="Middle East" onClick={() => handleRadioChange('region', 'Middle East')} />
                    <Label htmlFor="reg-7">Middle East</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="mb-4">
                <Label htmlFor="country">Country:</Label>
                <Input 
                  id="country" 
                  value={getValue("country")} 
                  onChange={(e) => handleTextareaChange("country", e.target.value)} 
                  placeholder="Enter your country"
                  className="mt-1" 
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Growth Ambitions</h3>
              <RadioGroup value={getValue("growthAmbitions")} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="growth-1" value="Hobby Income" onClick={() => handleRadioChange('growthAmbitions', 'Hobby Income')} />
                  <Label htmlFor="growth-1">Hobby Income (Creative outlet that generates some money)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="growth-2" value="Side Income" onClick={() => handleRadioChange('growthAmbitions', 'Side Income')} />
                  <Label htmlFor="growth-2">Side Income (Supplemental income alongside my main job)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="growth-3" value="Income Replacement" onClick={() => handleRadioChange('growthAmbitions', 'Income Replacement')} />
                  <Label htmlFor="growth-3">Income Replacement (Eventually replacing my full-time income)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="growth-4" value="Scalable Business" onClick={() => handleRadioChange('growthAmbitions', 'Scalable Business')} />
                  <Label htmlFor="growth-4">Scalable Business (Building a growth-focused venture)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Summary and Next Steps</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="advantages">Based on my self-assessment, my primary advantages are:</Label>
                  <Textarea 
                    id="advantages" 
                    placeholder="List your advantages here..." 
                    className="min-h-[100px]" 
                    value={getValue("advantages")}
                    onChange={(e) => handleTextareaChange("advantages", e.target.value)} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="challenges">My potential challenges will be:</Label>
                  <Textarea 
                    id="challenges" 
                    placeholder="List your challenges here..." 
                    className="min-h-[100px]"
                    value={getValue("challenges")}
                    onChange={(e) => handleTextareaChange("challenges", e.target.value)}  
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="markets">The markets that might be best for me to explore:</Label>
                  <Textarea 
                    id="markets" 
                    placeholder="List potential markets here..." 
                    className="min-h-[100px]"
                    value={getValue("markets")}
                    onChange={(e) => handleTextareaChange("markets", e.target.value)}  
                  />
                </div>
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
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>In Chapter 3, we'll explore the "3 Plus 1 Equals 40" system—a powerful framework that can be adapted to any path identified by this decision tree.</li>
                <li>This system will help you maximize your results while minimizing wasted effort.</li>
                <li>Make sure to keep your self-assessment results handy as we'll refer back to them.</li>
              </ul>
              <div className="flex flex-col space-y-4">
                <Button 
                  variant="outline" 
                  onClick={() => setShowSummary(false)}
                >
                  Review Your Assessment
                </Button>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  onClick={handleNextChapter}
                >
                  Continue to Chapter 3
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </ChapterSection>
    </div>
  );
};
