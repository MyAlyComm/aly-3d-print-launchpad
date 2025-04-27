import React from "react";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { Lightbulb, Rocket } from "lucide-react";

export const TheRevelation = () => {
  return (
    <div className="space-y-6">
      <ChapterSection title="The Revelation">
        <p className="text-gray-700 mb-6">
          But the more content I created, the more clearly I saw why so many people fail, plateau, and get stuck or lost.
        </p>
        
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6 border border-blue-100">
          <p className="text-lg font-medium text-blue-900 mb-4">
            It's because the breadth of information to succeed is vast. Printer settings, shipping strategies, product-market fit, social media, customer funnels, product design, branding, advertising. The list goes on.
          </p>
          
          <p className="text-gray-700">
            As I segmented each group, I began to understand that what's needed in the industry isn't more information.
          </p>
          
          <p className="animate-shimmer bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#FFD700] bg-[length:200%_auto] bg-clip-text text-transparent text-xl font-bold mt-4">
            It's more value in less time.
          </p>
        </div>

        <p className="text-gray-700 mb-6">
          And thus, the 3D Printing Blueprint was born.
        </p>

        <ChapterGrid className="grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-purple-50 rounded-lg relative overflow-hidden">
            <div className="absolute right-4 top-4 text-purple-400">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-purple-900">Simple Yet Powerful</h3>
            <p className="text-gray-700">
              While it's not going to apply to every single situation—the core principles, systems, and AI tools within this book lay down an easy-to-follow, time-saving strategy.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg relative overflow-hidden">
            <div className="absolute right-4 top-4 text-blue-400">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-900">From Zero to Profit</h3>
            <p className="text-gray-700">
              This strategy avoids months of research and gets you from zero to profit in 60 days or less. All you need is a computer, a smartphone, and a place to plug in your printer.
            </p>
          </div>
        </ChapterGrid>

        <p className="text-gray-700 mt-6 font-medium">
          But to make a plan for tomorrow, you must first look inward to understand who you are, today.
        </p>
        
        <p className="text-gray-700 mt-4">
          The biggest mistake I see new entrepreneurs make isn't choosing the wrong printer or selecting the wrong products. It's failing to align their business with their natural strengths, interests, and circumstances.
        </p>
        
        <p className="text-gray-700 mt-4">
          When I first started, I almost fell into this trap myself. I was ready to copy exactly what I saw other successful 3D printing businesses doing—without considering whether those models played to my strengths or fit my situation.
        </p>
      </ChapterSection>
    </div>
  );
};
