
import { Star, Rocket, Sparkles, ChartBar } from "lucide-react";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";

export const CoreProducts = () => {
  return (
    <div className="space-y-8">
      <div className="relative p-6 bg-white rounded-lg shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-transparent rounded-lg" />
        <div className="relative">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-secondary" />
            The "3": Your Core Products ⭐️
          </h3>
          
          <h4 className="text-lg font-medium mt-6 mb-3">Why Three? 🤔</h4>
          <div className="space-y-4">
            <p>Why not two or four? Three products is the magic number because:</p>
            <ul className="list-none space-y-3">
              {[
                "It provides enough diversification to spread risk",
                "It creates enough data points to identify patterns",
                "It's manageable enough to master production workflows",
                "It creates natural comparison that drives improvement",
                "It fits perfectly within typical attention spans"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ChapterGrid className="md:grid-cols-3 gap-6">
        <InfoCard
          icon={<Rocket className="h-6 w-6 text-primary" />}
          title="Product 1: Your Safe Bet 🎯"
          className="bg-primary/5"
        >
          <p>Look for:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Consistent search volume</li>
            <li>Multiple successful competitors</li>
            <li>Stable or growing demand</li>
            <li>Minimum 70% profit margin</li>
          </ul>
        </InfoCard>

        <InfoCard
          icon={<Sparkles className="h-6 w-6 text-secondary" />}
          title="Product 2: Strength Aligner 💫"
          className="bg-secondary/5"
        >
          <p>Match your unique strengths:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Design-focused excellence</li>
            <li>Marketing-focused virality</li>
            <li>Technical precision</li>
            <li>Business scaling potential</li>
          </ul>
        </InfoCard>

        <InfoCard
          icon={<ChartBar className="h-6 w-6 text-accent" />}
          title="Product 3: Value Maximizer 📈"
          className="bg-accent/5"
        >
          <p>Optimize for:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>High perceived value</li>
            <li>Quick production time</li>
            <li>Small material footprint</li>
            <li>Premium pricing potential</li>
          </ul>
        </InfoCard>
      </ChapterGrid>
    </div>
  );
};
