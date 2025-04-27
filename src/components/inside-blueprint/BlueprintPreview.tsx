
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const BlueprintPreview = () => {
  const chapters = [
    {
      number: "01",
      title: "Getting Started",
      description: "Essential mindset shifts and initial setup for success"
    },
    {
      number: "02",
      title: "Product Selection",
      description: "Using the PROFITS framework to find winning products"
    },
    {
      number: "03",
      title: "Production Setup",
      description: "Optimal printer settings and workflow automation"
    }
  ];

  const benefits = [
    "Complete step-by-step business system",
    "Proven product research framework",
    "Pricing calculator and templates",
    "Marketing strategy guide",
    "Production optimization techniques",
    "Scaling and automation guides"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
          <p className="text-gray-600 text-lg">
            A complete system to build your profitable 3D printing business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Featured Chapters</h3>
            {chapters.map((chapter) => (
              <Card key={chapter.number} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-primary/30">{chapter.number}</span>
                    <div>
                      <h4 className="font-semibold mb-2">{chapter.title}</h4>
                      <p className="text-gray-600">{chapter.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">What's Included</h3>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="text-primary w-5 h-5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
