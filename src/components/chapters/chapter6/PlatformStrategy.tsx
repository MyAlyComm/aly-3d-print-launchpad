
import { Card, CardContent } from "@/components/ui/card";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";

export const PlatformStrategy = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Finding Your Perfect Starting Platform</h2>
      
      <p className="text-gray-700">
        After hearing success stories from entrepreneurs in various niches, you might be wondering: "Which platform should I start with?" Let me simplify the decision process by focusing on the four most effective platforms for 3D printing businesses in their first 30 days.
      </p>
      
      <p className="text-gray-700">
        None of these platforms require extensive setup work (although Amazon can be a bit daunting at first), and each offers unique advantages depending on your products and goals.
      </p>
      
      <h3 className="text-xl font-semibold mt-8">Option 1: Facebook Marketplace - The Universal Starting Point</h3>
      
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <p className="text-gray-800 mb-4">
            Facebook Marketplace is a perfect place to start no matter what you sell. You'll be able to get up and running right away, improve listings over time, and get immediate feedback and sales. I recommend this platform to almost everyone for these reasons:
          </p>
          
          <h4 className="font-semibold mb-2">Key Advantages:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
            <li><span className="font-medium">Zero barrier to entry:</span> If you already have a Facebook account, you can post a listing in under 5 minutes</li>
            <li><span className="font-medium">No fees for local pickup:</span> Keep 100% of your sale price when customers pick up locally</li>
            <li><span className="font-medium">Immediate visibility:</span> Your items appear in local feeds immediately without complex ranking algorithms</li>
            <li><span className="font-medium">Direct communication:</span> Message directly with customers to build relationships and learn preferences</li>
            <li><span className="font-medium">Testing ground:</span> Try different pricing, descriptions, and products with minimal risk</li>
          </ul>
          
          <p className="text-gray-800">
            Facebook Marketplace is especially valuable if you're just starting out and want to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Generate immediate cash flow to reinvest</li>
            <li>Test products without shipping logistics</li>
            <li>Build confidence through face-to-face transactions</li>
            <li>Minimize upfront investment</li>
          </ul>
          
          <p className="italic text-gray-600 mt-4">
            Even if you plan to eventually sell primarily on other platforms, I highly recommend starting with at least a few Facebook Marketplace listings to get immediate market feedback.
          </p>
        </CardContent>
      </Card>
      
      <h3 className="text-xl font-semibold mt-8">Option 2: Etsy - The Creative Haven</h3>
      
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6">
          <p className="text-gray-800 mb-4">
            Etsy is ideal for almost everything except products that have ultra-high competition or are expensive to ship. If your items have any unique or creative elements, Etsy gives you access to a global audience actively seeking handmade and distinctive goods.
          </p>
          
          <h4 className="font-semibold mb-2">Key Advantages:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
            <li><span className="font-medium">Built-in audience:</span> Millions of buyers specifically looking for unique, handmade items</li>
            <li><span className="font-medium">Customization opportunities:</span> Perfect for personalized or made-to-order items</li>
            <li><span className="font-medium">Brand building:</span> Establish a shop identity that customers can follow and return to</li>
            <li><span className="font-medium">Trust factor:</span> Buyers feel confident purchasing through Etsy's established platform</li>
            <li><span className="font-medium">International reach:</span> Access global customers without building your own website</li>
          </ul>
          
          <p className="text-gray-800">
            Etsy particularly shines for:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Products with unique designs or creative elements</li>
            <li>Items that can be personalized (names, colors, sizes)</li>
            <li>Products with interesting stories or processes</li>
            <li>Gifts and specialty items that benefit from the "handmade" perception</li>
          </ul>
          
          <p className="italic text-gray-600 mt-4">
            While Etsy does have listing fees ($0.20) and transaction fees (6.5%), the built-in traffic and trust factor often make these costs worthwhile, especially for beginners.
          </p>
        </CardContent>
      </Card>
      
      <h3 className="text-xl font-semibold mt-8">Option 3: Your Own Website - For Brand Builders</h3>
      
      <Card className="bg-purple-50 border-purple-200">
        <CardContent className="p-6">
          <p className="text-gray-800 mb-4">
            Your own website gives you complete control but comes with the challenge of driving your own traffic. This option makes the most sense when:
          </p>
          
          <h4 className="font-semibold mb-2">Key Advantages:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
            <li><span className="font-medium">Complete brand control:</span> Design every aspect of the customer experience</li>
            <li><span className="font-medium">Higher profit margins:</span> No marketplace fees (though payment processing fees still apply)</li>
            <li><span className="font-medium">No competition:</span> Customers only see your products, not competitors'</li>
            <li><span className="font-medium">Business asset:</span> Build a property you fully own and control long-term</li>
            <li><span className="font-medium">Customer relationships:</span> Direct access to customer data for marketing</li>
          </ul>
          
          <p className="text-gray-800">
            This approach works best if:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>You already have a following or traffic source</li>
            <li>You're building a distinctive brand with multiple product lines</li>
            <li>You have marketing experience or budget for advertising</li>
            <li>You're thinking long-term and willing to invest up front</li>
          </ul>
          
          <p className="italic text-gray-600 mt-4">
            For most beginners, I recommend starting on marketplaces first and adding your own website once you've validated products and built some audience.
          </p>
        </CardContent>
      </Card>
      
      <h3 className="text-xl font-semibold mt-8">Option 4: Amazon - The Volume Game</h3>
      
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-6">
          <p className="text-gray-800 mb-4">
            Amazon offers massive exposure but comes with higher fees and more complex requirements. This platform makes sense when:
          </p>
          
          <h4 className="font-semibold mb-2">Key Advantages:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
            <li><span className="font-medium">Enormous traffic:</span> Access to hundreds of millions of customers</li>
            <li><span className="font-medium">Fulfillment infrastructure:</span> Option to use FBA for storing and shipping products</li>
            <li><span className="font-medium">Prime eligibility:</span> Attract Amazon's most valuable customers</li>
            <li><span className="font-medium">Trust and credibility:</span> Leverage Amazon's established customer trust</li>
            <li><span className="font-medium">International expansion:</span> Relatively easy pathway to global markets</li>
          </ul>
          
          <p className="text-gray-800">
            Amazon works best for:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Standardized products with broad appeal</li>
            <li>Items that can be produced in consistent volume</li>
            <li>Products that benefit from Amazon's fulfillment network</li>
            <li>Businesses with capacity to manage Amazon's requirements</li>
          </ul>
          
          <p className="italic text-gray-600 mt-4">
            The higher fees (typically 15% plus FBA costs if applicable) and stricter requirements make Amazon better suited as a second or third platform for most 3D printing businesses.
          </p>
        </CardContent>
      </Card>
      
      <h3 className="text-xl font-semibold mt-8">Making Your Listings Stand Out</h3>
      
      <p className="text-gray-700">
        No matter which platform you choose, certain principles will help your listings perform better:
      </p>
      
      <ChapterGrid className="grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Professional Photography</h4>
            <p className="text-gray-700 mb-3">
              The single biggest factor in marketplace success is image quality:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Use natural light when possible (near windows, outdoors on cloudy days)</li>
              <li>Create a simple lightbox using white poster board and a lamp</li>
              <li>Capture multiple angles (at least 5-7 different views)</li>
              <li>Include scale reference for size perspective</li>
              <li>Show the product in use (lifestyle shots)</li>
              <li>Maintain consistent visual style across all products</li>
            </ul>
            <p className="text-gray-600 italic mt-3">
              Even smartphone photos can look professional with good lighting and composition. Investing time in creating quality photos pays massive dividends in conversion rates.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Strategic Pricing</h4>
            <p className="text-gray-700 mb-3">
              Your pricing strategy should consider more than just your costs:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Research competitor pricing (both 3D printed and traditional alternatives)</li>
              <li>Consider psychological pricing points ($29.99 vs $30.00)</li>
              <li>Factor in platform fees when setting prices</li>
              <li>Create tiered pricing for different variations or bundle options</li>
              <li>Test different price points to find the optimal balance of volume and profit</li>
            </ul>
            <p className="text-gray-600 italic mt-3">
              I typically start with a slightly lower price to generate initial sales and reviews, then gradually increase as I build a reputation.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Compelling Descriptions</h4>
            <p className="text-gray-700 mb-3">
              Your product descriptions need to balance SEO with persuasive content:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Front-load key details in the first 2-3 sentences</li>
              <li>Use bullet points to highlight features and benefits</li>
              <li>Address common questions before they're asked</li>
              <li>Include specific dimensions and material information</li>
              <li>Tell the story of why you created this product</li>
              <li>Use keywords naturally throughout (don't keyword stuff)</li>
            </ul>
            <p className="text-gray-600 italic mt-3">
              Remember that most shoppers skim rather than read, so make your descriptions easy to scan while still containing all necessary information.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Transparent Policies</h4>
            <p className="text-gray-700 mb-3">
              Clear policies build trust and prevent misunderstandings:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Shipping timeframes (be slightly conservative to ensure you meet expectations)</li>
              <li>Return and exchange conditions</li>
              <li>Handling of customized items</li>
              <li>Production process and timelines</li>
              <li>Care instructions for your products</li>
            </ul>
            <p className="text-gray-600 italic mt-3">
              Being upfront about your policies reduces customer service issues and builds trust, especially important when you're just starting out.
            </p>
          </CardContent>
        </Card>
      </ChapterGrid>
    </div>
  );
};
