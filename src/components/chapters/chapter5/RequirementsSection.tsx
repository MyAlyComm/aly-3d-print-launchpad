
import { Card, CardContent } from "@/components/ui/card";

export const RequirementsSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Understanding Your Requirements</h2>
      
      <p className="text-gray-700">
        Before diving into specific printer recommendations, let's quickly consider what matters most for your products.
      </p>

      <h3 className="text-xl font-semibold mt-6">Material Requirements</h3>
      <p className="text-gray-700">
        When it comes to materials, I have good news for you: you can print just about anything with PLA and PETG. 
        These two materials are the workhorses of 3D printing for good reason - they're easy to use, affordable, and non-toxic. 
        PLA is slightly easier for beginners and great for decorative items, while PETG offers better durability and is still straightforward to print.
      </p>

      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-6">
          <h4 className="font-semibold mb-3">Health & Safety Note</h4>
          <p className="text-gray-700">
            For most prosumer small business owners, I strongly recommend avoiding materials like ABS, especially indoors. 
            Despite its popularity in certain circles, ABS releases carcinogenic fumes and volatile organic compounds (VOCs) during printing. 
            It's simply not worth the health risk when safer alternatives exist.
          </p>
        </CardContent>
      </Card>

      <p className="text-gray-700">
        Similarly, resin printing, while it is the only option for certain small detailed products like miniatures or jewelry, 
        comes with significant downsides. The resin is messy, requires extensive safety precautions, and poses health hazards if not handled properly. 
        The post-processing is also chemical-intensive and requires proper ventilation and disposal procedures.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="text-lg font-semibold mb-3">Specialty Materials to Consider</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>TPU for flexible applications</li>
          <li>Nylon for durable functional parts (requires higher print temperatures)</li>
          <li>Wood-fill for natural-looking decorative items</li>
          <li>Metal-fill for heavy, metallic-looking products</li>
          <li>Silk PLA for shiny, polished appearances without post-processing</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-6">Size Considerations</h3>
      <p className="text-gray-700">
        When evaluating printers, consider the build volume needed for your Product Trinity. 
        Measure your products and add a 10-15% buffer to ensure they'll fit comfortably.
      </p>

      <div className="grid gap-4 md:grid-cols-3 mt-4">
        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Compact</h4>
            <p className="text-sm">Around 180mm³</p>
            <p className="text-xs text-gray-600 mt-2">Perfect for small accessories, gadgets, and jewelry</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Standard</h4>
            <p className="text-sm">Around 250mm³</p>
            <p className="text-xs text-gray-600 mt-2">Handles most home goods, organizers, and decor items</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Large</h4>
            <p className="text-sm">300mm+ in one dimension</p>
            <p className="text-xs text-gray-600 mt-2">Necessary for large single-piece items or batch production</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mt-4">
        <h3 className="text-lg font-semibold mb-3">Speed and Reliability: The True Priorities</h3>
        <p>When it comes to selecting your printer, speed and reliability should be your primary focus. Here's why:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Time is money – A printer that prints twice as fast effectively doubles your production capacity without doubling your cost</li>
          <li>Reliability reduces waste – Failed prints cost materials, time, and energy</li>
          <li>Consistency ensures quality – Customers expect the same high quality from every product</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-6">The Energy Myth Debunked</h3>
      <p className="text-gray-700">
        One persistent myth about 3D printing is that printers use a lot of electricity. Let me put this concern 
        to rest with some actual numbers:
      </p>

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Actual Power Consumption</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Average: 70-150 watts during printing</li>
              <li>Comparable to: A laptop computer or an LED TV</li>
              <li>NOT comparable to: Space heaters, ovens, or air conditioners</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Cost Breakdown</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Average U.S. electricity cost: $0.15 per kilowatt-hour (kWh)</li>
              <li>Printer using 100W for 10 hours = 1 kWh = $0.15</li>
              <li>Printing a product that sells for $30 = 0.5% of your revenue</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h4 className="font-semibold mb-3">Enclosed vs. Open Printers</h4>
          <p className="text-gray-700 mb-4">
            An important consideration, especially for home-based businesses, is whether to choose an enclosed or open-frame printer. 
            This decision affects more than just print quality – it impacts safety and workspace flexibility.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h5 className="font-semibold">Open-Frame Printers</h5>
              <p className="text-sm mt-1">Printers with exposed mechanisms with minimal or no covering</p>
              <p className="text-xs text-green-600 mt-2">✓ Generally less expensive</p>
              <p className="text-xs text-green-600">✓ Easier to modify</p>
              <p className="text-xs text-green-600">✓ Better visibility of prints</p>
              <p className="text-xs text-red-600 mt-2">✗ Noisier</p>
              <p className="text-xs text-red-600">✗ Vulnerable to air drafts</p>
              <p className="text-xs text-red-600">✗ Accessible to children and pets</p>
            </div>
            
            <div>
              <h5 className="font-semibold">Partially Enclosed Printers</h5>
              <p className="text-sm mt-1">Printers with some panels but not complete enclosure</p>
              <p className="text-xs text-green-600 mt-2">✓ Better temperature stability</p>
              <p className="text-xs text-green-600">✓ Moderate noise reduction</p>
              <p className="text-xs text-green-600">✓ Some safety benefits</p>
              <p className="text-xs text-red-600 mt-2">✗ Still somewhat accessible</p>
              <p className="text-xs text-red-600">✗ Limited fume containment</p>
            </div>
            
            <div>
              <h5 className="font-semibold">Fully Enclosed Printers</h5>
              <p className="text-sm mt-1">Printers with complete enclosures with doors</p>
              <p className="text-xs text-green-600 mt-2">✓ Best temperature stability</p>
              <p className="text-xs text-green-600">✓ Significant noise reduction</p>
              <p className="text-xs text-green-600">✓ Safety from moving parts</p>
              <p className="text-xs text-green-600">✓ Fume containment</p>
              <p className="text-xs text-red-600 mt-2">✗ Generally higher cost</p>
              <p className="text-xs text-red-600">✗ Potentially reduced visibility</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
