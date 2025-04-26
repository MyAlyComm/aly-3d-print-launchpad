
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { Introduction } from "@/components/chapters/chapter7/Introduction";
import { InitialSetup } from "@/components/chapters/chapter7/InitialSetup";
import { WorkflowOptimization } from "@/components/chapters/chapter7/WorkflowOptimization";
import { SystemsSetup } from "@/components/chapters/chapter7/SystemsSetup";
import { useChapterForm } from "@/hooks/useChapterForm";

const Chapter7 = () => {
  const [section, setSection] = useState(0);
  const { saveResponse } = useChapterForm(7, "worksheet");
  
  const sections = [
    { id: "foundation", title: "Introduction: The Foundation of Consistency", Component: Introduction },
    { id: "setup-system", title: "Initial Setup: The Five-Step System", Component: InitialSetup },
    { id: "first-print", title: "Workflow Optimization", Component: WorkflowOptimization },
    { id: "listings", title: "Systems Setup Assessment", Component: SystemsSetup },
  ];

  const handleNext = () => {
    if (section < sections.length - 1) {
      setSection(section + 1);
      window.scrollTo(0, 0);
      
      // Track progress for completed section
      saveResponse(sections[section].id, { completed: true });
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
    saveResponse(sections[section].id, { completed: true });
    
    // Mark the worksheet as complete
    saveResponse("worksheet", { completed: true });
    
    window.scrollTo(0, 0);
  };

  const CurrentSection = sections[section].Component;

  return (
    <DashboardLayout title="Chapter 7: Setting Up For Success">
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

export default Chapter7;
