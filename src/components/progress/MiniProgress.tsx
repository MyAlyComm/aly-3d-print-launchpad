
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { BadgeCheck, Clock } from "lucide-react";

export const MiniProgress = ({ currentChapter }: { currentChapter: number }) => {
  const { calculateOverallProgress, isChapterCompleted, getChapterLatestSection } = useChapterProgress();
  
  const progressPercentage = calculateOverallProgress();
  const isCurrentChapterCompleted = isChapterCompleted(currentChapter);
  const latestSection = getChapterLatestSection(currentChapter);

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Course Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} />
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Chapter {currentChapter} of 3
            </p>
            <p className="text-sm flex items-center">
              {isCurrentChapterCompleted ? (
                <span className="text-green-600 flex items-center">
                  <BadgeCheck className="h-4 w-4 mr-1" />
                  Completed
                </span>
              ) : latestSection ? (
                <span className="text-amber-600 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  In Progress
                </span>
              ) : (
                <span className="text-gray-400">Not Started</span>
              )}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
