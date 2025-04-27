
import { Button } from "@/components/ui/button";

export const HeroStory = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              From Hobby to <span className="text-primary">$10,000/Month</span> with 3D Printing
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              In 2021, I started with just one printer and a $500 budget. Today, I run a thriving 3D printing business. 
              This isn't just my story—it's your blueprint to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Get The Complete Blueprint
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Read Success Stories
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="/lovable-uploads/d1a2c586-5f86-4edf-865e-d27b19a65ec9.png"
              alt="Aly with her 3D printing setup" 
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
