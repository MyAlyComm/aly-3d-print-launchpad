
import { Textarea } from "@/components/ui/textarea";

interface ImprovementSectionProps {
  values: {
    first: string;
    second: string;
    third: string;
    plan: string;
  };
  onTextChange: (field: string, value: string) => void;
}

export const ImprovementSection = ({ values, onTextChange }: ImprovementSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Areas for Improvement</h3>
      
      <div>
        <label className="block mb-2">First improvement needed:</label>
        <Textarea
          value={values.first}
          onChange={(e) => onTextChange("first", e.target.value)}
          placeholder="Describe the first improvement you need to make..."
          className="mb-4"
        />
      </div>
      
      <div>
        <label className="block mb-2">Second improvement needed:</label>
        <Textarea
          value={values.second}
          onChange={(e) => onTextChange("second", e.target.value)}
          placeholder="Describe the second improvement you need to make..."
          className="mb-4"
        />
      </div>
      
      <div>
        <label className="block mb-2">Third improvement needed:</label>
        <Textarea
          value={values.third}
          onChange={(e) => onTextChange("third", e.target.value)}
          placeholder="Describe the third improvement you need to make..."
          className="mb-4"
        />
      </div>
      
      <div>
        <label className="block mb-2">Implementation plan:</label>
        <Textarea
          value={values.plan}
          onChange={(e) => onTextChange("plan", e.target.value)}
          placeholder="Describe your plan for implementing these improvements..."
          className="h-32"
        />
      </div>
    </div>
  );
};
