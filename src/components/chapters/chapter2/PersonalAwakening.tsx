
import React from "react";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { Calendar, MessageCircle } from "lucide-react";

export const PersonalAwakening = () => {
  return (
    <div className="space-y-6">
      <ChapterSection title="The Awakening">
        <p className="text-gray-700 mb-4">
          Fast forward to February, my ideas began to crystallize and I embarked on a new chapter, creating products and content for social media. I knew that the industry was hungry for new ideas, new products, and information.
        </p>
        
        <p className="text-gray-700 mb-4">
          But I underestimated just how much help they needed.
        </p>

        <ChapterGrid className="grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 rounded-lg relative overflow-hidden">
            <div className="absolute right-4 top-4 text-blue-400">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-900">The Social Media Impact</h3>
            <p className="text-gray-700">
              When my first reel went viral—I started getting 5 or 10 messages a day asking for help, then 20, then 100. Pretty soon I realized there was no possible way I could keep up helping people one at a time.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg relative overflow-hidden">
            <div className="absolute right-4 top-4 text-blue-400">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-900">Building Community</h3>
            <p className="text-gray-700">
              So I opened a free Skool community to try and centralize my thoughts. I started building systems and pathways tailored to the unique situations of global entrepreneurs.
            </p>
          </div>
        </ChapterGrid>

        <p className="text-gray-700 mt-4">
          I realized that to give truly valuable advice I needed to know a lot about each person—their skills, their geography, their dreams, and ambitions.
        </p>
        
        <p className="text-gray-700 mt-4">
          I created worksheets, AI prompts, and content calendars to help them create sustainable, profitable businesses.
        </p>
      </ChapterSection>
    </div>
  );
};
