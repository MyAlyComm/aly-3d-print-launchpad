
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ScoreInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  max: number;
}

export const ScoreInput = ({ id, label, value, onChange, max }: ScoreInputProps) => (
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
