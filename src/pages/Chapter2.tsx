
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChapterProgressBar } from "@/components/ebook/ChapterProgress";
import { ChapterNavigation } from "@/components/ebook/ChapterNavigation";
import { TheAxiogeneticTheorem } from "@/components/chapters/chapter2/TheAxiogeneticTheorem";
import { PersonalAwakening } from "@/components/chapters/chapter2/PersonalAwakening";
import { TheRevelation } from "@/components/chapters/chapter2/TheRevelation";
import { DecisionTree } from "@/components/chapters/chapter2/DecisionTree";
import { SelfAssessmentWorksheet } from "@/components/chapters/chapter2/SelfAssessmentWorksheet";

const Chapter2 = () => {
  const [section, setSection] = useState(0);
  const navigate = useNavigate();

  const sections = [
    { id: "theorem", title: "The Axiogenetic Theorem", Component: TheAxiogeneticTheorem },
    { id: "awakening", title: "The Personal Awakening", Component: PersonalAwakening },
    { id: "revelation", title: "The Revelation", Component: TheRevelation },
    { id: "decisionTree", title: "The Decision Tree Framework", Component: DecisionTree },
    { id: "worksheet", title: "Self-Assessment Worksheet", Component: SelfAssessmentWorksheet }
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
    <DashboardLayout title="Chapter 2: Knowing Yourself, Knowing Your Tools">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <ChapterProgressBar
          currentSection={section} 
          totalSections={sections.length} 
          sectionTitle={sections[section].title} 
        />
        
        <div className="prose max-w-none mt-8">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 shadow-sm border border-purple-100/50">
            <CurrentSection />
          </div>
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

export default Chapter2;
