
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { BadgeCheck, Clock } from "lucide-react";

export const ChapterProgress = () => {
  const { chapterProgresses, isLoading, isChapterCompleted, getChapterLatestSection, calculateOverallProgress } = useChapterProgress();
  
  const progressPercentage = calculateOverallProgress();
  
  // Helper function to safely format dates
  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return "Not yet completed";
    
    try {
      const date = new Date(dateString);
      // Check if date is valid before formatting
      if (isNaN(date.getTime())) {
        return "Invalid date";
      }
      
      // Format: March 15, 2023 - 2:30 PM
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Date error";
    }
  };

  // Get section name for display
  const getSectionName = (sectionId: string) => {
    const sectionNames: Record<string, string> = {
      "arbitrage": "Market Arbitrage",
      "timeline": "Success Timeline",
      "myths": "Common Myths",
      "future": "Future Opportunities",
      "selfAssessment": "Self Assessment",
      "theorem": "Core Theorem",
      "awakening": "The Awakening",
      "revelation": "The Revelation",
      "decisionTree": "Decision Making Framework",
      "worksheet": "Interactive Worksheet"
    };
    
    return sectionNames[sectionId] || sectionId;
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
                    const completed = isChapterCompleted(chapter);
                    const latestSection = getChapterLatestSection(chapter);
                    
                    return (
                      <div key={chapter} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <h3 className="font-medium">Chapter {chapter}</h3>
                          {latestSection && (
                            <p className="text-xs text-gray-500 mt-1">
                              Last activity: {getSectionName(latestSection.section_id)}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center">
                          {completed ? (
                            <span className="inline-flex items-center text-sm text-green-600">
                              <BadgeCheck className="h-4 w-4 mr-1" />
                              Completed
                            </span>
                          ) : latestSection ? (
                            <span className="inline-flex items-center text-sm text-amber-600">
                              <Clock className="h-4 w-4 mr-1" />
                              In Progress
                            </span>
                          ) : (
                            <span className="text-sm text-gray-400">Not Started</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="responses">
                <div className="space-y-4">
                  {chapterProgresses?.length ? (
                    chapterProgresses.map((progress, index) => (
                      <Card key={`${progress.chapter_number}-${progress.section_id}-${index}`}>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">
                              Chapter {progress.chapter_number}
                            </h3>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {formatDate(progress.completed_at)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 font-medium">
                            {getSectionName(progress.section_id)}
                          </p>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-6 text-gray-500">
                      <p>No responses recorded yet. Start working on chapters to track your progress.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
