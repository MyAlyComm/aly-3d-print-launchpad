
import { Progress } from "@/components/ui/progress";
import { motion, MotionConfig } from "framer-motion";

interface ChapterProgressProps {
  currentSection: number;
  totalSections: number;
  sectionTitle: string;
}

export const ChapterProgressBar = ({ currentSection, totalSections, sectionTitle }: ChapterProgressProps) => {
  const progress = ((currentSection + 1) / totalSections) * 100;
  
  return (
    <MotionConfig reducedMotion="user">
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center justify-between mb-2">
          <motion.div 
            className="text-sm font-medium text-gray-700"
            key={sectionTitle}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentSection + 1} of {totalSections}: {sectionTitle}
          </motion.div>
          <div className="text-sm font-medium text-primary">
            {Math.round(progress)}% Complete
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </motion.div>
    </MotionConfig>
  );
};
