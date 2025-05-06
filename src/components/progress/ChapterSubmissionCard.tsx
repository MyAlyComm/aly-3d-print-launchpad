
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { chapterQuestions } from "@/utils/chapterQuestions";
import { ResponseData } from "./types";

interface ChapterSubmissionCardProps {
  chapterNumber: number;
  title: string;
  responses?: Record<string, ResponseData>;
}

export const ChapterSubmissionCard = ({ chapterNumber, title, responses }: ChapterSubmissionCardProps) => {
  const questions = chapterQuestions[chapterNumber] || [];

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {chapterNumber === 0 ? "Introduction" : `Chapter ${chapterNumber}: ${title}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {questions.map((q) => {
            const response = responses?.[q.section]?.textInputs?.[q.id];
            const hasResponse = !!response;

            return (
              <div key={q.id} className="border-b pb-4 last:border-b-0">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {q.question}
                </p>
                {hasResponse ? (
                  <p className="text-sm bg-muted/50 p-3 rounded-md">
                    {response}
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
    </Card>
  );
};
