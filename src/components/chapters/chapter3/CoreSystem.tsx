import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { Target, Sparkles, Star, ChartBar, Book, Rocket, Clock } from "lucide-react";

export const CoreSystem = () => {
  return (
    <ChapterSection title="The Core System Explained 🎯">
      <div className="space-y-8">
        <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-lg border border-primary/10">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            The Fundamental Principle
          </h3>
          <p className="leading-relaxed">
            The 3 Plus 1 Equals 40 system is built on a simple truth: entrepreneurs who try to do everything fail, 
            while those who focus too narrowly miss opportunities. The sweet spot is having a defined core focus 
            (the "3") with deliberate space for innovation (the "Plus 1").
          </p>
        </div>

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

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">The 80/20 Focus Split</h3>
          <p>
            With your three core products selected, you'll dedicate 80% of your time and resources to maximizing 
            their success. This means:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <span className="font-medium">Optimizing production efficiency:</span> Perfecting print settings, 
              creating jigs for post-processing, developing quality control checks, and reducing waste.
            </li>
            <li>
              <span className="font-medium">Improving product quality:</span> Iterating on designs for better 
              functionality, stronger parts, and more appealing aesthetics.
            </li>
            <li>
              <span className="font-medium">Perfecting your marketing approach:</span> Creating compelling product 
              photography, writing persuasive descriptions, testing different platforms and pricing strategies.
            </li>
            <li>
              <span className="font-medium">Building systems for consistent delivery:</span> Setting up order 
              processing workflows, packaging protocols, and shipping systems.
            </li>
            <li>
              <span className="font-medium">Gathering customer feedback and iterating:</span> Collecting reviews, 
              addressing concerns, and making improvements based on real user experiences.
            </li>
          </ul>
          <p className="mt-3">
            This disciplined focus creates depth rather than breadth. Instead of being mediocre at selling many 
            products, you become exceptional at selling a few. When you concentrate your energy this way, you develop 
            expertise that creates compounding returns.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">The "Plus 1 Innovation"</h3>
          <p>
            The remaining 20% of your time is dedicated to your "Plus 1" - developing a new product or approach 
            that isn't yet part of your core offering.
          </p>
          <p className="mt-3">
            This 20% is your innovation sandbox—where you experiment with new ideas without risking your core 
            business. It's separate from your day-to-day operations but informed by what you're learning from 
            your main products.
          </p>
          <p className="mt-3">The Plus 1 serves several crucial functions:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <span className="font-medium">Insurance against market changes:</span> If one of your core products starts underperforming, 
              you already have a potential replacement in development.
            </li>
            <li>
              <span className="font-medium">Opportunity for breakthrough growth:</span> Sometimes your experimental product becomes 
              your biggest seller, outperforming your planned core lineup.
            </li>
            <li>
              <span className="font-medium">Creativity outlet:</span> It prevents stagnation and burnout by giving you space to 
              explore new ideas.
            </li>
            <li>
              <span className="font-medium">Market testing ground:</span> It allows you to test new concepts with minimal risk before 
              committing significant resources.
            </li>
            <li>
              <span className="font-medium">Learning accelerator:</span> Working on something new forces you to develop additional 
              skills and knowledge that often benefit your core products.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">The "40X Return"</h3>
          <p>
            The "Equals 40" part of the equation represents the exponential return this balanced approach delivers 
            compared to the scattered approach most entrepreneurs take.
          </p>
          <p className="mt-3">This multiplier effect happens for several reasons:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <span className="font-medium">Focused optimization compounds gains:</span> When you dedicate significant time to just 
              three products, you find efficiencies and improvements that would be impossible with a broader focus. 
              Each 1% improvement compounds across your entire sales volume.
            </li>
            <li>
              <span className="font-medium">Market penetration deepens:</span> Rather than being a forgettable face in many crowds, 
              you become known for your excellence in specific products, building reputation and referrals.
            </li>
            <li>
              <span className="font-medium">Learning curves accelerate:</span> You move past the beginner phase quickly when focused 
              on a limited product set, reaching mastery level where the biggest gains happen.
            </li>
            <li>
              <span className="font-medium">Plus 1 creates breakthrough opportunities:</span> While your competitors are stuck in 
              their established patterns, your innovation sandbox regularly produces new opportunities they miss.
            </li>
            <li>
              <span className="font-medium">Psychological benefits prevent burnout:</span> The balance between focused mastery and 
              creative exploration creates sustainable motivation and prevents the fatigue that comes from either 
              rigid structure or chaotic exploration.
            </li>
          </ul>
        </div>
      </div>
    </ChapterSection>
  );
};
