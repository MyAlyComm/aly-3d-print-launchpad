
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate, formatSectionId } from "@/utils/progressUtils";

interface GenericChapterDisplayProps {
  chapterNum: number;
  responses: any[];
}

export const GenericChapterDisplay = ({ chapterNum, responses }: GenericChapterDisplayProps) => {
  if (!responses || responses.length === 0) return null;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {chapterNum === 0 ? "Introduction" : `Chapter ${chapterNum}`} Responses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {responses.map(response => {
            if (response.section_id === 'worksheet') {
              return (
                <div key={`${chapterNum}-worksheet`} className="border p-4 rounded-md">
                  <h3 className="font-medium mb-2">Worksheet Responses</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Completed on {formatDate(response.completed_at)}
                  </p>
                  <p>View the full responses in the chapter worksheet section.</p>
                </div>
              );
            }
            
            return (
              <div key={response.section_id} className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">{formatSectionId(response.section_id)}</h3>
                <p className="text-sm text-muted-foreground">
                  Completed on {formatDate(response.completed_at)}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
