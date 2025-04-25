
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { useChapterProgress } from "@/hooks/useChapterProgress";

export const MiniProgress = ({ currentChapter }: { currentChapter: number }) => {
  const { chapterProgresses } = useChapterProgress();
  
  const totalChapters = 3;
  const completedChapters = chapterProgresses?.length || 0;
  const progressPercentage = (completedChapters / totalChapters) * 100;

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Course Progress</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} />
          <p className="text-sm text-gray-500 mt-2">
            Currently on Chapter {currentChapter} of {totalChapters}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
