import BlueprintCard from "./BlueprintCard";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check } from "lucide-react";

const blueprints = [
  {
    id: 1,
    title: "Free Mini Blueprint",
    price: "FREE",
    popular: false,
    isFree: true,
    description: "FAQ & Quickstart Guide to get you started",
    features: [
      "Basic 3D printing concepts",
      "Frequently asked questions",
      "Initial setup checklist",
      "Resource recommendations",
    ],
    image: "/lovable-uploads/6356c68c-e0f8-4cae-a628-a5c3d4a3b0f6.png"
  },
  {
    id: 2,
    title: "Facebook Marketplace Secrets",
    price: "$19",
    popular: false,
    isFree: false,
    description: "A Gen Z Guide to 3D Printed Zuckerbucks",
    features: [
      "Facebook Marketplace optimization",
      "Gen Z marketing strategies",
      "Proven product templates",
      "Engagement tactics",
    ]
  },
  {
    id: 3,
    title: "3D Blueprint: Ultimate Edition",
    price: "$97",
    popular: true,
    isFree: false,
    description: "The complete roadmap to 3D printing profits",
    features: [
      "Comprehensive business setup",
      "Marketing strategy blueprint",
      "Pricing calculator & templates",
      "Advanced optimization techniques",
      "Private community access",
    ]
  },
  {
    id: 4,
    title: "Enterprise Solutions",
    price: "From $297",
    popular: false,
    isFree: false,
    description: "Tailored solutions for serious entrepreneurs",
    features: [
      "Custom-tailored blueprint",
      "1-month PrintProfit.io membership",
      "Product design services",
      "Full business setup available",
      "Premium support options",
    ]
  }
];

const enterpriseOptions = [
  {
    id: 4,
    title: "Custom Tailored 3D Blueprint",
    price: "$297",
    description: "Personalized guidance for your success",
  },
  {
    id: 5,
    title: "Product Design Bundle",
    price: "$997",
    description: "Full product design service",
  },
  {
    id: 6,
    title: "Complete Business Bundle",
    price: "$1,997",
    description: "Your entire business, built for you",
  }
];

interface BlueprintsSectionProps {
  onCheckout: (id: number) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BlueprintsSection = ({ onCheckout, open, setOpen }: BlueprintsSectionProps) => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
          Choose Your Path to Success
        </h2>
        <p className="text-xl text-gray-600">
          Select the blueprint that matches your goals and investment level. From free guides to full-service solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {blueprints.map((blueprint) => (
          <div key={blueprint.id}>
            {blueprint.id === 4 ? (
              <div className="blueprint-card">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{blueprint.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{blueprint.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">{blueprint.price}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {blueprint.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full">
                      Select Package <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-72">
                    {enterpriseOptions.map((option) => (
                      <DropdownMenuItem 
                        key={option.id}
                        className="flex flex-col items-start py-3 cursor-pointer"
                        onClick={() => onCheckout(option.id)}
                      >
                        <div className="font-semibold">{option.title}</div>
                        <div className="text-sm text-gray-500">{option.price}</div>
                        <div className="text-xs text-gray-400">{option.description}</div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <BlueprintCard 
                {...blueprint} 
                onCheckout={onCheckout}
                open={open}
                setOpen={setOpen}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default BlueprintsSection;
