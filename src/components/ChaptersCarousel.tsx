
import { ArrowRight } from "lucide-react";
import { PhotoCarousel } from "./photo-carousel/PhotoCarousel";

const ChaptersCarousel = () => {
  const chapters = [
    {
      mainImage: "/lovable-uploads/17ca882e-ce0b-4cb3-a187-4c3d63689167.png",
      hoverImage: "/lovable-uploads/17ca882e-ce0b-4cb3-a187-4c3d63689167.png",
      month: "Chapter 4",
      description: "The Product Trinity - Finding Your First Three Winning Products. Learn how to identify and validate profitable product opportunities using the P.R.O.F.I.T.S and MATCH frameworks.",
      icon: <ArrowRight className="w-5 h-5 text-primary" />
    },
    {
      mainImage: "/lovable-uploads/19e3fb35-7a5c-4b4a-9d7e-46bee87b38c7.png",
      hoverImage: "/lovable-uploads/19e3fb35-7a5c-4b4a-9d7e-46bee87b38c7.png",
      month: "Chapter 5",
      description: "Choosing Your Production Tools. A comprehensive guide to selecting the right 3D printers and essential equipment for your business needs.",
      icon: <ArrowRight className="w-5 h-5 text-purple-500" />
    },
    {
      mainImage: "/lovable-uploads/64a71d5f-bcf5-4645-b04a-d3926af805b6.png",
      hoverImage: "/lovable-uploads/64a71d5f-bcf5-4645-b04a-d3926af805b6.png",
      month: "Chapter 8",
      description: "Zero-Cost Marketing That Works. Master effective marketing strategies that don't require a big budget, from content creation to building partnerships.",
      icon: <ArrowRight className="w-5 h-5 text-blue-500" />
    },
    {
      mainImage: "/lovable-uploads/33493db9-bc24-4493-88e5-fa832289703b.png",
      hoverImage: "/lovable-uploads/33493db9-bc24-4493-88e5-fa832289703b.png",
      month: "The 3+1 System",
      description: "A proven system for scaling your 3D printing business efficiently, combining three core strategies with one accelerator for maximum growth.",
      icon: <ArrowRight className="w-5 h-5 text-green-500" />
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">What You'll Learn</h2>
      <PhotoCarousel photos={chapters} />
    </div>
  );
};

export default ChaptersCarousel;
