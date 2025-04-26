
import { Card } from "@/components/ui/card";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";

export const WorkflowOptimization = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Workflow Optimization</h2>
      
      <p className="text-gray-700">
        After setting up your initial production, it's time to create efficient workflows 
        that will save you time and reduce errors as your business grows.
      </p>

      <ChapterSection title="The Production Cycle Framework">
        <p className="text-gray-700 mb-4">
          Every 3D printing business, regardless of size, follows the same basic production cycle. 
          Creating standard procedures for each stage will make your operation more efficient and scalable.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Design Preparation</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>File verification and repair process</li>
              <li>Slicing parameter standardization</li>
              <li>Print orientation decision framework</li>
              <li>Support structure optimization</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Pre-Production Setup</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Build plate preparation routine</li>
              <li>Filament loading and priming procedure</li>
              <li>First layer verification process</li>
              <li>Print monitoring schedule</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Post-Production Processing</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Cooling procedure and timing standards</li>
              <li>Support removal techniques by product</li>
              <li>Surface finishing standard procedures</li>
              <li>Quality inspection checklist</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Packaging and Fulfillment</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Product cleaning and final inspection</li>
              <li>Standard packaging materials and methods</li>
              <li>Shipping preparation workflow</li>
              <li>Order tracking and confirmation system</li>
            </ul>
          </Card>
        </div>
      </ChapterSection>

      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <p className="text-gray-800">
          For each of these stages, create a simple checklist or procedural document. 
          This might seem unnecessary when you're only making a few products, but these 
          documents become invaluable as you scale or if you ever need someone else to 
          help with production.
        </p>
      </div>
    </div>
  );
};
