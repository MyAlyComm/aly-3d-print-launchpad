
import React from 'react';
import { Card } from "@/components/ui/card";

export const FutureSection = () => {
  return (
    <section id="future" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Where We're Going: The New Horizon</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">The 2025 Shift: Integration & Automation</h3>
          <div className="space-y-4">
            <p>By 2025, we'll see several key developments that will reshape the competitive landscape:</p>
            <ol className="list-decimal pl-5 space-y-3">
              <li><span className="font-semibold">AI Design Integration:</span> 3D modeling software will fully integrate with generative AI, allowing anyone to create complex models through simple text prompts and refinement tools.</li>
              <li><span className="font-semibold">Automated Production Systems:</span> Affordable printer farm management software will enable small businesses to run 5-10 printers with minimal oversight.</li>
              <li><span className="font-semibold">Material-Specific Marketplaces:</span> Online platforms dedicated to specific material types will emerge, creating new niches for specialized products.</li>
              <li><span className="font-semibold">Subscription-Based Business Models:</span> More entrepreneurs will shift toward recurring revenue models.</li>
              <li><span className="font-semibold">Mainstream Retail Integration:</span> Major retailers will begin dedicated sections for 3D printed products.</li>
            </ol>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">The 2026 Evolution: Specialization & Ecosystem</h3>
          <div className="space-y-4">
            <p>By 2026, the industry will further mature with more sophisticated business models:</p>
            <ol className="list-decimal pl-5 space-y-3">
              <li><span className="font-semibold">Multi-Material Consumer Printers:</span> Affordable printers capable of seamlessly combining multiple materials.</li>
              <li><span className="font-semibold">Hyper-Local Production Networks:</span> Community-based printing hubs will emerge in most cities.</li>
              <li><span className="font-semibold">Industry-Specific Applications:</span> Deeper penetration into specialized industries.</li>
              <li><span className="font-semibold">Digital Rights Management Evolution:</span> New systems for selling, licensing, and tracking 3D models.</li>
              <li><span className="font-semibold">Sustainability Premium:</span> Eco-friendly filaments and circular production methods will command price premiums.</li>
            </ol>
          </div>
        </Card>
      </div>
    </section>
  );
};
