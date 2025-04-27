
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { Introduction } from "@/components/chapters/chapter10/Introduction";
import { IndustryShifts } from "@/components/chapters/chapter10/IndustryShifts";
import { StrategicPositioning } from "@/components/chapters/chapter10/StrategicPositioning";
import { FutureProofingStrategies } from "@/components/chapters/chapter10/FutureProofingStrategies";
import { ImplementationPlan } from "@/components/chapters/chapter10/ImplementationPlan";
import { FinalAssessment } from "@/components/chapters/chapter10/FinalAssessment";
import { useChapterForm } from "@/hooks/useChapterForm";

const Chapter10 = () => {
  const [section, setSection] = useState(0);
  const navigate = useNavigate();
  const { saveResponse } = useChapterForm(10, "worksheet");
  
  const sections = [
    { id: "introduction", title: "Preparing for Tomorrow", Component: Introduction },
    { id: "industry-shifts", title: "Coming Industry Shifts", Component: IndustryShifts },
    { id: "strategic-positioning", title: "Strategic Positioning", Component: StrategicPositioning },
    { id: "future-proofing", title: "Future-Proofing Strategies", Component: FutureProofingStrategies },
    { id: "implementation", title: "Implementation Plan", Component: ImplementationPlan },
    { id: "final-assessment", title: "Self-Assessment", Component: FinalAssessment }
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
    navigate("/dashboard/3d-blueprint");
  };

  const CurrentSection = sections[section].Component;

  return (
    <DashboardLayout title="Chapter 10: Future-Proofing Your Business">
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

export default Chapter10;
