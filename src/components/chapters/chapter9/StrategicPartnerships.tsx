
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";

export const StrategicPartnerships = () => {
  return (
    <div className="space-y-8">
      <ChapterSection title="Inventory and Fulfillment Systems">
        <div className="space-y-6">
          <p>
            As you scale beyond $5K, manual inventory tracking and improvised shipping processes quickly 
            become bottlenecks. Here's how to build robust systems that scale:
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-xl font-semibold mb-4">Inventory Management Evolution</h3>
            <p className="mb-3">
              The inventory system that works at $5K will break down at $10K and beyond. Here's the progression I recommend:
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-indigo-800">Level 1: Basic Tracking (Up to $5K monthly)</h4>
                <ul className="list-disc pl-6 mt-1 text-sm space-y-1">
                  <li>Spreadsheet-based inventory counts</li>
                  <li>Manual reorder triggers</li>
                  <li>Simple categorization by product</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-indigo-800">Level 2: Intermediate Systems ($5K-$10K monthly)</h4>
                <ul className="list-disc pl-6 mt-1 text-sm space-y-1">
                  <li>Barcode/QR code implementation</li>
                  <li>Dedicated inventory management software</li>
                  <li>Reorder point automation</li>
                  <li>Batch tracking</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-indigo-800">Level 3: Advanced Integration ($10K+ monthly)</h4>
                <ul className="list-disc pl-6 mt-1 text-sm space-y-1">
                  <li>Integration with selling platforms</li>
                  <li>Real-time inventory visibility</li>
                  <li>Predictive inventory forecasting</li>
                  <li>Just-in-time production scheduling</li>
                </ul>
              </div>
            </div>
            
            <p className="mt-4 italic text-sm">
              I made the mistake of waiting too long to implement proper inventory systems. When I suddenly 
              received a large wholesale order, I had to manually count everything, which took an entire day. 
              Don't repeat my mistake—invest in inventory systems before you think you need them.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-100">
            <h3 className="text-xl font-semibold mb-4">Fulfillment Strategy Upgrade</h3>
            <p className="mb-3">
              Your fulfillment process needs to evolve as order volume increases:
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-purple-800">Level 1: Manual Processing (Up to 10 orders/day)</h4>
                <ul className="list-disc pl-6 mt-1 text-sm space-y-1">
                  <li>Handwritten shipping labels</li>
                  <li>Ad-hoc packing materials</li>
                  <li>Shipping as orders come in</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-purple-800">Level 2: Semi-Automated (10-25 orders/day)</h4>
                <ul className="list-disc pl-6 mt-1 text-sm space-y-1">
                  <li>Shipping label printer</li>
                  <li>Standardized packaging materials</li>
                  <li>Batch processing of orders</li>
                  <li>Shipping software integration</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-purple-800">Level 3: Fully Optimized (25+ orders/day)</h4>
                <ul className="list-disc pl-6 mt-1 text-sm space-y-1">
                  <li>Dedicated packing station</li>
                  <li>Shipping rate automation</li>
                  <li>Integrated order management</li>
                  <li>Standardized operating procedures</li>
                  <li>Batch fulfillment scheduling</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-purple-800">Level 4: Outsourced Fulfillment (50+ orders/day)</h4>
                <ul className="list-disc pl-6 mt-1 text-sm space-y-1">
                  <li>Third-party logistics partnerships</li>
                  <li>Inventory distribution to fulfillment centers</li>
                  <li>Automated order routing</li>
                  <li>Multiple shipping carriers</li>
                </ul>
              </div>
            </div>
            
            <p className="mt-4">
              Remember that fulfillment is a key touchpoint with your customer. Even as you automate and optimize, 
              maintain your unboxing experience quality. I always include a handwritten note, even at high volumes—I 
              just batch-write them during downtime.
            </p>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Hiring Without Breaking the Bank">
        <div className="space-y-6">
          <p>
            When scaling beyond $5K, cash flow is still critical. Here are strategies for adding team members 
            without excessive risk:
          </p>
          
          <ChapterGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-2">1. Part-Time Specialists</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Hire for specific skills rather than full-time generalists</li>
                <li>Start with 10-15 hours weekly and increase as needed</li>
                <li>Focus on measurable outcomes rather than hours worked</li>
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-2">2. Task-Based Contractors</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Use platforms like Upwork or Fiverr for specific projects</li>
                <li>Create clear, detailed briefs with examples</li>
                <li>Develop testing processes to find reliable partners</li>
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-2">3. Revenue-Share Partnerships</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Offer percentage-based compensation tied to growth</li>
                <li>Create clear performance metrics and boundaries</li>
                <li>Establish progressive responsibility increases</li>
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-2">4. Family and Friends</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Set professional expectations and compensation</li>
                <li>Create formal agreements despite relationships</li>
                <li>Establish clear working hours and responsibilities</li>
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-2">5. Virtual Assistants</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Start with 5-10 hours weekly for administrative tasks</li>
                <li>Create detailed process documents and training videos</li>
                <li>Implement verification systems for quality control</li>
              </ul>
            </div>
          </ChapterGrid>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="italic">
              When I first started scaling my team, I made the mistake of hiring a full-time employee before my 
              systems were ready. A better approach is starting with specialized part-time help, then gradually 
              increasing hours as your processes and revenue stabilize.
            </p>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Growth Capital Decision Tree">
        <div className="space-y-6">
          <p>
            When you need additional capital for larger growth steps, use this decision tree:
          </p>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium">Can you fund growth through current cash flow?</p>
                <div className="ml-8 mt-2">
                  <p className="text-blue-600 font-medium">YES → Implement 60-day phased investment plan</p>
                  <p>NO → Continue to question 2</p>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium">Can you pre-sell products to fund production expansion?</p>
                <div className="ml-8 mt-2">
                  <p className="text-blue-600 font-medium">YES → Create limited edition or pre-order campaign</p>
                  <p>NO → Continue to question 3</p>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium">Can you form strategic partnerships with revenue sharing?</p>
                <div className="ml-8 mt-2">
                  <p className="text-blue-600 font-medium">YES → Develop partnership agreement with clear terms</p>
                  <p>NO → Continue to question 4</p>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium">Is traditional financing available at reasonable terms?</p>
                <div className="ml-8 mt-2">
                  <p className="text-blue-600 font-medium">YES → Calculate ROI against financing costs before proceeding</p>
                  <p>NO → Reconsider growth timeline or explore alternative funding</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="italic">
            I've used pre-selling strategies several times to fund production expansion. By offering limited 
            edition colorways or early access pricing, I generated the capital needed for new printers without 
            taking on debt or sacrificing equity.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Chapter 9 Self-Assessment: Your Scale-Up Plan</h3>
            <p className="mb-4">Complete this detailed self-assessment to identify your optimal scaling path:</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">My current monthly revenue is:</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="$" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">My primary production bottleneck is:</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" name="bottleneck" id="b1" className="mr-2" />
                      <label htmlFor="b1">Printer capacity</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" name="bottleneck" id="b2" className="mr-2" />
                      <label htmlFor="b2">Design/product development</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" name="bottleneck" id="b3" className="mr-2" />
                      <label htmlFor="b3">Order fulfillment</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" name="bottleneck" id="b4" className="mr-2" />
                      <label htmlFor="b4">Marketing/customer acquisition</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" name="bottleneck" id="b5" className="mr-2" />
                      <label htmlFor="b5">Customer service/support</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Based on my bottleneck, my first hire should be:</label>
                <input type="text" className="w-full p-2 border rounded-md" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">The scaling strategy that best aligns with my strengths is:</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="radio" name="strategy" id="s1" className="mr-2" />
                    <label htmlFor="s1">Print Farm Expansion</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="strategy" id="s2" className="mr-2" />
                    <label htmlFor="s2">Production Partnership Model</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="strategy" id="s3" className="mr-2" />
                    <label htmlFor="s3">Hybrid Manufacturing Approach</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">My 6-month revenue target is:</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="$" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">The three most critical actions I need to take to reach that target are:</label>
                <textarea className="w-full p-2 border rounded-md h-24"></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">The biggest risk to my scaling plan is:</label>
                <input type="text" className="w-full p-2 border rounded-md mb-2" />
                <label className="block text-sm font-medium mb-1">and I will mitigate it by:</label>
                <input type="text" className="w-full p-2 border rounded-md" />
              </div>
              
              <p className="text-sm text-gray-600 italic mt-6">
                Complete this self-assessment before moving to the next chapter. In Chapter 10, we'll explore 
                future-proofing your business against industry changes and positioning yourself for long-term 
                success in the evolving 3D printing landscape.
              </p>
            </form>
          </div>
        </div>
      </ChapterSection>
    </div>
  );
};
