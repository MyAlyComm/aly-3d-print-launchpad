
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const TimelineSection = () => {
  return (
    <section id="timeline" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Industry Timeline</h2>
      
      <div className="relative border-l-2 border-blue-300 pl-8 ml-4 space-y-10">
        {/* Timeline entries */}
        <div className="relative">
          <div className="absolute -left-[2.55rem] h-6 w-6 rounded-full bg-blue-500"></div>
          <div className="mb-1">
            <span className="font-bold text-lg text-blue-800">2010-2015: Early Adoption</span>
          </div>
          <p className="text-gray-700">
            The early market was dominated by industrial applications and early adopters.
            Consumer 3D printers were expensive with limited capabilities, primarily used
            for prototyping rather than end-product manufacturing.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-[2.55rem] h-6 w-6 rounded-full bg-purple-500"></div>
          <div className="mb-1">
            <span className="font-bold text-lg text-purple-800">2016-2019: Accessibility Wave</span>
          </div>
          <p className="text-gray-700">
            The advent of affordable desktop 3D printers opened the market to hobbyists 
            and small businesses. Print quality improved dramatically while prices dropped 
            below $300, creating the first significant arbitrage opportunity.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-[2.55rem] h-6 w-6 rounded-full bg-green-500"></div>
          <div className="mb-1">
            <span className="font-bold text-lg text-green-800">2020-2022: Pandemic Acceleration</span>
          </div>
          <p className="text-gray-700">
            Covid-19 catalyzed a surge in 3D printing adoption. Supply chain disruptions 
            highlighted the value of on-demand local manufacturing. The market for printed 
            products expanded drastically across all categories.
          </p>
          
          <Card className="mt-4 bg-green-50 border-green-100">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-2">Key Market Shift:</h3>
              <p className="text-gray-700">
                This period saw 3D printing shift from a hobbyist curiosity to an essential 
                business tool across industries. The supply chain crisis created a perfect 
                arbitrage window that remains open today.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="relative">
          <div className="absolute -left-[2.55rem] h-6 w-6 rounded-full bg-amber-500"></div>
          <div className="mb-1">
            <span className="font-bold text-lg text-amber-800">2023-Present: Marketplace Evolution</span>
          </div>
          <p className="text-gray-700">
            We're currently in a phase where marketplaces are maturing but still highly 
            inefficient. Marketing sophistication has increased, but there remains substantial 
            opportunity for differentiation beyond just the product itself.
          </p>
        </div>
      </div>
    </section>
  );
};
