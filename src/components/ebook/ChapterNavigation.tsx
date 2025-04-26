
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
  const isLastSection = currentSection === totalSections - 1;

  const handlePrimaryAction = () => {
    if (isLastSection) {
      onComplete();
    } else {
      onNext();
    }
  };

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
      
      <Button
        onClick={handlePrimaryAction}
        className={`
          ${isLastSection 
            ? "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600" 
            : ""
          } 
          ${isMobile ? "h-8 w-8 p-0" : ""}
        `}
      >
        {isLastSection 
          ? (!isMobile ? "Complete Chapter" : <ChevronRight className="h-4 w-4" />) 
          : (!isMobile ? "Next" : <ChevronRight className="h-4 w-4" />)
        }
        {!isLastSection && !isMobile && <ChevronRight className="h-5 w-5 ml-1" />}
      </Button>
    </div>
  );
};
