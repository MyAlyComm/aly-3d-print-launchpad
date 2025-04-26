
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Check } from "lucide-react";
import LeadMagnetForm from "../LeadMagnetForm";
import FreeGuideDialog from "../FreeGuideDialog";
import Image from "@/components/ui/image";  // We'll create this component

interface BlueprintProps {
  id: number;
  title: string;
  price: string;
  popular: boolean;
  isFree: boolean;
  description: string;
  features: string[];
  onCheckout: (id: number) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  image?: string;  // New optional image prop
}

const BlueprintCard = ({ 
  id, 
  title, 
  price, 
  popular, 
  isFree, 
  description, 
  features, 
  onCheckout,
  open,
  setOpen,
  image  // Added image prop
}: BlueprintProps) => {
  return (
    <div className={`blueprint-card ${popular ? 'blueprint-card-popular relative overflow-hidden' : ''}`}>
      {popular && (
        <div className="absolute top-2 right-[-30px] bg-secondary text-white text-xs font-semibold py-1 px-8 transform rotate-45 shadow-md">
          MOST POPULAR
        </div>
      )}
      {image && (
        <div className="mb-4 w-full h-32 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-3xl font-bold text-primary">{price}</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        {isFree ? (
          <FreeGuideDialog>
            <Button className="w-full bg-secondary hover:bg-secondary-dark">
              Get Free Guide
            </Button>
          </FreeGuideDialog>
        ) : (
          <Button 
            className="w-full bg-primary hover:bg-primary-dark"
            onClick={() => onCheckout(id)}
          >
            Get Started
          </Button>
        )}
      </div>
    </div>
  );
};

export default BlueprintCard;
