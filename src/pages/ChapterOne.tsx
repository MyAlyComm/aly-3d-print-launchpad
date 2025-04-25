
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChapterHeader } from "@/components/chapter1/ChapterHeader";
import { ChapterCarousel } from "@/components/chapter1/ChapterCarousel";
import { MiniProgress } from "@/components/progress/MiniProgress";
import { useIsMobile } from "@/hooks/use-mobile";

const ChapterOne = () => {
  const isMobile = useIsMobile();
  
  return (
    <DashboardLayout title="Chapter 1: Arbitrage Windows">
      <ScrollArea className="h-full pr-4">
        <div className="max-w-4xl mx-auto px-2 sm:px-0">
          <MiniProgress currentChapter={1} />
          <ChapterHeader />
          
          <Card>
            <CardContent className={`${isMobile ? 'pt-4 p-4' : 'pt-6 p-6'}`}>
              <ChapterCarousel />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </DashboardLayout>
  );
};

export default ChapterOne;
