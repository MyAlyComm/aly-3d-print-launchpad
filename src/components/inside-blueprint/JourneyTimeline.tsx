
import { Card, CardContent } from "@/components/ui/card";

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

        <div className="max-w-4xl mx-auto space-y-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="group">
              <Card className="relative hover:shadow-lg transition-all duration-300">
                <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 w-6 h-6 rounded-full bg-primary z-10" />
                {index < timelineItems.length - 1 && (
                  <div className="absolute left-0 top-[50%] -translate-x-3 h-[calc(100%+2rem)] w-[2px] bg-primary/30" />
                )}
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/3">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-primary text-white px-4 py-2 rounded-br-lg">
                        {item.date}
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold text-primary mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

