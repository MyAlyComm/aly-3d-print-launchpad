
import React from "react";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { KeyFactors } from "./decision-tree/KeyFactors";
import { OutputSection } from "./decision-tree/OutputSection";

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
        
        <KeyFactors />
        
        <ChapterSection title="The Decision Tree Output">
          <OutputSection />
        </ChapterSection>
      </ChapterSection>
    </div>
  );
};
