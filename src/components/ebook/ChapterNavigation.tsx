
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, MotionConfig } from "framer-motion";

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
    <MotionConfig reducedMotion="user">
      <motion.div 
        className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="outline"
          onClick={onPrev}
          disabled={currentSection === 0}
          className={`transition-all ${currentSection === 0 ? 'opacity-50' : 'hover:border-primary hover:text-primary'} ${isMobile ? "h-10 px-3" : ""}`}
        >
          <ChevronLeft className={isMobile ? "h-4 w-4" : "h-5 w-5 mr-1"} />
          {!isMobile && "Previous"}
        </Button>
        
        <div className="flex items-center">
          {Array.from({ length: totalSections }).map((_, i) => (
            <div 
              key={i}
              className={`h-2 w-2 rounded-full mx-1 ${
                i === currentSection 
                  ? 'bg-primary' 
                  : i < currentSection 
                    ? 'bg-primary/40' 
                    : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <Button
          onClick={handlePrimaryAction}
          className={`
            transition-all
            ${isLastSection 
              ? "bg-gradient-to-r from-primary to-primary/80 hover:opacity-90" 
              : "bg-primary hover:bg-primary/90"
            } 
            ${isMobile ? "h-10 px-3" : ""}
          `}
        >
          {isLastSection 
            ? (!isMobile ? (
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Complete Chapter
                </span>
              ) : <CheckCircle className="h-4 w-4" />) 
            : (!isMobile ? "Next" : <ChevronRight className="h-4 w-4" />)
          }
          {!isLastSection && !isMobile && <ChevronRight className="h-5 w-5 ml-1" />}
        </Button>
      </motion.div>
    </MotionConfig>
  );
};
