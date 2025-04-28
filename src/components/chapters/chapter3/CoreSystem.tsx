
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { CorePrinciple } from "./core-system/CorePrinciple";
import { CoreProducts } from "./core-system/CoreProducts";
import { FocusSplit } from "./core-system/FocusSplit";
import { InnovationSection } from "./core-system/InnovationSection";
import { ReturnSection } from "./core-system/ReturnSection";

export const CoreSystem = () => {
  return (
    <ChapterSection title="The Core System Explained 🎯">
      <div className="space-y-8">
        <CorePrinciple />
        <CoreProducts />
        <FocusSplit />
        <InnovationSection />
        <ReturnSection />
      </div>
    </ChapterSection>
  );
};
