
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const chapters = [
  {
    number: 0,
    title: "My Story: Zero to $20K",
    description: "The journey from a $300 printer to a global business in just 60 days.",
    imageUrl: "/lovable-uploads/511b02f5-662b-4442-ada4-7d79753c2d2d.jpg"
  },
  {
    number: 1,
    title: "Finding Your Perfect Starting Point",
    description: "Learn how to identify your ideal 'Home Base' platform and build strategically from there.",
    imageUrl: "/lovable-uploads/0f08439b-373a-474c-971a-ae51de7a6701.png"
  },
  {
    number: 2,
    title: "The Axiogenetic Theorem",
    description: "Understanding market dynamics and value creation in the 3D printing space.",
    imageUrl: "/lovable-uploads/72adc6d5-64f9-4a52-b3cd-09e2ef9b3882.png"
  },
  {
    number: 3,
    title: "Core Systems",
    description: "Building scalable systems for sustainable growth.",
    imageUrl: "/lovable-uploads/04fa3465-1dd4-4878-bde7-ee7d0398b515.png"
  },
  {
    number: 4,
    title: "Product Strategy",
    description: "Selecting and optimizing your product offerings.",
    imageUrl: "/lovable-uploads/1dadb0e8-cc5d-4b6f-955b-cb6f463eab22.png"
  }
];

export const ChapterCarousel = () => {
  return (
    <Card className="bg-white/80 backdrop-blur border-primary/10 shadow-lg">
      <CardContent className="p-6">
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
