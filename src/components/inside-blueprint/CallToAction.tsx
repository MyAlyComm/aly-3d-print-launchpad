
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export const CallToAction = () => {
  const features = [
    "Complete Business Blueprint",
    "Product Research Framework",
    "Marketing Templates",
    "30-Day Money-Back Guarantee",
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="p-8 md:p-12">
            <div className="text-center space-y-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">Start Your 3D Printing Business Today</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join hundreds of successful entrepreneurs who've used this blueprint to build 
                their profitable 3D printing business
              </p>
              <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full">
                Special Launch Price: $197 (Regular $297)
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Get Instant Access
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                View Sample Chapter
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
