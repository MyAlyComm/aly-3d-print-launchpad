
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate, formatSectionId } from "@/utils/progressUtils";

interface Chapter1DisplayProps {
  responses: any[];
}

export const Chapter1Display = ({ responses }: Chapter1DisplayProps) => {
  if (!responses?.length) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chapter 1: Getting Started</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {responses.map(response => (
            <div key={response.section_id} className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">{formatSectionId(response.section_id)}</h3>
              <p className="text-sm text-muted-foreground">
                Completed on {formatDate(response.completed_at)}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
