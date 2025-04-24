
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LeadMagnetForm from "./LeadMagnetForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-light/10 via-white to-white">
      <div className="absolute inset-0 gradient-blur"></div>
      <div className="container relative pt-20 pb-12 md:pt-24 md:pb-20">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            @aly3dprints • 24.5K followers
          </div>
          
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Launch Your <span className="text-primary">3D Printing</span> Business With My Proven Blueprint!
          </h1>
          
          <p className="mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
            Get instant access to guides, STL files, and strategies to start profiting from 3D printing, even with a $500 budget.
          </p>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-white font-bold text-lg px-8 py-6">
                  Grab Your Free Guide Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <LeadMagnetForm setDialogOpen={setOpen} />
              </DialogContent>
            </Dialog>
            
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg px-8 py-6">
              Browse All Blueprints
            </Button>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-lg md:max-w-2xl">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur"></div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="public/lovable-uploads/80580729-6d4e-4bd0-a66c-dff6d0d890e1.png"
                alt="Aly's 3D Printing Blueprint"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
