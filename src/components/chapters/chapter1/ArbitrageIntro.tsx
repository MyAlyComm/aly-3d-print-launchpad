
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const ArbitrageIntro = () => {
  return (
    <div className="space-y-6">
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-primary/90 mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ARBITRAGE WINDOWS - THE TIMELINES OF OPPORTUNITY
      </motion.h2>

      <motion.div 
        className="my-8 overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img
          src="/lovable-uploads/72adc6d5-64f9-4a52-b3cd-09e2ef9b3882.png"
          alt="Arbitrage Windows Concept"
          className="w-full rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300"
        />
      </motion.div>

      <motion.p 
        className="text-gray-700 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        In business, the biggest profits don't come from being better. They come from being <span className="font-semibold text-primary">early</span>.
      </motion.p>
      
      <motion.p 
        className="text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Whenever a new technology emerges, there's a golden period where supply hasn't caught up with demand. Where knowledge isn't widespread. Where the competition is minimal, and the margins are massive.
      </motion.p>
      
      <motion.p 
        className="text-gray-700 font-medium text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        I call these <span className="text-primary font-bold">"Arbitrage Windows."</span>
      </motion.p>
      
      <motion.div 
        className="space-y-3 bg-gray-50 p-5 rounded-lg border-l-4 border-primary"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 font-medium">An arbitrage window opens when:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>A technology becomes accessible to average people</li>
          <li>But knowledge about how to leverage it remains limited</li>
          <li>And the market hasn't yet been flooded with competitors</li>
        </ul>
      </motion.div>
      
      <motion.p 
        className="text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        This creates a brief period—sometimes months, sometimes a few years—where extraordinary profits are possible for those who recognize the opportunity and act.
      </motion.p>
    </div>
  );
};
