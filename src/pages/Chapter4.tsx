
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { ProfitsFramework } from "@/components/chapters/chapter4/ProfitsFramework";
import { MatchFramework } from "@/components/chapters/chapter4/MatchFramework";
import { ProductTrinity } from "@/components/chapters/chapter4/ProductTrinity";
import { ProductWorksheet } from "@/components/chapters/chapter4/ProductWorksheet";

const Chapter4 = () => {
  const [section, setSection] = useState(0);
  const navigate = useNavigate();
  
  const sections = [
    { id: "profits-framework", title: "The PROFITS Framework", Component: ProfitsFramework },
    { id: "match-framework", title: "The MATCH Framework", Component: MatchFramework },
    { id: "product-trinity", title: "Building Your Product Trinity", Component: ProductTrinity },
    { id: "worksheet", title: "Chapter 4 Product Evaluation", Component: ProductWorksheet },
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
    <DashboardLayout title="Chapter 4: The Product Trinity">
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

export default Chapter4;
