
import React from 'react';
import { Button } from "@/components/ui/button";

interface DecisionTreeSectionProps {
  onSubmit: () => void;
}

export const DecisionTreeSection: React.FC<DecisionTreeSectionProps> = ({ onSubmit }) => {
  return (
    <section id="decision-tree" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">The Decision Tree Framework</h2>
      
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Decision tree visualization"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 italic text-center">Making strategic decisions based on your unique situation</p>
      </div>

      <div className="space-y-6">
        <p className="text-lg">
          The Decision Tree Framework helps you align your 3D printing business with your unique skills, resources, and goals:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border">
            <h3 className="font-bold text-lg mb-2">Design-Focused Path</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Strength in creating original designs</li>
              <li>Passion for artistic expression</li>
              <li>Potential for premium pricing</li>
              <li>Lower competition, higher margins</li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border">
            <h3 className="font-bold text-lg mb-2">Production-Focused Path</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Strength in optimization and efficiency</li>
              <li>Focus on process improvement</li>
              <li>Multiple printers, automated workflow</li>
              <li>Volume-based business model</li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border">
            <h3 className="font-bold text-lg mb-2">Marketing-Focused Path</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Strength in promotion and branding</li>
              <li>Content creation skills</li>
              <li>Community building</li>
              <li>Influencer potential</li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border">
            <h3 className="font-bold text-lg mb-2">Service-Focused Path</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Strength in client relationships</li>
              <li>Custom work and commissions</li>
              <li>Local business networking</li>
              <li>B2B opportunities</li>
            </ul>
          </div>
        </div>
        
        <p>
          Your optimal path depends on your personal strengths, available resources, and business goals. The worksheet in the next section will help you determine which path aligns best with your situation.
        </p>
        
        <div className="flex justify-end mt-4">
          <Button onClick={onSubmit} className="bg-primary hover:bg-primary/90">
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
};
