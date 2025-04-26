
import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface SummarySectionProps {
  values: {
    advantages: string;
    challenges: string;
    markets: string;
  };
  onChange: (field: string, value: string) => void;
}

export const SummarySection = ({ values, onChange }: SummarySectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Summary and Next Steps</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="advantages">Based on my self-assessment, my primary advantages are:</Label>
          <Textarea 
            id="advantages" 
            placeholder="List your advantages here..." 
            className="min-h-[100px]" 
            value={values.advantages}
            onChange={(e) => onChange("advantages", e.target.value)} 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="challenges">My potential challenges will be:</Label>
          <Textarea 
            id="challenges" 
            placeholder="List your challenges here..." 
            className="min-h-[100px]"
            value={values.challenges}
            onChange={(e) => onChange("challenges", e.target.value)}  
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="markets">The markets that might be best for me to explore:</Label>
          <Textarea 
            id="markets" 
            placeholder="List potential markets here..." 
            className="min-h-[100px]"
            value={values.markets}
            onChange={(e) => onChange("markets", e.target.value)}  
          />
        </div>
      </div>
    </div>
  );
};
