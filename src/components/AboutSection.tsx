import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return <div className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="text-sm font-medium text-primary mb-2">THE BRAIN BEHIND THE BLUEPRINT</div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Hey I'm Aly, 
Your 3D Printing Mentor</h2>
            
            <p className="text-gray-700 mb-8">From a single $300 printer to a thriving $20K+/month business, I've learned what it takes to succeed in 3D printing. But the journey would have been so much easier if I knew all the things I do now.


So now I'm sharing my blueprint to help you build your own profitable business. </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary-dark">
                Join My Community
              </Button>
              <a href="https://instagram.com/aly3dprints" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-primary border border-primary rounded-md px-4 py-2 hover:bg-primary/5 transition-colors">
                Follow on Instagram
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50 blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl">
                {!imageLoaded && <Skeleton className="w-full aspect-[4/3]" />}
                <img src="/lovable-uploads/e49ddb52-4568-42a4-9701-8bdb0ebd0833.png" alt="Aly with 3D printers" className={`w-full h-auto rounded-xl transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setImageLoaded(true)} loading="lazy" width={800} height={600} />
              </div>

              <div className="absolute -right-6 -bottom-6 bg-white rounded-lg shadow-lg p-4 max-w-[180px]">
                <div className="text-sm font-medium text-gray-500">Instagram</div>
                <div className="text-xl font-bold text-primary">24.5K</div>
                <div className="text-sm text-gray-500">Followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AboutSection;