
import React from 'react';
import { Button } from "@/components/ui/button";
import { useProductDesign } from "../ProductDesignContext";
import { AudienceCard } from "../components/demographics/AudienceCard";
import { GeographicDistribution } from "../components/demographics/GeographicDistribution";
import { PsychographicProfile } from "../components/demographics/PsychographicProfile";

interface DemographicsProps {
  onNext: () => void;
  onPrev: () => void;
}

export const Demographics = ({ onNext, onPrev }: DemographicsProps) => {
  const { demographics, productDetails } = useProductDesign();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Target Customer Demographics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <AudienceCard 
          title="Primary Audience"
          type="primary"
          audience={demographics.primaryAudience}
        />
        <AudienceCard 
          title="Secondary Audience"
          type="secondary"
          audience={demographics.secondaryAudience}
        />
        <AudienceCard 
          title="Tertiary Audience"
          type="tertiary"
          audience={demographics.tertiaryAudience}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GeographicDistribution />
        <PsychographicProfile />
      </div>
      
      <div className="mt-8 flex justify-between">
        <Button 
          variant="outline"
          onClick={onPrev}
        >
          Back
        </Button>
        <Button onClick={onNext}>
          Next: Marketing Strategy
        </Button>
      </div>
    </div>
  );
};
