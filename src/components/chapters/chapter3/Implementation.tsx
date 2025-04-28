
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { MonthlyFramework } from "./implementation/MonthlyFramework";
import { TrackingMetrics } from "./implementation/TrackingMetrics";
import { SwapStrategy } from "./SwapStrategy";

export const Implementation = () => {
  return (
    <>
      <ChapterSection title="Implementing the System ⚡️">
        <div className="space-y-8">
          <MonthlyFramework />
          <TrackingMetrics />
        </div>
      </ChapterSection>
      <SwapStrategy />
    </>
  );
};
