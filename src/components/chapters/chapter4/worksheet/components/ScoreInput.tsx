
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Circle } from "lucide-react";

interface ScoreInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  max: number;
  type?: 'numeric' | 'choice';
  choices?: Array<{
    value: string;
    label: string;
    score: number;
  }>;
}

export const ScoreInput = ({ 
  id, 
  label, 
  value, 
  onChange, 
  max, 
  type = 'numeric',
  choices = [] 
}: ScoreInputProps) => {
  if (type === 'choice') {
    return (
      <div className="space-y-2">
        <Label htmlFor={id}>{label}:</Label>
        <RadioGroup
          value={value}
          onValueChange={onChange}
          className="flex flex-col space-y-2"
        >
          {choices.map((choice) => (
            <div key={choice.value} className="flex items-center space-x-2">
              <RadioGroupItem id={`${id}-${choice.value}`} value={choice.value}>
                {value === choice.value ? <Check size={16} /> : <Circle size={16} />}
              </RadioGroupItem>
              <Label htmlFor={`${id}-${choice.value}`}>{choice.label}</Label>
            </div>
          ))}
        </RadioGroup>
        <div className="text-sm text-muted-foreground">
          Score: {value ? choices.find(c => c.value === value)?.score || 0 : 0} / {max}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}:</Label>
      <div className="flex items-center gap-2">
        <Input 
          id={id}
          className="w-20" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="number"
          min="0"
          max={max}
        />
        <span>/ {max}</span>
      </div>
    </div>
  );
};
