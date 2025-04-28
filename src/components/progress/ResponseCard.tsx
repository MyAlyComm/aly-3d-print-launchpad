import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ResponseCardProps {
  chapterNumber: number;
  title: string;
  responses?: Record<string, any>;
}

// Function to format keys (e.g., 'firstName' becomes 'First Name')
const formatKey = (key: string): string => {
  const result = key.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const ChapterSubmissionCard = ({
  chapterNumber,
  title,
  responses,
}: ResponseCardProps) => {
  if (!responses || Object.keys(responses).length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Chapter {chapterNumber}: {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(responses).map(([sectionId, sectionData]) => (
          <div key={sectionId} className="space-y-4 border border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-semibold">Section: {formatKey(sectionId)}</h3>
            {sectionData && (
              <>
                {sectionData.checkboxes && Object.keys(sectionData.checkboxes).length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-md font-medium">Checkboxes:</h4>
                    <div className="pl-4">
                      {Object.entries(sectionData.checkboxes).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-2">
                          <Checkbox id={`checkbox-${sectionId}-${key}`} checked={value} disabled />
                          <Label htmlFor={`checkbox-${sectionId}-${key}`}>{formatKey(key)}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {sectionData.textInputs && Object.keys(sectionData.textInputs).length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-md font-medium">Text Inputs:</h4>
                    <div className="pl-4 space-y-2">
                      {Object.entries(sectionData.textInputs).map(([key, value]) => (
                        <div key={key} className="space-y-2">
                          <Label>{formatKey(key)}</Label>
                          {typeof value === 'string' ? (
                            <div className="text-sm">{value}</div>
                          ) : (
                            <div className="text-sm">{JSON.stringify(value)}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
