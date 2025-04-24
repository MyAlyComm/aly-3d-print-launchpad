
import { Card, CardContent } from "@/components/ui/card";

export const TableOfContents = () => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
        <nav className="space-y-1">
          <a href="#opportunity" className="block text-blue-600 hover:underline">The 3D Printing Opportunity</a>
          <a href="#arbitrage" className="block text-blue-600 hover:underline">The Arbitrage Window Explained</a>
          <a href="#myths" className="block text-blue-600 hover:underline">Breaking Through Misconceptions</a>
          <a href="#success-factors" className="block text-blue-600 hover:underline">Key Success Factors</a>
          <a href="#budget" className="block text-blue-600 hover:underline">Starting Budget Considerations</a>
          <a href="#equipment" className="block text-blue-600 hover:underline">Required Equipment</a>
          <a href="#setup" className="block text-blue-600 hover:underline">Printer Setup and Calibration</a>
        </nav>
      </CardContent>
    </Card>
  );
};
