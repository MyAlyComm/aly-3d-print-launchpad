
import React from 'react';
import { BadgeCheck, Clock } from "lucide-react";
import { getSectionName } from '@/utils/progressUtils';
import { useChapterProgress } from '@/hooks/useChapterProgress';

export const ChapterProgressList = () => {
  const { isChapterCompleted, getChapterLatestSection } = useChapterProgress();

  return (
    <div className="space-y-4">
      {[1, 2, 3].map((chapter) => {
        const completed = isChapterCompleted(chapter);
        const latestSection = getChapterLatestSection(chapter);
        
        return (
          <div key={chapter} className="flex items-center justify-between p-3 border rounded-md">
            <div>
              <h3 className="font-medium">Chapter {chapter}</h3>
              {latestSection && (
                <p className="text-xs text-gray-500 mt-1">
                  Last activity: {getSectionName(latestSection.section_id)}
                </p>
              )}
            </div>
            <div className="flex items-center">
              {completed ? (
                <span className="inline-flex items-center text-sm text-green-600">
                  <BadgeCheck className="h-4 w-4 mr-1" />
                  Completed
                </span>
              ) : latestSection ? (
                <span className="inline-flex items-center text-sm text-amber-600">
                  <Clock className="h-4 w-4 mr-1" />
                  In Progress
                </span>
              ) : (
                <span className="text-sm text-gray-400">Not Started</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
