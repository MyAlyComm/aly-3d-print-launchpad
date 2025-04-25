
import { Card, CardContent } from "@/components/ui/card";

export const ChapterHeader = () => {
  return (
    <Card className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50">
      <CardContent className="pt-6">
        <h1 className="text-3xl font-bold mb-4">Chapter 1: Arbitrage Windows</h1>
        <p className="text-lg text-gray-700 italic mb-4">
          "In 3D printing, opportunity isn't just about what you make - it's about when you enter the market."
        </p>
        <p className="text-gray-600">
          In this chapter, we'll explore how timing and market understanding can create 
          profitable opportunities in the 3D printing space.
        </p>
      </CardContent>
    </Card>
  );
};
