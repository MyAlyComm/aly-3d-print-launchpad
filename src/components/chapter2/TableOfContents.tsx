
import { Card, CardContent } from "@/components/ui/card";

export const TableOfContents = () => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
        <nav className="space-y-1">
          <a href="#theorem" className="block text-blue-600 hover:underline">The Axiogenetic Theorem</a>
          <a href="#awakening" className="block text-blue-600 hover:underline">The Awakening</a>
          <a href="#revelation" className="block text-blue-600 hover:underline">The Revelation</a>
          <a href="#framework" className="block text-blue-600 hover:underline">The Decision Tree Framework</a>
          <a href="#worksheet" className="block text-blue-600 hover:underline">The 3D Printing Business Path Worksheet</a>
        </nav>
      </CardContent>
    </Card>
  );
};
