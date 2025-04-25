
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { ChapterProgressList } from "./ChapterProgressList";
import { UserResponses } from "./UserResponses";

export const ChapterProgress = () => {
  const { calculateOverallProgress } = useChapterProgress();
  const progressPercentage = calculateOverallProgress();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Overall Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} />
          </div>

          <div className="mt-6">
            <Tabs defaultValue="progress">
              <TabsList className="mb-4">
                <TabsTrigger value="progress">Chapter Progress</TabsTrigger>
                <TabsTrigger value="responses">Your Responses</TabsTrigger>
              </TabsList>

              <TabsContent value="progress">
                <ChapterProgressList />
              </TabsContent>

              <TabsContent value="responses">
                <UserResponses />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
