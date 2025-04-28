
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScoreInput } from "./ScoreInput";

interface ScoreSectionProps {
  title: string;
  scores: Array<{
    id: string;
    label: string;
    value: string;
    max: number;
    onChange: (value: string) => void;
  }>;
  total: string;
  bgColor: string;
  borderColor: string;
}

export const ScoreSection = ({ 
  title, 
  scores, 
  total,
  bgColor,
  borderColor
}: ScoreSectionProps) => (
  <Card className={bgColor}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scores.map(({ id, label, value, max, onChange }) => (
          <ScoreInput
            key={id}
            id={id}
            label={label}
            value={value}
            onChange={onChange}
            max={max}
          />
        ))}
      </div>
      
      <div className={`pt-4 border-t ${borderColor} font-bold`}>
        <div className="flex items-center gap-2">
          <span>TOTAL {title} SCORE:</span>
          <Input 
            className="w-20 font-bold" 
            value={total}
            readOnly
          />
          <span>/ 100</span>
        </div>
      </div>
    </CardContent>
  </Card>
);
