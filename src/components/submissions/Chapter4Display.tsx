
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfitsMatchDisplay } from "@/components/chapters/chapter4/worksheet/components/ProfitsMatchDisplay";
import { ProductTrinityDisplay } from "@/components/chapters/chapter4/worksheet/components/ProductTrinityDisplay";

interface Chapter4DisplayProps {
  data: any;
}

export const Chapter4Display = ({ data }: Chapter4DisplayProps) => {
  if (!data) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chapter 4: Product Evaluation Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {Object.keys(data.productNames).map((productKey) => (
          <ProfitsMatchDisplay
            key={productKey}
            productName={data.productNames[productKey]}
            profitsScores={data.profitsScores[productKey]}
            matchScores={data.matchScores[productKey]}
            finalScore={data.finalScores[productKey]}
            bgColor="bg-white"
            borderColor="border-gray-200"
          />
        ))}

        <ProductTrinityDisplay trinity={data.trinity} />
      </CardContent>
    </Card>
  );
};
