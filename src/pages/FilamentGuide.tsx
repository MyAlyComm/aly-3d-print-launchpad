
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Compass, Clock, BookText, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const FilamentGuide = () => {
  const keyHighlights = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "The Arbitrage Window",
      description: "Understand how the current market creates a unique opportunity for new entrepreneurs in 3D printing"
    },
    {
      icon: <Compass className="w-6 h-6 text-blue-500" />,
      title: "The 7 Key Factors",
      description: "Discover the crucial elements that will determine your optimal path to success"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: "Budget & Time Strategy",
      description: "Learn how to start with any budget level and make the most of your available time"
    },
    {
      icon: <BookText className="w-6 h-6 text-purple-500" />,
      title: "Real Success Stories",
      description: "See how others went from zero to profitable businesses using these exact strategies"
    },
    {
      icon: <Package className="w-6 h-6 text-orange-500" />,
      title: "Product Selection",
      description: "Find your first three winning products using proven frameworks and strategies"
    }
  ];

  return (
    <DashboardLayout title="Mini Blueprint Highlights">
      <div className="max-w-7xl mx-auto py-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            What's Inside The Mini Blueprint
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive guide taking you from complete beginner to successful business owner. 
            Here's what you'll learn:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyHighlights.map((highlight, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gray-50">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-8">
          <Button size="lg" className="group">
            Get Started Today <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FilamentGuide;
