
import React from 'react';
import { BadgeCheck, Clock } from "lucide-react";
import { getSectionName } from '@/utils/progressUtils';
import { useChapterProgress } from '@/hooks/useChapterProgress';

export const ChapterProgressList = () => {
  const { isChapterCompleted, getChapterLatestSection } = useChapterProgress();

  // Define chapter titles from the ebook structure
  const chapterTitles = {
    1: "Arbitrage Windows - The Timelines of Opportunity",
    2: "Knowing Yourself, Knowing Your Tools",
    3: "The 3 Plus 1 Equals 40 System",
    4: "The Product Trinity - Finding Your First Three Winning Products",
    5: "Choosing Your Production Tools",
    6: "Selecting Your Selling Platforms",
    7: "Setting Up for Success",
    8: "Zero-Cost Marketing That Works",
    9: "Scaling Beyond $5K",
    10: "Future-Proofing Your Business",
    11: "Your Business Ecosystem",
    12: "Advanced Product Development",
    13: "The Journey Ahead"
  };

  return (
    <div className="space-y-2">
      {Array.from({length: 13}, (_, i) => i + 1).map((chapter) => {
        const completed = isChapterCompleted(chapter);
        const latestSection = getChapterLatestSection(chapter);
        
        return (
          <div 
            key={chapter} 
            className="flex items-center justify-between p-2 border rounded-md bg-card hover:bg-accent/5 transition-colors"
          >
            <div>
              <p className="text-sm font-medium">
                Chapter {chapter}
                {latestSection && (
                  <span className="text-xs text-muted-foreground ml-2">
                    - {getSectionName(latestSection.section_id)}
                  </span>
                )}
              </p>
            </div>
            <div className="flex items-center">
              {completed ? (
                <span className="inline-flex items-center text-xs text-green-600">
                  <BadgeCheck className="h-3 w-3 mr-1" />
                  Done
                </span>
              ) : latestSection ? (
                <span className="inline-flex items-center text-xs text-amber-600">
                  <Clock className="h-3 w-3 mr-1" />
                  In Progress
                </span>
              ) : (
                <span className="text-xs text-muted-foreground">Not Started</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
