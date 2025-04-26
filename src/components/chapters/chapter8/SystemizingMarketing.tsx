
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

export const SystemizingMarketing = () => {
  return (
    <div className="space-y-8">
      <ChapterSection title="Step 10: Systemize and Scale">
        <div className="space-y-6">
          <p className="font-bold">Turning Your Marketing Success Into a Repeatable Machine</p>
          
          <p>
            Once you've implemented the previous steps and found what works, it's time to transform those 
            successes into systems that can grow beyond your personal capacity. This is where you apply the 
            3 Plus 1 system to your operational approach.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">System Documentation Framework</h3>
            <p>For each core marketing system, document:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Exact process steps (what happens in what order)</li>
              <li>Time requirements for each step</li>
              <li>Results metrics and how they're measured</li>
              <li>Tools and resources required</li>
              <li>Potential automation opportunities</li>
              <li>Improvement ideas based on performance data</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">The Only Numbers That Matter</h3>
            <p>Use the Marketing Measurement Framework to track what's working. Focus on these four key metrics:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><span className="font-medium">Views-to-Messages Ratio:</span> Out of 100 people who see your product, how many reach out?</li>
              <li><span className="font-medium">Messages-to-Sales Ratio:</span> Out of 10 people who message you, how many buy?</li>
              <li><span className="font-medium">Customer Acquisition Cost (CAC):</span> How much time/money do you spend per customer?</li>
              <li><span className="font-medium">Repeat Purchase Rate:</span> What percentage of customers buy from you again?</li>
            </ol>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-2">The 5-Minute Weekly Review process</h4>
              <p>Ensures you're constantly improving your systems:</p>
              <ol className="list-decimal pl-6 space-y-1 text-sm">
                <li>Which products received the most interest this week?</li>
                <li>Which marketing channel drove the most inquiries?</li>
                <li>What was your conversion rate (inquiries to sales)?</li>
                <li>Did any customers refer others to you?</li>
                <li>What's one thing you can improve next week?</li>
              </ol>
            </CardContent>
          </Card>
          
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-medium mb-3">When it's time to scale beyond your first platform (generally after 60-90 days of consistent success), use the 3 Plus 1 approach:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep 80% of your marketing efforts on your proven platform</li>
              <li>Allocate 20% to testing a new platform</li>
              <li>Only expand when your systems on the first platform are fully optimized</li>
              <li>Choose your second platform based on customer data, not personal preference</li>
            </ul>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Applying the 3 Plus 1 System to Your Marketing">
        <div className="space-y-6">
          <p>
            Just like you applied the 3 Plus 1 system to your products in Chapter 3, apply it to your marketing 
            efforts by creating a focused system with room for innovation:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-medium mb-2">1. Selecting 3 Core Marketing Activities</h4>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Choose three specific, consistent marketing activities</li>
                  <li>Focus 80% of your marketing time on these three activities</li>
                  <li>Perfect and optimize these core activities before adding more</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-medium mb-2">2. Adding 1 Experimental Marketing Element</h4>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Dedicate 20% of your marketing time to testing something new</li>
                  <li>Use this as your innovation sandbox without risking core performance</li>
                  <li>Rotate this element into your core three if it outperforms existing activities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">3. Following the Monthly Cycle</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">PLAN & REVIEW (Week 1):</p>
                <p className="text-sm">Analyze performance data, set goals</p>
              </div>
              <div>
                <p className="font-medium">CREATE & EXECUTE (Weeks 2-3):</p>
                <p className="text-sm">Implement your core marketing activities</p>
              </div>
              <div>
                <p className="font-medium">INNOVATE (Week 4):</p>
                <p className="text-sm">Develop and test your experimental element</p>
              </div>
            </div>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Troubleshooting: When Things Aren't Working">
        <div className="space-y-6">
          <p>
            If you've given free marketing a solid effort (at least 30 days) and aren't seeing results, 
            here's what to check before considering paid options:
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="problem-checklist">
              <AccordionTrigger className="font-medium">
                The Problem Checklist
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Product Problem:</span> Are your products truly solving problems or creating desire?</li>
                  <li><span className="font-medium">Presentation Problem:</span> Do your photos and videos showcase benefits clearly?</li>
                  <li><span className="font-medium">Platform Problem:</span> Are you on the wrong platform for your specific products?</li>
                  <li><span className="font-medium">Positioning Problem:</span> Is your messaging unclear or misaligned with customer needs?</li>
                  <li><span className="font-medium">Patience Problem:</span> Are you giving strategies enough time to work?</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="pivot-framework">
              <AccordionTrigger className="font-medium">
                The Pivot Framework
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Start with the smallest possible change (photos → messaging → products)</li>
                  <li>Test one variable at a time for at least 7 days</li>
                  <li>Document what works and what doesn't</li>
                  <li>Double down on small wins, abandon clear failures</li>
                  <li>Consider a complete strategy change only after methodical testing</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="common-pitfalls">
              <AccordionTrigger className="font-medium">
                Common Pitfalls to Avoid
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">The "Looks Productive But Isn't" List</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Endlessly adjusting your logo/branding</li>
                      <li>Following hundreds of competitors for "research"</li>
                      <li>Constantly switching platforms before gaining traction</li>
                      <li>Creating content that doesn't lead to sales</li>
                      <li>Chasing trends unrelated to your products</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-2">The Energy Conservation Strategy</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Identify your highest-energy times of day</li>
                      <li>Reserve those times for creative marketing tasks</li>
                      <li>Batch administrative tasks for low-energy periods</li>
                      <li>Create templates and systems for repetitive work</li>
                      <li>Take one day off completely from marketing each week</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ChapterSection>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Your Path Forward</h3>
        <p>
          Remember: Your first marketing plan doesn't need to be perfect—it needs to be implemented. 
          Take action now, refine later, and never stop testing new approaches as your business grows.
        </p>
        <p className="mt-4">
          The 3D printing entrepreneurs who succeed aren't the ones with the perfect marketing 
          strategy on paper. They're the ones who put imperfect strategies into action, learn 
          from the results, and continuously improve based on real customer feedback.
        </p>
        <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
          <p className="font-semibold">Your challenge for this week:</p>
          <p>
            Implement Steps 1-3 of the Zero-Cost Marketing Funnel. Identify what your products are REALLY 
            selling, choose your ONE platform, and find where your customers already gather. Then create 
            your first piece of value-providing content and share it where they'll see it.
          </p>
        </div>
      </div>
    </div>
  );
};
