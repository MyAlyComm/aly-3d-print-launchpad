
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { Lightbulb, Zap, Bot, Brain } from "lucide-react";

export const Beyond = () => {
  return (
    <ChapterSection title="Beyond Traditional Value Creation 🚀">
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          In traditional business the concept of value add is when you take something, 
          make it better, and together the combined effort increases the output value. 
          Traditionally this results in a product or service where the margin is a few 
          times what it costs to produce.
        </p>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg blur opacity-50" />
          <div className="relative bg-white p-6 rounded-lg shadow-sm">
            <p className="text-lg font-semibold mb-2">
              Here's where you're going to have an unfair advantage ⚡️
            </p>
            <p>
              One that will allow you to create 10x as much value in the same period of time.
            </p>
          </div>
        </div>

        <ChapterGrid className="md:grid-cols-2 gap-6 mt-8">
          <InfoCard 
            icon={<Bot className="h-6 w-6 text-primary" />}
            title="The AI Revolution in 3D Printing"
            className="bg-primary/5"
          >
            <p>
              If you ask Chat GPT to write you a business plan for 3D printing, it's going 
              to suck. Not only that but it's going to trick you.
            </p>
            <p className="mt-4">
              It's going to make it sound like it has a great, unique and actionable plan 
              for you to follow. But in reality it's all horsesh*t in a nice looking box.
            </p>
          </InfoCard>

          <InfoCard 
            icon={<Brain className="h-6 w-6 text-primary" />}
            title="Context & Creativity Matter"
            className="bg-primary/5"
          >
            <p>
              That's because it lacks context, it lacks human creativity and it lacks 
              relevant data. 3D Printing is so new and evolving so quickly, that the LLM's 
              aren't adapted yet.
            </p>
          </InfoCard>
        </ChapterGrid>

        <div className="bg-accent/5 p-6 rounded-lg border border-accent/10 mt-8">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-3">The Future is Coming Fast 🔮</h3>
              <p className="leading-relaxed">
                The frontier of Agentic AI is just beginning, and by the end of this year, 
                2025 - the tech world will be evolving so fast that the Singularity will be 
                upon us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ChapterSection>
  );
};
