
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

export const JourneyTimeline = () => {
  const timelineItems = [
    {
      date: "Month 1",
      title: "Starting Small",
      description: "Started with a $300 printer and $200 in supplies. Within the first month, profits from keychains, cat masks, and planters funded 8 more printers.",
      image: "/lovable-uploads/511b02f5-662b-4442-ada4-7d79753c2d2d.jpg"
    },
    {
      date: "Month 2",
      title: "Rapid Growth",
      description: "While attending university full-time, scaled the business to over $10K monthly through website and Amazon sales.",
      image: "/lovable-uploads/0f08439b-373a-474c-971a-ae51de7a6701.png"
    },
    {
      date: "Month 3",
      title: "Scaling Production",
      description: "Transformed living room into a production facility with industrial shelving and over 30 printers to increase capacity.",
      image: "/lovable-uploads/04fa3465-1dd4-4878-bde7-ee7d0398b515.png"
    },
    {
      date: "Month 4",
      title: "Systems Development",
      description: "Established efficient systems for fulfilling bulk orders and running a successful business.",
      image: "/lovable-uploads/1dadb0e8-cc5d-4b6f-955b-cb6f463eab22.png"
    },
    {
      date: "Month 5",
      title: "Product Innovation",
      description: "Created a viral 5-in-1 phone stand downloaded thousands of times. Started complex custom work and began building AI company.",
      image: "/lovable-uploads/5146c83e-374b-41f6-b521-c13fb2db3347.jpg"
    },
    {
      date: "Month 6",
      title: "Industry Analysis",
      description: "Developed advanced algorithms to predict market trends and map key variables in the 3D printing industry.",
      image: "/lovable-uploads/1273d951-6c16-4a5d-a99a-d233f5e92918.png"
    },
    {
      date: "Month 7",
      title: "Academic Achievement",
      description: "Completed the Axiogenetic Theorem - a mathematical model for predicting value outcomes based on Innovation and Time.",
      image: "/lovable-uploads/b74ec2ed-9df1-4e07-9f9e-9beed5099f9f.jpg"
    },
    {
      date: "Month 8",
      title: "Global Expansion",
      description: "Started expanding globally and establishing partnerships with international distributors.",
      image: "/lovable-uploads/e3c4d94e-63ee-4200-8ca7-63cd8f397489.png"
    },
    {
      date: "Month 9",
      title: "AI Integration",
      description: "Launched proprietary AI models to optimize 3D printing processes and predict market trends.",
      image: "/lovable-uploads/fe8adce5-b909-4430-a057-0e0da07b26cf.png"
    },
    {
      date: "Month 10",
      title: "Advanced Automation",
      description: "Developed advanced automation systems and expanded AI capabilities to revolutionize the industry.",
      image: "/lovable-uploads/fe8adce5-b909-4430-a057-0e0da07b26cf.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Journey to Success</h2>
          <p className="text-gray-600 text-lg mb-8">
            A month-by-month breakdown of how I built my 3D printing empire
          </p>
          <ArrowDown className="w-8 h-8 mx-auto text-primary animate-bounce" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2 z-0" />

          <div className="space-y-8 relative">
            {timelineItems.map((item, index) => (
              <div key={index} className="group relative">
                <Card className="hover:shadow-lg transition-all duration-300 relative z-10">
                  <CardContent className="p-0">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="relative md:w-1/3">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                        <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0 rounded-br-lg' : 'right-0 rounded-bl-lg'} bg-primary text-white px-4 py-2`}>
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
      </div>
    </section>
  );
};
