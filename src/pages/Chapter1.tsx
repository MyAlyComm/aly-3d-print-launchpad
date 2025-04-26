
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MiniProgress } from "@/components/progress/MiniProgress";
import { useToast } from "@/hooks/use-toast";
import { useChapterForm } from "@/hooks/useChapterForm";

const Chapter1 = () => {
  const [section, setSection] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  const sections = [
    {
      id: "arbitrage",
      title: "The Gateway to Entrepreneurial Success",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">ARBITRAGE WINDOWS - THE TIMELINES OF OPPORTUNITY</h2>
          <p className="text-gray-700">
            In business, the biggest profits don't come from being better. They come from being early.
          </p>
          <p className="text-gray-700">
            Whenever a new technology emerges, there's a golden period where supply hasn't caught up with demand. Where knowledge isn't widespread. Where the competition is minimal, and the margins are massive.
          </p>
          <p className="text-gray-700">
            I call these "Arbitrage Windows."
          </p>
          <div className="space-y-3">
            <p className="text-gray-700">An arbitrage window opens when:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>A technology becomes accessible to average people</li>
              <li>But knowledge about how to leverage it remains limited</li>
              <li>And the market hasn't yet been flooded with competitors</li>
            </ul>
          </div>
          <p className="text-gray-700">
            This creates a brief period—sometimes months, sometimes a few years—where extraordinary profits are possible for those who recognize the opportunity and act.
          </p>
        </div>
      )
    },
    {
      id: "timeline",
      title: "The 3D Printing Timeline",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">The 3D Printing Timeline: Where We Are Now</h2>
          <p className="text-gray-700">
            3D printing has existed since the 1980s, but it's only recently entered its true arbitrage window for entrepreneurs like you and me. Let me walk you through the evolution:
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Phase 1: The Tinkerer Era (2009-2019)</h3>
              <p className="text-gray-700 mb-4">
                When I was still in elementary school, 3D printing was the domain of engineers and hardcore hobbyists. The printers cost $2,000+ and required extensive technical knowledge just to get a basic cube to print correctly.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium mb-2">This era was defined by:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Constant troubleshooting</li>
                  <li>Manual calibration for hours</li>
                  <li>Limited material options</li>
                  <li>Primarily DIY kits, not ready-to-use machines</li>
                  <li>Non-existent customer base outside of other techies</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Phase 2: The Transition Period (2020-2023)</h3>
              <p className="text-gray-700 mb-4">
                As I entered my teens, the industry began to shift. Printers became more reliable, prices dropped below $1,000, and the software improved dramatically.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium mb-2">This period saw:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>The rise of plug-and-play printers that actually worked</li>
                  <li>Expanded material options beyond basic plastics</li>
                  <li>Growing online communities sharing knowledge</li>
                  <li>First wave of small businesses primarily serving niche markets</li>
                  <li>Early e-commerce adoption</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Phase 3: The Golden Window (2023-Present)</h3>
              <p className="text-gray-700 mb-4">
                This is where we are now—the perfect arbitrage window. Three critical factors have converged:
              </p>
              <div className="grid gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold mb-2">1. Technology Accessibility</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Sub-$500 printers that produce professional-quality results</li>
                    <li>Auto-calibration and reliable operation</li>
                    <li>User-friendly software anyone can learn in days, not months</li>
                    <li>Widespread availability of materials and parts</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold mb-2">2. Knowledge Gap</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Most people still think 3D printing is complex and technical</li>
                    <li>Business strategies aren't widely understood or documented</li>
                    <li>Profitable niches remain undiscovered or underserved</li>
                    <li>The "how" of scaling beyond hobby status is rarely discussed</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold mb-2">3. Market Readiness</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Consumers now understand and value 3D printed products</li>
                    <li>Social commerce platforms make selling easier than ever</li>
                    <li>Marketplaces are established but not yet saturated</li>
                    <li>The infrastructure for distribution exists</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "myths",
      title: "Common Misconceptions",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Common Misconceptions: The Stained Glass Effect</h2>
          <p className="text-gray-700">
            Like the eras before it, our current phase has created a world of opportunity, but it's also spawned widespread misinformation and misconceptions. I call these the "Stained Glass Effect" – views that might contain fragments of truth but distort reality so severely that they blind people to the opportunities right in front of them.
          </p>
          
          <div className="grid gap-4">
            {[
              {
                myth: "It's too late to start a 3D printing business",
                reality: "While some verticals like toys on Etsy are indeed quite crowded, the people who are good at marketing and know how to get customers are still starting businesses and being successful in this space."
              },
              {
                myth: "You need technical expertise to succeed",
                reality: "Today's printers require about as much technical knowledge as setting up a coffee maker. Success depends far more on marketing and business skills than technical prowess."
              },
              {
                myth: "The profit margins aren't sustainable",
                reality: "While commodity products have seen margin compression, unique and solution-oriented items still command premium prices and robust margins exceeding 80%."
              },
              {
                myth: "You need dozens of printers to make real money",
                reality: "Smart product selection and pricing can generate substantial revenue even with a single printer, as I proved in my first weeks."
              },
              {
                myth: "It's just a hobby, not a real business",
                reality: "Tell that to the thousands of entrepreneurs who've built six and seven-figure businesses from their spare bedroom."
              },
              {
                myth: "The electricity cost is so high",
                reality: "A modern 3D printer uses about the same electricity as a laptop computer—around 50-150 watts. Even running 24/7, that's $10-30 per month."
              }
            ].map((item, index) => (
              <div key={index} className="bg-muted p-4 rounded-lg">
                <h4 className="font-bold text-red-600 mb-2">Myth: {item.myth}</h4>
                <p className="text-gray-700">Reality: {item.reality}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "future",
      title: "The New Horizon",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Where We're Going: The New Horizon</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">The 2025 Shift: Integration & Automation</h3>
              <div className="grid gap-4">
                {[
                  {
                    title: "AI Design Integration",
                    points: [
                      "3D modeling software will fully integrate with generative AI",
                      "Create complex models through simple text prompts",
                      "Dramatically compress time from idea to finished STL file"
                    ]
                  },
                  {
                    title: "Automated Production Systems",
                    points: [
                      "Affordable printer farm management software",
                      "Run 5-10 printers with minimal oversight",
                      "Features like automatic print ejection and remote monitoring"
                    ]
                  },
                  {
                    title: "Material-Specific Marketplaces",
                    points: [
                      "Platforms dedicated to specific material types",
                      "New niches for specialized products",
                      "Create opportunities outside general marketplaces"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <h4 className="font-bold mb-2">{section.title}</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      {section.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">The 2026 Evolution: Specialization & Ecosystem</h3>
              <div className="grid gap-4">
                {[
                  {
                    title: "Multi-Material Consumer Printers",
                    points: [
                      "Affordable printers combining multiple materials",
                      "Create previously impossible products",
                      "New opportunities for innovative designs"
                    ]
                  },
                  {
                    title: "Hyper-Local Production Networks",
                    points: [
                      "Community-based printing hubs in most cities",
                      "Connect local designers with production capacity",
                      "Reduce shipping needs and costs"
                    ]
                  },
                  {
                    title: "Industry-Specific Applications",
                    points: [
                      "Deeper penetration into specialized industries",
                      "New B2B opportunities in education and healthcare",
                      "Professional sports applications"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <h4 className="font-bold mb-2">{section.title}</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      {section.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "worksheet",
      title: "Self-Assessment",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Chapter 1 Self-Assessment: Your Arbitrage Advantage</h2>
          <p className="text-gray-700">
            Before moving forward, take a moment to identify your own arbitrage advantages in the 3D printing space:
          </p>

          <div className="space-y-4">
            {[
              {
                question: "What existing skills do you have that most people in the 3D printing industry lack? (Marketing, design, sales, etc.)",
                id: "skills"
              },
              {
                question: "What misconceptions about 3D printing did you previously hold? How has your understanding changed?",
                id: "misconceptions"
              },
              {
                question: "Which phase of the industry's evolution do you find most interesting, and why?",
                id: "phase"
              },
              {
                question: "What specific niche or application of 3D printing excites you the most?",
                id: "niche"
              },
              {
                question: "Based on the industry forecast, which upcoming trend do you feel best positioned to capitalize on?",
                id: "trend"
              }
            ].map((question) => (
              <div key={question.id} className="space-y-2">
                <label htmlFor={question.id} className="text-sm font-medium text-gray-700">
                  {question.question}
                </label>
                <textarea
                  id={question.id}
                  className="w-full min-h-[100px] p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Type your answer here..."
                />
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (section < sections.length - 1) {
      setSection(section + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (section > 0) {
      setSection(section - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <DashboardLayout title="Chapter 1: Arbitrage Windows">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <MiniProgress currentChapter={1} />
        
        <Card className="mb-6">
          <CardContent className="p-6">
            {sections[section].content}
            
            <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={section === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              
              {section < sections.length - 1 ? (
                <Button onClick={handleNext}>
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  onClick={() => {
                    toast({
                      title: "Chapter 1 Completed!",
                      description: "You're ready to continue to Chapter 2."
                    });
                    navigate("/dashboard");
                  }}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                >
                  Complete Chapter
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Chapter1;
