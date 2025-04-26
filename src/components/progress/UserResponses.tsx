
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { formatDate, getSectionName, getQuestionText } from '@/utils/progressUtils';
import { useChapterProgress } from '@/hooks/useChapterProgress';

interface ResponseData {
  textInputs?: Record<string, string>;
  checkboxes?: Record<string, boolean>;
}

const getChapterTitle = (chapterNumber: number) => {
  const titles = {
    0: "Introduction: The Opportunity",
    1: "Arbitrage Windows",
    2: "Knowing Yourself, Knowing Your Tools",
    3: "The 3 Plus 1 Equals 40 System",
    4: "The Product Trinity",
    5: "Choosing Your Production Tools",
    6: "Selecting Your Selling Platforms",
    7: "Setting Up for Success",
    8: "Zero-Cost Marketing That Works",
    9: "Scaling Beyond $5K",
    10: "Future-Proofing Your Business"
  };
  return titles[chapterNumber as keyof typeof titles] || `Chapter ${chapterNumber}`;
};

export const UserResponses = () => {
  const { chapterProgresses } = useChapterProgress();

  if (!chapterProgresses || chapterProgresses.length === 0) {
    return (
      <div className="text-center py-6 text-muted-foreground">
        <p>Start with the Introduction chapter to begin tracking your progress.</p>
      </div>
    );
  }

  // Sort responses by chapter number and completion date
  const sortedResponses = [...chapterProgresses].sort((a, b) => {
    if (a.chapter_number === b.chapter_number) {
      return new Date(b.completed_at || 0).getTime() - new Date(a.completed_at || 0).getTime();
    }
    return a.chapter_number - b.chapter_number;
  });

  return (
    <div className="space-y-6">
      {sortedResponses.map((progress) => {
        // Safely handle the case where response_data might be undefined
        const responses = progress.response_data as Record<string, ResponseData> || {};
        
        // Only process if we have valid response data
        if (Object.keys(responses).length === 0) return null;
        
        return Object.entries(responses).map(([sectionId, sectionData]) => {
          // Skip if section data or its properties are not available
          if (!sectionData || (!sectionData.textInputs && !sectionData.checkboxes)) return null;
          
          return (
            <Card key={`${progress.chapter_number}-${sectionId}`} className="bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {progress.chapter_number === 0 ? 'Introduction' : `Chapter ${progress.chapter_number}`}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-muted-foreground font-medium">
                        {getChapterTitle(progress.chapter_number)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {getSectionName(sectionId)}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full">
                    {formatDate(progress.completed_at)}
                  </span>
                </div>
                
                {sectionData.textInputs && Object.keys(sectionData.textInputs).length > 0 && (
                  <div className="mt-4">
                    <Table>
                      <TableBody>
                        {Object.entries(sectionData.textInputs).map(([questionId, answer]) => (
                          <TableRow key={questionId}>
                            <TableCell className="align-top font-medium w-1/3">
                              {getQuestionText(questionId)}
                            </TableCell>
                            <TableCell className="whitespace-pre-wrap">{answer}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        }).filter(Boolean);
      })}
    </div>
  );
};
