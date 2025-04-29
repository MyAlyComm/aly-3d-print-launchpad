
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductTrinitySelectionProps {
  trinity: {
    safeBet: string;
    profitMaximizer: string;
    strengthShowcase: string;
    plusOne: string;
  };
  onTrinityChange: (type: string, value: string) => void;
  productOptions?: { value: string; label: string }[];
}

export const ProductTrinitySelection = ({ 
  trinity, 
  onTrinityChange,
  productOptions = [] 
}: ProductTrinitySelectionProps) => {
  const defaultOptions = [
    { value: "product1", label: "Product 1" },
    { value: "product2", label: "Product 2" },
    { value: "product3", label: "Product 3" },
    { value: "product4", label: "Product 4" },
    { value: "product5", label: "Product 5" },
  ];

  const options = productOptions.length > 0 ? productOptions : defaultOptions;

  return (
    <Card>
      <CardHeader className="bg-gray-50">
        <CardTitle>Your Product Trinity Selection</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <p>
          Based on your product scoring, select which product will fulfill each role in your Product Trinity:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="safeBet">Safe Bet Product:</Label>
            <Select value={trinity.safeBet} onValueChange={(value) => onTrinityChange("safeBet", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">Choose your most reliable seller with the lowest risk</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="profitMaximizer">Profit Maximizer Product:</Label>
            <Select value={trinity.profitMaximizer} onValueChange={(value) => onTrinityChange("profitMaximizer", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">Choose your highest margin product</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="strengthShowcase">Strength Showcase Product:</Label>
            <Select value={trinity.strengthShowcase} onValueChange={(value) => onTrinityChange("strengthShowcase", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">Choose the product that best showcases your skills</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="plusOne">Plus One (Innovative) Product:</Label>
            <Select value={trinity.plusOne} onValueChange={(value) => onTrinityChange("plusOne", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">Choose your most innovative or experimental product</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
