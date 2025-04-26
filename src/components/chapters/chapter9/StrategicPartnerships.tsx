
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { Card, CardContent } from "@/components/ui/card";

export const StrategicPartnerships = () => {
  return (
    <ChapterSection title="Step 9: Create Strategic Partnerships">
      <div className="space-y-6">
        <p>
          Strategic partnerships with complementary businesses can exponentially expand your reach without 
          spending money on advertising. This approach leverages existing trust in other brands to introduce 
          your products to pre-qualified audiences.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">Time/Convenience Products</h4>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Productivity tool creators</li>
                <li>Organizational coaches</li>
                <li>Efficiency experts</li>
                <li className="text-sm text-gray-600 mt-2">Example: Desk organizers + productivity app creators</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">Emotion/Experience Products</h4>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Style influencers</li>
                <li>Interior designers</li>
                <li>Lifestyle bloggers</li>
                <li className="text-sm text-gray-600 mt-2">Example: Planters + indoor plant shops</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">Differentiation Products</h4>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Values-aligned brands</li>
                <li>Process-focused creators</li>
                <li>Philosophy-sharing platforms</li>
                <li className="text-sm text-gray-600 mt-2">Example: Sustainable designs + eco-conscious bloggers</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4">Partnership Value Exchange Ideas</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create exclusive designs for their audience</li>
            <li>Offer special discount codes for their followers</li>
            <li>Provide content for their platforms</li>
            <li>Share their content with your audience</li>
            <li>Create co-branded products or bundles</li>
            <li>Contribute your expertise for their projects</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4">Effective Outreach Structure</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Specific compliment showing you know their work</li>
            <li>Clear explanation of audience overlap</li>
            <li>Value you can provide (3 specific offerings)</li>
            <li>Potential collaboration idea</li>
            <li>Simple next step they can take</li>
          </ol>
        </div>
      </div>
    </ChapterSection>
  );
};
