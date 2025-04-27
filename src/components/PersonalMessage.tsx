
import { Instagram, Users, Award, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PersonalMessage = () => {
  const stats = [
    {
      icon: <Instagram className="w-5 h-5 text-primary" />,
      number: "24.5K+",
      title: "Instagram Followers",
      description: "Leading Innovator: Aly stays at the cutting edge of AI, E-Commerce and Generative Product Design. Through her company MyAly AI, she is building the next generation of AI tools for the 3D printing industry."
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      number: "1,200+",
      title: "Skool Community Members",
      description: "Marketing Consultant for some of the biggest brands in the industry."
    },
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      number: "",
      title: "Brand Partnership with Elevate.store",
      description: "Officially endorsed by leading industry platforms and stores."
    },
    {
      icon: <Check className="w-5 h-5 text-primary" />,
      number: "100+",
      title: "Success Stories",
      description: "Helped over 100 creators sell their first print and start profitable businesses."
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur border-primary/10 shadow-lg">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                {stat.icon}
                {stat.number && <span className="font-bold text-lg text-primary">{stat.number}</span>}
              </div>
              <h3 className="font-semibold text-gray-900">{stat.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalMessage;
