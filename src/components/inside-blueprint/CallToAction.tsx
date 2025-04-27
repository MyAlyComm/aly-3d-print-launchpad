
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const CallToAction = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59 };
        }
        return prev;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    "Complete Business Blueprint",
    "Product Research Framework",
    "Marketing Templates",
    "30-Day Money-Back Guarantee",
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <Card 
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 overflow-hidden relative transform transition-all duration-500 hover:scale-[1.02]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.15),rgba(255,255,255,0)_70%)] opacity-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
          <div className="p-8 md:p-12 relative">
            <div className="text-center space-y-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Start Your 3D Printing Business Today
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join hundreds of successful entrepreneurs who've used this blueprint to build 
                their profitable 3D printing business
              </p>
              <div className="inline-flex flex-col items-center gap-2">
                <div className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Special Launch Price: $197 (Regular $297)</span>
                </div>
                <div className="text-sm text-gray-600">
                  Offer ends in: {timeLeft.hours}h {timeLeft.minutes}m
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-all duration-300 transform hover:-translate-x-1"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg group relative overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <span className="relative z-10">Get Instant Access</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg hover:bg-white/50 transform transition-transform duration-300 hover:scale-105"
              >
                View Sample Chapter
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
