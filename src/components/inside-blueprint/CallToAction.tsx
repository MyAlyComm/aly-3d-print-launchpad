
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
          <div className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get instant access to the complete blueprint, including all chapters, resources, 
              and my personal support to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Get The Blueprint Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
