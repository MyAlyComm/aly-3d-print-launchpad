
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ArbitrageSection = ({ onSubmit }: { onSubmit?: () => void }) => {
  return (
    <section id="arbitrage" className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Understanding Arbitrage Windows</h2>
      
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Arbitrage in 3D printing represents a unique opportunity where you can identify and capitalize on price differentials in the market. 
          This occurs when you can produce items at a significantly lower cost than their current market selling price, creating a profitable window of opportunity.
        </p>

        <Card className="bg-blue-50 border border-blue-100">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-blue-800">Key Arbitrage Concepts</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span><strong>Price Differential:</strong> The gap between your production cost and market selling price</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span><strong>Market Inefficiency:</strong> Areas where traditional manufacturing can't compete with 3D printing's flexibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span><strong>Temporary Opportunity:</strong> Windows that close as markets evolve and more competitors enter</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Most Profitable Arbitrage Opportunities</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium text-lg mb-2">Personalization Premium</h4>
              <p className="text-gray-600 text-sm">
                Custom and personalized products can command a 200-300% markup over standard items. Focus on items where personalization adds significant perceived value.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium text-lg mb-2">Niche Market Specialization</h4>
              <p className="text-gray-600 text-sm">
                Serving underserved markets with specialized products that have limited competition and high margins due to lack of mass-market solutions.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium text-lg mb-2">Replacement Parts</h4>
              <p className="text-gray-600 text-sm">
                Creating replacement parts for discontinued products or items where OEM parts are expensive or unavailable can yield 400-500% margins.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium text-lg mb-2">Specialized Tools</h4>
              <p className="text-gray-600 text-sm">
                Custom tools and jigs for specific industries where traditional manufacturing setup costs are prohibitive for small batches.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Identifying Your Arbitrage Window</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Research markets where prices are high but designs are relatively simple</li>
            <li>Calculate your total production cost (material + time + energy + overhead)</li>
            <li>Look for items where you can maintain at least a 70% profit margin</li>
            <li>Test small batches before scaling production</li>
            <li>Monitor the market for emerging competition that could close your window</li>
          </ol>
          
          <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-sm text-gray-700">
              <strong>Remember:</strong> The best arbitrage opportunities often disappear as markets mature. 
              Always be researching new niches and be prepared to pivot as necessary.
            </p>
          </div>
        </div>
        
        {onSubmit && (
          <div className="flex justify-end mt-6">
            <Button 
              onClick={onSubmit}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              Complete Section
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
