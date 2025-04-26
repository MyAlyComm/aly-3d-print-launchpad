
import React from "react";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { Timer, Rocket } from "lucide-react";

export const TheAxiogeneticTheorem = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Finding Your Personal Path to Success</h2>
      
      <p className="text-gray-700">
        As my 3D printing business began to grow, I found myself overwhelmed by the sheer volume of decisions I needed to make each day. Which products should I focus on? Where should I sell them? How should I divide my limited time?
      </p>

      <p className="text-gray-700">
        I knew I needed a framework—some underlying principle that could guide all these decisions. I spent countless nights thinking about this problem after finishing my university assignments.
      </p>

      <ChapterSection title="The Axiogenetic Theorem">
        <p className="text-gray-700 mb-4">
          The answer I was searching for was not a solution. It was a question in and of itself:
          When all of the problems of today have for the most part been solved, what remains?
        </p>

        <ChapterGrid className="grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-purple-50 rounded-lg relative overflow-hidden">
            <div className="absolute right-4 top-4 text-purple-400">
              <Timer className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-purple-900">Time</h3>
            <p className="text-gray-700">The first constant in our equation - a finite resource that every entrepreneur must master.</p>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg relative overflow-hidden">
            <div className="absolute right-4 top-4 text-purple-400">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-purple-900">Rate of Innovation</h3>
            <p className="text-gray-700">The second constant - the speed at which human creativity transforms possibilities into reality.</p>
          </div>
        </ChapterGrid>

        <InfoCard 
          title="Key Insight"
          points={[
            "Time and innovation are outside the control of any one person",
            "We cannot create more value without saving time or being more innovative",
            "Success comes from understanding and working with these constants"
          ]}
          className="mt-6"
        />
      </ChapterSection>
    </div>
  );
};
