import { Button } from "@/components/ui/button";
import { useState } from "react";
import LeadMagnetForm from "./LeadMagnetForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();

  return <div className="relative overflow-hidden bg-gradient-to-b from-primary-light/10 via-white to-white">
      <div className="absolute inset-0 gradient-blur"></div>
      
      {/* Text Content Section */}
      <div className="container relative pt-16 pb-8 md:pt-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 md:mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            @aly3dprints • 24.5K followers
          </div>
          
          <h1 className="mb-4 md:mb-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Launch Your <span className="text-primary">3D Printing</span> Business With The Ultimate Blueprint!
          </h1>
          
          <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600">Get instant access to guides, STL files and 
marketing strategies to start profiting from 3D printing</p>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-white font-bold text-lg px-6 py-5 w-full sm:w-auto">
                  Grab Your Free Guide Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <LeadMagnetForm setDialogOpen={setOpen} requestType="guide" />
              </DialogContent>
            </Dialog>
            
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg px-6 py-5 w-full sm:w-auto">
              Browse All Blueprints
            </Button>
          </div>

          {/* Social Proof Section */}
          <div className="mt-8 flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                {[
                  "/lovable-uploads/80580729-6d4e-4bd0-a66c-dff6d0d890e1.png",
                  "/lovable-uploads/90ff8861-ff64-4a75-8a68-8afda542663d.png",
                  "/lovable-uploads/e49ddb52-4568-42a4-9701-8bdb0ebd0833.png"
                ].map((src, n) => (
                  <Avatar key={n} className="w-8 h-8 border-2 border-white">
                    <AvatarImage src={src} alt={`Student ${n + 1}`} />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Join <span className="font-semibold">2000+</span> other entrepreneurs in our online community
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ebook Cover Section */}
      <div className="container relative pb-16 md:pb-20 px-4 md:px-6">
        <div className={`mx-auto ${isMobile ? 'max-w-md' : 'max-w-2xl'}`}>
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur"></div>
            <div className="relative overflow-hidden rounded-xl">
              {!imageLoaded && <Skeleton className="w-full aspect-[4/3]" />}
              <img src="/lovable-uploads/20fb5ec7-9362-4ced-aa5c-42d3a7c41f92.png" alt="3D Printing Blueprint by Aly Yu" className={`w-full h-auto transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setImageLoaded(true)} loading="eager" width={isMobile ? 500 : 800} height={isMobile ? 375 : 600} />
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default HeroSection;
