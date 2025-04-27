
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { ChapterProgressList } from "./ChapterProgressList";
import { UserResponses } from "./UserResponses";
import { BarChart3, FileText } from "lucide-react";
import { ProgressRewards } from "@/components/gamification/ProgressRewards";

export const ChapterProgress = () => {
  const { calculateOverallProgress } = useChapterProgress();
  const progressPercentage = calculateOverallProgress();
  
  return (
    <Card className="bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ProgressRewards />
          
          <div>
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Overall Completion</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          <Tabs defaultValue="progress" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="progress" className="flex-1">
                <BarChart3 className="h-4 w-4 mr-2" />
                <span>Progress</span>
              </TabsTrigger>
              <TabsTrigger value="responses" className="flex-1">
                <FileText className="h-4 w-4 mr-2" />
                <span>Responses</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="progress" className="mt-2">
              <ChapterProgressList />
            </TabsContent>

            <TabsContent value="responses" className="mt-2">
              <UserResponses />
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};
