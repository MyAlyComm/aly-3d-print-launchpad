
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Clock } from "lucide-react";
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
    <Card className="bg-card hover:bg-accent/5 transition-colors">
      <CardContent className="pt-4 px-4 pb-3">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-sm font-semibold">
              {chapterNumber === 0 ? 'Introduction' : `Chapter ${chapterNumber}`}: {getSectionName(sectionId)}
            </h3>
            <p className="text-xs text-muted-foreground">
              {chapterTitle}
            </p>
          </div>
          <div className="flex items-center text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
            <Clock className="h-3 w-3 mr-1" />
            {formatDate(completedAt)}
          </div>
        </div>
        
        {sectionData.textInputs && Object.keys(sectionData.textInputs).length > 0 && (
          <div className="mt-3">
            <Table>
              <TableBody>
                {Object.entries(sectionData.textInputs)
                  .filter(([_, answer]) => answer && answer.trim() !== '')
                  .map(([questionId, answer]) => (
                    <TableRow key={questionId} className="border-b last:border-b-0">
                      <TableCell className="align-top font-medium text-xs text-muted-foreground py-2 pl-0">
                        {getQuestionText(questionId)}
                      </TableCell>
                      <TableCell className="whitespace-pre-wrap text-xs py-2">
                        {answer}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        )}

        {sectionData.checkboxes && Object.keys(sectionData.checkboxes).length > 0 && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            {Object.entries(sectionData.checkboxes)
              .filter(([_, checked]) => checked)
              .map(([checkboxId]) => (
                <div key={checkboxId} className="text-xs">
                  • {getQuestionText(checkboxId)}
                </div>
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
