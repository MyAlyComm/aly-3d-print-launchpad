
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { BookText, Clock, Target, AlertTriangle, BookOpen } from "lucide-react";

export const Conclusion = () => {
  return (
    <ChapterSection title="The Journey Ahead">
      <div className="space-y-6">
        <p className="text-lg">
          You've made it through the entire blueprint—congratulations! You now have a comprehensive 
          roadmap for building a profitable 3D printing business from scratch.
        </p>

        <div className="p-5 border border-primary/20 rounded-lg bg-primary/5">
          <h3 className="font-semibold text-lg mb-4">The Power of Starting Now</h3>
          <div className="space-y-2">
            <p>The systems and strategies in this book work—I've seen them transform the lives of hundreds of entrepreneurs around the world. But they only work if you implement them.</p>
            <ul className="list-disc ml-6 space-y-2 mt-4">
              <li>Start with what you have</li>
              <li>Focus on learning through action</li>
              <li>Build momentum through small wins</li>
              <li>Trust the frameworks, not your fears</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-lg border p-5">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">What Success Really Looks Like</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">Week 1-2:</p>
                <p className="text-sm text-gray-600">Setting up your printer, testing products, making your first few sales</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">Week 3-4:</p>
                <p className="text-sm text-gray-600">Refining products, establishing platform presence, reaching $500-3,000 monthly</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">Month 2:</p>
                <p className="text-sm text-gray-600">Expanding product line, improving marketing, scaling toward $1,500-5,000 monthly</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium">Month 3:</p>
                <p className="text-sm text-gray-600">Optimizing systems, potentially adding equipment, approaching $3,000-10,000+ monthly</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-5">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Common Challenges and Solutions</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  challenge: "I'm struggling to choose the perfect products.",
                  solution: "Trust the P.R.O.F.I.T.S. MATCH framework from Chapter 4. Complete it for 5-7 product ideas, select your top three scores, and move forward."
                },
                {
                  challenge: "I'm not seeing immediate sales.",
                  solution: "Review your product photos, descriptions, and pricing. Most early sales issues stem from presentation problems, not product problems."
                },
                {
                  challenge: "I don't have enough time.",
                  solution: "Return to the 3 Plus 1 Equals 40 system from Chapter 3. Focus is more important than total hours."
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded">
                  <p className="font-medium text-gray-900">{item.challenge}</p>
                  <p className="text-sm text-gray-600 mt-2">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-5">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Your Next Steps</h3>
            </div>
            <div className="grid gap-4">
              <div>
                <p className="font-medium mb-2">Today:</p>
                <ul className="list-disc ml-6 space-y-1 text-sm text-gray-600">
                  <li>Complete the self-assessment from Chapter 2</li>
                  <li>Join online communities where you can ask questions</li>
                  <li>Begin researching products using the framework from Chapter 4</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">This Week:</p>
                <ul className="list-disc ml-6 space-y-1 text-sm text-gray-600">
                  <li>Order your printer based on the guidance in Chapter 5</li>
                  <li>Set up your workspace according to Chapter 7</li>
                  <li>Start creating content following the strategies in Chapter 8</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">This Month:</p>
                <ul className="list-disc ml-6 space-y-1 text-sm text-gray-600">
                  <li>Implement your 3 Plus 1 Equals 40 system from Chapter 3</li>
                  <li>Create listings on your chosen platform from Chapter 6</li>
                  <li>Make your first sales and gather initial customer feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border border-primary rounded-lg bg-primary/5 mt-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Stay Connected</h3>
          </div>
          <p className="mb-4">Your journey doesn't end with the last page of this book. I'm constantly developing new resources, tools, and communities to support entrepreneurs like you:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Visit 3dblueprint.io for updated materials, tools, and resources</li>
            <li>Follow me on social media for regular tips and industry updates</li>
            <li>Join our community to connect with other entrepreneurs on similar journeys</li>
          </ul>
          <p className="mt-6 font-medium">The opportunity is real. The systems work. The time is now.</p>
          <p className="mt-2 italic">I can't wait to see what you build.</p>
          <p className="mt-2 font-semibold text-right">- Aly</p>
        </div>
      </div>
    </ChapterSection>
  );
};
