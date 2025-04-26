
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ProductionCycle } from "./sections/ProductionCycle";
import { ImportanceNote } from "./sections/ImportanceNote";
import { Card } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";

export const WorkflowOptimization = () => {
  return (
    <div className="space-y-8">
      <ChapterSection title="Workflow Optimization">
        <p className="text-gray-700">
          After setting up your initial production, it's time to create efficient workflows 
          that will save you time and reduce errors as your business grows.
        </p>

        <ProductionCycle />
      </ChapterSection>

      <ChapterSection title="Time-Saving Batch Processing">
        <p className="text-gray-700 mb-4">
          One of the most effective ways to increase your efficiency is through batch processing. 
          Instead of completing one product at a time from start to finish, group similar tasks together:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="p-4">
            <h3 className="font-bold text-lg mb-2">Slicing Batch</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Set aside specific time to slice multiple models at once</li>
              <li>Create standardized slicing profiles for different product types</li>
              <li>Prepare a week's worth of print files in one session</li>
            </ul>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold text-lg mb-2">Printing Batch</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Schedule similar products to print together</li>
              <li>Use all available build plate space (when appropriate)</li>
              <li>Plan overnight prints for larger items</li>
            </ul>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold text-lg mb-2">Post-Processing Batch</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Remove supports from multiple products in one session</li>
              <li>Set up an assembly line for products needing similar finishing</li>
              <li>Complete all sanding or painting in dedicated sessions</li>
            </ul>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold text-lg mb-2">Packaging Batch</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Prepare shipping materials for multiple orders at once</li>
              <li>Print all shipping labels in a single batch</li>
              <li>Schedule specific days for shipment preparation</li>
            </ul>
          </Card>
        </div>

        <p className="text-gray-700">
          By batching similar tasks, you reduce setup and transition time while building focused expertise in each part of the process.
        </p>
      </ChapterSection>

      <ChapterSection title="Documentation System">
        <p className="text-gray-700 mb-4">
          Even with just one printer and a few products, documentation will save you countless hours of troubleshooting and experimentation:
        </p>

        <Accordion type="single" collapsible className="w-full mb-6">
          <AccordionItem value="print-settings">
            <AccordionTrigger className="text-lg font-medium">Print Setting Documentation</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Create a standardized format for recording successful print settings</li>
                <li>Document temperature, layer height, speed, and other critical parameters</li>
                <li>Note any special requirements or common issues</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="product-specs">
            <AccordionTrigger className="text-lg font-medium">Product Specifications</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Record exact dimensions, weights, and material quantities</li>
                <li>Document assembly instructions if applicable</li>
                <li>Note customer feedback and common questions</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="process-docs">
            <AccordionTrigger className="text-lg font-medium">Process Documentation</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Record step-by-step procedures for recurring tasks</li>
                <li>Include photos or videos of critical steps</li>
                <li>Update regularly as you discover improvements</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="text-gray-700">
          The simplest approach is creating a digital notebook (in something like Notion, Google Docs, or even a basic spreadsheet) 
          where you maintain this information. The time invested in documentation pays massive dividends when you need to 
          reproduce successful results or train someone else.
        </p>
      </ChapterSection>

      <ChapterSection title="Quality Control Systems">
        <p className="text-gray-700 mb-4">
          As you start selling products, quality control becomes essential to maintaining customer satisfaction and reducing returns or complaints.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3">The Three-Stage QC Process</h3>
            <p className="text-gray-700 mb-3">
              Implement this simple three-stage quality control system for all products:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <InfoCard 
                title="Stage 1: Pre-Production"
                points={[
                  "File integrity check before slicing",
                  "Slice preview examination for issues",
                  "First layer adhesion verification",
                  "Early print monitoring for failures"
                ]}
              />
              
              <InfoCard 
                title="Stage 2: Post-Production"
                points={[
                  "Visual inspection for print defects",
                  "Dimensional accuracy check",
                  "Functional testing (if applicable)",
                  "Surface finish evaluation"
                ]}
              />
              
              <InfoCard 
                title="Stage 3: Pre-Shipping"
                points={[
                  "Final appearance inspection",
                  "Package integrity check",
                  "Order accuracy verification",
                  "Documentation completeness"
                ]}
              />
            </div>
            
            <p className="text-gray-700">
              For each stage, create a simple checklist tailored to your specific products. 
              Even a basic list of 5-7 critical checks can dramatically reduce errors and customer issues.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">The "Golden Sample" Method</h3>
            <p className="text-gray-700 mb-3">
              For each product you sell, create and maintain a "golden sample" - a perfect example of what the product should be:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Print and finish an ideal version of each product</li>
              <li>Store these samples near your quality control station</li>
              <li>Compare new productions against these samples before shipping</li>
              <li>Update golden samples as your techniques improve</li>
            </ul>
            <p className="text-gray-700">
              This simple reference system gives you and any helpers a physical standard to maintain consistency.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Customer Feedback Loop</h3>
            <p className="text-gray-700 mb-3">
              Quality control extends beyond your production space. Implement a system to capture and act on customer feedback:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Include a simple feedback request with every order</li>
              <li>Track common comments or issues by product</li>
              <li>Update your production process based on feedback</li>
              <li>Follow up on negative feedback to resolve issues</li>
            </ul>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Scaling Your Production Space">
        <p className="text-gray-700 mb-4">
          As your business grows, your production space will need to evolve. Here's how to plan for 
          expansion without unnecessary disruption:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Space Optimization Strategies</h3>
            <p className="text-gray-700 mb-3">
              Whether you're working in a bedroom corner or a dedicated room, these principles help maximize productivity:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Vertical Utilization</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Use wall-mounted shelving for supplies</li>
                  <li>Install pegboards for frequently used tools</li>
                  <li>Consider overhead storage for less-used items</li>
                  <li>Stack printers with spacing for ventilation</li>
                </ul>
              </Card>
              
              <Card className="p-4">
                <h4 className="font-bold mb-2">Workflow Mapping</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Arrange space according to production flow</li>
                  <li>Keep frequently used items within reach</li>
                  <li>Create zones for each production stage</li>
                  <li>Minimize unnecessary movement</li>
                </ul>
              </Card>
              
              <Card className="p-4">
                <h4 className="font-bold mb-2">Modular Flexibility</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Choose reconfigurable furniture</li>
                  <li>Use rolling carts or tables</li>
                  <li>Select expandable storage solutions</li>
                  <li>Keep cable management flexible</li>
                </ul>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">The Four Phases of Workspace Evolution</h3>
            <p className="text-gray-700 mb-3">
              As your business grows, your workspace will typically evolve through these phases:
            </p>
            
            <Accordion type="single" collapsible className="w-full mb-4">
              <AccordionItem value="phase1">
                <AccordionTrigger className="text-base font-medium">Phase 1: Corner Setup (1 printer)</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Single printer on a stable desk or table</li>
                    <li>Nearby storage for essential supplies</li>
                    <li>Basic tool organization</li>
                    <li>Minimal dedicated space</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="phase2">
                <AccordionTrigger className="text-base font-medium">Phase 2: Dedicated Area (2-3 printers)</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Dedicated room corner or small space</li>
                    <li>Organized shelving for materials and products</li>
                    <li>Established workstation for post-processing</li>
                    <li>Simple inventory storage solution</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="phase3">
                <AccordionTrigger className="text-base font-medium">Phase 3: Room Conversion (4-8 printers)</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Full room dedicated to production</li>
                    <li>Specialized workstations for different tasks</li>
                    <li>Comprehensive storage and organization system</li>
                    <li>Dedicated packaging and shipping area</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="phase4">
                <AccordionTrigger className="text-base font-medium">Phase 4: Commercial Space (8+ printers)</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Separate production facility or workshop</li>
                    <li>Professional-grade furniture and equipment</li>
                    <li>Optimized layout for maximum efficiency</li>
                    <li>Distinct areas for different production stages</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <p className="text-gray-700">
              Plan your transitions between these phases carefully to minimize disruption to your production. 
              I recommend planning for at least the next phase of growth in your current setup - this makes 
              transitions much smoother.
            </p>
          </div>
        </div>
      </ChapterSection>

      <ChapterSection title="Inventory Management Systems">
        <p className="text-gray-700 mb-4">
          Effective inventory management becomes increasingly important as your business grows. 
          Here's how to build systems that scale with your business:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Material Inventory System</h3>
            <p className="text-gray-700 mb-3">
              Track your filament and other materials with this simple system:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Active Materials Tracking</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Label spools with date and remaining weight</li>
                  <li>Track usage by product for cost calculation</li>
                  <li>Implement a first-in, first-out usage system</li>
                  <li>Set reorder points based on usage rates</li>
                </ul>
              </Card>
              
              <Card className="p-4">
                <h4 className="font-bold mb-2">Storage Best Practices</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Store unused filament in airtight containers</li>
                  <li>Label containers with material details</li>
                  <li>Organize by frequency of use</li>
                  <li>Keep a log of storage conditions</li>
                </ul>
              </Card>
              
              <Card className="p-4">
                <h4 className="font-bold mb-2">Testing Protocol</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Test new brands before large purchases</li>
                  <li>Document print settings and results</li>
                  <li>Create test prints for your products</li>
                  <li>Maintain samples with material notes</li>
                </ul>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Product Inventory Management</h3>
            <p className="text-gray-700 mb-3">
              As you create finished products, implement these inventory management practices:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Card className="p-4">
                <h4 className="font-bold mb-2">Production Inventory System</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Set minimum inventory levels for popular items</li>
                  <li>Track production dates for quality control</li>
                  <li>Organize by product category and variant</li>
                  <li>Implement barcodes for larger inventories</li>
                </ul>
              </Card>
              
              <Card className="p-4">
                <h4 className="font-bold mb-2">Optimization Strategies</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Identify your top-selling 20% of products</li>
                  <li>Maintain higher stock of bestsellers</li>
                  <li>Produce slow-moving items on-demand</li>
                  <li>Use sales data to predict inventory needs</li>
                </ul>
              </Card>
              
              <Card className="p-4">
                <h4 className="font-bold mb-2">Seasonal Planning</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Identify seasonal patterns in your sales</li>
                  <li>Build inventory before high-demand periods</li>
                  <li>Reduce seasonal items during off-periods</li>
                  <li>Create offerings based on trending searches</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Order Management Flow">
        <p className="text-gray-700 mb-4">
          Create a streamlined system for handling orders from receipt to fulfillment:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4">
            <h3 className="font-bold text-lg mb-2">Order Receipt Process</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Standardize how orders are received</li>
              <li>Create a central dashboard of pending orders</li>
              <li>Implement priority flags for rush orders</li>
              <li>Establish a clear timeline for fulfillment</li>
            </ul>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold text-lg mb-2">Production Scheduling</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Group similar orders for efficient production</li>
              <li>Schedule based on delivery promises</li>
              <li>Allow buffer time for unexpected issues</li>
              <li>Balance made-to-order and inventory items</li>
            </ul>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold text-lg mb-2">Fulfillment Workflow</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Create a standardized packing process</li>
              <li>Implement quality checks before shipping</li>
              <li>Document shipping details consistently</li>
              <li>Establish delivery confirmation follow-up</li>
            </ul>
          </Card>
        </div>
        
        <div className="bg-blue-50 border-blue-200 border rounded-lg p-4 mb-4">
          <p className="text-gray-800">
            When I reached about 20 orders per week, I implemented a simple kanban-style board with columns 
            for "Ordered," "In Production," "Ready for Shipping," and "Shipped." This visual system 
            made it easy to see the status of all orders at a glance and prevented items from falling through the cracks.
          </p>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Final Checks Before Scaling">
        <p className="text-gray-700 mb-4">
          Before you move to expand beyond your initial setup, verify that you have these fundamentals in place:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="p-4">
            <h3 className="font-bold text-lg mb-2">Operational Fundamentals</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Documented production processes for all products</li>
              <li>Quality control systems with clear standards</li>
              <li>Efficient workspace organization with room for growth</li>
              <li>Basic inventory management system</li>
            </ul>
          </Card>
          
          <Card className="p-4">
            <h3 className="font-bold text-lg mb-2">Business Fundamentals</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Clear understanding of costs and margins</li>
              <li>Reliable suppliers for critical materials</li>
              <li>Established customer communication protocols</li>
              <li>System for tracking business performance metrics</li>
            </ul>
          </Card>
          
          <Card className="p-4">
            <h3 className="font-bold text-lg mb-2">Marketing Fundamentals</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Consistent product photography standards</li>
              <li>Established presence on your primary platform</li>
              <li>Basic customer feedback collection system</li>
              <li>Clear understanding of your target market</li>
            </ul>
          </Card>
          
          <Card className="p-4">
            <h3 className="font-bold text-lg mb-2">Personal Fundamentals</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Sustainable work schedule that prevents burnout</li>
              <li>Clear boundaries between business and personal time</li>
              <li>Support system for advice and encouragement</li>
              <li>Learning pathway for developing needed skills</li>
            </ul>
          </Card>
        </div>
        
        <p className="text-gray-700">
          Taking the time to establish these fundamentals before scaling will prevent many of the 
          common problems that derail growing 3D printing businesses.
        </p>
      </ChapterSection>

      <ImportanceNote />
    </div>
  );
};
