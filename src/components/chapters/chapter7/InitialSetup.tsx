
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { SetupStepCard } from "./sections/SetupStepCard";

export const InitialSetup = () => {
  const setupSteps = [
    {
      title: "Step 1: Finish your setup",
      subtitlePrefix: "Essential Setup Requirements",
      points: [
        "A nearby table or surface for cooling and post-processing",
        "A designated computer station for designs and orders",
        "A dedicated area for packing and storing products",
        "Label printer placement near packing or computer station"
      ]
    },
    {
      title: "Step 2: Make your first print",
      subtitlePrefix: "First Print Process",
      points: [
        "Print a single copy of each product",
        "Note any shortcomings or issues",
        "Adjust size or print settings as needed",
        "Reprint until ready to sell"
      ]
    },
    {
      title: "Step 3: Take photos",
      subtitlePrefix: "Photo Requirements",
      points: [
        "One showing just the product",
        "One showing the product being used",
        "Four angled shots from different perspectives",
        "Use good lighting and plain backgrounds"
      ]
    },
    {
      title: "Steps 4 & 5: List and Expand",
      subtitlePrefix: "Final Steps",
      points: [
        "Create your first listings quickly",
        "Don't overthink branding initially",
        "Create color variations of your first product",
        "Build inventory for your second product",
        "Test size variations for your third product"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <ChapterSection title="The Five-Step System">
        <p className="text-gray-700">
          After finding a place for your printer, you need to set up the complete workflow 
          for your operation. Even with a single printer, proper setup will save you 
          countless hours and headaches down the road.
        </p>

        <ChapterGrid className="grid-cols-1 md:grid-cols-2 gap-6">
          {setupSteps.map((step, index) => (
            <SetupStepCard
              key={index}
              title={step.title}
              subtitlePrefix={step.subtitlePrefix}
              points={step.points}
            />
          ))}
        </ChapterGrid>
      </ChapterSection>
    </div>
  );
};
