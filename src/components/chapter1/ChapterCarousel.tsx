
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArbitrageSection } from './ArbitrageSection';
import { TimelineSection } from './TimelineSection';
import { MythsSection } from './MythsSection';
import { FutureSection } from './FutureSection';
import { SelfAssessmentSection } from './SelfAssessmentSection';
import { ChevronRight } from 'lucide-react';

export const ChapterCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = 5;

  const isLastSlide = currentSlide === totalSlides - 1;

  return (
    <div className="relative">
      <Carousel
        className="w-full"
        onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="p-6">
              <ArbitrageSection />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-6">
              <TimelineSection />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-6">
              <MythsSection />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-6">
              <FutureSection />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-6">
              <SelfAssessmentSection />
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="flex items-center justify-between">
          <CarouselPrevious className="relative" />
          <div className="text-center text-sm text-muted-foreground">
            {currentSlide + 1} / {totalSlides}
          </div>
          <CarouselNext className="relative" />
        </div>
      </Carousel>

      {isLastSlide && (
        <div className="mt-8 flex justify-center">
          <Button className="group" size="lg">
            Complete Chapter Worksheet
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      )}
    </div>
  );
};
