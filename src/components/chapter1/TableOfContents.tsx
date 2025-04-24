
import { Card, CardContent } from "@/components/ui/card";

export const TableOfContents = () => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
        <nav className="space-y-1">
          <a href="#arbitrage" className="block text-blue-600 hover:underline">Understanding Arbitrage Windows</a>
          <a href="#timeline" className="block text-blue-600 hover:underline">The 3D Printing Timeline</a>
          <a href="#myths" className="block text-blue-600 hover:underline">Common Misconceptions: The Stained Glass Effect</a>
          <a href="#future" className="block text-blue-600 hover:underline">Where We're Going: The New Horizon</a>
          <a href="#self-assessment" className="block text-blue-600 hover:underline">Self-Assessment: Your Arbitrage Advantage</a>
        </nav>
      </CardContent>
    </Card>
  );
};
