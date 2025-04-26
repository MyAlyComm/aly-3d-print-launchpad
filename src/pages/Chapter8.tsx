
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { Introduction } from "@/components/chapters/chapter8/Introduction";
import { MarketingFunnel } from "@/components/chapters/chapter8/MarketingFunnel";
import { ContentCreation } from "@/components/chapters/chapter8/ContentCreation";
import { SystemizingMarketing } from "@/components/chapters/chapter8/SystemizingMarketing";
import { MarketingWorksheet } from "@/components/chapters/chapter8/MarketingWorksheet";
import { useChapterForm } from "@/hooks/useChapterForm";

const Chapter8 = () => {
  const [section, setSection] = useState(0);
  const { saveResponse } = useChapterForm(8, "worksheet");
  
  const sections = [
    { id: "introduction", title: "Introduction: The Real Deal on Marketing", Component: Introduction },
    { id: "marketing-funnel", title: "The Zero-Cost Marketing Funnel", Component: MarketingFunnel },
    { id: "content-creation", title: "Content Creation & Customer Advocacy", Component: ContentCreation },
    { id: "systemizing", title: "Systemizing & Scaling Your Marketing", Component: SystemizingMarketing },
    { id: "worksheet", title: "Your 30-Day Marketing Plan", Component: MarketingWorksheet },
  ];

  const handleNext = () => {
    if (section < sections.length - 1) {
      setSection(section + 1);
      window.scrollTo(0, 0);
      
      // Track progress for completed section
      saveResponse(sections[section].id, { 
        checkboxes: { completed: true } 
      });
    }
  };

  const handlePrev = () => {
    if (section > 0) {
      setSection(section - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleComplete = () => {
    // Track progress for the final section
    saveResponse(sections[section].id, { 
      checkboxes: { completed: true } 
    });
    
    // Mark the worksheet as complete
    saveResponse("worksheet", { 
      checkboxes: { completed: true } 
    });
    
    window.scrollTo(0, 0);
  };

  const CurrentSection = sections[section].Component;

  return (
    <DashboardLayout title="Chapter 8: Zero-Cost Marketing That Works">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <ChapterProgressBar
          currentSection={section} 
          totalSections={sections.length} 
          sectionTitle={sections[section].title} 
        />
        
        <div className="prose max-w-none">
          <CurrentSection />
        </div>

        <ChapterNavigation
          currentSection={section}
          totalSections={sections.length}
          onNext={handleNext}
          onPrev={handlePrev}
          onComplete={handleComplete}
        />
      </div>
    </DashboardLayout>
  );
};

export default Chapter8;
