
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";

export const Introduction = () => {
  return (
    <div className="space-y-8">
      <div className="my-8">
        <img
          src="/lovable-uploads/1935bd17-362f-4c25-bc16-bb5b81522fc8.png"
          alt="Scaling Beyond $5K"
          className="w-full rounded-lg shadow-lg mb-8"
        />
      </div>
      
      <h1 className="text-3xl font-bold tracking-tight">
        Chapter 9: Scaling Beyond $5K
      </h1>
      
      <ChapterSection title="Introduction: The Next Horizon">
        <div className="space-y-6">
          <p>
            If you've followed the systems and frameworks in the previous chapters, you should be 
            approaching or have already reached your first $2000-5,000 month. Congratulations—you've 
            accomplished something remarkable that puts you ahead of 95% of people who ever consider 
            starting a 3D printing business. You've validated your products, established reliable 
            production systems, and built initial customer relationships.
          </p>
          
          <p className="font-medium">
            But this is just the beginning.
          </p>
          
          <p>
            When I hit my first $5K month, I realized something important: the skills and systems that 
            got me to $5K were different from what I would need to reach $10K, $20K, and beyond. The 
            scaling journey isn't just about doing more of the same—it's about transformational changes 
            to your business model, production capacity, and market approach.
          </p>
          
          <p>
            In this chapter, we'll examine the strategic shifts needed to scale beyond $5K per month, 
            the common obstacles that prevent growth, and the frameworks I've developed to overcome 
            these challenges.
          </p>
        </div>
      </ChapterSection>
      
      <ChapterSection title="The Scaling Mindset Shift">
        <div className="space-y-6">
          <p>
            The first and most important change happens in your mind. At the $5K level, you're no longer 
            just testing a business idea—you're running a legitimate business. This requires a different mindset:
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">From Operator to Owner</h3>
            <p className="mb-4">
              When you first started, you were personally handling every aspect of your business:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Slicing files</li>
              <li>Operating printers</li>
              <li>Post-processing prints</li>
              <li>Taking photos</li>
              <li>Writing listings</li>
              <li>Packing orders</li>
              <li>Responding to customers</li>
            </ul>
            <p>
              This hands-on approach was perfect for learning and proving your concept. But to scale beyond 
              $5K, you need to transition from being the primary operator to becoming a strategic owner. This means:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Identifying which tasks truly require your unique skills</li>
              <li>Creating systems and documentation for everything else</li>
              <li>Beginning to delegate or automate lower-value activities</li>
              <li>Focusing your time on strategic growth opportunities</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">The Rule of Highest and Best Use</h3>
            <p className="mb-4">I use a simple framework to determine where I should spend my time. I call it the "Highest and Best Use" principle:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>List every task you perform in your business</li>
              <li>
                Rate each on a scale of 1-10 for:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>How much revenue it directly generates</li>
                  <li>How much you personally enjoy it</li>
                  <li>How much it requires your unique skills</li>
                </ul>
              </li>
              <li>Focus exclusively on tasks scoring 8+ in at least two categories</li>
              <li>Create systems to handle everything else</li>
            </ol>
            <p className="mt-4">
              For most 3D printing entrepreneurs, this exercise reveals that product selection, marketing strategy, 
              and key customer relationships should remain your focus, while production, basic customer service, 
              and order fulfillment can be systematized or delegated.
            </p>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Production Scaling Strategies">
        <div className="space-y-6">
          <p>
            The production limitations of a few printers in your spare room will become apparent as you approach $5K 
            monthly revenue. Here are the three primary scaling strategies I've seen work consistently:
          </p>
          
          <ChapterGrid className="grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard 
              title="Strategy 1: Print Farm Expansion" 
              points={[
                "Add more printers to increase production capacity",
                "Create dedicated production space",
                "Implement print management systems",
                "Maintain complete quality control",
                "Reinvest 30-40% of profits into new equipment"
              ]}
            />
            
            <InfoCard 
              title="Strategy 2: Production Partnership" 
              points={[
                "Partner with existing print shops",
                "Create detailed production standards",
                "Develop quality assurance processes",
                "Minimal upfront investment needed",
                "Faster scaling with less operational complexity"
              ]}
            />
            
            <InfoCard 
              title="Strategy 3: Hybrid Manufacturing" 
              points={[
                "Combine 3D printing with other methods",
                "Use traditional manufacturing for simple parts",
                "Reserve 3D printing for custom components",
                "Reduce per-unit costs at scale",
                "Create stronger barriers to competition"
              ]}
            />
          </ChapterGrid>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Real-World Example</h3>
            <p>
              When I scaled to 16 printers, I had to develop a system for managing them efficiently. 
              I created a "printer dashboard" spreadsheet that tracked:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Each printer's utilization rate</li>
              <li>Maintenance schedule</li>
              <li>Product specialization (dedicating specific printers to specific products)</li>
              <li>ROI for each machine</li>
            </ul>
            <p className="mt-3">
              This allowed me to identify my most profitable printers and products, guiding future expansion decisions.
            </p>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Market Expansion Strategies">
        <div className="space-y-6">
          <p>
            Once your production and fulfillment systems can handle increased volume, it's time to strategically 
            expand your market reach. Here are three proven approaches based on your Product Trinity:
          </p>
          
          <ChapterGrid className="grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3">Product Line Expansion</h4>
              <p className="mb-3 text-sm text-gray-700">
                Create complementary products that appeal to your existing customer base to increase order value 
                and purchase frequency.
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Analyze your best-sellers</li>
                <li>Develop 2-3 complementary products</li>
                <li>Introduce to existing customers first</li>
                <li>Create product bundles</li>
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3">Channel Diversification</h4>
              <p className="mb-3 text-sm text-gray-700">
                Take your proven products to new selling platforms to reduce platform risk and reach 
                new customer segments.
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Identify 1-2 new platforms</li>
                <li>Adapt listings for each platform</li>
                <li>Start with 20% production allocation</li>
                <li>Analyze results after 30 days</li>
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3">Geographic Expansion</h4>
              <p className="mb-3 text-sm text-gray-700">
                Target new geographic markets with your proven products to tap into entirely new customer bases.
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Research shipping options</li>
                <li>Adapt for cultural differences</li>
                <li>Create region-specific promotions</li>
                <li>Consider local production partnerships</li>
              </ul>
            </div>
          </ChapterGrid>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Building Your Team">
        <div className="space-y-6">
          <p>
            Perhaps the most significant transition beyond $5K is from solo entrepreneur to team leader. 
            Here's my framework for adding team members strategically:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left border-b text-sm font-medium">If Your Bottleneck Is:</th>
                  <th className="py-3 px-4 text-left border-b text-sm font-medium">Your First Hire Should Be:</th>
                  <th className="py-3 px-4 text-left border-b text-sm font-medium">Expected Impact:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm">Production capacity</td>
                  <td className="py-3 px-4 text-sm">Production assistant</td>
                  <td className="py-3 px-4 text-sm">30-50% output increase</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm">Order fulfillment</td>
                  <td className="py-3 px-4 text-sm">Shipping coordinator</td>
                  <td className="py-3 px-4 text-sm">70-90% time savings in fulfillment</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm">Customer service</td>
                  <td className="py-3 px-4 text-sm">Customer support rep</td>
                  <td className="py-3 px-4 text-sm">80-95% reduction in support time</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm">Marketing content</td>
                  <td className="py-3 px-4 text-sm">Content creator</td>
                  <td className="py-3 px-4 text-sm">3-5x increase in marketing output</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm">Product design</td>
                  <td className="py-3 px-4 text-sm">3D designer</td>
                  <td className="py-3 px-4 text-sm">2-4x new product development speed</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">
            The right first hire depends entirely on your specific situation. For me, it was a production assistant 
            who managed printer operations, allowing me to focus on marketing and new product development. This single 
            hire increased our output by 40% while freeing up 15-20 hours of my time weekly.
          </p>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Cash Flow Management for Growth">
        <div className="space-y-6">
          <p>
            As you scale beyond $5K, cash flow management becomes increasingly critical. Here's my framework for 
            financial management during growth phases:
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">The 30/30/30/10 Rule</h3>
            <p className="mb-3">I allocate revenue according to this framework:</p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-24 h-6 bg-green-600 rounded-l-md"></div>
                <span className="ml-2 text-sm font-medium">30% to materials and direct production costs</span>
              </div>
              <div className="flex items-center">
                <div className="w-24 h-6 bg-blue-600 rounded-l-md"></div>
                <span className="ml-2 text-sm font-medium">30% to growth investments (equipment, marketing)</span>
              </div>
              <div className="flex items-center">
                <div className="w-24 h-6 bg-purple-600 rounded-l-md"></div>
                <span className="ml-2 text-sm font-medium">30% to profit (including your compensation)</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-6 bg-amber-600 rounded-l-md"></div>
                <span className="ml-2 text-sm font-medium">10% to cash reserves</span>
              </div>
            </div>
            <p className="mt-4">
              This distribution ensures you're building a sustainable business while still fueling growth. Many 
              entrepreneurs make the mistake of either taking too little profit (leading to burnout) or 
              reinvesting too little (stunting growth potential).
            </p>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Strategic Decision Framework for $10K and Beyond">
        <div className="space-y-6">
          <p>
            As you approach $10K monthly revenue, you'll face important strategic decisions about the future 
            direction of your business. Use this framework to evaluate your options:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left border-b text-sm font-medium">Growth Path</th>
                  <th className="py-3 px-4 text-left border-b text-sm font-medium">Description</th>
                  <th className="py-3 px-4 text-left border-b text-sm font-medium">Ideal For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-sm font-medium">Boutique Specialist</td>
                  <td className="py-3 px-4 text-sm">High-value, lower volume with premium positioning</td>
                  <td className="py-3 px-4 text-sm">Those valuing lifestyle flexibility and creative control</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium">Volume Producer</td>
                  <td className="py-3 px-4 text-sm">High-volume, standardized production with operational efficiency</td>
                  <td className="py-3 px-4 text-sm">Those focused on systems and growth</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium">Brand Builder</td>
                  <td className="py-3 px-4 text-sm">Creating a recognized brand that can expand beyond 3D printing</td>
                  <td className="py-3 px-4 text-sm">Those with marketing strength and broader vision</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium">Technology Innovator</td>
                  <td className="py-3 px-4 text-sm">Developing proprietary systems, designs, or printing techniques</td>
                  <td className="py-3 px-4 text-sm">Those with technical expertise and interest in IP development</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">
            Each path requires different skills, resources, and strategies. The most common mistake at this stage 
            is trying to pursue multiple paths simultaneously, which dilutes focus and resources.
          </p>
          
          <p className="italic">
            I chose the Brand Builder path, focusing on creating a recognizable identity that could eventually 
            expand beyond physical products to include digital assets, training, and production systems. This 
            choice informed all subsequent decisions about product development, marketing, and team building.
          </p>
        </div>
      </ChapterSection>
    </div>
  );
};
