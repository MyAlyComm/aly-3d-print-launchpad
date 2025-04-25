
import React from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface SummarySectionProps {
  textInputs: Record<string, string>;
  onTextChange: (fieldId: string, value: string) => void;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ textInputs, onTextChange }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Summary and Next Steps</h3>
      <div className="space-y-4 ml-4">
        <div>
          <Label htmlFor="advantages">Based on my self-assessment, my primary advantages are:</Label>
          <Textarea
            id="advantages"
            value={textInputs['advantages'] || ''}
            onChange={(e) => onTextChange('advantages', e.target.value)}
            className="mt-2"
            placeholder="List your key advantages here..."
          />
        </div>
        
        <div>
          <Label htmlFor="challenges">My potential challenges will be:</Label>
          <Textarea
            id="challenges"
            value={textInputs['challenges'] || ''}
            onChange={(e) => onTextChange('challenges', e.target.value)}
            className="mt-2"
            placeholder="List your anticipated challenges..."
          />
        </div>
        
        <div>
          <Label htmlFor="markets">The markets that might be best for me to explore:</Label>
          <Textarea
            id="markets"
            value={textInputs['markets'] || ''}
            onChange={(e) => onTextChange('markets', e.target.value)}
            className="mt-2"
            placeholder="List potential market opportunities..."
          />
        </div>
      </div>
    </div>
  );
};
