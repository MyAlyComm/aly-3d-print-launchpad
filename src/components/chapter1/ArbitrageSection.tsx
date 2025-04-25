
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ArbitrageSectionProps {
  onSubmit?: () => void;
}

export const ArbitrageSection: React.FC<ArbitrageSectionProps> = ({ onSubmit }) => {
  return (
    <section id="arbitrage" className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Understanding Arbitrage Windows</h2>
      
      {onSubmit && (
        <div className="flex justify-end mt-6">
          <Button onClick={onSubmit}>Continue</Button>
        </div>
      )}
    </section>
  );
};
