
import React from "react";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { Clock, Lightbulb } from "lucide-react";

export const TheRevelation = () => {
  return (
    <div className="space-y-6">
      <ChapterSection title="The Revelation">
        <p className="text-gray-700 mb-4">
          But the more content I created, the more clearly I saw why so many people fail, plateau, and get stuck or lost.
        </p>
        
        <p className="text-gray-700 mb-4">
          It's because the breadth of information to succeed is vast. Printer settings, shipping strategies, product-market fit, social media, customer funnels, product design, branding, advertising. The list goes on.
        </p>

        <ChapterGrid className="grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-green-50 rounded-lg relative overflow-hidden">
            <div className="absolute right-4 top-4 text-green-400">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-green-900">The Core Insight</h3>
            <p className="text-gray-700">
              As I segmented each group, I began to understand that what's needed in the industry isn't more information.
            </p>
            <p className="text-gray-700 font-bold mt-2">
              It's more value in less time.
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-lg relative overflow-hidden">
            <div className="absolute right-4 top-4 text-green-400">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-green-900">The Blueprint Solution</h3>
            <p className="text-gray-700">
              And thus, the 3D Printing Blueprint was born. Core principles, systems, and AI tools that lay down an easy-to-follow, time-saving strategy.
            </p>
          </div>
        </ChapterGrid>

        <InfoCard 
          title="Key Insight"
          points={[
            "While it's not going to apply to every single situation—the core principles get you from zero to profit in 60 days or less",
            "All you need is a computer, a smartphone, and a place to plug in your printer",
            "To make a plan for tomorrow, you must first look inward to understand who you are, today"
          ]}
          className="mt-6"
        />
        
        <p className="text-gray-700 mt-4 font-medium">
          The biggest mistake I see new entrepreneurs make isn't choosing the wrong printer or selecting the wrong products. It's failing to align their business with their natural strengths, interests, and circumstances.
        </p>
      </ChapterSection>
    </div>
  );
};
