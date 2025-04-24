import React from 'react';
import { Card } from "@/components/ui/card";

export const TimelineSection = () => {
  return (
    <section id="timeline" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">The 3D Printing Timeline: Where We Are Now</h2>
      
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Early 3D printing setup"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 italic text-center">The evolution of 3D printing technology through the years</p>
      </div>

      <p className="text-gray-700 mb-8">
        3D printing has existed since the 1980s, but it's only recently entered its true arbitrage window 
        for entrepreneurs like you and me. Let me walk you through the evolution:
      </p>

      <div className="space-y-8">
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <h3 className="text-xl font-semibold mb-4">Phase 1: The Tinkerer Era (2009-2019)</h3>
          <p className="mb-4">When I was still in elementary school, 3D printing was the domain of engineers and hardcore hobbyists. The printers cost $2,000+ and required extensive technical knowledge just to get a basic cube to print correctly.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Constant troubleshooting</li>
            <li>Manual calibration for hours</li>
            <li>Limited material options</li>
            <li>Primarily DIY kits, not ready-to-use machines</li>
            <li>Non-existent customer base outside of techies</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-xl font-semibold mb-4">Phase 2: The Transition Period (2020-2023)</h3>
          <p className="mb-4">As I entered my teens, the industry began to shift. Printers became more reliable, prices dropped below $1,000, and the software improved dramatically.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The rise of plug-and-play printers that actually worked</li>
            <li>Expanded material options beyond basic plastics</li>
            <li>Growing online communities sharing knowledge</li>
            <li>First wave of small businesses primarily serving niche markets</li>
            <li>Early e-commerce adoption</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="text-xl font-semibold mb-4">Phase 3: The Golden Window (2023-Present)</h3>
          <p className="mb-4">This is where we are now—the perfect arbitrage window. Three critical factors have converged:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">1. Technology Accessibility</h4>
              <ul className="list-disc pl-5">
                <li>Sub-$500 printers that produce professional-quality results</li>
                <li>Auto-calibration and reliable operation</li>
                <li>User-friendly software anyone can learn in days, not months</li>
                <li>Widespread availability of materials and parts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">2. Knowledge Gap</h4>
              <ul className="list-disc pl-5">
                <li>Most people still think 3D printing is complex and technical</li>
                <li>Business strategies aren't widely understood or documented</li>
                <li>Profitable niches remain undiscovered or underserved</li>
                <li>The "how" of scaling beyond hobby status is rarely discussed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">3. Market Readiness</h4>
              <ul className="list-disc pl-5">
                <li>Consumers now understand and value 3D printed products</li>
                <li>Social commerce platforms make selling easier than ever</li>
                <li>Marketplaces are established but not yet saturated</li>
                <li>The infrastructure for distribution exists</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
