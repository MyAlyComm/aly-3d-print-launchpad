
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { Card, CardContent } from "@/components/ui/card";

export const CustomerAdvocates = () => {
  return (
    <ChapterSection title="Step 8: Turn Customers Into Advocates">
      <div className="space-y-6">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4">Creating Shareable Moments</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Design products with "Instagram spots"—distinctive visual elements</li>
            <li>Include a branded card suggesting sharing with a specific hashtag</li>
            <li>Make the unboxing process itself worthy of recording</li>
            <li>Add unexpected elements that create genuine surprise</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4">Amplifying Social Proof</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create a gallery of customer photos on your social profiles</li>
            <li>Respond to and share every mention of your products</li>
            <li>Feature customer stories prominently in your marketing</li>
            <li>Create regular "customer spotlight" content</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">Time/Convenience Products</h4>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Create problem-solving communities</li>
                <li>Host occasional livestreams</li>
                <li>Encourage customer hacks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">Emotion/Experience Products</h4>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Create hashtags for style collections</li>
                <li>Feature artistic arrangements</li>
                <li>Build lifestyle communities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">Differentiation Products</h4>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Highlight shared values</li>
                <li>Create insider content</li>
                <li>Develop brand culture</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </ChapterSection>
  );
};
