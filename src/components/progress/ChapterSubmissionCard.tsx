import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { chapterQuestions } from "@/utils/chapterQuestions";
import { ResponseData } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { Pencil, Save } from "lucide-react";
import { toast } from "sonner";

interface ChapterSubmissionCardProps {
  chapterNumber: number;
  title: string;
  responses?: Record<string, ResponseData>;
}

export const ChapterSubmissionCard = ({ chapterNumber, title, responses }: ChapterSubmissionCardProps) => {
  const questions = chapterQuestions[chapterNumber] || [];
  const [editMode, setEditMode] = useState(false);
  const [editedResponses, setEditedResponses] = useState<Record<string, string>>({});
  const { updateProgress } = useChapterProgress();

  const handleEditToggle = () => {
    if (editMode) {
      setEditMode(false);
      setEditedResponses({});
    } else {
      const initialValues: Record<string, string> = {};
      
      questions.forEach((q) => {
        const currentResponse = responses?.[q.section]?.textInputs?.[q.id];
        if (currentResponse) {
          initialValues[q.id] = currentResponse;
        }
      });
      
      setEditedResponses(initialValues);
      setEditMode(true);
    }
  };

  const handleInputChange = (questionId: string, value: string) => {
    setEditedResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSaveChanges = async () => {
    if (!editMode) return;

    try {
      const sectionData: Record<string, any> = {};
      
      questions.forEach((q) => {
        if (!sectionData[q.section]) {
          sectionData[q.section] = {
            textInputs: {},
            checkboxes: responses?.[q.section]?.checkboxes || {}
          };
        }
        
        if (editedResponses[q.id] !== undefined) {
          sectionData[q.section].textInputs[q.id] = editedResponses[q.id];
        } else if (responses?.[q.section]?.textInputs?.[q.id]) {
          sectionData[q.section].textInputs[q.id] = responses[q.section].textInputs[q.id];
        }
      });

      for (const [sectionId, responseData] of Object.entries(sectionData)) {
        await updateProgress.mutateAsync({
          chapterNumber,
          sectionId,
          responseData: {
            [sectionId]: responseData
          }
        });
      }
      
      setEditMode(false);
      toast.success("Responses updated successfully");
    } catch (error) {
      console.error("Error saving responses:", error);
      toast.error("Failed to update responses");
    }
  };

  if (questions.length === 0) return null;

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">
            {chapterNumber === 0 ? "Introduction" : `Chapter ${chapterNumber}: ${title}`}
          </CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleEditToggle}
            className="flex items-center gap-1"
          >
            {editMode ? (
              <>Cancel</>
            ) : (
              <>
                <Pencil className="h-4 w-4" />
                <span>Edit</span>
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {questions.map((q) => {
            const response = responses?.[q.section]?.textInputs?.[q.id];
            const editedResponse = editedResponses[q.id];
            const displayResponse = editMode ? editedResponse : response;
            const hasResponse = !!response;

            return (
              <div key={q.id} className="border-b pb-4 last:border-b-0">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {q.question}
                </p>
                {editMode ? (
                  q.question.length > 100 ? (
                    <Textarea
                      value={editedResponse || ""}
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                      placeholder="Enter your response..."
                      rows={3}
                      className="w-full"
                    />
                  ) : (
                    <Input
                      value={editedResponse || ""}
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                      placeholder="Enter your response..."
                      className="w-full"
                    />
                  )
                ) : hasResponse ? (
                  <p className="text-sm bg-muted/50 p-3 rounded-md">
                    {displayResponse}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    No response submitted
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
      {editMode && (
        <CardFooter>
          <Button 
            onClick={handleSaveChanges} 
            className="ml-auto flex items-center gap-1"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
