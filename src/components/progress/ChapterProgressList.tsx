
import React from 'react';
import { BadgeCheck, Clock } from "lucide-react";
import { getSectionName } from '@/utils/progressUtils';
import { useChapterProgress } from '@/hooks/useChapterProgress';
import { Card } from "@/components/ui/card";

export const ChapterProgressList = () => {
  const { isChapterCompleted, getChapterLatestSection } = useChapterProgress();

  const chapterTitles = {
    0: "Introduction: The Opportunity",
    1: "Arbitrage Windows",
    2: "Knowing Yourself, Knowing Your Tools",
    3: "The 3 Plus 1 Equals 40 System",
    4: "The Product Trinity",
    5: "Choosing Your Production Tools",
    6: "Selecting Your Selling Platforms",
    7: "Setting Up for Success",
    8: "Zero-Cost Marketing That Works",
    9: "Scaling Beyond $5K",
    10: "Future-Proofing Your Business"
  };

  return (
    <div className="space-y-2">
      {Object.entries(chapterTitles).map(([chapter, title]) => {
        const chapterNumber = parseInt(chapter);
        const completed = isChapterCompleted(chapterNumber);
        const latestSection = getChapterLatestSection(chapterNumber);
        
        return (
          <Card
            key={chapter} 
            className="p-3 hover:bg-accent/5 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  {chapterNumber === 0 ? 'Introduction' : `Chapter ${chapter}`}
                  {latestSection && (
                    <span className="text-xs text-muted-foreground ml-2">
                      - {getSectionName(latestSection.section_id)}
                    </span>
                  )}
                </p>
                <p className="text-xs text-muted-foreground truncate">{title}</p>
              </div>
              <div className="flex items-center">
                {completed ? (
                  <span className="inline-flex items-center text-xs text-green-600">
                    <BadgeCheck className="h-3 w-3 mr-1" />
                    Complete
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
          </Card>
        );
      })}
    </div>
  );
};
