
import { Card, CardContent } from "@/components/ui/card";

export const Workspace = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Workspace Essentials</h2>
      
      <p className="text-gray-700">
        While we'll cover detailed workspace optimization in Chapter 7, you need some basics in place before you start printing. 
        Here's what you need to consider:
      </p>

      <Card className="bg-red-50 border-red-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3 text-red-800">Safety First</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Environment</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Ventilation:</span> Even with safe materials like PLA, ensure adequate air circulation
                </li>
                <li>
                  <span className="font-medium">Fire safety:</span> Place printers on non-flammable surfaces and install a smoke detector
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Protection</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Electrical safety:</span> Avoid overloading circuits; consider a surge protector
                </li>
                <li>
                  <span className="font-medium">Accessibility:</span> Position printers where children and pets cannot reach them
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Minimum Space Requirements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Printer Area</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Allow at least 6" of clearance on all sides</li>
                  <li>Stable, level surface that won't transmit vibrations</li>
                  <li>Consider noise dampening mats if needed</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Material Storage</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cool, dry area for filament</li>
                  <li>Even a plastic tub with desiccant works</li>
                  <li>Keep away from direct sunlight</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div>
                <h4 className="font-semibold mb-2">Post-Processing Station</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Small area with good lighting</li>
                  <li>Surface resistant to scrapes and cuts</li>
                  <li>Storage for finishing tools</li>
                  <li>Consider dust collection for sanding</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md mt-4">
            <p className="text-sm">
              <span className="font-semibold">Beginner Tip:</span> You don't need a dedicated workshop to start – I began with a single printer on a desk in my bedroom. As your business grows, you can optimize your workspace further as we'll discuss in Chapter 7.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Temperature Considerations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Ambient Temperature</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Most printers work best in 68-80°F (20-27°C) environments</li>
                <li>Avoid temperature fluctuations</li>
                <li>Consider thermal insulation for garage spaces</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Climate Control</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Avoid drafts from windows, doors, and HVAC vents</li>
                <li>Ideal relative humidity is 30-50%</li>
                <li>Use a dehumidifier if needed</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 space-y-6">
        <h2 className="text-2xl font-bold">Batch Printing and Material Management</h2>
        
        <p className="text-gray-700">
          Managing your printing approach and materials efficiently can dramatically impact your profitability. Here's what I've learned:
        </p>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3">Strategic Batch Printing</h3>
            
            <p className="text-gray-700 mb-4">
              When it comes to batch processing, I always recommend printing in a way that minimizes total print time while balancing risk. 
              For example, printing 3 planters on one bed might take 6 hours, whereas individually they would take 3 hours each (for a total of 9 hours). 
              This makes batch printing highly efficient.
            </p>
            
            <p className="text-gray-700 mb-4">
              However, there's an important risk consideration: when you print multiple items at once, you also risk wasting more material if a print fails. 
              Some products are more prone to failure than others, so evaluate on a case-by-case basis.
            </p>
            
            <div className="bg-amber-50 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Failure Reduction Tips</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Test new designs individually before batch printing</li>
                <li>Use larger brims on batch prints for better adhesion</li>
                <li>For critical orders, consider printing fewer items per batch to reduce risk</li>
                <li>Monitor the first few layers closely – most failures happen early</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md mt-4">
              <p className="text-sm">
                <span className="font-semibold">My Approach:</span> I typically run larger batches overnight when time efficiency is most important, 
                and smaller batches or more critical items during the day when I can monitor them.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3">Filament Selection and Management</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Filament Quality Considerations</h4>
                <p className="text-gray-700 mb-2">
                  Most manufacturers today produce good quality filament, but what truly matters is consistency:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Look for filaments that perform the same way every time</li>
                  <li>Maintain exact color matching between spools</li>
                  <li>Consider dimensional accuracy, moisture content, and purity</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Smart Inventory Startup Strategy</h4>
                <p className="text-gray-700 mb-2">
                  For your initial setup, I recommend getting 6 spools if your budget allows:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>4 colors of PLA or PETG (including black and white as essentials)</li>
                  <li>1 PLA silk (for premium appearance with minimal effort)</li>
                  <li>1 specialty filament (like Rainbow PLA or Textured PLA)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-md mt-6">
              <h4 className="font-semibold mb-2">Filament Value Perception</h4>
              <p className="text-gray-700 mb-2">
                The filament you choose can dramatically influence your product's perceived value:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Silk PLAs can make simple designs look premium and metallic</li>
                <li>Textured filaments can hide layer lines and create a more finished appearance</li>
                <li>Rainbow or color-changing filaments create eye-catching products that stand out</li>
                <li>Some customers will gladly pay 30-50% more for the same design printed in a premium filament</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3">Storage and Handling</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Storage Best Practices</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Keep filament in airtight containers</li>
                  <li>Always use desiccant</li>
                  <li>Label with purchase date</li>
                  <li>Use oldest stock first</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Humidity Control</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Consider filament dryers for humid environments</li>
                  <li>Store sealed when not in use</li>
                  <li>Watch for signs of moisture absorption</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Material Combinations</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>PLA and PETG create perfect interface for support removal</li>
                  <li>Consider AMS capability for multi-material projects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Getting Started Checklist</h3>
          
          <p className="text-gray-700 mb-4">
            Before moving to Chapter 6, ensure you've completed these essential steps:
          </p>
          
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-5 w-5 rounded border border-gray-300 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-xs">□</span>
              </div>
              <span>Selected appropriate printer based on your Product Trinity requirements</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded border border-gray-300 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-xs">□</span>
              </div>
              <span>Ordered necessary materials (PLA/PETG for your initial products)</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded border border-gray-300 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-xs">□</span>
              </div>
              <span>Set up basic workspace with safety considerations addressed</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded border border-gray-300 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-xs">□</span>
              </div>
              <span>Acquired essential accessories (extra build plate, basic tools)</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded border border-gray-300 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-xs">□</span>
              </div>
              <span>Created a simple quality check process for your specific products</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded border border-gray-300 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-xs">□</span>
              </div>
              <span>Tested print settings with your actual product files</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded border border-gray-300 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-xs">□</span>
              </div>
              <span>Produced at least one complete sample of each product in your Trinity</span>
            </li>
          </ul>
          
          <p className="text-gray-700 mt-6">
            Once you've checked these boxes, you're ready to move on to selecting the right platforms to sell your products and setting up your online presence. 
            We'll cover production optimization, advanced workspace setup, and inventory management systems in later chapters as your business grows.
          </p>
        </div>
      </div>
    </div>
  );
};
