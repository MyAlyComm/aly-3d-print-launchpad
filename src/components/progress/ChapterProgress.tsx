
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useChapterProgress } from "@/hooks/useChapterProgress";

export const ChapterProgress = () => {
  const { chapterProgresses, isLoading } = useChapterProgress();
  
  const totalChapters = 3; // Total number of chapters in the course
  const completedChapters = chapterProgresses?.filter(p => p.completed_at)?.length || 0;
  const progressPercentage = (completedChapters / totalChapters) * 100;

  // Helper function to safely format dates
  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return "Not completed";
    
    try {
      const date = new Date(dateString);
      // Check if date is valid before formatting
      if (isNaN(date.getTime())) {
        return "Not completed";
      }
      return date.toLocaleDateString();
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Not completed";
    }
  };

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
                <div className="space-y-4">
                  {[1, 2, 3].map((chapter) => {
                    const isCompleted = chapterProgresses?.some(
                      (progress) => progress.chapter_number === chapter && progress.completed_at
                    );

                    return (
                      <div key={chapter} className="flex items-center justify-between">
                        <span className="text-sm">Chapter {chapter}</span>
                        <span className={`text-sm ${isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
                          {isCompleted ? 'Completed' : 'Not Started'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="responses">
                <div className="space-y-4">
                  {chapterProgresses?.map((progress) => (
                    <Card key={progress.chapter_number}>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-2">
                          Chapter {progress.chapter_number}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Section: {progress.section_id || 'Unknown Section'}
                        </p>
                        <p className="text-sm text-gray-600">
                          Completed: {formatDate(progress.completed_at)}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
