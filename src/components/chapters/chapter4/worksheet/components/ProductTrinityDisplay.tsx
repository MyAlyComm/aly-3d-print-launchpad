
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductTrinityDisplayProps {
  trinity: {
    safeBet: string;
    profitMaximizer: string;
    strengthShowcase: string;
    plusOne: string;
  };
}

export const ProductTrinityDisplay = ({ trinity }: ProductTrinityDisplayProps) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Product Trinity Selection</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div>
            <h4 className="font-semibold text-sm text-gray-500">Safe Bet Product:</h4>
            <p className="mt-1">{trinity.safeBet || 'Not selected'}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-gray-500">Profit Maximizer:</h4>
            <p className="mt-1">{trinity.profitMaximizer || 'Not selected'}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-gray-500">Strength Showcase:</h4>
            <p className="mt-1">{trinity.strengthShowcase || 'Not selected'}</p>
          </div>
          
          <div className="pt-4 border-t">
            <h4 className="font-semibold text-sm text-gray-500">Plus One Innovation:</h4>
            <p className="mt-1 whitespace-pre-wrap">{trinity.plusOne || 'Not defined'}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
