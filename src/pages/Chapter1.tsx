
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MiniProgress } from "@/components/progress/MiniProgress";
import { ArbitrageIntro } from "@/components/chapters/chapter1/ArbitrageIntro";
import { Timeline } from "@/components/chapters/chapter1/Timeline";
import { Misconceptions } from "@/components/chapters/chapter1/Misconceptions";
import { FutureOutlook } from "@/components/chapters/chapter1/FutureOutlook";
import { SelfAssessment } from "@/components/chapters/chapter1/SelfAssessment";

const Chapter1 = () => {
  const [section, setSection] = useState(0);

  const sections = [
    {
      id: "arbitrage",
      title: "The Gateway to Entrepreneurial Success",
      content: <ArbitrageIntro />
    },
    {
      id: "timeline",
      title: "The 3D Printing Timeline",
      content: <Timeline />
    },
    {
      id: "myths",
      title: "Common Misconceptions",
      content: <Misconceptions />
    },
    {
      id: "future",
      title: "The New Horizon",
      content: <FutureOutlook />
    },
    {
      id: "worksheet",
      title: "Self-Assessment",
      content: <SelfAssessment />
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

  return (
    <DashboardLayout title="Chapter 1: Arbitrage Windows">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <MiniProgress currentChapter={1} />
        
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

export default Chapter1;
