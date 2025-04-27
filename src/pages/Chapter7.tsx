
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
      
      // Track progress for completed section - using the correct format
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
    navigate("/dashboard/3d-blueprint");
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
