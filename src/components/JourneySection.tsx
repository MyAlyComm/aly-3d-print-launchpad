import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowRight } from "lucide-react";

const JourneySection = () => {
  return (
    <Card className="bg-white/80 backdrop-blur border-primary/10 shadow-lg">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stage 1 */}
          <div className="space-y-4 transition-transform duration-300 hover:-translate-y-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="/lovable-uploads/b1236689-73b3-4e92-9e4d-b466a948bcb1.png"
                alt="Aly feeling overwhelmed" 
                className="relative rounded-xl w-full aspect-square object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg text-gray-900">Month 1-3</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Started my journey completely lost. Spent countless hours searching through scattered information and making costly mistakes.
              </p>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="space-y-4 transition-transform duration-300 hover:-translate-y-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-40 transition-opacity"></div>
              <div className="relative rounded-xl w-full aspect-square bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400">Progress image coming soon</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-lg text-gray-900">Month 3-5</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Started getting the hang of basic printing. Began experimenting with different materials and settings.
              </p>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="space-y-4 transition-transform duration-300 hover:-translate-y-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-40 transition-opacity"></div>
              <div className="relative rounded-xl w-full aspect-square bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400">Progress image coming soon</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-purple-500" />
                <h3 className="font-semibold text-lg text-gray-900">Month 5-7</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Made my first sales and started understanding the business side. Learned about marketing and customer service.
              </p>
            </div>
          </div>

          {/* Stage 4 */}
          <div className="space-y-4 transition-transform duration-300 hover:-translate-y-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-40 transition-opacity"></div>
              <div className="relative rounded-xl w-full aspect-square bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400">Success image coming soon</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-lg text-gray-900">Month 7-9</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Running a successful business and helping others avoid the mistakes I made. Created this comprehensive blueprint.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JourneySection;
