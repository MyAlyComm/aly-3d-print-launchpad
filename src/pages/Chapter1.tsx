
import React, { useState, useEffect, useRef } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { ArbitrageIntro } from "@/components/chapters/chapter1/ArbitrageIntro";
import { Timeline } from "@/components/chapters/chapter1/Timeline";
import { Misconceptions } from "@/components/chapters/chapter1/Misconceptions";
import { FutureOutlook } from "@/components/chapters/chapter1/FutureOutlook";
import { SelfAssessment } from "@/components/chapters/chapter1/SelfAssessment";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Chapter1 = () => {
  const [section, setSection] = useState(0);
  const { updateProgress } = useChapterProgress();
  const navigate = useNavigate();
  const progressUpdated = useRef(false);

  const sections = [
    {
      id: "arbitrage",
      title: "The Gateway to Entrepreneurial Success",
      content: <ArbitrageIntro />
    },
    {
      id: "timeline",
      title: "The 3D Printing Timeline",
      content: <Timeline />
    },
    {
      id: "myths",
      title: "Common Misconceptions",
      content: <Misconceptions />
    },
    {
      id: "future",
      title: "The New Horizon",
      content: <FutureOutlook />
    },
    {
      id: "worksheet",
      title: "Self-Assessment",
      content: <SelfAssessment />
    }
  ];

  useEffect(() => {
    // Prevent duplicate progress updates by using a ref
    if (!progressUpdated.current) {
      progressUpdated.current = true;
      
      // Update the progress when a new section is viewed
      const currentSection = sections[section];
      if (currentSection) {
        updateProgress.mutate({
          chapterNumber: 1,
          sectionId: currentSection.id
        });
      }

      // Reset the ref after a delay
      const timer = setTimeout(() => {
        progressUpdated.current = false;
      }, 5000); // 5 second cooldown between progress updates
      
      return () => clearTimeout(timer);
    }
  }, [section, updateProgress, sections]);

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

  const handleComplete = () => {
    updateProgress.mutate({
      chapterNumber: 1,
      sectionId: "worksheet",
      responseData: { completed: true }
    });
    
    toast.success("Chapter 1 completed!", {
      description: "Your progress has been saved"
    });
    
    navigate("/dashboard");
  };

  return (
    <DashboardLayout title="Chapter 1: Arbitrage Windows">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <ChapterProgressBar 
          currentSection={section}
          totalSections={sections.length}
          sectionTitle={sections[section].title}
        />
        
        <Card className="mb-6 shadow-md border-t-4 border-t-primary">
          <CardContent className="p-6 md:p-8">
            {sections[section].content}
            
            <ChapterNavigation
              currentSection={section}
              totalSections={sections.length}
              onNext={handleNext}
              onPrev={handlePrev}
              onComplete={handleComplete}
            />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Chapter1;
