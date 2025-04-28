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
    ],
    image: "/lovable-uploads/80580729-6d4e-4bd0-a66c-dff6d0d890e1.png"
  },
  {
    id: 2,
    title: "3D Blueprint",
    price: "$47",
    popular: false,
    isFree: false,
    description: "The essential roadmap to 3D printing profits",
    features: [
      "Business setup guide",
      "Basic marketing strategy",
      "Product research templates",
      "Optimization techniques",
    ],
    image: "/lovable-uploads/b1236689-73b3-4e92-9e4d-b466a948bcb1.png"
  },
  {
    id: 3,
    title: "3D Blueprint Ultimate Edition",
    price: "$97",
    popular: true,
    isFree: false,
    description: "AI-powered roadmap to 3D printing success",
    features: [
      "Comprehensive business setup",
      "AI-powered marketing strategies",
      "Advanced pricing calculator",
      "Premium templates & tools",
      "Private community access",
    ],
    image: "/lovable-uploads/b1236689-73b3-4e92-9e4d-b466a948bcb1.png"
  },
  {
    id: 4,
    title: "Business in a Box",
    price: "From $4,997",
    popular: false,
    isFree: false,
    description: "Complete 'Done for You' business solution",
    features: [
      "Custom website development",
      "Product design consultancy",
      "Hands-on MyAly team mentoring",
      "Complete business setup",
      "Premium support package",
    ],
    image: "/lovable-uploads/89d9a445-0513-4c2a-84d6-673d5cc8ef79.png"
  }
];

const enterpriseOptions = [
  {
    id: 5,
    title: "Business in a Box - Standard",
    price: "$4,997",
    description: "Custom website + basic mentoring",
  },
  {
    id: 6,
    title: "Business in a Box - Premium",
    price: "$7,997",
    description: "Full setup + extended mentoring",
  },
  {
    id: 7,
    title: "Business in a Box - Elite",
    price: "$9,997",
    description: "Everything + 6 months mentoring",
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
