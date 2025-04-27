import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MiniProgress } from "@/components/progress/MiniProgress";
import { TheAxiogeneticTheorem } from "@/components/chapters/chapter2/TheAxiogeneticTheorem";
import { PersonalAwakening } from "@/components/chapters/chapter2/PersonalAwakening";
import { TheRevelation } from "@/components/chapters/chapter2/TheRevelation";
import { DecisionTree } from "@/components/chapters/chapter2/DecisionTree";
import { SelfAssessmentWorksheet } from "@/components/chapters/chapter2/SelfAssessmentWorksheet";
import { useNavigate } from "react-router-dom";

const Chapter2 = () => {
  const [section, setSection] = useState(0);
  const navigate = useNavigate();

  const sections = [
    {
      id: "theorem",
      title: "The Axiogenetic Theorem",
      content: <TheAxiogeneticTheorem />
    },
    {
      id: "awakening",
      title: "The Personal Awakening",
      content: <PersonalAwakening />
    },
    {
      id: "revelation",
      title: "The Revelation",
      content: <TheRevelation />
    },
    {
      id: "decisionTree",
      title: "The Decision Tree Framework",
      content: <DecisionTree />
    },
    {
      id: "worksheet",
      title: "Self-Assessment Worksheet",
      content: <SelfAssessmentWorksheet />
    }
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

  return (
    <DashboardLayout title="Chapter 2: Knowing Yourself, Knowing Your Tools">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <MiniProgress currentChapter={2} />
        
        <Card className="mb-6">
          <CardContent className="p-6">
            {sections[section].content}
            
            <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={section === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              
              {section < sections.length - 1 && (
                <Button onClick={handleNext}>
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Chapter2;
