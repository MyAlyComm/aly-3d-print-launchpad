
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { formatDate, getSectionName, getQuestionText } from '@/utils/progressUtils';

interface ResponseData {
  textInputs?: Record<string, string>;
  checkboxes?: Record<string, boolean>;
}

interface ResponseCardProps {
  chapterNumber: number;
  sectionId: string;
  sectionData: ResponseData;
  completedAt: string | null;
  chapterTitle: string;
}

export const ResponseCard = ({ 
  chapterNumber, 
  sectionId, 
  sectionData, 
  completedAt,
  chapterTitle 
}: ResponseCardProps) => {
  return (
    <Card className="bg-card">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">
              {chapterNumber === 0 ? 'Introduction' : `Chapter ${chapterNumber}`}
            </h3>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-muted-foreground font-medium">
                {chapterTitle}
              </p>
              <p className="text-sm text-muted-foreground">
                {getSectionName(sectionId)}
              </p>
            </div>
          </div>
          <span className="text-xs bg-muted px-2 py-1 rounded-full">
            {formatDate(completedAt)}
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
};
