
import { Progress } from "@/components/ui/progress";

interface ChapterProgressProps {
  currentSection: number;
  totalSections: number;
  sectionTitle: string;
}

export const ChapterProgressBar = ({ currentSection, totalSections, sectionTitle }: ChapterProgressProps) => {
  const progress = ((currentSection + 1) / totalSections) * 100;
  
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-gray-600">
          {currentSection + 1} of {totalSections}: {sectionTitle}
        </div>
        <div className="text-sm text-gray-600">
          {Math.round(progress)}% Complete
        </div>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};
