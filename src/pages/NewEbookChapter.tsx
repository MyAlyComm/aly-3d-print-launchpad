
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

// Define the different sections we'll use in our carousel
interface SectionType {
  id: string;
  title: string;
  content: React.ReactNode;
}

// Mock submit handler that would typically handle form submission
const mockSubmitHandler = (sectionId: string) => {
  console.log(`Section ${sectionId} submitted`);
};

const NewEbookChapter = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const isMobile = useIsMobile();

  // Define our content sections
  const sections: SectionType[] = [
    {
      id: "intro",
      title: "Introduction to 3D Printing",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Welcome to Chapter 1</h3>
          <p className="text-gray-700">
            In this chapter, we'll explore the fundamentals of 3D printing and how to
            leverage it as a business opportunity. 3D printing has created a new
            frontier for entrepreneurs with minimal startup costs.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-800">
              "The greatest opportunities often arise from emerging technologies 
              that haven't yet been fully explored by the market."
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="3D Printing Technology" 
            className="w-full h-auto rounded-lg mt-4"
          />
        </div>
      ),
    },
    {
      id: "arbitrage",
      title: "Arbitrage Opportunities",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Finding Your Niche</h3>
          <p className="text-gray-700">
            Arbitrage in 3D printing means identifying products that can be produced
            at a significantly lower cost than their market selling price. This
            creates profitable opportunities with minimal investment.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Custom and personalized products with high margins</li>
            <li>Niche market items with limited competition</li>
            <li>Replacement parts for discontinued products</li>
            <li>Specialized tools and functional components</li>
          </ul>
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            alt="Market Opportunity" 
            className="w-full h-auto rounded-lg mt-4"
          />
        </div>
      ),
    },
    {
      id: "budget",
      title: "Budget Planning",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Starting Budget Considerations</h3>
          <p className="text-gray-700">
            You can start a 3D printing business with as little as $500-$1,000. Here's
            how to allocate your resources depending on your budget:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium mb-2">$500-$1,000 Budget</h4>
              <ul className="text-sm space-y-1">
                <li>• One entry-level printer (Ender 3)</li>
                <li>• 2-3 rolls of PLA filament</li>
                <li>• Basic tools kit</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium mb-2">$1,000-$2,000 Budget</h4>
              <ul className="text-sm space-y-1">
                <li>• One mid-tier printer or two budget printers</li>
                <li>• Multiple filament types</li>
                <li>• Post-processing tools</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "assessment",
      title: "Self Assessment",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Your 3D Printing Potential</h3>
          <p className="text-gray-700">
            Let's assess your readiness to start a 3D printing business. Answer these
            questions to help identify your strengths and areas for growth.
          </p>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                What interests you most about 3D printing?
              </label>
              <textarea 
                className="w-full p-2 border border-gray-300 rounded-md" 
                rows={3}
                placeholder="Your answer here..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                How much time can you dedicate to this business weekly?
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Less than 10 hours</option>
                <option>10-20 hours</option>
                <option>20-30 hours</option>
                <option>Full-time (40+ hours)</option>
              </select>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Handle navigation between sections
  const goToNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const goToPrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Calculate progress percentage
  const progress = ((currentSection + 1) / sections.length) * 100;

  // Handle chapter completion
  const handleCompleteChapter = () => {
    // This would typically update progress in a database
    toast({
      title: "Chapter Completed!",
      description: "Your progress has been saved.",
    });
    
    // Simulate invalidating queries to refresh progress data
    queryClient.invalidateQueries({ queryKey: ["chapter-progress"] });
    
    // Navigate back to dashboard
    navigate("/dashboard");
  };

  return (
    <DashboardLayout title="Chapter 1: 3D Printing Fundamentals">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        {/* Chapter Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">
              {currentSection + 1} of {sections.length}: {sections[currentSection].title}
            </div>
            <div className="text-sm text-gray-600">
              {Math.round(progress)}% Complete
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        {/* Chapter Content Card */}
        <Card className="mb-6">
          <CardContent className={isMobile ? "p-4" : "p-6"}>
            {/* Chapter Title */}
            <div className="mb-6 pb-4 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">
                3D Printing Business Fundamentals
              </h2>
              <p className="text-gray-600 mt-1">
                Learn how to identify profitable opportunities in the 3D printing space.
              </p>
            </div>
            
            {/* Current Section Content */}
            <div className="min-h-[300px]">
              {sections[currentSection].content}
            </div>
            
            {/* Navigation Controls - Positioned right after content without large gaps */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                onClick={goToPrevSection}
                disabled={currentSection === 0}
                className={isMobile ? "h-8 w-8 p-0" : ""}
              >
                <ChevronLeft className={isMobile ? "h-4 w-4" : "h-5 w-5 mr-1"} />
                {!isMobile && "Previous"}
              </Button>
              
              <span className="text-sm text-gray-500">
                {currentSection + 1} / {sections.length}
              </span>
              
              {currentSection < sections.length - 1 ? (
                <Button
                  onClick={goToNextSection}
                  className={isMobile ? "h-8 w-8 p-0" : ""}
                >
                  {!isMobile && "Next"}
                  <ChevronRight className={isMobile ? "h-4 w-4" : "h-5 w-5 ml-1"} />
                </Button>
              ) : (
                <Button 
                  onClick={handleCompleteChapter}
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

export default NewEbookChapter;
