
import { Progress } from "@/components/ui/progress";

interface ProgressHeaderProps {
  progress: number;
}

export const ProgressHeader = ({ progress }: ProgressHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <h3 className="text-xl font-bold">Your Learning Journey</h3>
      <div className="w-full md:w-1/3 space-y-1">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span className="font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
};
