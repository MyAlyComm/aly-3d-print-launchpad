
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const FAQPageCTA = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 rounded-lg shadow-sm">
      <div className="container max-w-7xl mx-auto text-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Ready to Start Your 3D Printing Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your passion into a profitable business with our comprehensive 3D Printing Blueprint. 
              Learn the exact strategies used to generate $20K in just 60 days.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="group">
                Get the Full Blueprint
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/lovable-uploads/6977423f-168b-4140-8de4-7d7328e74b3c.png" 
              alt="3D Printing Business Setup" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

