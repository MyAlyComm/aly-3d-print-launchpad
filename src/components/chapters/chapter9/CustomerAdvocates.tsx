
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";

export const CustomerAdvocates = () => {
  return (
    <div className="space-y-8">
      <ChapterSection title="Creating Customer Advocates">
        <div className="space-y-6">
          <p>
            Your happiest customers can become your most effective marketing force—if you give them the tools 
            and incentives to do so. This step transforms one-time buyers into ongoing advocates who bring 
            new customers to you.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">The Digital-Physical Connection</h3>
            <p>
              Unlike purely digital products, your physical items exist in the real world where they're seen 
              and discussed. This unique advantage allows you to leverage real-world interactions and 
              create tangible moments that inspire sharing.
            </p>
          </div>
          
          <ChapterGrid className="grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard 
              title="Advocate Programs" 
              points={[
                "Formalized referral systems with tracking",
                "Exclusive early access to new products",
                "Personalized discount codes to share",
                "VIP support and community access",
                "Recognition and special status"
              ]}
            />
            
            <InfoCard 
              title="Shareable Moments" 
              points={[
                "Instagram-worthy packaging design",
                "Personalized thank you notes",
                "Surprise upgrades or gifts",
                "Photo contests with your products",
                "Hashtag campaigns with incentives"
              ]}
            />
            
            <InfoCard 
              title="Community Building" 
              points={[
                "Facebook groups for your customers",
                "Virtual and in-person meetups",
                "User-generated content features",
                "Customer spotlight series",
                "Beta testing groups for new products"
              ]}
            />
          </ChapterGrid>
          
          <p className="italic">
            The most successful 3D printing businesses I've observed don't just sell products—they create communities 
            around their brand. These communities become powerful engines for both product development feedback and 
            organic marketing through authentic word-of-mouth.
          </p>
        </div>
      </ChapterSection>
      
      <ChapterSection title="The $20K+ Opportunity Landscape">
        <div className="space-y-6">
          <p>
            For those with ambitions beyond $20K monthly, here are the proven models I've observed among successful 
            3D printing entrepreneurs:
          </p>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100 mb-6">
            <h3 className="text-xl font-semibold mb-3">1. The Specialized B2B Provider</h3>
            <p className="mb-3">
              Several entrepreneurs have built $100K+ monthly businesses by focusing exclusively on business clients:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Creating custom promotional products for corporate events</li>
              <li>Developing specialty items for retail chains</li>
              <li>Producing customized tools or equipment for specific industries</li>
              <li>Manufacturing proprietary components for other businesses</li>
            </ul>
            <p className="mt-3 text-sm italic">
              This approach typically involves fewer, larger orders with more predictable production scheduling, 
              though it requires strong account management skills and more formal business processes.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100 mb-6">
            <h3 className="text-xl font-semibold mb-3">2. The Multi-Channel Brand</h3>
            <p className="mb-3">
              Some entrepreneurs have built $200K+ monthly businesses by developing strong brands across multiple channels:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Owned e-commerce website with direct customer relationships</li>
              <li>Strong marketplace presence (Etsy, Amazon, etc.)</li>
              <li>Wholesale relationships with brick-and-mortar retailers</li>
              <li>Licensing agreements for designs and intellectual property</li>
            </ul>
            <p className="mt-3 text-sm italic">
              This model creates multiple revenue streams and reduced platform risk, though it requires sophisticated 
              inventory management and consistent brand experience across channels.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-50 to-emerald-50 p-6 rounded-lg border border-cyan-100 mb-6">
            <h3 className="text-xl font-semibold mb-3">3. The Hybrid Production Ecosystem</h3>
            <p className="mb-3">
              Several of the most successful enterprises combine 3D printing with complementary production methods:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Core components made with traditional manufacturing for efficiency</li>
              <li>Customization and personalization via 3D printing</li>
              <li>Finishing and assembly bringing everything together</li>
              <li>Packaging and presentation creating premium positioning</li>
            </ul>
            <p className="mt-3 text-sm italic">
              This approach offers the efficiency of traditional manufacturing with the flexibility of 3D printing, 
              though it requires more complex supply chain management and higher initial investment.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50 to-amber-50 p-6 rounded-lg border border-emerald-100">
            <h3 className="text-xl font-semibold mb-3">4. The Design and License Model</h3>
            <p className="mb-3">
              Some entrepreneurs focus primarily on design, licensing their work to others for production:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Creating premium STL files with commercial rights</li>
              <li>Developing unique design systems or templates</li>
              <li>Building communities around their design aesthetic</li>
              <li>Partnering with production facilities for physical fulfillment</li>
            </ul>
            <p className="mt-3 text-sm italic">
              This model separates design from production, allowing unlimited scaling of the design side 
              while others handle manufacturing complexity.
            </p>
          </div>
        </div>
      </ChapterSection>
    </div>
  );
};
