
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CircleDot } from "lucide-react";

export const JourneyTimeline = () => {
  const timelineItems = [
    {
      date: "August 2024",
      title: "The Beginning",
      description: "Started with one Ender 3 printer and a $500 budget. Made my first sale within two weeks.",
      image: "/lovable-uploads/0827e81b-92e3-4a97-a473-33ff95248dec.jpg"
    },
    {
      date: "October 2024",
      title: "First Milestone",
      description: "Reached $1,000 in monthly revenue and expanded to two printers.",
      image: "/lovable-uploads/441f796f-981b-4951-a495-ee188b79a2f3.jpg"
    },
    {
      date: "December 2024",
      title: "Holiday Season Success",
      description: "Hit $3,000 in monthly sales during peak season. Added custom designs to the catalog.",
      image: "/lovable-uploads/511b02f5-662b-4442-ada4-7d79753c2d2d.jpg"
    },
    {
      date: "February 2025",
      title: "Scaling Up",
      description: "Expanded to 5 printers and hit consistent $5,000 monthly revenue. Developed the PROFITS framework.",
      image: "/lovable-uploads/5146c83e-374b-41f6-b521-c13fb2db3347.jpg"
    },
    {
      date: "April 2025",
      title: "Current Success",
      description: "Reaching $10,000/month with automated systems. Started teaching others the blueprint.",
      image: "/lovable-uploads/b74ec2ed-9df1-4e07-9f9e-9beed5099f9f.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Journey to Success</h2>
          <p className="text-gray-600 text-lg">
            From a single printer to a thriving business—here's how it happened
          </p>
        </div>

        {/* Timeline dots */}
        <div className="hidden md:flex justify-center items-center mb-12 max-w-4xl mx-auto">
          <div className="flex items-center w-full">
            {timelineItems.map((_, index) => (
              <div key={index} className="flex-1 flex items-center justify-center">
                <CircleDot 
                  className="w-6 h-6 text-primary" 
                />
                {index < timelineItems.length - 1 && (
                  <div className="h-[2px] bg-primary/30 flex-1 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {timelineItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <Card className="mx-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-0 left-0 bg-primary text-white px-4 py-2 rounded-tr-lg rounded-bl-lg">
                        {item.date}
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

