
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LeadMagnetForm from "./LeadMagnetForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-light/10 via-white to-white">
      <div className="absolute inset-0 gradient-blur"></div>
      <div className="container relative pt-16 pb-8 md:pt-20 md:pb-16 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 md:mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            @aly3dprints • 24.5K followers
          </div>
          
          <h1 className="mb-4 md:mb-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Launch Your <span className="text-primary">3D Printing</span> Business With My Proven Blueprint!
          </h1>
          
          <p className="mb-6 md:mb-8 max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Get instant access to guides, STL files, and strategies to start profiting from 3D printing, even with a $500 budget.
          </p>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 px-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-white font-bold text-lg px-6 py-5 w-full sm:w-auto">
                  Grab Your Free Guide Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <LeadMagnetForm setDialogOpen={setOpen} />
              </DialogContent>
            </Dialog>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg px-6 py-5 w-full sm:w-auto"
            >
              Browse All Blueprints
            </Button>
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex justify-center px-4">
          <div className="relative w-full max-w-lg md:max-w-2xl">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur"></div>
            <div className="relative overflow-hidden rounded-xl">
              {!imageLoaded && (
                <Skeleton className="w-full aspect-[16/9]" />
              )}
              <img
                src="/lovable-uploads/80580729-6d4e-4bd0-a66c-dff6d0d890e1.png"
                alt="Aly's 3D Printing Blueprint"
                className={`w-full h-auto transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                loading="eager"
                width={1024}
                height={576}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
