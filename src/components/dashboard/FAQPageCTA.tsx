
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const FAQPageCTA = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 rounded-lg shadow-sm">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Ready to Turn Your 3D Printing Passion into Profit?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Get the complete 3D Printing Business Blueprint and start your journey 
          to building a successful 3D printing business today.
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
    </div>
  );
};
