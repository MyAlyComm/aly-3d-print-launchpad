
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChapterHeader } from "@/components/chapter1/ChapterHeader";
import { TableOfContents } from "@/components/chapter1/TableOfContents";
import { ChapterCarousel } from "@/components/chapter1/ChapterCarousel";
import { MiniProgress } from "@/components/progress/MiniProgress";

const ChapterOne = () => {
  return (
    <DashboardLayout title="Chapter 1: Arbitrage Windows">
      <ScrollArea className="h-full pr-4">
        <div className="max-w-4xl mx-auto">
          <MiniProgress currentChapter={1} />
          <ChapterHeader />
          <TableOfContents />
          
          <Card>
            <CardContent className="pt-6">
              <ChapterCarousel />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </DashboardLayout>
  );
};

export default ChapterOne;
