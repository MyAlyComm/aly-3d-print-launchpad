
import { BookOpen, FileText, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ValueProposition = () => {
  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Step-by-Step Guide",
      description: "Follow my proven framework to start and scale your 3D printing business, even if you're starting from zero."
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Complete Resources",
      description: "Get access to my product research framework, pricing calculator, and marketing templates."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Real Results",
      description: "Join hundreds of successful entrepreneurs who've used this blueprint to build profitable 3D printing businesses."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Transform Your 3D Printing Hobby Into a Business</h2>
          <p className="text-gray-600 text-lg">
            Stop wasting time with trial and error. Get the exact roadmap I used to build my successful business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-xl">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
