
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatAssessmentValue } from "@/utils/progressUtils";

interface Chapter2DisplayProps {
  responses: any[];
}

export const Chapter2Display = ({ responses }: Chapter2DisplayProps) => {
  if (!responses?.length) return null;

  const worksheetResponse = responses.find(r => r.section_id === 'worksheet');
  if (!worksheetResponse?.response_data?.assessment?.textInputs) {
    return null;
  }

  const textInputs = worksheetResponse.response_data.assessment.textInputs;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chapter 2: Self-Assessment Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">Budget</h3>
              <p>{formatAssessmentValue(textInputs.budget)}</p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">Experience Level</h3>
              <p>{formatAssessmentValue(textInputs.experience)}</p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">Time Availability</h3>
              <p>{formatAssessmentValue(textInputs.timeAvailable)}</p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">Market Focus</h3>
              <p>{formatAssessmentValue(textInputs.locationType)}</p>
            </div>
          </div>
          
          {textInputs.skills && (
            <div className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {textInputs.skills.split(',').map((skill: string) => (
                  <span key={skill} className="bg-primary/10 text-primary px-2 py-1 text-sm rounded">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {(textInputs.advantages || textInputs.challenges || textInputs.markets) && (
            <div className="border p-4 rounded-md space-y-4">
              {textInputs.advantages && (
                <div>
                  <h3 className="font-medium mb-1">Advantages</h3>
                  <p className="text-sm">{textInputs.advantages}</p>
                </div>
              )}
              {textInputs.challenges && (
                <div>
                  <h3 className="font-medium mb-1">Challenges</h3>
                  <p className="text-sm">{textInputs.challenges}</p>
                </div>
              )}
              {textInputs.markets && (
                <div>
                  <h3 className="font-medium mb-1">Target Markets</h3>
                  <p className="text-sm">{textInputs.markets}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
