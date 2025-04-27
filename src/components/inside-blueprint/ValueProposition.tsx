
import { BookOpen, FileText, BarChart3, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export const ValueProposition = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Step-by-Step Guide",
      description: "Follow my proven framework to start and scale your 3D printing business, even if you're starting from zero.",
      color: "from-primary/10 to-primary/5"
    },
    {
      icon: <FileText className="w-6 h-6 text-secondary" />,
      title: "Complete Resources",
      description: "Get access to my product research framework, pricing calculator, and marketing templates.",
      color: "from-secondary/10 to-secondary/5"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-accent" />,
      title: "Real Results",
      description: "Join hundreds of successful entrepreneurs who've used this blueprint to build profitable 3D printing businesses.",
      color: "from-accent/10 to-accent/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 animate-bounce">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Transform Your Business</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Transform Your 3D Printing Hobby Into a Business
          </h2>
          <p className="text-gray-600 text-lg">
            Stop wasting time with trial and error. Get the exact roadmap I used to build my successful business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`mx-auto w-12 h-12 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12`}>
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-xl group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
