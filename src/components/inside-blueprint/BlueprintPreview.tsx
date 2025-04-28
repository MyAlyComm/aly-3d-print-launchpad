
import { Book, Printer, Megaphone, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const BlueprintPreview = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const chapterHighlights = [
    {
      title: "The Product Trinity",
      description: "Finding Your First Three Winning Products. Learn how to identify and validate profitable product opportunities.",
      icon: <Book className="w-5 h-5 text-primary hover:scale-110 transition-transform duration-300" />,
      bgColor: "bg-gradient-to-br from-primary/10 to-primary/5",
      emoji: "🎯",
      color: "text-primary"
    },
    {
      title: "Choosing Production Tools",
      description: "A comprehensive guide to selecting the right 3D printers and essential equipment for your business needs.",
      icon: <Printer className="w-5 h-5 text-purple-500 hover:scale-110 transition-transform duration-300" />,
      bgColor: "bg-gradient-to-br from-purple-500/10 to-purple-500/5",
      emoji: "🖨️",
      color: "text-purple-500"
    },
    {
      title: "Zero-Cost Marketing",
      description: "Master effective marketing strategies that don't require a big budget, from content creation to building partnerships.",
      icon: <Megaphone className="w-5 h-5 text-blue-500 hover:scale-110 transition-transform duration-300" />,
      bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-500/5",
      emoji: "📢",
      color: "text-blue-500"
    },
    {
      title: "The 3+1 System",
      description: "A proven system for scaling your 3D printing business efficiently, combining three core strategies with one accelerator.",
      icon: <Trophy className="w-5 h-5 text-green-500 hover:scale-110 transition-transform duration-300" />,
      bgColor: "bg-gradient-to-br from-green-500/10 to-green-500/5",
      emoji: "🚀",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          What You'll Learn ✨
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {chapterHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${highlight.bgColor} p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-full ${highlight.bgColor} ${hoveredCard === index ? 'animate-pulse' : ''}`}>
                  {highlight.icon}
                </div>
                <h3 className={`text-xl font-bold ${highlight.color}`}>
                  {highlight.emoji} {highlight.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
              <motion.div 
                className="mt-4 flex justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className={`text-sm font-medium ${highlight.color} flex items-center gap-1`}>
                  Learn more <span className="text-lg">→</span>
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <motion.a 
            href="#blueprint-details"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            See Full Chapter Breakdown 📚
          </motion.a>
        </div>
      </div>
    </section>
  );
};
