import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { Calendar, LineChart, Target, Rocket, Clock, Settings, BarChart, Brain } from "lucide-react";
import { SwapStrategy } from "./SwapStrategy";

export const Implementation = () => {
  return (
    <>
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
        </div>
      </ChapterSection>
      <SwapStrategy />
    </>
  );
};
