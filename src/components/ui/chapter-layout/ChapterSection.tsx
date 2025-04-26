
import { cn } from "@/lib/utils";

interface ChapterSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ChapterSection = ({ title, children, className }: ChapterSectionProps) => {
  return (
    <div className={cn("space-y-6", className)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
};
