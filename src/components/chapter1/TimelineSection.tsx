
import React from 'react';
import { Card } from "@/components/ui/card";
import { History } from "lucide-react";

export const TimelineSection = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <History className="h-6 w-6 text-primary" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">The 3D Printing Timeline</h2>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Phase 1: The Tinkerer Era (2009-2019)</h3>
          <p className="text-gray-700 mb-4">
            When I was still in elementary school, 3D printing was the domain of engineers and hardcore hobbyists. 
            The printers cost $2,000+ and required extensive technical knowledge just to get a basic cube to print correctly.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Constant troubleshooting</li>
            <li>Manual calibration for hours</li>
            <li>Limited material options</li>
            <li>Primarily DIY kits, not ready-to-use machines</li>
            <li>Non-existent customer base outside of other techies</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Phase 2: The Transition Period (2020-2023)</h3>
          <p className="text-gray-700 mb-4">
            As I entered my teens, the industry began to shift. Printers became more reliable, prices dropped below $1,000, 
            and the software improved dramatically.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>The rise of plug-and-play printers that actually worked</li>
            <li>Expanded material options beyond basic plastics</li>
            <li>Growing online communities sharing knowledge</li>
            <li>First wave of small businesses primarily serving niche markets</li>
            <li>Early e-commerce adoption</li>
          </ul>
        </Card>

        <Card className="p-6 border-2 border-primary/20">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Phase 3: The Golden Window (2023-Present)</h3>
          <p className="text-gray-700 mb-6">This is where we are now—the perfect arbitrage window.</p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">1. Technology Accessibility</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Sub-$500 printers that produce professional-quality results</li>
                <li>Auto-calibration and reliable operation</li>
                <li>User-friendly software anyone can learn in days, not months</li>
                <li>Widespread availability of materials and parts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-800">2. Knowledge Gap</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Most people still think 3D printing is complex and technical</li>
                <li>Business strategies aren't widely understood or documented</li>
                <li>Profitable niches remain undiscovered or underserved</li>
                <li>The "how" of scaling beyond hobby status is rarely discussed</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-800">3. Market Readiness</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Consumers now understand and value 3D printed products</li>
                <li>Social commerce platforms make selling easier than ever</li>
                <li>Marketplaces are established but not yet saturated</li>
                <li>The infrastructure for distribution exists</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
