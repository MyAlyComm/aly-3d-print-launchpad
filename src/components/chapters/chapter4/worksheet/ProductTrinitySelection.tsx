
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ProductTrinitySelectionProps {
  trinity: {
    safeBet: string;
    profitMaximizer: string;
    strengthShowcase: string;
    plusOne: string;
  };
  onTrinityChange: (type: string, value: string) => void;
}

export const ProductTrinitySelection = ({ 
  trinity, 
  onTrinityChange 
}: ProductTrinitySelectionProps) => {
  return (
    <>
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
        <h3 className="text-xl font-bold mb-6">MY PRODUCT TRINITY:</h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="safe-bet">
              My "Safe Bet" (highest overall score):
            </Label>
            <Input 
              id="safe-bet"
              className="max-w-lg" 
              value={trinity.safeBet}
              onChange={(e) => onTrinityChange('safeBet', e.target.value)}
              placeholder="Enter your safe bet product"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="profit-maximizer">
              My "Profit Maximizer" (highest PROFITS score):
            </Label>
            <Input 
              id="profit-maximizer"
              className="max-w-lg" 
              value={trinity.profitMaximizer}
              onChange={(e) => onTrinityChange('profitMaximizer', e.target.value)}
              placeholder="Enter your profit maximizer product"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="strength-showcase">
              My "Strength Showcase" (highest MATCH score):
            </Label>
            <Input 
              id="strength-showcase"
              className="max-w-lg" 
              value={trinity.strengthShowcase}
              onChange={(e) => onTrinityChange('strengthShowcase', e.target.value)}
              placeholder="Enter your strength showcase product"
            />
          </div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="plus-one">
            MY FIRST PLUS 1 INNOVATION:
          </Label>
          <Textarea 
            id="plus-one"
            className="min-h-20" 
            value={trinity.plusOne}
            onChange={(e) => onTrinityChange('plusOne', e.target.value)}
            placeholder="Describe your first Plus 1 innovation project"
          />
        </div>
      </div>
    </>
  );
};
