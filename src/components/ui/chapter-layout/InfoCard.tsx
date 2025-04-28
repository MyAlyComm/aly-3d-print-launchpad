
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export const InfoCard = ({ title, children, className, icon }: InfoCardProps) => {
  return (
    <div className={cn("p-6 rounded-lg transition-all duration-300 hover:shadow-md", className)}>
      <div className="flex items-start gap-3 mb-4">
        {icon}
        <h4 className="font-bold text-lg">{title}</h4>
      </div>
      <div className="space-y-4 text-gray-700">
        {children}
      </div>
    </div>
  );
};
