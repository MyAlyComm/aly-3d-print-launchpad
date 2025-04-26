
import { cn } from "@/lib/utils";

interface ChapterGridProps {
  children: React.ReactNode;
  className?: string;
}

export const ChapterGrid = ({ children, className }: ChapterGridProps) => {
  return (
    <div className={cn("grid gap-4", className)}>
      {children}
    </div>
  );
};
