
import { useState } from "react";
import { BookOpen } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { Chapter1Display } from "@/components/submissions/Chapter1Display";
import { Chapter2Display } from "@/components/submissions/Chapter2Display";
import { Chapter4Display } from "@/components/submissions/Chapter4Display";
import { ChapterFilter } from "@/components/submissions/ChapterFilter";
import { GenericChapterDisplay } from "@/components/submissions/GenericChapterDisplay";

const MySubmissions = () => {
  const { chapterProgresses } = useChapterProgress();
  const [selectedChapter, setSelectedChapter] = useState<string>("all");

  const responsesByChapter = chapterProgresses?.reduce((acc, progress) => {
    if (!acc[progress.chapter_number]) {
      acc[progress.chapter_number] = [];
    }
    acc[progress.chapter_number].push(progress);
    return acc;
  }, {} as Record<number, typeof chapterProgresses>) || {};

  const chaptersToDisplay = selectedChapter === "all" 
    ? Object.keys(responsesByChapter)
        .map(Number)
        .sort((a, b) => a - b)
    : [parseInt(selectedChapter)];

  const getChapter4Data = () => {
    const chapter4Data = chapterProgresses?.find(
      (progress) => progress.chapter_number === 4 && progress.section_id === 'worksheet'
    );

    if (!chapter4Data?.response_data) return null;

    try {
      const responseData = chapter4Data.response_data as Record<string, any>;
      if (!responseData.worksheet || !responseData.worksheet.textInputs) return null;
      
      const textInputs = responseData.worksheet.textInputs;
      return {
        productNames: JSON.parse(textInputs.productNames || '{}'),
        profitsScores: JSON.parse(textInputs.profitsScores || '{}'),
        matchScores: JSON.parse(textInputs.matchScores || '{}'),
        finalScores: JSON.parse(textInputs.finalScores || '{}'),
        trinity: JSON.parse(textInputs.trinity || '{}'),
      };
    } catch (e) {
      console.error("Error parsing chapter 4 data:", e);
      return null;
    }
  };

  const chapter4ParsedData = getChapter4Data();

  return (
    <DashboardLayout title="My Chapter Submissions">
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-semibold">My Chapter Submissions</h1>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Review your submissions for all chapters. These responses are automatically saved.
        </p>

        <ChapterFilter
          chapters={Object.keys(responsesByChapter)}
          selectedChapter={selectedChapter}
          onChapterChange={setSelectedChapter}
        />

        <div className="space-y-8">
          {chaptersToDisplay.map(chapterNum => {
            if (chapterNum === 1) {
              return <Chapter1Display key={chapterNum} responses={responsesByChapter[1]} />;
            }
            if (chapterNum === 2) {
              return <Chapter2Display key={chapterNum} responses={responsesByChapter[2]} />;
            }
            if (chapterNum === 4) {
              return chapter4ParsedData ? (
                <Chapter4Display key={chapterNum} data={chapter4ParsedData} />
              ) : null;
            }
            return (
              <GenericChapterDisplay
                key={chapterNum}
                chapterNum={chapterNum}
                responses={responsesByChapter[chapterNum]}
              />
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MySubmissions;
