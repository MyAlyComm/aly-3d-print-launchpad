
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface WorksheetSectionProps {
  title: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const WorksheetSection = ({ 
  title, 
  value, 
  placeholder, 
  onChange 
}: WorksheetSectionProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <label className="block">
            <span className="font-medium">{title}</span>
            <Textarea 
              className="mt-1" 
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              rows={title.includes("monthly cycle") ? 6 : undefined}
            />
          </label>
        </div>
      </CardContent>
    </Card>
  );
};
