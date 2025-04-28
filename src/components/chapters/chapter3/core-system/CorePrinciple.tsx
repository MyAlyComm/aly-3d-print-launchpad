
import { Star } from "lucide-react";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";

export const CorePrinciple = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-lg border border-primary/10">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Star className="h-5 w-5 text-primary" />
          The Fundamental Principle
        </h3>
        <p className="leading-relaxed">
          The 3 Plus 1 Equals 40 system is built on a simple truth: entrepreneurs who try to do everything fail, 
          while those who focus too narrowly miss opportunities. The sweet spot is having a defined core focus 
          (the "3") with deliberate space for innovation (the "Plus 1").
        </p>
      </div>
    </div>
  );
};
