
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";

export const FutureOutlook = () => {
  return (
    <ChapterSection title="Where We're Going: The New Horizon">
      <div className="space-y-8">
        <ChapterSection title="The 2025 Shift: Integration & Automation">
          <ChapterGrid>
            <InfoCard
              title="AI Design Integration"
              points={[
                "3D modeling software will fully integrate with generative AI",
                "Create complex models through simple text prompts",
                "Dramatically compress time from idea to finished STL file"
              ]}
            />
            <InfoCard
              title="Automated Production Systems"
              points={[
                "Affordable printer farm management software",
                "Run 5-10 printers with minimal oversight",
                "Features like automatic print ejection and remote monitoring"
              ]}
            />
            <InfoCard
              title="Material-Specific Marketplaces"
              points={[
                "Platforms dedicated to specific material types",
                "New niches for specialized products",
                "Create opportunities outside general marketplaces"
              ]}
            />
          </ChapterGrid>
        </ChapterSection>

        <ChapterSection title="The 2026 Evolution: Specialization & Ecosystem">
          <ChapterGrid>
            <InfoCard
              title="Multi-Material Consumer Printers"
              points={[
                "Affordable printers combining multiple materials",
                "Create previously impossible products",
                "New opportunities for innovative designs"
              ]}
            />
            <InfoCard
              title="Hyper-Local Production Networks"
              points={[
                "Community-based printing hubs in most cities",
                "Connect local designers with production capacity",
                "Reduce shipping needs and costs"
              ]}
            />
            <InfoCard
              title="Industry-Specific Applications"
              points={[
                "Deeper penetration into specialized industries",
                "New B2B opportunities in education and healthcare",
                "Professional sports applications"
              ]}
            />
          </ChapterGrid>
        </ChapterSection>
      </div>
    </ChapterSection>
  );
};
