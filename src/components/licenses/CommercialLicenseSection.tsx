
import { Award, Check } from "lucide-react";
import LeadMagnetDialog from "../FreeGuideDialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LeadMagnetForm from "../LeadMagnetForm";
import { useState } from "react";

interface CommercialLicenseSectionProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CommercialLicenseSection = ({
  open,
  setOpen
}: CommercialLicenseSectionProps) => {
  const [phoneStandOpen, setPhoneStandOpen] = useState(false);
  const [bonusModelsOpen, setBonusModelsOpen] = useState(false);
  
  return (
    <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8 text-center">
        <div className="flex justify-center mb-4">
          <Award className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Get Free Lifetime Commercial Licenses!
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Unlock commercial rights for my top-selling 3D models, including the popular 5-in-1 Phone Stand, Cat Masks, and more!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              5-in-1 Phone Stand Tripod
            </h3>
            <div className="flex justify-center mb-4">
              <img src="https://cdn.makerworld.com/upload/model/2024/01/0e4e8d66-9a5a-4a08-9740-5ab86eed69c2/thumbnail_large.png" alt="5-in-1 Phone Stand" className="rounded-lg shadow-md max-h-64 object-cover" />
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Full commercial rights included
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Optimized for POV shots and close-ups
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Multi-functional design
              </li>
            </ul>
            <Dialog open={phoneStandOpen} onOpenChange={setPhoneStandOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-secondary hover:bg-secondary-dark">
                  Claim Free Commercial License
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <LeadMagnetForm
                  setDialogOpen={setPhoneStandOpen}
                  title="Claim 5-in-1 Phone Stand Commercial License" 
                  description="Unlock full commercial rights to sell and distribute the 5-in-1 Phone Stand model on platforms like Etsy and MakerWorld" 
                  buttonText="Claim Free Commercial License"
                  requestType="commercial_license"
                />
              </DialogContent>
            </Dialog>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Bonus Models Collection
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Cat Masks
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Decorative Keychains
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Additional Trending 3D Models
              </div>
            </div>
            <p className="text-gray-600 mb-4 italic">
              Limited time offer - Commercial licenses for multiple models!
            </p>
            <Dialog open={bonusModelsOpen} onOpenChange={setBonusModelsOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-accent hover:bg-accent-dark">
                  Get Bonus Models License
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <LeadMagnetForm 
                  setDialogOpen={setBonusModelsOpen}
                  title="Unlock Bonus 3D Models Commercial License" 
                  description="Gain commercial rights for an exclusive collection of trending 3D models, including Cat Masks and Decorative Keychains" 
                  buttonText="Get Bonus Models License"
                  requestType="commercial_license"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">*Commercial license allows selling physical prints on platforms like Etsy, Shopify, and anywhere else you'd like! You keep 100% of each sale with no royalties or fees.</p>
        </div>
      </div>
    </div>
  );
};

export default CommercialLicenseSection;
