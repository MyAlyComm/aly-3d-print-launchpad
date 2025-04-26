
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";

// Import chapter 1 sections
import { OpportunitySection } from "@/components/chapter1/OpportunitySection";
import { ArbitrageSection } from "@/components/chapter1/ArbitrageSection";
// Remove import for BudgetSection
import { TimelineSection } from "@/components/chapter1/TimelineSection";
import { MythsSection } from "@/components/chapter1/MythsSection";
import { FutureSection } from "@/components/chapter1/FutureSection";
import { SelfAssessmentSection } from "@/components/chapter1/SelfAssessmentSection";
import { ChapterHeader } from "@/components/chapter1/ChapterHeader";
import { BookIntroSection } from "@/components/chapter1/BookIntroSection";
import { StorySection } from "@/components/chapter1/StorySection";

const NewEbookChapter = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const isMobile = useIsMobile();

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

  // Handle chapter completion
  const handleCompleteChapter = () => {
    toast({
      title: "Chapter Completed!",
      description: "Your progress has been saved.",
    });
    
    queryClient.invalidateQueries({ queryKey: ["chapter-progress"] });
    navigate("/dashboard");
  };

  // Define sections array using existing Chapter 1 components
  const sections = [
    {
      id: "intro",
      title: "Book Introduction",
      component: <BookIntroSection onSubmit={goToNextSection} />,
    },
    {
      id: "story",
      title: "My Story & Journey",
      component: <StorySection onSubmit={goToNextSection} />,
    },
    {
      id: "opportunity",
      title: "The 3D Printing Opportunity",
      component: <OpportunitySection onSubmit={goToNextSection} />,
    },
    {
      id: "arbitrage",
      title: "Understanding Arbitrage Windows",
      component: <ArbitrageSection onSubmit={goToNextSection} />,
    },
    // Removed BudgetSection
    {
      id: "timeline",
      title: "Industry Timeline",
      component: <TimelineSection />,
    },
    {
      id: "myths",
      title: "Breaking Through Misconceptions",
      component: <MythsSection />,
    },
    {
      id: "future",
      title: "The Future of 3D Printing",
      component: <FutureSection />,
    },
    {
      id: "assessment",
      title: "Self Assessment",
      component: <SelfAssessmentSection onSubmit={handleCompleteChapter} />,
    }
  ];

  return (
    <DashboardLayout title="Chapter 1: 3D Printing Fundamentals">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        {/* Chapter Header */}
        <ChapterHeader />
        
        {/* Chapter Progress */}
        <ChapterProgressBar 
          currentSection={currentSection}
          totalSections={sections.length}
          sectionTitle={sections[currentSection].title}
        />
        
        {/* Chapter Content Card */}
        <Card className="mb-6">
          <CardContent className={isMobile ? "p-4" : "p-6"}>
            {/* Current Section Content */}
            <div className="min-h-[300px]">
              {sections[currentSection].component}
            </div>
            
            {/* Navigation Controls */}
            <ChapterNavigation 
              currentSection={currentSection}
              totalSections={sections.length}
              onNext={goToNextSection}
              onPrev={goToPrevSection}
              onComplete={handleCompleteChapter}
            />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default NewEbookChapter;
