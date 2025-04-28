
import { Card } from "@/components/ui/card";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { Shield, Rocket, Sparkles, Target, Brain } from "lucide-react";

interface InnovationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const InnovationCard = ({ title, description, icon }: InnovationCardProps) => (
  <Card className="p-4 hover:shadow-md transition-shadow duration-300 border-l-4 border-l-accent">
    <div className="flex gap-3">
      <div className="text-accent">{icon}</div>
      <div>
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  </Card>
);

export const InnovationSection = () => {
  const innovationItems = [
    {
      title: "Insurance Against Changes",
      description: "If one of your core products starts underperforming, you already have a potential replacement in development.",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Breakthrough Growth",
      description: "Sometimes your experimental product becomes your biggest seller, outperforming your planned core lineup.",
      icon: <Rocket className="h-5 w-5" />
    },
    {
      title: "Creativity Outlet",
      description: "Prevents stagnation and burnout by giving you space to explore new ideas.",
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      title: "Market Testing",
      description: "Test new concepts with minimal risk before committing significant resources.",
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "Learning Accelerator",
      description: "Develop additional skills and knowledge that often benefit your core products.",
      icon: <Brain className="h-5 w-5" />
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">The "Plus 1 Innovation"</h3>
        <p className="mb-6">
          The remaining 20% of your time is dedicated to your "Plus 1" - developing a new product or approach 
          that isn't yet part of your core offering.
        </p>

        <ChapterGrid className="grid-cols-1 md:grid-cols-2 gap-4">
          {innovationItems.map((item, index) => (
            <InnovationCard key={index} {...item} />
          ))}
        </ChapterGrid>

        <div className="mt-6 p-4 bg-white/50 rounded-lg border border-accent/10">
          <p className="text-sm leading-relaxed">
            This 20% is your innovation sandbox—where you experiment with new ideas without risking your core 
            business. It's separate from your day-to-day operations but informed by what you're learning from 
            your main products.
          </p>
        </div>
      </div>
    </div>
  );
};
