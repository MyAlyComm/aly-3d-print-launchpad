
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContinueLearning } from "./chapters/ContinueLearning";
import { ProgressHeader } from "./chapters/ProgressHeader";
import { ChapterGroup } from "./chapters/ChapterGroup";
import { chapters } from "./chapters/types";

export const ChaptersList = () => {
  const { isChapterCompleted, calculateOverallProgress } = useChapterProgress();
  const progress = calculateOverallProgress();

  // Find the next chapter to complete
  const findNextChapterToComplete = () => {
    for (let i = 0; i <= 11; i++) {
      if (!isChapterCompleted(i)) {
        return i;
      }
    }
    return 0;
  };

  const nextChapter = findNextChapterToComplete();
  
  // Group chapters for tab display
  const beginnerChapters = chapters.filter(c => c.number >= 0 && c.number <= 3);
  const intermediateChapters = chapters.filter(c => c.number >= 4 && c.number <= 7);
  const advancedChapters = chapters.filter(c => c.number >= 8 && c.number <= 11);

  return (
    <div>
      <ProgressHeader progress={progress} />
      <ContinueLearning nextChapter={nextChapter} />
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Chapters</TabsTrigger>
          <TabsTrigger value="beginner">Beginner (0-3)</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate (4-7)</TabsTrigger>
          <TabsTrigger value="advanced">Advanced (8-11)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <ChapterGroup chapters={chapters} isChapterCompleted={isChapterCompleted} />
        </TabsContent>
        
        <TabsContent value="beginner" className="mt-0">
          <ChapterGroup chapters={beginnerChapters} isChapterCompleted={isChapterCompleted} />
        </TabsContent>
        
        <TabsContent value="intermediate" className="mt-0">
          <ChapterGroup chapters={intermediateChapters} isChapterCompleted={isChapterCompleted} />
        </TabsContent>
        
        <TabsContent value="advanced" className="mt-0">
          <ChapterGroup chapters={advancedChapters} isChapterCompleted={isChapterCompleted} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
