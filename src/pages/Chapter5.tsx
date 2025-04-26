
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { Introduction } from "@/components/chapters/chapter5/Introduction";
import { RequirementsSection } from "@/components/chapters/chapter5/RequirementsSection";
import { PrinterSelection } from "@/components/chapters/chapter5/PrinterSelection";
import { Accessories } from "@/components/chapters/chapter5/Accessories";
import { Workspace } from "@/components/chapters/chapter5/Workspace";

const Chapter5 = () => {
  const [section, setSection] = useState(0);
  const sections = [
    { id: "requirements", title: "Introduction & Requirements", Component: Introduction },
    { id: "printer-selection", title: "Printer Selection Guide", Component: PrinterSelection },
    { id: "accessories", title: "Essential Accessories", Component: Accessories },
    { id: "workspace", title: "Workspace Setup", Component: Workspace },
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
  };

  const CurrentSection = sections[section].Component;

  return (
    <DashboardLayout title="Chapter 5: Choosing Your Production Tools">
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

export default Chapter5;
