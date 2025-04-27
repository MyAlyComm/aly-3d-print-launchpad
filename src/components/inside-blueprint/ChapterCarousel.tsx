
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { chapters } from "@/components/dashboard/chapters/types";

export const ChapterCarousel = () => {
  return (
    <Card className="bg-white/80 backdrop-blur border-primary/10 shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Complete Chapter Breakdown</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {chapters.map((chapter) => (
              <CarouselItem key={chapter.number} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="aspect-video mb-4 overflow-hidden rounded-lg relative">
                        <img
                          src={chapter.imageUrl}
                          alt={`Chapter ${chapter.number}`}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-primary">
                          Chapter {chapter.number}: {chapter.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {chapter.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
};
