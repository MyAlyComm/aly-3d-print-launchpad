import React from 'react';
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useChapterForm } from "@/hooks/useChapterForm";

export const WorksheetSection = () => {
  const { formState, saveResponse, isLoading } = useChapterForm(2, 'worksheet');
  const sectionKey = 'business-path';

  const handleCheckboxChange = (groupId: string, optionId: string, checked: boolean) => {
    const currentChecked = formState[sectionKey]?.checkboxes || {};
    saveResponse(sectionKey, {
      checkboxes: { ...currentChecked, [`${groupId}-${optionId}`]: checked }
    });
  };

  const handleTextChange = (fieldId: string, value: string) => {
    saveResponse(sectionKey, {
      textInputs: { [fieldId]: value }
    });
  };

  const checkboxes = formState[sectionKey]?.checkboxes || {};
  const textInputs = formState[sectionKey]?.textInputs || {};

  return (
    <section id="worksheet" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">The 3D Printing Business Path Worksheet</h2>
      
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          alt="Person planning on a laptop"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 italic text-center">Taking time to assess your unique situation before starting your journey</p>
      </div>

      <Card className="p-6">
        <div className="space-y-8">
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
                      handleCheckboxChange('budget', option.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={`budget-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">3D Printing Experience</h3>
            <div className="space-y-2 ml-4">
              {[
                { id: 'none', label: 'None (Never used a 3D printer)' },
                { id: 'beginner', label: 'Beginner (Basic familiarity but limited hands-on experience)' },
                { id: 'intermediate', label: 'Intermediate (Comfortable with standard operations and troubleshooting)' },
                { id: 'advanced', label: 'Advanced (Extensive experience with multiple machines/materials)' }
              ].map((option) => (
                <div key={option.id} className="flex items-start space-x-2">
                  <Checkbox
                    id={`experience-${option.id}`}
                    checked={checkboxes[`experience-${option.id}`] || false}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange('experience', option.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={`experience-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Time Availability</h3>
            <div className="space-y-2 ml-4">
              {[
                { id: '1-5', label: '1-5 hours (Minimal commitment)' },
                { id: '5-15', label: '5-15 hours (Part-time focus)' },
                { id: '15-30', label: '15-30 hours (Significant part-time)' },
                { id: '30+', label: '30+ hours (Full-time dedication)' }
              ].map((option) => (
                <div key={option.id} className="flex items-start space-x-2">
                  <Checkbox
                    id={`time-${option.id}`}
                    checked={checkboxes[`time-${option.id}`] || false}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange('time', option.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={`time-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Strongest Skills</h3>
            <p className="mb-2 ml-4 text-sm italic">Check all that apply, circle your primary strength:</p>
            <div className="space-y-2 ml-4">
              {[
                { id: 'design', label: 'Design (Creating, modifying, visualizing)' },
                { id: 'marketing', label: 'Marketing (Promotion, content creation, customer acquisition)' },
                { id: 'technical', label: 'Technical (Engineering, troubleshooting, optimization)' },
                { id: 'business', label: 'Business/Sales (Operations, management, selling)' }
              ].map((option) => (
                <div key={option.id} className="flex items-start space-x-2">
                  <Checkbox
                    id={`skills-${option.id}`}
                    checked={checkboxes[`skills-${option.id}`] || false}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange('skills', option.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={`skills-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Creative Aptitude</h3>
            <div className="space-y-2 ml-4">
              {[
                { id: 'visionary', label: 'Visionary (Seeing new opportunities and concepts)' },
                { id: 'improver', label: 'Improver (Enhancing and refining existing ideas)' },
                { id: 'executor', label: 'Executor (Implementing and following through)' },
                { id: 'analytical', label: 'Analytical (Optimizing and systematizing)' }
              ].map((option) => (
                <div key={option.id} className="flex items-start space-x-2">
                  <Checkbox
                    id={`creativity-${option.id}`}
                    checked={checkboxes[`creativity-${option.id}`] || false}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange('creativity', option.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={`creativity-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Geographic Location</h3>
            <div className="mb-6">
              <h4 className="font-semibold mb-3 ml-4">My location type is:</h4>
              <div className="space-y-2 ml-4">
                {[
                  { id: 'major', label: 'Major City (Large metropolitan area)' },
                  { id: 'mid-size', label: 'Mid-Size City (Smaller city with good infrastructure)' },
                  { id: 'suburban', label: 'Suburban (Residential area near a city)' },
                  { id: 'rural', label: 'Rural/Remote (Small town or countryside)' }
                ].map((option) => (
                  <div key={option.id} className="flex items-start space-x-2">
                    <Checkbox
                      id={`location-${option.id}`}
                      checked={checkboxes[`location-${option.id}`] || false}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('location', option.id, checked as boolean)
                      }
                    />
                    <Label htmlFor={`location-${option.id}`}>{option.label}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 ml-4">My region/continent is:</h4>
              <div className="space-y-2 ml-4">
                {[
                  { id: 'north-america', label: 'North America (US & Canada)' },
                  { id: 'europe', label: 'Europe' },
                  { id: 'asia', label: 'Asia' },
                  { id: 'australia', label: 'Australia & New Zealand' },
                  { id: 'latin-america', label: 'Latin America' },
                  { id: 'africa', label: 'Africa' },
                  { id: 'middle-east', label: 'Middle East' }
                ].map((option) => (
                  <div key={option.id} className="flex items-start space-x-2">
                    <Checkbox
                      id={`region-${option.id}`}
                      checked={checkboxes[`region-${option.id}`] || false}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('region', option.id, checked as boolean)
                      }
                    />
                    <Label htmlFor={`region-${option.id}`}>{option.label}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 ml-4">
              <p className="font-medium">Country: _______________________________</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Growth Ambitions</h3>
            <div className="space-y-2 ml-4">
              {[
                { id: 'hobby', label: 'Hobby Income (Creative outlet that generates some money)' },
                { id: 'side', label: 'Side Income (Supplemental income alongside my main job)' },
                { id: 'replacement', label: 'Income Replacement (Eventually replacing my full-time income)' },
                { id: 'scalable', label: 'Scalable Business (Building a growth-focused venture)' }
              ].map((option) => (
                <div key={option.id} className="flex items-start space-x-2">
                  <Checkbox
                    id={`ambitions-${option.id}`}
                    checked={checkboxes[`ambitions-${option.id}`] || false}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange('ambitions', option.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={`ambitions-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Summary and Next Steps</h3>
            <div className="space-y-4 ml-4">
              <div>
                <Label htmlFor="advantages">Based on my self-assessment, my primary advantages are:</Label>
                <Textarea
                  id="advantages"
                  value={textInputs['advantages'] || ''}
                  onChange={(e) => handleTextChange('advantages', e.target.value)}
                  className="mt-2"
                  placeholder="List your key advantages here..."
                />
              </div>
              
              <div>
                <Label htmlFor="challenges">My potential challenges will be:</Label>
                <Textarea
                  id="challenges"
                  value={textInputs['challenges'] || ''}
                  onChange={(e) => handleTextChange('challenges', e.target.value)}
                  className="mt-2"
                  placeholder="List your anticipated challenges..."
                />
              </div>
              
              <div>
                <Label htmlFor="markets">The markets that might be best for me to explore:</Label>
                <Textarea
                  id="markets"
                  value={textInputs['markets'] || ''}
                  onChange={(e) => handleTextChange('markets', e.target.value)}
                  className="mt-2"
                  placeholder="List potential market opportunities..."
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
