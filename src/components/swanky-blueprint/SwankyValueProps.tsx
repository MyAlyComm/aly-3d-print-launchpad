
import { Card, CardContent } from "@/components/ui/card";
import { Package, TrendingUp, Heart } from "lucide-react";

export const SwankyValueProps = () => {
  const benefits = [
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: "Product Line Expansion",
      description: "Learn how to identify and develop new organization products that complement your existing bestsellers."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-secondary" />,
      title: "Production Optimization",
      description: "Scale your production capacity while maintaining quality, perfect for high-demand organization solutions."
    },
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: "Customer Retention",
      description: "Build a loyal customer base who'll keep coming back for more of your organization products."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">Designed for Your Success</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Take Your Organization Products to the Next Level
          </h2>
          <p className="text-gray-600 text-lg">
            Our blueprint is specifically tailored for Etsy sellers like you who specialize in 
            organization and home improvement products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
