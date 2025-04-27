import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { Introduction } from "@/components/chapters/chapter6/Introduction";
import { PlatformComparison } from "@/components/chapters/chapter6/PlatformComparison";
import { PlatformStrategy } from "@/components/chapters/chapter6/PlatformStrategy";
import { MonthPlan } from "@/components/chapters/chapter6/MonthPlan";

const Chapter6 = () => {
  const [section, setSection] = useState(0);
  const sections = [
    { id: "introduction", title: "Introduction: Finding Your Perfect Starting Point", Component: Introduction },
    { id: "platform-comparison", title: "Quick Platform Comparison", Component: PlatformComparison },
    { id: "platform-strategy", title: "Finding Your Perfect Platform", Component: PlatformStrategy },
    { id: "month-plan", title: "Your 2-Month Platform Strategy", Component: MonthPlan },
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
    <DashboardLayout title="Chapter 6: Selecting Your Selling Platforms">
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

export default Chapter6;
