
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ScoreProps {
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
}: ScoreProps) => {
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
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-problem`}>P - Problem-solving:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-problem`}
                  className="w-20" 
                  value={profitsScores.p}
                  onChange={(e) => onProfitsChange('p', e.target.value)}
                  type="number"
                  min="0"
                  max="15"
                />
                <span>/ 15</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-roi`}>R - Return on Investment:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-roi`}
                  className="w-20" 
                  value={profitsScores.r}
                  onChange={(e) => onProfitsChange('r', e.target.value)}
                  type="number"
                  min="0"
                  max="15"
                />
                <span>/ 15</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-opportunity`}>O - Opportunity:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-opportunity`}
                  className="w-20" 
                  value={profitsScores.o}
                  onChange={(e) => onProfitsChange('o', e.target.value)}
                  type="number"
                  min="0"
                  max="15"
                />
                <span>/ 15</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-feasibility`}>F - Feasibility:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-feasibility`}
                  className="w-20" 
                  value={profitsScores.f}
                  onChange={(e) => onProfitsChange('f', e.target.value)}
                  type="number"
                  min="0"
                  max="15"
                />
                <span>/ 15</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-demand`}>I - In-demand:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-demand`}
                  className="w-20" 
                  value={profitsScores.i}
                  onChange={(e) => onProfitsChange('i', e.target.value)}
                  type="number"
                  min="0"
                  max="25"
                />
                <span>/ 25</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-time`}>T - Time-to-Money:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-time`}
                  className="w-20" 
                  value={profitsScores.t}
                  onChange={(e) => onProfitsChange('t', e.target.value)}
                  type="number"
                  min="0"
                  max="15"
                />
                <span>/ 15</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-staying`}>S - Staying Power:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-staying`}
                  className="w-20" 
                  value={profitsScores.s}
                  onChange={(e) => onProfitsChange('s', e.target.value)}
                  type="number"
                  min="0"
                  max="15"
                />
                <span>/ 15</span>
              </div>
            </div>
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
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-maker`}>M - Maker Skills:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-maker`}
                  className="w-20" 
                  value={matchScores.m}
                  onChange={(e) => onMatchChange('m', e.target.value)}
                  type="number"
                  min="0"
                  max="25"
                />
                <span>/ 25</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-artistic`}>A - Artistic Alignment:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-artistic`}
                  className="w-20" 
                  value={matchScores.a}
                  onChange={(e) => onMatchChange('a', e.target.value)}
                  type="number"
                  min="0"
                  max="25"
                />
                <span>/ 25</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-time-avail`}>T - Time Available:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-time-avail`}
                  className="w-20" 
                  value={matchScores.t}
                  onChange={(e) => onMatchChange('t', e.target.value)}
                  type="number"
                  min="0"
                  max="10"
                />
                <span>/ 10</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-competition`}>C - Competition Analysis:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-competition`}
                  className="w-20" 
                  value={matchScores.c}
                  onChange={(e) => onMatchChange('c', e.target.value)}
                  type="number"
                  min="0"
                  max="25"
                />
                <span>/ 25</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`p${productNumber}-home`}>H - Home Location:</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id={`p${productNumber}-home`}
                  className="w-20" 
                  value={matchScores.h}
                  onChange={(e) => onMatchChange('h', e.target.value)}
                  type="number"
                  min="0"
                  max="15"
                />
                <span>/ 15</span>
              </div>
            </div>
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
