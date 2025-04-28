
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface PhotoPair {
  mainImage: string;
  hoverImage: string;
  month: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  emoji: string;
}

interface PhotoCarouselProps {
  photos: PhotoPair[];
}

export const PhotoCarousel = ({ photos }: PhotoCarouselProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {photos.map((pair, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="relative group aspect-square overflow-hidden rounded-xl">
                  <img
                    src={pair.mainImage}
                    alt={`${pair.month} main image`}
                    className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={pair.hoverImage}
                    alt={`${pair.month} hover image`}
                    className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <motion.div 
                  className={`space-y-2 p-4 rounded-lg ${pair.bgColor} transition-all duration-300 ${hoveredIndex === index ? 'scale-105 shadow-lg' : ''}`}
                >
                  <div className="flex items-center gap-2">
                    {pair.icon}
                    <h3 className="font-semibold text-lg text-gray-900">
                      {pair.emoji} {pair.month}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{pair.description}</p>
                </motion.div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};
