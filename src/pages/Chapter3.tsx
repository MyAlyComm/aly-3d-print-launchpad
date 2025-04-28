
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { Beyond } from "@/components/chapters/chapter3/Beyond";
import { CoreSystem } from "@/components/chapters/chapter3/CoreSystem";
import { Implementation } from "@/components/chapters/chapter3/Implementation";
import { SystemWorksheet } from "@/components/chapters/chapter3/SystemWorksheet";

const Chapter3 = () => {
  const [section, setSection] = useState(0);
  const navigate = useNavigate();
  
  const sections = [
    { id: "beyond", title: "Beyond Traditional Value Creation", Component: Beyond },
    { id: "core-system", title: "The Core System Explained", Component: CoreSystem },
    { id: "implementation", title: "Implementation & Strategy", Component: Implementation },
    { id: "worksheet", title: "Chapter 3 Self-Assessment", Component: SystemWorksheet },
  ];

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
    window.scrollTo(0, 0);
    navigate("/dashboard/3d-blueprint");
  };

  const CurrentSection = sections[section].Component;

  return (
    <DashboardLayout title="Chapter 3: The 3+1=40 System">
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

export default Chapter3;
