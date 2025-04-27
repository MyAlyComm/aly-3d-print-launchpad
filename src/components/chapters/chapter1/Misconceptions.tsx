
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

export const Misconceptions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-6">
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-primary/90 mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Common Misconceptions: The Stained Glass Effect
      </motion.h2>
      
      <motion.p 
        className="text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Like the eras before it, our current phase has created a world of opportunity, but it's also spawned widespread misinformation and misconceptions. I call these the "Stained Glass Effect" – views that might contain fragments of truth but distort reality so severely that they blind people to the opportunities right in front of them.
      </motion.p>
      
      <motion.div
        className="grid gap-4 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          {
            myth: "It's too late to start a 3D printing business",
            reality: "While some verticals like toys on Etsy are indeed quite crowded, the people who are good at marketing and know how to get customers are still starting businesses and being successful in this space."
          },
          {
            myth: "You need technical expertise to succeed",
            reality: "Today's printers require about as much technical knowledge as setting up a coffee maker. Success depends far more on marketing and business skills than technical prowess."
          },
          {
            myth: "The profit margins aren't sustainable",
            reality: "While commodity products have seen margin compression, unique and solution-oriented items still command premium prices and robust margins exceeding 80%."
          },
          {
            myth: "You need dozens of printers to make real money",
            reality: "Smart product selection and pricing can generate substantial revenue even with a single printer, as I proved in my first weeks."
          },
          {
            myth: "It's just a hobby, not a real business",
            reality: "Tell that to the thousands of entrepreneurs who've built six and seven-figure businesses from their spare bedroom."
          },
          {
            myth: "The electricity cost is so high",
            reality: "A modern 3D printer uses about the same electricity as a laptop computer—around 50-150 watts. Even running 24/7, that's $10-30 per month."
          }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="bg-white p-5 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-2 mb-3">
              <AlertTriangle className="text-red-500 h-5 w-5 mt-1 flex-shrink-0" />
              <h4 className="font-bold text-gray-800">Myth: {item.myth}</h4>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Reality: {item.reality}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
