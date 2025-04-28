
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { ArrowUpDown, TrendingUp, TrendingDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const SwapStrategy = () => {
  return (
    <ChapterSection title="The Swap Strategy 🔄">
      <div className="space-y-8">
        <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-lg border border-primary/10">
          <p className="leading-relaxed mb-6">
            At the end of each monthly cycle, you'll evaluate your three core products and your Plus 1 
            innovation. Based on the data, you'll implement changes in Week 1 of the following month:
          </p>

          <ChapterGrid className="md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <InfoCard
                icon={<TrendingUp className="h-6 w-6 text-green-500" />}
                title="All Core Products Performing Well"
                className="h-full bg-gradient-to-br from-green-50 to-transparent border border-green-100"
              >
                Continue optimizing them while developing your Plus 1. This is the ideal scenario 
                where you can focus on incremental improvements and innovation.
              </InfoCard>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <InfoCard
                icon={<TrendingDown className="h-6 w-6 text-orange-500" />}
                title="Underperforming Core Product"
                className="h-full bg-gradient-to-br from-orange-50 to-transparent border border-orange-100"
              >
                Consider replacing it with your Plus 1 (if ready) or with a new product from your 
                research. This keeps your portfolio strong and competitive.
              </InfoCard>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <InfoCard
                icon={<Sparkles className="h-6 w-6 text-purple-500" />}
                title="Exceptional Plus 1"
                className="h-full bg-gradient-to-br from-purple-50 to-transparent border border-purple-100"
              >
                Promote it to your core lineup by replacing your weakest performer, then select 
                a new Plus 1 to develop. This is how you evolve and grow.
              </InfoCard>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <InfoCard
                icon={<ArrowUpDown className="h-6 w-6 text-blue-500" />}
                title="Plus 1 Not Working"
                className="h-full bg-gradient-to-br from-blue-50 to-transparent border border-blue-100"
              >
                Abandon it and select a new innovation project based on market research or 
                customer feedback. Not every experiment will succeed, and that's okay!
              </InfoCard>
            </motion.div>
          </ChapterGrid>
        </div>
      </div>
    </ChapterSection>
  );
};
