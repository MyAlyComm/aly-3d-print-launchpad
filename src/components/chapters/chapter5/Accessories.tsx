
import { Card, CardContent } from "@/components/ui/card";

export const Accessories = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Essential Accessories - Keep It Simple</h2>
      
      <p className="text-gray-700">
        You don't need a workshop full of tools to run a successful 3D printing business. 
        Here are the genuinely useful accessories I recommend:
      </p>

      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Extra Build Plates</h3>
          <p className="text-gray-700 mb-4">
            This is my #1 recommendation for productivity:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Why They Matter</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Allows immediate start of a new print after finishing one</li>
                <li>While one print cools, you can start the next print</li>
                <li>Can nearly double your daily output</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Recommended Quantity</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>One extra plate per printer minimum</li>
                <li>For high-volume production, consider 2-3 extras per printer</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md mt-4 border border-gray-200">
            <h4 className="font-semibold mb-2">Optimal Workflow with Multiple Plates</h4>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Remove plate with finished print</li>
              <li>Insert fresh plate</li>
              <li>Start new print</li>
              <li>Process the finished print while the new one runs</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Proper Build Plate Care</h3>
          <p className="text-gray-700 mb-4">
            Build plates are extremely sensitive to oils and dust:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Cleaning Method</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Hot water and dish soap</li>
                <li>Towel dry completely</li>
                <li>Avoid touching the print surface with bare fingers</li>
                <li>Use thin gloves when handling plates</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Frequency</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Clean before every print for best adhesion</li>
                <li>Deep clean when switching materials</li>
                <li>Even invisible finger oils can cause adhesion problems</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Basic Maintenance Tools</h3>
          <p className="text-gray-700">
            Just a few items will handle 95% of your maintenance needs:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Print Removal</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Quality scraper (flexible metal preferred)</li>
                <li>Precision spatula for detailed work</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Replacement Parts</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Extra hotends/nozzles</li>
                <li>Spare PTFE tubes</li>
                <li>Extra belts</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Tools</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Hex key set for your printer model</li>
                <li>Precision tweezers</li>
                <li>Small brush for cleaning</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Nozzle Considerations</h3>
          <p className="text-gray-700 mb-4">
            While specialty nozzles exist, the stock options work perfectly for most businesses:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Nozzle Materials</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-medium">Standard brass nozzles:</span> Perfect for PLA, PETG, and most standard materials
                </li>
                <li>
                  <span className="font-medium">Hardened steel nozzles:</span> Only needed for abrasive materials like carbon fiber composites
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Nozzle Sizes</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-medium">0.4mm:</span> The versatile standard
                </li>
                <li>
                  <span className="font-medium">0.6mm, 0.8mm:</span> For faster structural prints
                </li>
                <li>
                  <span className="font-medium">0.2mm:</span> For fine details
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md mt-4">
            <p className="text-sm">
              <span className="font-semibold">Pro Tip:</span> I primarily use standard 0.4mm brass nozzles for my businesses – they provide the best balance of detail and speed for most products.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
