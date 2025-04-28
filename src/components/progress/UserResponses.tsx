
import { useChapterProgress } from '@/hooks/useChapterProgress';
import { EmptyResponses } from './EmptyResponses';
import { ChapterSubmissionCard } from './ChapterSubmissionCard';
import { chapters } from '@/components/dashboard/chapters/types';

export const UserResponses = () => {
  const { chapterProgresses } = useChapterProgress();

  if (!chapterProgresses || chapterProgresses.length === 0) {
    return <EmptyResponses />;
  }

  // Group responses by chapter
  const responsesByChapter = chapterProgresses.reduce((acc, progress) => {
    if (!acc[progress.chapter_number]) {
      acc[progress.chapter_number] = {};
    }
    acc[progress.chapter_number][progress.section_id] = {
      checkboxes: progress.response_data?.[progress.section_id]?.checkboxes || {},
      textInputs: progress.response_data?.[progress.section_id]?.textInputs || {},
    };
    return acc;
  }, {} as Record<number, Record<string, any>>);

  // Create array of chapter numbers from 0 to 11 (Introduction + 11 chapters)
  const allChapters = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="space-y-6">
      {allChapters.map((chapterNum) => {
        const chapter = chapters.find(c => c.number === chapterNum);
        if (!chapter) return null;

        return (
          <ChapterSubmissionCard
            key={chapterNum}
            chapterNumber={chapterNum}
            title={chapter.title}
            responses={responsesByChapter[chapterNum]}
          />
        );
      })}
    </div>
  );
};
