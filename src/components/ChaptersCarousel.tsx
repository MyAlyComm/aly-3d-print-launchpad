
import { Book, Printer3d, Megaphone, Trophy } from "lucide-react";
import { PhotoCarousel } from "./photo-carousel/PhotoCarousel";
import { motion } from "framer-motion";

const ChaptersCarousel = () => {
  const chapters = [
    {
      mainImage: "/lovable-uploads/b5a22fbd-f015-4274-b91c-4d99379b6d21.png",
      hoverImage: "/lovable-uploads/b5a22fbd-f015-4274-b91c-4d99379b6d21.png",
      month: "Chapter 4",
      description: "The Product Trinity - Finding Your First Three Winning Products. Learn how to identify and validate profitable product opportunities using the P.R.O.F.I.T.S and MATCH frameworks.",
      icon: <Book className="w-5 h-5 text-primary hover:scale-110 transition-transform duration-300" />,
      bgColor: "bg-gradient-to-br from-primary/10 to-primary/5",
      emoji: "🎯"
    },
    {
      mainImage: "/lovable-uploads/c846a9eb-c5c7-4610-b64a-bef92497f7a2.png",
      hoverImage: "/lovable-uploads/c846a9eb-c5c7-4610-b64a-bef92497f7a2.png",
      month: "Chapter 5",
      description: "Choosing Your Production Tools. A comprehensive guide to selecting the right 3D printers and essential equipment for your business needs.",
      icon: <Printer3d className="w-5 h-5 text-purple-500 hover:scale-110 transition-transform duration-300" />,
      bgColor: "bg-gradient-to-br from-purple-500/10 to-purple-500/5",
      emoji: "🖨️"
    },
    {
      mainImage: "/lovable-uploads/64a71d5f-bcf5-4645-b04a-d3926af805b6.png",
      hoverImage: "/lovable-uploads/64a71d5f-bcf5-4645-b04a-d3926af805b6.png",
      month: "Chapter 8",
      description: "Zero-Cost Marketing That Works. Master effective marketing strategies that don't require a big budget, from content creation to building partnerships.",
      icon: <Megaphone className="w-5 h-5 text-blue-500 hover:scale-110 transition-transform duration-300" />,
      bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-500/5",
      emoji: "📢"
    },
    {
      mainImage: "/lovable-uploads/33493db9-bc24-4493-88e5-fa832289703b.png",
      hoverImage: "/lovable-uploads/33493db9-bc24-4493-88e5-fa832289703b.png",
      month: "The 3+1 System",
      description: "A proven system for scaling your 3D printing business efficiently, combining three core strategies with one accelerator for maximum growth.",
      icon: <Trophy className="w-5 h-5 text-green-500 hover:scale-110 transition-transform duration-300" />,
      bgColor: "bg-gradient-to-br from-green-500/10 to-green-500/5",
      emoji: "🚀"
    }
  ];

  return (
    <div className="space-y-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-center bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent"
      >
        What You'll Learn ✨
      </motion.h2>
      <PhotoCarousel photos={chapters} />
    </div>
  );
};

export default ChaptersCarousel;
