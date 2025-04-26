
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  points: string[];
  className?: string;
}

export const InfoCard = ({ title, points, className }: InfoCardProps) => {
  return (
    <div className={cn("bg-muted p-4 rounded-lg", className)}>
      <h4 className="font-bold mb-2">{title}</h4>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};
