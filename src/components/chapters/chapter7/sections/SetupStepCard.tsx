
import { Card } from "@/components/ui/card";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";

interface SetupStepCardProps {
  title: string;
  points: string[];
}

export const SetupStepCard = ({ title, points }: SetupStepCardProps) => {
  return (
    <Card className="p-6">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <InfoCard 
        title="Essential Requirements"
        points={points}
      />
    </Card>
  );
};
