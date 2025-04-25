
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChapterHeader } from "@/components/chapter2/ChapterHeader";
import { TableOfContents } from "@/components/chapter2/TableOfContents";
import { TheoremSection } from "@/components/chapter2/TheoremSection";
import { AwakeningSection } from "@/components/chapter2/AwakeningSection";
import { RevelationSection } from "@/components/chapter2/RevelationSection";
import { DecisionTreeSection } from "@/components/chapter2/DecisionTreeSection";
import { WorksheetSection } from "@/components/chapter2/WorksheetSection";
import { MiniProgress } from "@/components/progress/MiniProgress";

const ChapterTwo = () => {
  return (
    <DashboardLayout title="Chapter 2: Knowing Yourself, Knowing Your Tools">
      <ScrollArea className="h-full pr-4">
        <div className="max-w-4xl mx-auto">
          <MiniProgress currentChapter={2} />
          <ChapterHeader />
          <TableOfContents />
          
          <Card>
            <CardContent className="pt-6">
              <TheoremSection />
              <AwakeningSection />
              <RevelationSection />
              <DecisionTreeSection />
              <WorksheetSection />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </DashboardLayout>
  );
};

export default ChapterTwo;
