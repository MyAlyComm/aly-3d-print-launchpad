
import { Card } from "@/components/ui/card";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { TrendingUp, Users, Infinity, Rocket, Brain } from "lucide-react";

interface ReturnCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ReturnCard = ({ title, description, icon }: ReturnCardProps) => (
  <Card className="p-4 hover:shadow-md transition-shadow duration-300 border-l-4 border-l-secondary">
    <div className="flex gap-3">
      <div className="text-secondary">{icon}</div>
      <div>
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  </Card>
);

export const ReturnSection = () => {
  const returnItems = [
    {
      title: "Focused Optimization",
      description: "When you dedicate significant time to just three products, you find efficiencies and improvements that compound across your entire sales volume.",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Market Penetration",
      description: "Rather than being a forgettable face in many crowds, you become known for your excellence in specific products.",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Learning Acceleration",
      description: "Move past the beginner phase quickly when focused on a limited product set, reaching mastery level where the biggest gains happen.",
      icon: <Infinity className="h-5 w-5" />
    },
    {
      title: "Breakthrough Opportunities",
      description: "While competitors are stuck in patterns, your innovation sandbox regularly produces new opportunities they miss.",
      icon: <Rocket className="h-5 w-5" />
    },
    {
      title: "Psychological Benefits",
      description: "Balance between focused mastery and creative exploration creates sustainable motivation and prevents fatigue.",
      icon: <Brain className="h-5 w-5" />
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-secondary/10 to-transparent p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">The "40X Return"</h3>
        <p className="mb-6">
          The "Equals 40" part of the equation represents the exponential return this balanced approach 
          delivers compared to the scattered approach most entrepreneurs take.
        </p>

        <ChapterGrid className="grid-cols-1 md:grid-cols-2 gap-4">
          {returnItems.map((item, index) => (
            <ReturnCard key={index} {...item} />
          ))}
        </ChapterGrid>

        <div className="mt-6 p-4 bg-white/50 rounded-lg border border-secondary/10">
          <p className="text-sm leading-relaxed">
            This multiplier effect happens through a combination of focused optimization, market penetration, 
            accelerated learning, and breakthrough opportunities, all while maintaining sustainable motivation 
            through balanced activities.
          </p>
        </div>
      </div>
    </div>
  );
};
