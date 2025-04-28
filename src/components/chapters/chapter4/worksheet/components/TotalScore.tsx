
import { Input } from "@/components/ui/input";

interface TotalScoreProps {
  finalScore: string;
}

export const TotalScore = ({ finalScore }: TotalScoreProps) => (
  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
    <div className="flex items-center gap-2 font-bold">
      <span>FINAL SCORE:</span>
      <Input 
        className="w-20 font-bold" 
        value={finalScore} 
        readOnly
      />
      <span>/ 100</span>
    </div>
  </div>
);
