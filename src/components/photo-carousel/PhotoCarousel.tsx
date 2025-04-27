
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PhotoPair {
  mainImage: string;
  hoverImage: string;
  month: string;
  description: string;
  icon: React.ReactNode;
}

interface PhotoCarouselProps {
  photos: PhotoPair[];
}

export const PhotoCarousel = ({ photos }: PhotoCarouselProps) => {
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
              <div className="space-y-4">
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
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {pair.icon}
                    <h3 className="font-semibold text-lg text-gray-900">{pair.month}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{pair.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};
