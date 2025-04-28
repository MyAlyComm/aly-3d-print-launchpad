
import { Card } from "@/components/ui/card";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { Settings, Activity, Camera, Box, MessageSquare } from "lucide-react";

interface EfficiencyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const EfficiencyCard = ({ title, description, icon }: EfficiencyCardProps) => (
  <Card className="p-4 hover:shadow-md transition-shadow duration-300 border-l-4 border-l-primary">
    <div className="flex gap-3">
      <div className="text-primary">{icon}</div>
      <div>
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  </Card>
);

export const FocusSection = () => {
  const efficiencyItems = [
    {
      title: "Optimizing Production",
      description: "Perfect print settings, create jigs for post-processing, develop quality control checks, and reduce waste.",
      icon: <Settings className="h-5 w-5" />
    },
    {
      title: "Improving Quality",
      description: "Iterate on designs for better functionality, stronger parts, and more appealing aesthetics.",
      icon: <Activity className="h-5 w-5" />
    },
    {
      title: "Marketing Excellence",
      description: "Create compelling product photography, write persuasive descriptions, test different platforms and pricing strategies.",
      icon: <Camera className="h-5 w-5" />
    },
    {
      title: "Consistent Delivery",
      description: "Set up order processing workflows, packaging protocols, and shipping systems.",
      icon: <Box className="h-5 w-5" />
    },
    {
      title: "Customer Feedback",
      description: "Collect reviews, address concerns, and make improvements based on real user experiences.",
      icon: <MessageSquare className="h-5 w-5" />
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">The 80/20 Focus Split</h3>
        <p className="mb-6">
          With your three core products selected, you'll dedicate 80% of your time and resources to maximizing 
          their success. This means:
        </p>
        
        <ChapterGrid className="grid-cols-1 md:grid-cols-2 gap-4">
          {efficiencyItems.map((item, index) => (
            <EfficiencyCard key={index} {...item} />
          ))}
        </ChapterGrid>

        <div className="mt-6 p-4 bg-white/50 rounded-lg border border-primary/10">
          <p className="text-sm leading-relaxed">
            This disciplined focus creates depth rather than breadth. Instead of being mediocre at selling many 
            products, you become exceptional at selling a few. When you concentrate your energy this way, you develop 
            expertise that creates compounding returns.
          </p>
        </div>
      </div>
    </div>
  );
};
