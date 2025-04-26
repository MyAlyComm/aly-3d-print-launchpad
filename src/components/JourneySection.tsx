
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowRight } from "lucide-react";

const JourneySection = () => {
  return (
    <Card className="bg-white/80 backdrop-blur border-primary/10 shadow-lg">
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before Section */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur"></div>
              <img 
                src="/lovable-uploads/b1236689-73b3-4e92-9e4d-b466a948bcb1.png"
                alt="Aly feeling overwhelmed" 
                className="relative rounded-xl w-full aspect-square object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-xl text-gray-900">Me 9 Months Ago...</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                When I started my 3D printing journey in August 2024, I was completely lost and overwhelmed. 
                I spent countless hours searching through scattered information online, watching endless tutorials, 
                and making so many costly mistakes along the way.
              </p>
            </div>
          </div>

          {/* After Section - Placeholder until new image is provided */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur"></div>
              <div className="relative rounded-xl w-full aspect-square bg-gray-100 flex items-center justify-center">
                {/* This will be replaced with the new image */}
                <p className="text-gray-400">New image coming soon</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ArrowRight className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-xl text-gray-900">Me Now</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                That's exactly why I created this blueprint. I don't want anyone else to go through the same 
                frustrating trial and error process I did. I've compiled everything I learned about running a 
                successful 3D printing business into one clear, structured guide that will save you months of 
                confusion and thousands in costly mistakes.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JourneySection;
