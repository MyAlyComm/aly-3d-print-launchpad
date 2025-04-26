
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return <div className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="text-sm font-medium text-primary mb-2">THE BRAIN BEHIND THE BLUEPRINT</div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Hey I'm Aly, 
Your 3D Printing Mentor</h2>
            
            <p className="text-gray-700 mb-8">
              From a single $300 printer to a thriving $20K/month business, I've learned what it takes to succeed in 3D printing. Now, I'm sharing my blueprint to help you build your own profitable business, even starting with just $500.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button className="bg-primary hover:bg-primary-dark">
                Join My Community
              </Button>
              <a href="https://instagram.com/aly3dprints" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-primary border border-primary rounded-md px-4 py-2 hover:bg-primary/5 transition-colors">
                Follow on Instagram
              </a>
            </div>

            <div className="space-y-6 text-gray-700 border-t pt-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">My Story</h3>
              
              <div>
                <h4 className="text-lg font-medium text-primary-dark mb-2">Why I Created This Blueprint</h4>
                <p>I designed this blueprint because it's what I needed when I was starting out. And it's the culmination of everything I've learned about starting and growing a 3D printing business. It's the step-by-step guide that I wish I had before...</p>
              </div>
              
              <Separator className="my-2" />
              
              <div>
                <h4 className="text-lg font-medium text-primary-dark mb-2">My Journey</h4>
                <p>My journey started in August 2024 with a single $300 printer, selling keychains to friends. What began as a side hustle to help pay for college transformed into a thriving business generating over $20K monthly. Who knew my Philosophy and Art History degree would become such a valuable asset in this industry? This unique perspective helped me design viral products and expand globally.</p>
              </div>
              
              <Separator className="my-2" />
              
              <div>
                <h4 className="text-lg font-medium text-primary-dark mb-2">My Mission</h4>
                <p>Now, it's my turn to help others discover the freedom that 3D printing creates. I'm sharing everything I've learned about building a profitable business in this industry. My mission is simple: help creative people like you turn your ideas into income.</p>
                <p className="font-medium mt-2">
                  If I could start with $500 and build this, imagine what you could create with the right blueprint!
                </p>
              </div>
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

