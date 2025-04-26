import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowRight } from "lucide-react";
const JourneySection = () => {
  return <Card className="bg-white/80 backdrop-blur border-primary/10 shadow-lg">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stage 1 */}
          <div className="space-y-4 transition-transform duration-300 hover:-translate-y-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-40 transition-opacity"></div>
              <img src="/lovable-uploads/7868338f-6cdb-4097-b11e-25b26904b7e1.png" alt="Setting up first 3D printer" className="relative rounded-xl w-full aspect-square object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg text-gray-900">Month 1</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">With the profits of my sales I was able to buy 8 more 3D printers in my first month.</p>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="space-y-4 transition-transform duration-300 hover:-translate-y-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-40 transition-opacity"></div>
              <img src="/lovable-uploads/0f08439b-373a-474c-971a-ae51de7a6701.png" alt="Learning and researching" className="relative rounded-xl w-full aspect-square object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-lg text-gray-900">Month 2</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Dedicated time to learning, researching, and planning grew my business to over 10K/month.</p>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="space-y-4 transition-transform duration-300 hover:-translate-y-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-40 transition-opacity"></div>
              <img src="/lovable-uploads/04fa3465-1dd4-4878-bde7-ee7d0398b515.png" alt="Scaling up operations" className="relative rounded-xl w-full aspect-square object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-purple-500" />
                <h3 className="font-semibold text-lg text-gray-900">Month 3</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Scaling up operations with proper organization and multiple printers to increase production capacity.
              </p>
            </div>
          </div>

          {/* Stage 4 */}
          <div className="space-y-4 transition-transform duration-300 hover:-translate-y-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-40 transition-opacity"></div>
              <img src="/lovable-uploads/1dadb0e8-cc5d-4b6f-955b-cb6f463eab22.png" alt="Growing business success" className="relative rounded-xl w-full aspect-square object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-lg text-gray-900">Month 4</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fulfilling bulk orders and running a successful business with efficient systems in place.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>;
};
export default JourneySection;