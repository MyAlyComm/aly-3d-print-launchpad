
import React from 'react';
import { useChapterProgress } from '@/hooks/useChapterProgress';
import { EmptyResponses } from './EmptyResponses';
import { ResponseCard } from './ResponseCard';
import { getChapterTitle } from './ChapterTitles';

interface ResponseData {
  textInputs?: Record<string, string>;
  checkboxes?: Record<string, boolean>;
}

export const UserResponses = () => {
  const { chapterProgresses } = useChapterProgress();

  if (!chapterProgresses || chapterProgresses.length === 0) {
    return <EmptyResponses />;
  }

  // Sort responses by chapter number and completion date
  const sortedResponses = [...chapterProgresses].sort((a, b) => {
    if (a.chapter_number === b.chapter_number) {
      return new Date(b.completed_at || 0).getTime() - new Date(a.completed_at || 0).getTime();
    }
    return a.chapter_number - b.chapter_number;
  });

  return (
    <div className="space-y-6">
      {sortedResponses.map((progress) => {
        const responses = progress.response_data as Record<string, ResponseData> || {};
        
        if (Object.keys(responses).length === 0) return null;
        
        return Object.entries(responses).map(([sectionId, sectionData]) => {
          if (!sectionData || (!sectionData.textInputs && !sectionData.checkboxes)) return null;
          
          return (
            <ResponseCard
              key={`${progress.chapter_number}-${sectionId}`}
              chapterNumber={progress.chapter_number}
              sectionId={sectionId}
              sectionData={sectionData}
              completedAt={progress.completed_at}
              chapterTitle={getChapterTitle(progress.chapter_number)}
            />
          );
        }).filter(Boolean);
      })}
    </div>
  );
};
