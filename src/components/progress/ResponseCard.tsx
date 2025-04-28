
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Clock } from "lucide-react";
import { 
  formatDate, 
  getSectionName, 
  getQuestionText, 
  parseJsonResponse,
  getAssessmentSelectionLabel,
  formatFrameworkScore 
} from '@/utils/progressUtils';
import { Badge } from '@/components/ui/badge';

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
  // Helper to check if a value is a JSON string
  const isJsonString = (str: string): boolean => {
    try {
      const json = JSON.parse(str);
      return typeof json === 'object' && json !== null;
    } catch (e) {
      return false;
    }
  };

  // Special rendering for Chapter 2 assessment section
  const renderChapter2Assessment = (data: ResponseData) => {
    if (!data.textInputs) return null;
    
    const fields = [
      { key: 'budget', label: 'Budget Level' },
      { key: 'experience', label: 'Experience Level' },
      { key: 'timeAvailable', label: 'Time Available' },
      { key: 'locationType', label: 'Target Market' },
      { key: 'skills', label: 'Selected Skills' },
      { key: 'country', label: 'Country/Region' },
      { key: 'advantages', label: 'Key Advantages' },
      { key: 'challenges', label: 'Key Challenges' },
      { key: 'markets', label: 'Target Markets' }
    ];
    
    return (
      <Table>
        <TableBody>
          {fields.map(field => {
            const value = data.textInputs?.[field.key];
            if (!value) return null;
            
            // Special handling for skills which is comma-separated
            if (field.key === 'skills') {
              const skills = value.split(',').filter(Boolean);
              return (
                <TableRow key={field.key}>
                  <TableCell className="align-top font-medium text-xs text-muted-foreground py-2 pl-0">
                    {field.label}
                  </TableCell>
                  <TableCell className="py-2">
                    <div className="flex flex-wrap gap-1">
                      {skills.map(skill => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              );
            }
            
            // Special handling for selection fields
            if (['budget', 'experience', 'timeAvailable', 'locationType'].includes(field.key)) {
              return (
                <TableRow key={field.key}>
                  <TableCell className="align-top font-medium text-xs text-muted-foreground py-2 pl-0">
                    {field.label}
                  </TableCell>
                  <TableCell className="py-2 text-xs">
                    {getAssessmentSelectionLabel(field.key, value)}
                  </TableCell>
                </TableRow>
              );
            }
            
            return (
              <TableRow key={field.key}>
                <TableCell className="align-top font-medium text-xs text-muted-foreground py-2 pl-0">
                  {field.label}
                </TableCell>
                <TableCell className="whitespace-pre-wrap text-xs py-2">
                  {value}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  };
  
  // Special rendering for Chapter 4 product worksheet
  const renderChapter4Worksheet = (data: ResponseData) => {
    if (!data.textInputs) return null;
    
    // Check for product assessment data
    const productNames = data.textInputs.productNames && isJsonString(data.textInputs.productNames) 
      ? parseJsonResponse(data.textInputs.productNames) 
      : null;
      
    const finalScores = data.textInputs.finalScores && isJsonString(data.textInputs.finalScores) 
      ? parseJsonResponse(data.textInputs.finalScores) 
      : null;
      
    const trinity = data.textInputs.trinity && isJsonString(data.textInputs.trinity) 
      ? parseJsonResponse(data.textInputs.trinity) 
      : null;
    
    if (!productNames || !finalScores) return null;
    
    return (
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Product Evaluations</h4>
          <Table>
            <TableBody>
              {Object.entries(productNames).map(([key, name]) => (
                <TableRow key={key}>
                  <TableCell className="align-top font-medium text-xs text-muted-foreground py-2 pl-0">
                    {name || `Product ${key.replace('product', '')}`}
                  </TableCell>
                  <TableCell className="py-2 text-xs">
                    Score: {formatFrameworkScore(finalScores[key])}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {trinity && (
          <div>
            <h4 className="text-sm font-medium mt-4 mb-2">Product Trinity</h4>
            <Table>
              <TableBody>
                {trinity.safeBet && (
                  <TableRow>
                    <TableCell className="align-top font-medium text-xs text-muted-foreground py-2 pl-0">
                      Safe Bet
                    </TableCell>
                    <TableCell className="py-2 text-xs">{trinity.safeBet}</TableCell>
                  </TableRow>
                )}
                {trinity.profitMaximizer && (
                  <TableRow>
                    <TableCell className="align-top font-medium text-xs text-muted-foreground py-2 pl-0">
                      Profit Maximizer
                    </TableCell>
                    <TableCell className="py-2 text-xs">{trinity.profitMaximizer}</TableCell>
                  </TableRow>
                )}
                {trinity.strengthShowcase && (
                  <TableRow>
                    <TableCell className="align-top font-medium text-xs text-muted-foreground py-2 pl-0">
                      Strength Showcase
                    </TableCell>
                    <TableCell className="py-2 text-xs">{trinity.strengthShowcase}</TableCell>
                  </TableRow>
                )}
                {trinity.plusOne && (
                  <TableRow>
                    <TableCell className="align-top font-medium text-xs text-muted-foreground py-2 pl-0">
                      Plus One Innovation
                    </TableCell>
                    <TableCell className="whitespace-pre-wrap text-xs py-2">{trinity.plusOne}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    );
  };

  // Render standard text inputs and checkboxes
  const renderStandardInputs = (data: ResponseData) => {
    const hasInputs = data.textInputs && Object.keys(data.textInputs).length > 0;
    const hasChecks = data.checkboxes && Object.keys(data.checkboxes).length > 0;
    
    if (!hasInputs && !hasChecks) return <p className="text-sm italic">No responses recorded</p>;
    
    return (
      <>
        {hasInputs && (
          <div className="mt-3">
            <Table>
              <TableBody>
                {Object.entries(data.textInputs!)
                  // Skip known JSON fields that are handled separately
                  .filter(([key, _]) => !['productNames', 'profitsScores', 'matchScores', 'finalScores', 'trinity'].includes(key))
                  .filter(([_, answer]) => answer && answer.trim() !== '' && !isJsonString(answer))
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

        {hasChecks && (
          <div className="mt-3">
            <h4 className="text-xs font-medium mb-2">Completed Items:</h4>
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(data.checkboxes!)
                .filter(([_, checked]) => checked)
                .map(([checkboxId]) => (
                  <div key={checkboxId} className="text-xs flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {getQuestionText(checkboxId)}
                  </div>
                ))}
            </div>
          </div>
        )}
      </>
    );
  };

  // Special rendering based on chapter and section
  const renderSectionContent = () => {
    // Special rendering for Chapter 2 assessment
    if (chapterNumber === 2 && sectionId === 'worksheet') {
      return renderChapter2Assessment(sectionData);
    }
    
    // Special rendering for Chapter 4 product worksheet
    if (chapterNumber === 4 && sectionId === 'worksheet') {
      return renderChapter4Worksheet(sectionData);
    }

    // Standard rendering for other sections
    return renderStandardInputs(sectionData);
  };

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
        
        {renderSectionContent()}
      </CardContent>
    </Card>
  );
};
