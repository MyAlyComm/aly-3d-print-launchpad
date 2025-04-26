
import { Card, CardContent } from "@/components/ui/card";

export const PrinterSelection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Top Printer Recommendations</h2>
      
      <p className="text-gray-700">
        Based on extensive testing and real-world business use, here are my top recommendations across different price points and use cases.
      </p>

      <Card className="border-green-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-2">Budget Option: Bambu Lab A1 Mini</h3>
          <p className="text-sm text-emerald-600 font-medium mb-3">$489 with AMS or $249 without</p>
          <p className="text-gray-700">
            This compact workhorse delivers exceptional value with excellent print quality right out of the box.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="text-sm font-semibold">Specifications</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Build volume: 180mm × 180mm × 180mm</li>
                <li>Enclosed design</li>
                <li>Exceptional reliability</li>
                <li>Easy setup</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Best For</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Beginners</li>
                <li>Small product businesses</li>
                <li>Limited workspace</li>
              </ul>
              <h4 className="text-sm font-semibold mt-3">Limitations</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Smaller build volume</li>
                <li>Single material printing (without AMS)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-md mt-3">
            <p className="text-sm">
              <span className="font-semibold">Pro Tip:</span> If you can afford it, I highly recommend going with the AMS unit as it allows you to print multi-color and multi-material.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-2">Budget Full-Sized Options</h3>
          
          <div className="space-y-5">
            <div>
              <h4 className="font-medium">Elegoo Centauri Carbon <span className="text-sm text-blue-600">($699)</span></h4>
              <p className="text-sm text-gray-700 mt-1">
                Offers excellent value with a larger build area and solid reliability.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium">Bambu Lab A1 with AMS <span className="text-sm text-blue-600">($599)</span></h4>
              <p className="text-sm text-gray-700 mt-1">
                Gives you access to Bambu's ecosystem and multi-material printing.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="text-sm font-semibold">Specifications</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Build volume: 250mm × 250mm × 250mm</li>
                <li>Multi-material capability</li>
                <li>Solid reliability</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Best For</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Medium-sized products</li>
                <li>Basic multi-color items</li>
              </ul>
              <h4 className="text-sm font-semibold mt-3">Limitations</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Semi-enclosed (monitor if you have kids or pets)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-2">Best Value: Bambu Lab P1S Combo</h3>
          <p className="text-sm text-purple-600 font-medium mb-3">$899</p>
          <p className="text-gray-700">
            The sweet spot for most businesses, sharing most features with the more expensive X1C but at a more accessible price point.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="text-sm font-semibold">Specifications</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Build volume: 256mm × 256mm × 256mm</li>
                <li>Fully enclosed</li>
                <li>AMS included</li>
                <li>Exceptional speed</li>
                <li>Excellent reliability</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Best For</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Growing businesses</li>
                <li>Multi-material capabilities</li>
              </ul>
              <h4 className="text-sm font-semibold mt-3">Limitations</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Slightly more complex interface than X1C</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-indigo-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-2">Premium Option: Bambu Lab X1C</h3>
          <p className="text-sm text-indigo-600 font-medium mb-3">$1199</p>
          <p className="text-gray-700">
            The ultimate in user-friendliness and reliability - my personal favorite for its touchscreen interface and exceptional build quality.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="text-sm font-semibold">Specifications</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Build volume: 256mm × 256mm × 256mm</li>
                <li>Touchscreen interface</li>
                <li>Fully enclosed</li>
                <li>Exceptional print quality</li>
                <li>Class-leading reliability</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Best For</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Businesses prioritizing ease of use</li>
                <li>Premium features</li>
              </ul>
              <h4 className="text-sm font-semibold mt-3">Limitations</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Higher price point</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-2">XL Options for Larger Builds</h3>
          
          <div className="space-y-5">
            <div>
              <h4 className="font-medium">Prusa XL <span className="text-sm text-amber-600">($1999)</span></h4>
              <p className="text-sm text-gray-700 mt-1">
                Excels with its reliability and community support.
              </p>
              <p className="text-sm text-gray-500 mt-1">Build volume: 360mm × 360mm × 360mm</p>
            </div>
            
            <div>
              <h4 className="font-medium">Bambu Lab H2D <span className="text-sm text-amber-600">($2499)</span></h4>
              <p className="text-sm text-gray-700 mt-1">
                Offers incredible speed along with size.
              </p>
              <p className="text-sm text-gray-500 mt-1">Build volume: 400mm × 400mm × 350mm</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="text-sm font-semibold">Best For</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Large single-piece products</li>
                <li>High-volume batch production</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Limitations</h4>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Higher initial investment</li>
                <li>Larger footprint</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Buying Used Printers - What to Look For</h3>
        
        <p className="text-gray-700 mb-4">
          Buying used printers can be a smart business move if you know what to look for. Here's my guide to evaluating used machines:
        </p>
        
        <h4 className="font-semibold mb-2">Hour Count Guidelines</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
          <div className="bg-green-50 p-3 rounded-md">
            <p className="text-xs font-semibold">Under 200 hours</p>
            <p className="text-xs">Practically brand new, minimal wear</p>
          </div>
          <div className="bg-green-100 p-3 rounded-md">
            <p className="text-xs font-semibold">200-800 hours</p>
            <p className="text-xs">Still very new, may need minor maintenance</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded-md">
            <p className="text-xs font-semibold">800-1500 hours</p>
            <p className="text-xs">Moderate use, will need some maintenance soon</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-md">
            <p className="text-xs font-semibold">1500-2000 hours</p>
            <p className="text-xs">Heavily used, expect to replace wear parts soon</p>
          </div>
          <div className="bg-red-50 p-3 rounded-md">
            <p className="text-xs font-semibold">Over 2000 hours</p>
            <p className="text-xs">Safer to buy new unless heavily discounted</p>
          </div>
        </div>
        
        <h4 className="font-semibold mb-2">Key Inspection Points</h4>
        <ul className="list-disc pl-5 text-sm space-y-1 mb-4">
          <li>Nozzle condition: Look for wear, buildup, or damage</li>
          <li>Linear rails/bearings: Check for smooth movement without catching</li>
          <li>Belts: Inspect for fraying, proper tension, and alignment</li>
          <li>Heat bed: Check for scratches, warping, or damage</li>
          <li>Electronics: Test all functions including heating elements</li>
        </ul>
        
        <div className="bg-red-50 p-4 rounded-md mb-4">
          <h4 className="font-semibold mb-2 text-red-700">Red Flags</h4>
          <ul className="list-disc pl-5 text-sm space-y-1 text-red-700">
            <li>Seller unwilling to show the printer printing</li>
            <li>Visible modifications without clear explanation</li>
            <li>Missing original parts replaced with non-standard components</li>
            <li>Strong burnt plastic smell (sign of previous failed prints)</li>
            <li>Excessive wobble in the frame or build plate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
