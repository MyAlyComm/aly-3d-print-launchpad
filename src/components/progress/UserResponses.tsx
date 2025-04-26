
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

  // Check if we have any responses
  if (!chapterProgresses || chapterProgresses.length === 0) {
    return <EmptyResponses />;
  }

  // Sort responses by chapter number (ascending) and completion date (newest first within each chapter)
  const sortedResponses = [...chapterProgresses].sort((a, b) => {
    if (a.chapter_number === b.chapter_number) {
      return new Date(b.completed_at || 0).getTime() - new Date(a.completed_at || 0).getTime();
    }
    return a.chapter_number - b.chapter_number;
  });

  // Filter out responses with no actual content
  const hasContent = (data: Record<string, ResponseData> | undefined) => {
    if (!data) return false;
    return Object.values(data).some(
      section => 
        (section.textInputs && Object.keys(section.textInputs).length > 0) || 
        (section.checkboxes && Object.keys(section.checkboxes).length > 0)
    );
  };

  const responsesWithContent = sortedResponses.filter(progress => 
    hasContent(progress.response_data as Record<string, ResponseData>)
  );

  if (responsesWithContent.length === 0) {
    return <EmptyResponses />;
  }

  return (
    <div className="space-y-6 max-h-[200px] overflow-y-auto pr-1">
      {responsesWithContent.map((progress) => {
        const responses = progress.response_data as Record<string, ResponseData> || {};
        
        return Object.entries(responses).map(([sectionId, sectionData]) => {
          if (!sectionData || (!sectionData.textInputs && !sectionData.checkboxes)) return null;
          
          // Skip sections with no actual content
          const hasTextInputs = sectionData.textInputs && Object.keys(sectionData.textInputs).length > 0;
          const hasCheckboxes = sectionData.checkboxes && Object.keys(sectionData.checkboxes).length > 0;
          
          if (!hasTextInputs && !hasCheckboxes) return null;
          
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
