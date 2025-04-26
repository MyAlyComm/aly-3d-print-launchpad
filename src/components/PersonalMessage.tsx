
import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PersonalMessage = () => {
  return (
    <Card className="bg-white/80 backdrop-blur border-primary/10 shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/80580729-6d4e-4bd0-a66c-dff6d0d890e1.png"
              alt="Aly" 
              className="w-16 h-16 rounded-full border-2 border-primary"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-gray-900">A Message from Aly</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hey there! I created this blueprint because I saw too many people struggling to start their 3D printing business. 
              After growing my own successful studio and helping hundreds of entrepreneurs, I've compiled everything I've learned 
              into this comprehensive guide. Whether you're starting with a $500 budget or $5000, this blueprint will show you 
              exactly how to turn 3D printing into a profitable business.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalMessage;
