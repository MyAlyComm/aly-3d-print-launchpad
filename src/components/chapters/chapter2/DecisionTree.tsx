import React from "react";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { GitFork, Users, Clock, Brain, Map, LineChart, PiggyBank } from "lucide-react";

export const DecisionTree = () => {
  return (
    <div className="space-y-8">
      <ChapterSection title="The Decision Tree Framework">
        <div className="my-8">
          <img
            src="/lovable-uploads/f65da361-c443-4d32-aae6-4d603d905f91.png"
            alt="Decision Tree Framework Concept"
            className="w-full rounded-lg shadow-lg mb-8"
          />
        </div>

        <p className="text-gray-700 mb-6">
          After helping thousands of aspiring 3D printing entrepreneurs, I've developed a comprehensive decision framework that will guide you toward your optimal path. Unlike one-size-fits-all advice, this framework considers your unique combination of circumstances, skills, and ambitions.
        </p>
        
        <p className="text-gray-700 mb-6">
          The beauty of this approach is that it doesn't ask you to make decisions about things you don't yet understand (like which markets to target). Instead, it focuses on what you already know about yourself and your situation, then provides tailored recommendations.
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            Seven Key Factors That Determine Your Optimal Path
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1 shrink-0">
                <PiggyBank className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Budget Assessment</h4>
                <p className="text-gray-700 text-sm">Your available capital is the first concrete factor in determining your path.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-full text-purple-600 mt-1 shrink-0">
                <GitFork className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-purple-900">3D Printing Experience</h4>
                <p className="text-gray-700 text-sm">Your existing level of experience impacts how quickly you can get started.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600 mt-1 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-green-900">Time Availability</h4>
                <p className="text-gray-700 text-sm">How much time you can realistically dedicate to your business.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-2 rounded-full text-amber-600 mt-1 shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-amber-900">Your Strongest Skills</h4>
                <p className="text-gray-700 text-sm">Your existing skills are perhaps your greatest asset.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-cyan-100 p-2 rounded-full text-cyan-600 mt-1 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-cyan-900">Creative Aptitude</h4>
                <p className="text-gray-700 text-sm">Your overall creative orientation and how you approach problems.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-2 rounded-full text-indigo-600 mt-1 shrink-0">
                <Map className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-indigo-900">Geographic Location</h4>
                <p className="text-gray-700 text-sm">Your physical location affects everything from market access to shipping costs.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-rose-100 p-2 rounded-full text-rose-600 mt-1 shrink-0">
                <LineChart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-rose-900">Growth Ambitions</h4>
                <p className="text-gray-700 text-sm">Your personal goals for the business will shape your entire approach.</p>
              </div>
            </div>
          </div>
        </div>
        
        <ChapterSection title="The Decision Tree Output">
          <p className="text-gray-700 mb-4">
            After assessing yourself across these seven factors, the decision framework leads to four key outputs that will guide your journey:
          </p>
          
          <ChapterGrid className="grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <InfoCard 
              title="Printer Recommendations" 
              points={[
                "The optimal printer model(s) for your situation",
                "Necessary accessories and supplies",
                "Upgrade paths as you grow",
                "Setup priorities and configurations"
              ]}
            />
            
            <InfoCard 
              title="Suggested Markets" 
              points={[
                "Industry verticals most aligned with your strengths",
                "Product categories with the right complexity level",
                "Customer groups you're best positioned to serve",
                "Pricing tiers appropriate for your situation"
              ]}
            />
            
            <InfoCard 
              title="Marketing Strategy" 
              points={[
                "Platform recommendations (social media, marketplaces, etc.)",
                "Content creation frameworks tailored to your abilities",
                "Customer acquisition strategies matched to your resources",
                "Positioning approaches that leverage your strengths"
              ]}
            />
            
            <InfoCard 
              title="Growth Timeline" 
              points={[
                "Month-by-month milestones appropriate for your situation",
                "Investment and reinvestment guidelines",
                "Expansion triggers and decision points",
                "Long-term vision aligned with your ambitions"
              ]}
            />
          </ChapterGrid>
          
          <p className="text-gray-700">
            Complete the detailed self-assessment in the next section to identify your optimal path. This will help you understand your unique combination of strengths, limitations, and opportunities.
          </p>
        </ChapterSection>
      </ChapterSection>
    </div>
  );
};
