
import { useChapterProgress } from '@/hooks/useChapterProgress';
import { EmptyResponses } from './EmptyResponses';
import { ChapterSubmissionCard } from './ChapterSubmissionCard';
import { chapters } from '@/components/dashboard/chapters/types';
import { useState } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export const UserResponses = () => {
  const { chapterProgresses } = useChapterProgress();
  const [filterChapter, setFilterChapter] = useState<string>("all");

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
  
  // Filter chapters if needed
  const chaptersToDisplay = filterChapter === "all" 
    ? allChapters 
    : [parseInt(filterChapter)];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Your Chapter Submissions</h2>
        
        <div className="w-full sm:w-auto min-w-[200px]">
          <Label htmlFor="filter-chapter" className="sr-only">Filter by chapter</Label>
          <Select 
            value={filterChapter} 
            onValueChange={setFilterChapter}
          >
            <SelectTrigger id="filter-chapter" className="w-full">
              <SelectValue placeholder="Filter by chapter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Chapters</SelectItem>
              <SelectItem value="0">Introduction</SelectItem>
              {Array.from({ length: 11 }, (_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  Chapter {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {chaptersToDisplay.map((chapterNum) => {
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
