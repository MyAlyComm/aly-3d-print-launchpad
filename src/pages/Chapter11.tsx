
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { Conclusion } from "@/components/chapters/chapter11/Conclusion";
import { useChapterForm } from "@/hooks/useChapterForm";

const Chapter11 = () => {
  const [section, setSection] = useState(0);
  const { saveResponse } = useChapterForm(11, "worksheet");
  
  const sections = [
    { id: "conclusion", title: "The Journey Ahead", Component: Conclusion }
  ];

  const handleNext = () => {
    if (section < sections.length - 1) {
      setSection(section + 1);
      window.scrollTo(0, 0);
      
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
    saveResponse(sections[section].id, { 
      checkboxes: { completed: true } 
    });
    
    saveResponse("worksheet", { 
      checkboxes: { completed: true } 
    });
    
    window.scrollTo(0, 0);
  };

  const CurrentSection = sections[section].Component;

  return (
    <DashboardLayout title="Chapter 11: The Journey Ahead">
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

export default Chapter11;
