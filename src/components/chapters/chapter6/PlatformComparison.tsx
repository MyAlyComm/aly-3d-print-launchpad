
import { Card, CardContent } from "@/components/ui/card";

export const PlatformComparison = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Quick Platform Comparison</h2>
      
      <p className="text-gray-700">
        Before diving into specifics, let's compare the major platforms at a glance to understand their key differences and requirements.
      </p>

      <div className="overflow-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Platform</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">One-Time Setup Cost</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Monthly Cost</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Listing Fees</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Transaction Fees</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Setup Time</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Existing Traffic</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Best Product Types</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b font-medium">Facebook Marketplace</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">5% (shipped items only)</td>
              <td className="py-3 px-4 border-b">30 min</td>
              <td className="py-3 px-4 border-b text-green-600 font-medium">Excellent</td>
              <td className="py-3 px-4 border-b">Local items, home goods</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b font-medium">Etsy</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">$0.20/listing</td>
              <td className="py-3 px-4 border-b">6.5% + $0.30 per sale</td>
              <td className="py-3 px-4 border-b">2-3 hours</td>
              <td className="py-3 px-4 border-b text-green-600 font-medium">Very Good</td>
              <td className="py-3 px-4 border-b">Unique, creative items</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b font-medium">Your Website</td>
              <td className="py-3 px-4 border-b">$0-$299 (theme/design)</td>
              <td className="py-3 px-4 border-b">$29+/mo</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">2.9%+ (payment processor)</td>
              <td className="py-3 px-4 border-b">1-2 days</td>
              <td className="py-3 px-4 border-b text-red-600 font-medium">None</td>
              <td className="py-3 px-4 border-b">Brand-focused lines</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b font-medium">Amazon</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">$39.99/mo</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">15% + various fees</td>
              <td className="py-3 px-4 border-b">1-3 days</td>
              <td className="py-3 px-4 border-b text-green-600 font-medium">Excellent</td>
              <td className="py-3 px-4 border-b">Functional, mainstream</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b font-medium">Amazon Handmade</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">15% (no monthly fee)</td>
              <td className="py-3 px-4 border-b">2-4 days</td>
              <td className="py-3 px-4 border-b text-green-600 font-medium">Very Good</td>
              <td className="py-3 px-4 border-b">Artisan, premium items</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b font-medium">eBay</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">$0</td>
              <td className="py-3 px-4 border-b">$0-$0.35/listing</td>
              <td className="py-3 px-4 border-b">~12.9% + $0.30</td>
              <td className="py-3 px-4 border-b">1-2 hours</td>
              <td className="py-3 px-4 border-b text-green-500">Good</td>
              <td className="py-3 px-4 border-b">Unique, collectible items</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Beyond the Numbers</h3>
          <p className="text-gray-700">
            What this table doesn't show is the opportunity cost of your time, which is why I recommend platforms with existing customer bases when you're first starting out. 
          </p>
          <p className="font-medium mt-3">
            Why spend weeks building a website and trying to drive traffic when you could be getting immediate sales on established marketplaces?
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
