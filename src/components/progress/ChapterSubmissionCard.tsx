
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { chapterQuestions } from "@/utils/chapterQuestions";
import { ResponseData } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { Pencil, Save } from "lucide-react";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  getQuestionText, 
  parseJsonResponse,
  getAssessmentSelectionLabel 
} from "@/utils/progressUtils";

interface ChapterSubmissionCardProps {
  chapterNumber: number;
  title: string;
  responses?: Record<string, ResponseData>;
}

export const ChapterSubmissionCard = ({ chapterNumber, title, responses }: ChapterSubmissionCardProps) => {
  const questions = chapterQuestions[chapterNumber] || [];
  const [editMode, setEditMode] = useState(false);
  const [editedResponses, setEditedResponses] = useState<Record<string, string>>({});
  const [editedCheckboxes, setEditedCheckboxes] = useState<Record<string, boolean>>({});
  const { updateProgress } = useChapterProgress();

  const handleEditToggle = () => {
    if (editMode) {
      setEditMode(false);
      setEditedResponses({});
      setEditedCheckboxes({});
    } else {
      const initialValues: Record<string, string> = {};
      const initialCheckboxes: Record<string, boolean> = {};
      
      // Initialize text inputs
      if (responses) {
        Object.entries(responses).forEach(([section, responseData]) => {
          if (responseData.textInputs) {
            Object.entries(responseData.textInputs).forEach(([key, value]) => {
              initialValues[key] = value;
            });
          }
          if (responseData.checkboxes) {
            Object.entries(responseData.checkboxes).forEach(([key, value]) => {
              initialCheckboxes[key] = value;
            });
          }
        });
      }
      
      setEditedResponses(initialValues);
      setEditedCheckboxes(initialCheckboxes);
      setEditMode(true);
    }
  };

  const handleInputChange = (questionId: string, value: string) => {
    setEditedResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleCheckboxChange = (questionId: string, checked: boolean) => {
    setEditedCheckboxes(prev => ({
      ...prev,
      [questionId]: checked
    }));
  };

  const handleRadioChange = (field: string, value: string) => {
    setEditedResponses(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveChanges = async () => {
    if (!editMode) return;

    try {
      const sectionData: Record<string, any> = {};
      
      // For each section in the responses, prepare the updated data
      if (responses) {
        Object.entries(responses).forEach(([section, responseData]) => {
          if (!sectionData[section]) {
            sectionData[section] = {
              textInputs: {},
              checkboxes: {}
            };
          }
          
          // Copy existing text inputs and checkboxes
          if (responseData.textInputs) {
            Object.entries(responseData.textInputs).forEach(([key, _]) => {
              if (editedResponses[key] !== undefined) {
                sectionData[section].textInputs[key] = editedResponses[key];
              } else {
                sectionData[section].textInputs[key] = responseData.textInputs![key];
              }
            });
          }
          
          if (responseData.checkboxes) {
            Object.entries(responseData.checkboxes).forEach(([key, _]) => {
              if (editedCheckboxes[key] !== undefined) {
                sectionData[section].checkboxes[key] = editedCheckboxes[key];
              } else {
                sectionData[section].checkboxes[key] = responseData.checkboxes![key];
              }
            });
          }
        });
      }

      // Save changes for each section
      for (const [sectionId, responseData] of Object.entries(sectionData)) {
        await updateProgress.mutateAsync({
          chapterNumber,
          sectionId,
          responseData: {
            [sectionId]: responseData
          }
        });
      }
      
      setEditMode(false);
      toast.success("Responses updated successfully");
    } catch (error) {
      console.error("Error saving responses:", error);
      toast.error("Failed to update responses");
    }
  };

  // No questions for this chapter
  if (questions.length === 0 && (!responses || Object.keys(responses).length === 0)) {
    return null;
  }

  // Handle assessment-specific inputs for Chapter 2
  const renderChapter2Fields = () => {
    if (chapterNumber !== 2 || !editMode) return null;
    
    const budgetValue = editedResponses.budget || '';
    const experienceValue = editedResponses.experience || '';
    const timeValue = editedResponses.timeAvailable || '';
    const locationTypeValue = editedResponses.locationType || '';
    const skillsValue = editedResponses.skills || '';
    const skillsList = skillsValue.split(',').filter(Boolean);
    
    return (
      <div className="space-y-6 mt-4 border-t pt-4">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Budget Level</h3>
          <RadioGroup value={budgetValue} onValueChange={(value) => handleRadioChange('budget', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="low" id="budget-low" />
              <Label htmlFor="budget-low">Low Budget (Under $500)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="budget-medium" />
              <Label htmlFor="budget-medium">Medium Budget ($500-$1500)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="high" id="budget-high" />
              <Label htmlFor="budget-high">High Budget ($1500+)</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Experience Level</h3>
          <RadioGroup value={experienceValue} onValueChange={(value) => handleRadioChange('experience', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="experience-none" />
              <Label htmlFor="experience-none">No Experience</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="beginner" id="experience-beginner" />
              <Label htmlFor="experience-beginner">Beginner (Some 3D knowledge)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="intermediate" id="experience-intermediate" />
              <Label htmlFor="experience-intermediate">Intermediate (Created prints before)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="advanced" id="experience-advanced" />
              <Label htmlFor="experience-advanced">Advanced (Regular printing experience)</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Time Available</h3>
          <RadioGroup value={timeValue} onValueChange={(value) => handleRadioChange('timeAvailable', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="minimal" id="time-minimal" />
              <Label htmlFor="time-minimal">Minimal (5-10 hours/week)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="moderate" id="time-moderate" />
              <Label htmlFor="time-moderate">Moderate (10-20 hours/week)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="substantial" id="time-substantial" />
              <Label htmlFor="time-substantial">Substantial (20+ hours/week)</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Target Market</h3>
          <RadioGroup value={locationTypeValue} onValueChange={(value) => handleRadioChange('locationType', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="local" id="location-local" />
              <Label htmlFor="location-local">Local Markets</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="regional" id="location-regional" />
              <Label htmlFor="location-regional">Regional Markets</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="global" id="location-global" />
              <Label htmlFor="location-global">Global Markets</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Skills</h3>
          <div className="grid grid-cols-2 gap-2">
            {['Design', '3D Modeling', 'Marketing', 'Sales', 'Technical', 'Art', 'Programming', 'Photography'].map(skill => (
              <div key={skill} className="flex items-center space-x-2">
                <Checkbox 
                  id={`skill-${skill}`} 
                  checked={skillsList.includes(skill)}
                  onCheckedChange={(checked) => {
                    const newSkills = checked 
                      ? [...skillsList, skill]
                      : skillsList.filter(s => s !== skill);
                    handleInputChange('skills', newSkills.join(','));
                  }}
                />
                <label htmlFor={`skill-${skill}`} className="text-sm">{skill}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Handle framework inputs for Chapter 4
  const renderChapter4Fields = () => {
    if (chapterNumber !== 4 || !editMode) return null;
    
    // Check for JSON data
    const productNamesStr = responses?.worksheet?.textInputs?.productNames;
    const finalScoresStr = responses?.worksheet?.textInputs?.finalScores;
    const trinityStr = responses?.worksheet?.textInputs?.trinity;
    
    if (!productNamesStr || !finalScoresStr || !trinityStr) return null;
    
    try {
      const productNames = JSON.parse(productNamesStr);
      const trinity = JSON.parse(trinityStr);
      
      return (
        <div className="space-y-6 mt-4 border-t pt-4">
          <h3 className="text-sm font-medium">Product Trinity</h3>
          
          <div className="space-y-2">
            <Label htmlFor="safe-bet">Safe Bet Product:</Label>
            <Input
              id="safe-bet"
              value={editedResponses.trinityBet || trinity.safeBet || ''}
              onChange={(e) => {
                handleInputChange('trinityBet', e.target.value);
                const updatedTrinity = JSON.stringify({
                  ...trinity,
                  safeBet: e.target.value
                });
                handleInputChange('trinity', updatedTrinity);
              }}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="profit-max">Profit Maximizer Product:</Label>
            <Input
              id="profit-max"
              value={editedResponses.trinityProfit || trinity.profitMaximizer || ''}
              onChange={(e) => {
                handleInputChange('trinityProfit', e.target.value);
                const updatedTrinity = JSON.stringify({
                  ...trinity,
                  profitMaximizer: e.target.value
                });
                handleInputChange('trinity', updatedTrinity);
              }}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="strength">Strength Showcase Product:</Label>
            <Input
              id="strength"
              value={editedResponses.trinityStrength || trinity.strengthShowcase || ''}
              onChange={(e) => {
                handleInputChange('trinityStrength', e.target.value);
                const updatedTrinity = JSON.stringify({
                  ...trinity,
                  strengthShowcase: e.target.value
                });
                handleInputChange('trinity', updatedTrinity);
              }}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="plus-one">Plus One Innovation:</Label>
            <Textarea
              id="plus-one"
              value={editedResponses.trinityPlusOne || trinity.plusOne || ''}
              onChange={(e) => {
                handleInputChange('trinityPlusOne', e.target.value);
                const updatedTrinity = JSON.stringify({
                  ...trinity,
                  plusOne: e.target.value
                });
                handleInputChange('trinity', updatedTrinity);
              }}
              className="w-full"
              rows={3}
            />
          </div>
        </div>
      );
    } catch (e) {
      console.error("Error parsing Chapter 4 data:", e);
      return null;
    }
  };

  // Render standard questions for this chapter
  const renderQuestions = () => {
    if (!questions.length) return null;
    
    return questions.map((q) => {
      const sectionData = responses?.[q.section];
      const response = sectionData?.textInputs?.[q.id];
      const editedResponse = editedResponses[q.id];
      const displayResponse = editMode ? editedResponse : response;
      const hasResponse = !!response;

      return (
        <div key={q.id} className="border-b pb-4 last:border-b-0">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            {q.question}
          </p>
          {editMode ? (
            q.question.length > 100 ? (
              <Textarea
                value={editedResponse || ""}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                placeholder="Enter your response..."
                rows={3}
                className="w-full"
              />
            ) : (
              <Input
                value={editedResponse || ""}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                placeholder="Enter your response..."
                className="w-full"
              />
            )
          ) : hasResponse ? (
            <p className="text-sm bg-muted/50 p-3 rounded-md">
              {displayResponse}
            </p>
          ) : (
            <p className="text-sm text-muted-foreground italic">
              No response submitted
            </p>
          )}
        </div>
      );
    });
  };

  // Render checkboxes
  const renderCheckboxes = () => {
    if (!responses) return null;
    
    // Collect all checkboxes from all sections
    const allCheckboxes: Record<string, boolean> = {};
    Object.values(responses).forEach(sectionData => {
      if (sectionData.checkboxes) {
        Object.entries(sectionData.checkboxes).forEach(([key, value]) => {
          allCheckboxes[key] = value;
        });
      }
    });
    
    if (Object.keys(allCheckboxes).length === 0) return null;
    
    return (
      <div className="border-t pt-4 mt-4">
        <h3 className="text-sm font-medium mb-3">Completion Checklist</h3>
        <div className="grid grid-cols-1 gap-2">
          {Object.entries(allCheckboxes).map(([checkboxId, checked]) => (
            <div key={checkboxId} className="flex items-center space-x-2">
              {editMode ? (
                <Checkbox 
                  id={checkboxId} 
                  checked={editedCheckboxes[checkboxId] !== undefined ? editedCheckboxes[checkboxId] : checked}
                  onCheckedChange={(value) => handleCheckboxChange(checkboxId, !!value)}
                />
              ) : (
                <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${checked ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                  {checked && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
              )}
              <label 
                htmlFor={checkboxId} 
                className={`text-sm ${checked ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {getQuestionText(checkboxId)}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">
            {chapterNumber === 0 ? "Introduction" : `Chapter ${chapterNumber}: ${title}`}
          </CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleEditToggle}
            className="flex items-center gap-1"
          >
            {editMode ? (
              <>Cancel</>
            ) : (
              <>
                <Pencil className="h-4 w-4" />
                <span>Edit</span>
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {renderQuestions()}
          
          {/* Special handling for Chapter 2 assessment fields */}
          {renderChapter2Fields()}
          
          {/* Special handling for Chapter 4 worksheet fields */}
          {renderChapter4Fields()}
          
          {/* Show checkboxes */}
          {renderCheckboxes()}
        </div>
      </CardContent>
      {editMode && (
        <CardFooter>
          <Button 
            onClick={handleSaveChanges} 
            className="ml-auto flex items-center gap-1"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
