import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { Calendar, LineChart, Target, Rocket, Clock, Settings, BarChart, Brain } from "lucide-react";

export const Implementation = () => {
  return (
    <ChapterSection title="Implementing the System ⚡️">
      <div className="space-y-8">
        <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-lg border border-accent/10">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-accent" />
            The Monthly Cycle Framework 📅
          </h3>
          <p className="leading-relaxed mb-6">
            The 3 Plus 1 Equals 40 system operates through a structured monthly cycle that maximizes both focus
            and innovation:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                PLAN & REVIEW (Week 1)
              </h4>
              <ul className="list-none space-y-2">
                {[
                  "Review your unique situation and insights",
                  "Analyze previous month's performance",
                  "Identify strengths and opportunities",
                  "Set specific improvement goals",
                  "Create detailed production schedule"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ChapterGrid className="md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Settings className="h-5 w-5 text-secondary" />
                  CREATE & EXECUTE (Weeks 2-3)
                </h4>
                <ul className="list-none space-y-2">
                  {[
                    "Implement planned improvements",
                    "Focus 80% on core lineup",
                    "Execute marketing strategies",
                    "Gather customer feedback"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-accent" />
                  INNOVATE (Week 4)
                </h4>
                <ul className="list-none space-y-2">
                  {[
                    "Explore new possibilities",
                    "Learn new tools & techniques",
                    "Experiment with new methods",
                    "Research emerging trends"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ChapterGrid>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Tracking and Metrics</h3>
          <p>To manage your 3 Plus 1 system effectively, you'll track specific metrics for each product:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-semibold">For Your Core Three Products:</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Unit sales (weekly and monthly)</li>
                <li>Revenue generated</li>
                <li>Profit margin</li>
                <li>Production time per unit</li>
                <li>Customer review ratings</li>
                <li>Return/issue rate</li>
                <li>Marketing performance by channel</li>
                <li>Inventory levels</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-semibold">For Your Plus 1:</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Development milestones completed</li>
                <li>Prototype iterations</li>
                <li>Test results</li>
                <li>Initial customer feedback</li>
                <li>Production time estimates</li>
                <li>Material costs</li>
                <li>Market research findings</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-4">
            These metrics give you the data needed to make objective decisions about which products to keep, 
            improve, or replace in your lineup.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">The "Swap Strategy"</h3>
          <p>
            At the end of each monthly cycle, you'll evaluate your three core products and your Plus 1 innovation. 
            Based on the data, you'll implement changes in Week 1 of the following month:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <span className="font-medium">If all core products are performing well:</span> Continue optimizing 
              them while developing your Plus 1.
            </li>
            <li>
              <span className="font-medium">If one core product is underperforming:</span> Consider replacing it 
              with your Plus 1 (if ready) or with a new product from your research.
            </li>
            <li>
              <span className="font-medium">If your Plus 1 shows exceptional promise:</span> Promote it to your core 
              lineup by replacing your weakest performer, then select a new Plus 1 to develop.
            </li>
            <li>
              <span className="font-medium">If your Plus 1 isn't working out:</span> Abandon it and select a new 
              innovation project based on market research or customer feedback.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Adapting the System to Your Decision Tree Path</h3>
          <p>
            The beauty of the 3 Plus 1 system is its flexibility. It can be adapted to any situation identified 
            by your Decision Tree path from Chapter 2:
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-semibold">For $0 Budget Paths</h4>
              <p>Even without funds for your own printer, you can apply the 3 Plus 1 approach:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Your "3" might be: Three service offerings (design services, brokering between clients and printing services, print management)</li>
                <li>Your "80%" focus: Perfecting your process, building relationships with suppliers, creating portfolio examples</li>
                <li>Your "Plus 1" could be: Developing a product design you could eventually manufacture once you acquire a printer</li>
                <li>Implementation: Use the monthly cycle to evaluate which services are most profitable and which relationships are most valuable</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-semibold">For Limited Time Availability</h4>
              <p>If you only have 5-15 hours weekly to dedicate to your business:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Your "3" should be: Products with longer print times but less oversight (let them print while you're at work or asleep)</li>
                <li>Your "80%" focus: Creating systems that maximize automation and minimize hands-on time</li>
                <li>Your "Plus 1" could be: Developed in concentrated weekend sessions</li>
                <li>Implementation: Consider a modified two-week cycle if weekly is too frequent for your schedule</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-semibold">For Different Skill Profiles</h4>
              <div className="mt-2 space-y-3">
                <div>
                  <h5 className="font-medium">Design-Focused:</h5>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Your "3" should include: Products that showcase your design capabilities</li>
                    <li>Your "80%" focus: Perfecting aesthetics and functionality, creating distinctive brand identity</li>
                    <li>Your "Plus 1" could be: Exploring new design techniques or software to expand your capabilities</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium">Marketing-Focused:</h5>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Your "3" could be: Products with strong visual appeal and viral potential</li>
                    <li>Your "80%" focus: Creating exceptional content and building audience relationships</li>
                    <li>Your "Plus 1" might be: Exploring a different platform or marketing approach</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium">Technical-Focused:</h5>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Your "3" should include: Products that benefit from precision engineering</li>
                    <li>Your "80%" focus: Optimizing print settings, creating perfect finishes, solving complex production challenges</li>
                    <li>Your "Plus 1" could be: Experimenting with new materials or printing techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChapterSection>
  );
};
