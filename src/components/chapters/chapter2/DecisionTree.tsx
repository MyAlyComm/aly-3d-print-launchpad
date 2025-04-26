
import React from "react";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";

export const DecisionTree = () => {
  return (
    <div className="space-y-6">
      <ChapterSection title="The Decision Tree Framework">
        <p className="text-gray-700 mb-4">
          After helping thousands of aspiring 3D printing entrepreneurs, I've developed a comprehensive decision framework that will guide you toward your optimal path. Unlike one-size-fits-all advice, this framework considers your unique combination of circumstances, skills, and ambitions.
        </p>
        
        <p className="text-gray-700 mb-4">
          The beauty of this approach is that it doesn't ask you to make decisions about things you don't yet understand (like which markets to target). Instead, it focuses on what you already know about yourself and your situation, then provides tailored recommendations.
        </p>

        <h3 className="text-xl font-semibold mb-3">Seven Key Factors</h3>
        <p className="text-gray-700 mb-4">
          Let's walk through the seven key factors that will determine your optimal path:
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-lg mb-2">1. Budget Assessment</h4>
            <p className="text-gray-700">
              Your available capital is the first and most concrete factor in determining your path. But here's the surprising truth: you can start a 3D printing business with literally $0.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-lg mb-2">2. 3D Printing Experience</h4>
            <p className="text-gray-700">
              Your existing level of experience with 3D printing technology impacts how quickly you can get started and what learning curve you're facing.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-lg mb-2">3. Time Availability</h4>
            <p className="text-gray-700">
              How much time you can realistically dedicate to your business will shape your entire strategy.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-lg mb-2">4. Strongest Skills</h4>
            <p className="text-gray-700">
              Your existing skills are perhaps your greatest asset. The optimal business model leverages what you're already good at.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-lg mb-2">5. Creative Aptitude</h4>
            <p className="text-gray-700">
              Beyond specific skills is your overall creative orientation—how you naturally approach problems and opportunities.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-lg mb-2">6. Geographic Location</h4>
            <p className="text-gray-700">
              Your physical location affects everything from market access to shipping costs, material availability, and customer expectations.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-lg mb-2">7. Growth Ambitions</h4>
            <p className="text-gray-700">
              Finally, your personal goals for the business will shape your entire approach.
            </p>
          </div>
        </div>
        
        <InfoCard 
          title="The Decision Tree Output"
          points={[
            "Printer Recommendations: Based on your unique factors",
            "Suggested Markets: Aligned with your strengths and situation",
            "Marketing Strategy: Tailored to your skills and resources",
            "Growth Timeline: Realistic milestones for your circumstances"
          ]}
          className="mt-6"
        />
      </ChapterSection>
    </div>
  );
};
