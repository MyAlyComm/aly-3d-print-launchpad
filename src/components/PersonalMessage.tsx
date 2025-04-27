
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
              Aly stays at the cutting edge of AI, E-Commerce and Generative Product Design. 
              Through her company MyAly AI, she is building the next generation of AI tools 
              for the 3D printing industry. Marketing Consultant for some of the biggest brands 
              in the industry. Officially endorsed by leading industry platforms and stores. 
              Helped over 100 creators sell their first print and start profitable businesses.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalMessage;

