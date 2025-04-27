
import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PersonalMessage = () => {
  return (
    <Card className="bg-white/80 backdrop-blur border-primary/10 shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/d1a2c586-5f86-4edf-865e-d27b19a65ec9.png"
              alt="Aly" 
              className="w-24 h-24 rounded-full border-4 border-primary object-cover" 
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-gray-900">A Message from the Founder</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hey there! I created this blueprint to empower creators and entrepreneurs who want to turn their creativity into income. 
              After building my own successful 3D printing studio and helping hundreds of entrepreneurs, I've distilled my insights 
              into this comprehensive guide. No matter your background or starting budget, this blueprint will show you how to 
              transform 3D printing from a hobby into a profitable business.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalMessage;
