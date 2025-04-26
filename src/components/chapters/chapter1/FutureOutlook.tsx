
import { Card, CardContent } from "@/components/ui/card";

export const FutureOutlook = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Where We're Going: The New Horizon</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4">The 2025 Shift: Integration & Automation</h3>
          <div className="grid gap-4">
            {[
              {
                title: "AI Design Integration",
                points: [
                  "3D modeling software will fully integrate with generative AI",
                  "Create complex models through simple text prompts",
                  "Dramatically compress time from idea to finished STL file"
                ]
              },
              {
                title: "Automated Production Systems",
                points: [
                  "Affordable printer farm management software",
                  "Run 5-10 printers with minimal oversight",
                  "Features like automatic print ejection and remote monitoring"
                ]
              },
              {
                title: "Material-Specific Marketplaces",
                points: [
                  "Platforms dedicated to specific material types",
                  "New niches for specialized products",
                  "Create opportunities outside general marketplaces"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-muted p-4 rounded-lg">
                <h4 className="font-bold mb-2">{section.title}</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">The 2026 Evolution: Specialization & Ecosystem</h3>
          <div className="grid gap-4">
            {[
              {
                title: "Multi-Material Consumer Printers",
                points: [
                  "Affordable printers combining multiple materials",
                  "Create previously impossible products",
                  "New opportunities for innovative designs"
                ]
              },
              {
                title: "Hyper-Local Production Networks",
                points: [
                  "Community-based printing hubs in most cities",
                  "Connect local designers with production capacity",
                  "Reduce shipping needs and costs"
                ]
              },
              {
                title: "Industry-Specific Applications",
                points: [
                  "Deeper penetration into specialized industries",
                  "New B2B opportunities in education and healthcare",
                  "Professional sports applications"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-muted p-4 rounded-lg">
                <h4 className="font-bold mb-2">{section.title}</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
