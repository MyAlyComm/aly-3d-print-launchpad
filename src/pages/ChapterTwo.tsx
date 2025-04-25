
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChapterHeader } from "@/components/chapter2/ChapterHeader";
import { ChapterCarousel } from "@/components/chapter2/ChapterCarousel";
import { MiniProgress } from "@/components/progress/MiniProgress";
import { useIsMobile } from "@/hooks/use-mobile";

const ChapterTwo = () => {
  const isMobile = useIsMobile();
  
  return (
    <DashboardLayout title="Chapter 2: Knowing Yourself, Knowing Your Tools">
      <ScrollArea className="h-full overflow-x-hidden">
        <div className="container max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
          <MiniProgress currentChapter={2} />
          
          <Card className="mb-6 overflow-hidden">
            <CardContent className={`${isMobile ? 'p-3 sm:p-4' : 'p-6'}`}>
              <ChapterHeader />
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <ChapterCarousel />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </DashboardLayout>
  );
};

export default ChapterTwo;
