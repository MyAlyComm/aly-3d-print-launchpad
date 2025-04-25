
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";

// Import chapter 2 sections
import { TheoremSection } from "@/components/chapter2/TheoremSection";
import { AwakeningSection } from "@/components/chapter2/AwakeningSection";
import { RevelationSection } from "@/components/chapter2/RevelationSection";
import { DecisionTreeSection } from "@/components/chapter2/DecisionTreeSection";
import { WorksheetSection } from "@/components/chapter2/WorksheetSection";
import { ChapterHeader } from "@/components/chapter2/ChapterHeader";

const Chapter2 = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const isMobile = useIsMobile();

  // Define sections array using existing Chapter 2 components
  const sections = [
    {
      id: "theorem",
      title: "The Axiogenetic Theorem",
      content: <TheoremSection onSubmit={() => goToNextSection()} />,
    },
    {
      id: "awakening",
      title: "The Awakening",
      content: <AwakeningSection onSubmit={() => goToNextSection()} />,
    },
    {
      id: "revelation",
      title: "The Revelation",
      content: <RevelationSection onSubmit={() => goToNextSection()} />,
    },
    {
      id: "framework",
      title: "The Decision Tree Framework",
      content: <DecisionTreeSection onSubmit={() => goToNextSection()} />,
    },
    {
      id: "worksheet",
      title: "The 3D Printing Business Path Worksheet",
      content: <WorksheetSection onSubmit={() => goToNextSection()} />,
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
    <DashboardLayout title="Chapter 2: Knowing Yourself, Knowing Your Tools">
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
              {sections[currentSection].content}
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

export default Chapter2;
