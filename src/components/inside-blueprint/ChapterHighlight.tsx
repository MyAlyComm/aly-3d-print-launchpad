
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ChapterHighlight = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What's Inside The Blueprint</h2>
          <p className="text-gray-600 text-lg">
            A comprehensive guide that takes you from complete beginner to profitable business owner
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <ArrowRight className="w-5 h-5" />
                <span className="font-semibold">Chapter 4:</span>
              </div>
              <h3 className="text-xl font-semibold">Finding Your First Three Winning Products</h3>
              <p className="text-gray-600">
                Learn how to identify and validate profitable product opportunities using the P.R.O.F.I.T.S 
                and MATCH frameworks. Skip the guesswork and start with proven winners.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <ArrowRight className="w-5 h-5" />
                <span className="font-semibold">Chapter 5:</span>
              </div>
              <h3 className="text-xl font-semibold">Choosing Your Production Tools</h3>
              <p className="text-gray-600">
                A comprehensive guide to selecting the right 3D printers and essential equipment for your 
                business needs, optimized for your budget and goals.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="text-lg">
            View All Chapters
          </Button>
        </div>
      </div>
    </section>
  );
};
