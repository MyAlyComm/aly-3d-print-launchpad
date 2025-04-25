
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

// Import chapter 1 sections
import { OpportunitySection } from "@/components/chapter1/OpportunitySection";
import { ArbitrageSection } from "@/components/chapter1/ArbitrageSection";
import { BudgetSection } from "@/components/chapter1/BudgetSection";
import { TimelineSection } from "@/components/chapter1/TimelineSection";
import { MythsSection } from "@/components/chapter1/MythsSection";
import { FutureSection } from "@/components/chapter1/FutureSection";
import { SelfAssessmentSection } from "@/components/chapter1/SelfAssessmentSection";
import { ChapterHeader } from "@/components/chapter1/ChapterHeader";

const NewEbookChapter = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const isMobile = useIsMobile();

  // Define sections array using existing Chapter 1 components
  const sections = [
    {
      id: "opportunity",
      title: "The 3D Printing Opportunity",
      content: <OpportunitySection />,
    },
    {
      id: "arbitrage",
      title: "Understanding Arbitrage Windows",
      content: <ArbitrageSection />,
    },
    {
      id: "budget",
      title: "Budget Planning",
      content: <BudgetSection />,
    },
    {
      id: "timeline",
      title: "Industry Timeline",
      content: <TimelineSection />,
    },
    {
      id: "myths",
      title: "Breaking Through Misconceptions",
      content: <MythsSection />,
    },
    {
      id: "future",
      title: "The Future of 3D Printing",
      content: <FutureSection />,
    },
    {
      id: "assessment",
      title: "Self Assessment",
      content: <SelfAssessmentSection />,
    }
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
    toast({
      title: "Chapter Completed!",
      description: "Your progress has been saved.",
    });
    
    queryClient.invalidateQueries({ queryKey: ["chapter-progress"] });
    navigate("/dashboard");
  };

  return (
    <DashboardLayout title="Chapter 1: 3D Printing Fundamentals">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        {/* Chapter Header */}
        <ChapterHeader />
        
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
            {/* Current Section Content */}
            <div className="min-h-[300px]">
              {sections[currentSection].content}
            </div>
            
            {/* Navigation Controls */}
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
