
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";

export const OutputSection = () => {
  const outputs = [
    {
      title: "Printer Recommendations",
      points: [
        "The optimal printer model(s) for your situation",
        "Necessary accessories and supplies",
        "Upgrade paths as you grow",
        "Setup priorities and configurations"
      ]
    },
    {
      title: "Suggested Markets",
      points: [
        "Industry verticals most aligned with your strengths",
        "Product categories with the right complexity level",
        "Customer groups you're best positioned to serve",
        "Pricing tiers appropriate for your situation"
      ]
    },
    {
      title: "Marketing Strategy",
      points: [
        "Platform recommendations (social media, marketplaces, etc.)",
        "Content creation frameworks tailored to your abilities",
        "Customer acquisition strategies matched to your resources",
        "Positioning approaches that leverage your strengths"
      ]
    },
    {
      title: "Growth Timeline",
      points: [
        "Month-by-month milestones appropriate for your situation",
        "Investment and reinvestment guidelines",
        "Expansion triggers and decision points",
        "Long-term vision aligned with your ambitions"
      ]
    }
  ];

  return (
    <>
      <p className="text-gray-700 mb-4">
        After assessing yourself across these seven factors, the decision framework leads to four key outputs that will guide your journey:
      </p>
      
      <ChapterGrid className="grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {outputs.map((output, index) => (
          <InfoCard 
            key={index}
            title={output.title} 
            points={output.points}
          />
        ))}
      </ChapterGrid>
      
      <p className="text-gray-700">
        Complete the detailed self-assessment in the next section to identify your optimal path. This will help you understand your unique combination of strengths, limitations, and opportunities.
      </p>
    </>
  );
};
