
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HandCoins, TrendingUp, Timer } from "lucide-react";

interface ArbitrageSectionProps {
  onSubmit?: () => void;
}

export const ArbitrageSection: React.FC<ArbitrageSectionProps> = ({ onSubmit }) => {
  return (
    <section className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <HandCoins className="h-6 w-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Understanding Arbitrage Windows</h2>
        </div>

        <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">The Gateway to Entrepreneurial Success</h3>
          <p className="text-gray-700 mb-6 font-medium">
            In business, the biggest profits don't come from being better. They come from being early.
          </p>
          <p className="text-gray-700 mb-6">
            Whenever a new technology emerges, there's a golden period where supply hasn't caught up with demand. 
            Where knowledge isn't widespread. Where the competition is minimal, and the margins are massive.
          </p>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3 text-gray-800">An arbitrage window opens when:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>A technology becomes accessible to average people</li>
              <li>But knowledge about how to leverage it remains limited</li>
              <li>And the market hasn't yet been flooded with competitors</li>
            </ul>
          </div>

          <div className="flex items-center gap-3 border-t pt-6">
            <Timer className="h-5 w-5 text-primary" />
            <p className="text-gray-700 italic">
              This creates a brief period—sometimes months, sometimes a few years—where extraordinary 
              profits are possible for those who recognize the opportunity and act.
            </p>
          </div>
        </Card>
      </div>

      {onSubmit && (
        <div className="flex justify-end">
          <Button 
            onClick={onSubmit}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
          >
            Continue
          </Button>
        </div>
      )}
    </section>
  );
};
