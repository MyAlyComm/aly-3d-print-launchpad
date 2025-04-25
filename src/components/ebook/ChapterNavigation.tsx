
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ChapterNavigationProps {
  currentSection: number;
  totalSections: number;
  onNext: () => void;
  onPrev: () => void;
  onComplete: () => void;
}

export const ChapterNavigation = ({
  currentSection,
  totalSections,
  onNext,
  onPrev,
  onComplete
}: ChapterNavigationProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center justify-between mt-8">
      <Button
        variant="outline"
        onClick={onPrev}
        disabled={currentSection === 0}
        className={isMobile ? "h-8 w-8 p-0" : ""}
      >
        <ChevronLeft className={isMobile ? "h-4 w-4" : "h-5 w-5 mr-1"} />
        {!isMobile && "Previous"}
      </Button>
      
      <span className="text-sm text-gray-500">
        {currentSection + 1} / {totalSections}
      </span>
      
      {currentSection < totalSections - 1 ? (
        <Button
          onClick={onNext}
          className={isMobile ? "h-8 w-8 p-0" : ""}
        >
          {!isMobile && "Next"}
          <ChevronRight className={isMobile ? "h-4 w-4" : "h-5 w-5 ml-1"} />
        </Button>
      ) : (
        <Button 
          onClick={onComplete}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
        >
          Complete Chapter
        </Button>
      )}
    </div>
  );
};
