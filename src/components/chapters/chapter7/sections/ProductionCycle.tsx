
import { Card } from "@/components/ui/card";

export const ProductionCycle = () => {
  return (
    <div className="space-y-4">
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
    </div>
  );
};
