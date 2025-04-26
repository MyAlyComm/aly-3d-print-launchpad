
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ProductionCycle } from "./sections/ProductionCycle";
import { ImportanceNote } from "./sections/ImportanceNote";

export const WorkflowOptimization = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Workflow Optimization</h2>
      
      <p className="text-gray-700">
        After setting up your initial production, it's time to create efficient workflows 
        that will save you time and reduce errors as your business grows.
      </p>

      <ChapterSection title="The Production Cycle Framework">
        <ProductionCycle />
      </ChapterSection>

      <ImportanceNote />
    </div>
  );
};
