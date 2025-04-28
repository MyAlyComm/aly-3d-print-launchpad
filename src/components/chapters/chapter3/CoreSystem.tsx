
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { FocusSection } from "./core-system/FocusSection";
import { InnovationSection } from "./core-system/InnovationSection";
import { ReturnSection } from "./core-system/ReturnSection";

export const CoreSystem = () => {
  return (
    <ChapterSection title="The Core System Explained 🎯">
      <div className="space-y-8">
        <FocusSection />
        <InnovationSection />
        <ReturnSection />
      </div>
    </ChapterSection>
  );
};
