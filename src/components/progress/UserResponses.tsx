
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { formatDate, getSectionName, getQuestionText } from '@/utils/progressUtils';
import { useChapterProgress } from '@/hooks/useChapterProgress';

interface ResponseData {
  textInputs?: Record<string, string>;
  checkboxes?: Record<string, boolean>;
}

export const UserResponses = () => {
  const { chapterProgresses } = useChapterProgress();

  if (!chapterProgresses || chapterProgresses.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500">
        <p>No responses recorded yet. Start working on chapters to track your progress.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {chapterProgresses.map((progress) => {
        const responses = progress.response_data as Record<string, ResponseData>;
        
        return Object.entries(responses).map(([sectionId, sectionData]) => {
          if (!sectionData.textInputs && !sectionData.checkboxes) return null;
          
          return (
            <Card key={`${progress.chapter_number}-${sectionId}`}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Chapter {progress.chapter_number}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {getSectionName(sectionId)}
                    </p>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {formatDate(progress.completed_at)}
                  </span>
                </div>
                
                {sectionData.textInputs && (
                  <div className="mt-4">
                    <Table>
                      <TableBody>
                        {Object.entries(sectionData.textInputs).map(([questionId, answer]) => (
                          <TableRow key={questionId}>
                            <TableCell className="align-top font-medium w-1/3">
                              {getQuestionText(questionId)}
                            </TableCell>
                            <TableCell>{answer}</TableCell>
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
