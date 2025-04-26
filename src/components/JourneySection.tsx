import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const JourneySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const journeyStages = [
    {
      mainImage: "/lovable-uploads/511b02f5-662b-4442-ada4-7d79753c2d2d.jpg",
      hoverImage: "/lovable-uploads/e22aad99-d58b-4d21-a68e-546900704654.png",
      month: "Month 1",
      icon: <AlertCircle className="w-5 h-5 text-primary" />,
      description: "I started my business with a $300 printer and $200 of supplies. With the profits from selling keychains to friends and expanding to cat masks and planters, I was able to buy 8 more 3D printers in my first month."
    },
    {
      mainImage: "/lovable-uploads/0f08439b-373a-474c-971a-ae51de7a6701.png",
      hoverImage: "/lovable-uploads/af13abbf-023d-45a1-b3cc-a142e9def472.png",
      month: "Month 2",
      icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
      description: "While going to University full time, I dedicated all my spare time to learning, researching, and planning and grew my business to over 10K/month: selling on my website and amazon."
    },
    {
      mainImage: "/lovable-uploads/04fa3465-1dd4-4878-bde7-ee7d0398b515.png",
      hoverImage: "/placeholder.svg",
      month: "Month 3",
      icon: <ArrowRight className="w-5 h-5 text-purple-500" />,
      description: "I scaled up my operations and the sofa in my living room was traded in for industrial shelving and over 30 printers to increase production capacity."
    },
    {
      mainImage: "/lovable-uploads/1dadb0e8-cc5d-4b6f-955b-cb6f463eab22.png",
      hoverImage: "/placeholder.svg",
      month: "Month 4",
      icon: <ArrowRight className="w-5 h-5 text-green-500" />,
      description: "Fulfilling bulk orders and running a successful business with efficient systems in place."
    },
    {
      mainImage: "/lovable-uploads/5146c83e-374b-41f6-b521-c13fb2db3347.jpg",
      hoverImage: "/placeholder.svg",
      month: "Month 5",
      icon: <ArrowRight className="w-5 h-5 text-primary" />,
      description: "I designed a 5 in 1 phone stand which went viral and has since been downloaded and purchased thousands of times in just a few months. I also started more complex custom work for clients and began building my AI company."
    },
    {
      mainImage: "/lovable-uploads/1273d951-6c16-4a5d-a99a-d233f5e92918.png",
      hoverImage: "/placeholder.svg",
      month: "Month 6",
      icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
      description: "I obsessed over the history of 3D printing, determined to map the key variables in the industry and create complex algorithms to predict future outcomes. I shifted my focus towards helping others grow their business and learn from my knowledge bases."
    },
    {
      mainImage: "/lovable-uploads/b74ec2ed-9df1-4e07-9f9e-9beed5099f9f.jpg",
      hoverImage: "/placeholder.svg",
      month: "Month 7",
      icon: <ArrowRight className="w-5 h-5 text-purple-500" />,
      description: "I finished my thesis: The Axiogenetic Theorem. A mathematical model to assign and predict true value outcomes as functions of the products of the rate of Innovation and Time expended."
    },
    {
      mainImage: "/lovable-uploads/6265514e-869f-4650-8698-e0a572599ea7.png",
      hoverImage: "/lovable-uploads/placeholder.svg",
      month: "Month 8",
      icon: <ArrowRight className="w-5 h-5 text-green-500" />,
      description: "Expanding globally and establishing partnerships with international distributors."
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur border-primary/10 shadow-lg">
      <CardContent className="pt-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeyStages.slice(0, 4).map((stage, index) => (
            <div key={stage.month} className="space-y-4 transition-transform duration-300 hover:-translate-y-2">
              <div 
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={hoveredIndex === index ? stage.hoverImage : stage.mainImage}
                  alt={`${stage.month} journey`}
                  className="relative rounded-xl w-full aspect-square object-cover transition-opacity duration-300"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {stage.icon}
                  <h3 className="font-semibold text-lg text-gray-900">{stage.month}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeyStages.slice(4).map((stage, index) => (
            <div key={stage.month} className="space-y-4 transition-transform duration-300 hover:-translate-y-2">
              <div 
                className="relative"
                onMouseEnter={() => setHoveredIndex(index + 4)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={hoveredIndex === index + 4 ? stage.hoverImage : stage.mainImage}
                  alt={`${stage.month} journey`}
                  className="relative rounded-xl w-full aspect-square object-cover transition-opacity duration-300"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {stage.icon}
                  <h3 className="font-semibold text-lg text-gray-900">{stage.month}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default JourneySection;
