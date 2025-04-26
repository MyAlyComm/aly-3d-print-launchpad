import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return <div className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="text-sm font-medium text-primary mb-2">ABOUT YOUR MENTOR</div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Hey, I'm Aly, Your 3D Printing Mentor</h2>
            <div className="space-y-4 text-gray-700">
              <p>When I started University studying philosophy and art history I had no idea that a few years later I'd be running a 3D printing and </p>
              <p>
                My 3D printing journey began with just a $500 budget after a friend showed me how she was making money with her printer. On March 29, 2025, I made my first $10 sale – that small win sparked what would become a profitable business.
              </p>
              <p>
                Today, I lead a thriving Skool community with over 1,200 members where I share everything I've learned about building a profitable 3D printing business. My mission is simple: help creative people like you turn their ideas into income.
              </p>
              <p className="font-medium">
                If I could start with $500 and build this, imagine what you could create with the right blueprint!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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