
import { ArrowRight, BarChart2, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const SwankyGrowth = () => {
  const growthMetrics = [
    {
      title: "Increased Production Speed",
      stat: "40%",
      icon: <Clock className="w-6 h-6 text-primary" />,
      description: "Optimize your 3D printing workflow to produce more organization products in less time."
    },
    {
      title: "Revenue Growth",
      stat: "75%",
      icon: <BarChart2 className="w-6 h-6 text-secondary" />,
      description: "Our sellers typically see 75% revenue growth within 6 months of implementing our system."
    },
    {
      title: "Repeat Customers",
      stat: "60%",
      icon: <Users className="w-6 h-6 text-accent" />,
      description: "Build a loyal customer base who love your organization products and keep coming back."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Growth Potential for Your SwankyView Shop</h2>
          <p className="text-gray-600 text-lg mb-8">
            See how other organization and home decor Etsy sellers have grown their businesses using our blueprint.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {growthMetrics.map((metric, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4"
              style={{ borderTopColor: index === 0 ? '#0EA5E9' : index === 1 ? '#F97316' : '#8B5CF6' }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{metric.stat}</h3>
                <p className="font-medium text-lg mb-2">{metric.title}</p>
                <p className="text-gray-600">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Scale Your SwankyView Shop?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our blueprint provides a clear path to growing your organization products business on Etsy.
          </p>
          <Button size="lg" className="group">
            Get Started Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
