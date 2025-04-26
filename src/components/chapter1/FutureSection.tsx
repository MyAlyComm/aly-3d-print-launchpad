
import React from 'react';
import { Card } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export const FutureSection = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <Rocket className="h-6 w-6 text-primary" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">The New Horizon</h2>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">The 2025 Shift: Integration & Automation</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. AI Design Integration</h4>
              <p className="text-gray-700">3D modeling software will fully integrate with generative AI, allowing anyone to create complex models through simple text prompts and refinement tools.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Automated Production Systems</h4>
              <p className="text-gray-700">Affordable printer farm management software will enable small businesses to run 5-10 printers with minimal oversight.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">3. Material-Specific Marketplaces</h4>
              <p className="text-gray-700">Online platforms dedicated to specific material types will emerge, creating new niches for specialized products.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">4. Subscription-Based Business Models</h4>
              <p className="text-gray-700">More entrepreneurs will shift toward recurring revenue models like "Print of the Month" clubs.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">5. Mainstream Retail Integration</h4>
              <p className="text-gray-700">Major retailers will begin dedicated sections for 3D printed products.</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">The 2026 Evolution: Specialization & Ecosystem</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Multi-Material Consumer Printers</h4>
              <p className="text-gray-700">Affordable printers capable of seamlessly combining multiple materials will create new product possibilities.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Hyper-Local Production Networks</h4>
              <p className="text-gray-700">Community-based printing hubs will emerge in most cities, connecting local designers with production capacity.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">3. Industry-Specific Applications</h4>
              <p className="text-gray-700">3D printing will penetrate deeper into specialized industries, creating lucrative B2B opportunities.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">4. Digital Rights Management Evolution</h4>
              <p className="text-gray-700">New systems for selling, licensing, and tracking 3D models will emerge with better IP protection.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">5. Sustainability Premium</h4>
              <p className="text-gray-700">Eco-friendly filaments and circular production methods will command price premiums as consumer awareness grows.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
