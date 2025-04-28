
import { Input } from "@/components/ui/input";
import { ScoreSection } from "./components/ScoreSection";
import { TotalScore } from "./components/TotalScore";

interface ProductScoreCardProps {
  productNumber: number;
  productName: string;
  onProductNameChange: (value: string) => void;
  profitsScores: {
    p: string;
    r: string;
    o: string;
    f: string;
    i: string;
    t: string;
    s: string;
    total: string;
  };
  matchScores: {
    m: string;
    a: string;
    t: string;
    c: string;
    h: string;
    total: string;
  };
  finalScore: string;
  onProfitsChange: (factor: string, value: string) => void;
  onMatchChange: (factor: string, value: string) => void;
}

export const ProductScoreCard = ({
  productNumber,
  productName,
  onProductNameChange,
  profitsScores,
  matchScores,
  finalScore,
  onProfitsChange,
  onMatchChange
}: ProductScoreCardProps) => {
  const profitsInputs = [
    { id: `p${productNumber}-problem`, label: "P - Problem-solving", value: profitsScores.p, max: 15, onChange: (value: string) => onProfitsChange('p', value) },
    { id: `p${productNumber}-roi`, label: "R - Return on Investment", value: profitsScores.r, max: 15, onChange: (value: string) => onProfitsChange('r', value) },
    { id: `p${productNumber}-opportunity`, label: "O - Opportunity", value: profitsScores.o, max: 15, onChange: (value: string) => onProfitsChange('o', value) },
    { id: `p${productNumber}-feasibility`, label: "F - Feasibility", value: profitsScores.f, max: 15, onChange: (value: string) => onProfitsChange('f', value) },
    { id: `p${productNumber}-demand`, label: "I - In-demand", value: profitsScores.i, max: 25, onChange: (value: string) => onProfitsChange('i', value) },
    { id: `p${productNumber}-time`, label: "T - Time-to-Money", value: profitsScores.t, max: 15, onChange: (value: string) => onProfitsChange('t', value) },
    { id: `p${productNumber}-staying`, label: "S - Staying Power", value: profitsScores.s, max: 15, onChange: (value: string) => onProfitsChange('s', value) }
  ];

  const matchInputs = [
    { id: `p${productNumber}-maker`, label: "M - Maker Skills", value: matchScores.m, max: 25, onChange: (value: string) => onMatchChange('m', value) },
    { id: `p${productNumber}-artistic`, label: "A - Artistic Alignment", value: matchScores.a, max: 25, onChange: (value: string) => onMatchChange('a', value) },
    { id: `p${productNumber}-time-avail`, label: "T - Time Available", value: matchScores.t, max: 10, onChange: (value: string) => onMatchChange('t', value) },
    { id: `p${productNumber}-competition`, label: "C - Competition Analysis", value: matchScores.c, max: 25, onChange: (value: string) => onMatchChange('c', value) },
    { id: `p${productNumber}-home`, label: "H - Home Location", value: matchScores.h, max: 15, onChange: (value: string) => onMatchChange('h', value) }
  ];

  return (
    <div className="space-y-6 border border-gray-200 rounded-lg p-6">
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold">PRODUCT {productNumber}:</h3>
        <Input 
          className="max-w-xs" 
          value={productName} 
          onChange={(e) => onProductNameChange(e.target.value)}
          placeholder="Enter product name"
        />
      </div>
      
      <ScoreSection
        title="PROFITS Score"
        scores={profitsInputs}
        total={profitsScores.total}
        bgColor="bg-blue-50"
        borderColor="border-blue-200"
      />
      
      <ScoreSection
        title="MATCH Score"
        scores={matchInputs}
        total={matchScores.total}
        bgColor="bg-purple-50"
        borderColor="border-purple-200"
      />
      
      <TotalScore finalScore={finalScore} />
    </div>
  );
};
