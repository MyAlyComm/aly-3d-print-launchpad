
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ScoreInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  max: number;
}

const ScoreInput = ({ id, label, value, onChange, max }: ScoreInputProps) => (
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
      
      <Card className="bg-blue-50">
        <CardHeader>
          <CardTitle>PROFITS Score</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScoreInput
              id={`p${productNumber}-problem`}
              label="P - Problem-solving"
              value={profitsScores.p}
              onChange={(value) => onProfitsChange('p', value)}
              max={15}
            />
            <ScoreInput
              id={`p${productNumber}-roi`}
              label="R - Return on Investment"
              value={profitsScores.r}
              onChange={(value) => onProfitsChange('r', value)}
              max={15}
            />
            <ScoreInput
              id={`p${productNumber}-opportunity`}
              label="O - Opportunity"
              value={profitsScores.o}
              onChange={(value) => onProfitsChange('o', value)}
              max={15}
            />
            <ScoreInput
              id={`p${productNumber}-feasibility`}
              label="F - Feasibility"
              value={profitsScores.f}
              onChange={(value) => onProfitsChange('f', value)}
              max={15}
            />
            <ScoreInput
              id={`p${productNumber}-demand`}
              label="I - In-demand"
              value={profitsScores.i}
              onChange={(value) => onProfitsChange('i', value)}
              max={25}
            />
            <ScoreInput
              id={`p${productNumber}-time`}
              label="T - Time-to-Money"
              value={profitsScores.t}
              onChange={(value) => onProfitsChange('t', value)}
              max={15}
            />
            <ScoreInput
              id={`p${productNumber}-staying`}
              label="S - Staying Power"
              value={profitsScores.s}
              onChange={(value) => onProfitsChange('s', value)}
              max={15}
            />
          </div>
          
          <div className="pt-4 border-t border-blue-200 font-bold">
            <div className="flex items-center gap-2">
              <span>TOTAL PROFITS SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={profitsScores.total}
                readOnly
              />
              <span>/ 100</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-purple-50">
        <CardHeader>
          <CardTitle>MATCH Score</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScoreInput
              id={`p${productNumber}-maker`}
              label="M - Maker Skills"
              value={matchScores.m}
              onChange={(value) => onMatchChange('m', value)}
              max={25}
            />
            <ScoreInput
              id={`p${productNumber}-artistic`}
              label="A - Artistic Alignment"
              value={matchScores.a}
              onChange={(value) => onMatchChange('a', value)}
              max={25}
            />
            <ScoreInput
              id={`p${productNumber}-time-avail`}
              label="T - Time Available"
              value={matchScores.t}
              onChange={(value) => onMatchChange('t', value)}
              max={10}
            />
            <ScoreInput
              id={`p${productNumber}-competition`}
              label="C - Competition Analysis"
              value={matchScores.c}
              onChange={(value) => onMatchChange('c', value)}
              max={25}
            />
            <ScoreInput
              id={`p${productNumber}-home`}
              label="H - Home Location"
              value={matchScores.h}
              onChange={(value) => onMatchChange('h', value)}
              max={15}
            />
          </div>
          
          <div className="pt-4 border-t border-purple-200 font-bold">
            <div className="flex items-center gap-2">
              <span>TOTAL MATCH SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={matchScores.total}
                readOnly
              />
              <span>/ 100</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
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
    </div>
  );
};
