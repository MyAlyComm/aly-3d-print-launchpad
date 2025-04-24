
import BlueprintCard from "./BlueprintCard";

const blueprints = [
  {
    id: 1,
    title: "Free 3D Printing Quick-Start Guide",
    price: "FREE",
    popular: false,
    isFree: true,
    description: "Your first step to 3D printing success",
    features: [
      "Essential printer settings for beginners",
      "5 profitable product ideas",
      "Basic Etsy setup tutorial",
      "Material selection guide",
    ]
  },
  {
    id: 2,
    title: "Beginner's STL Guide",
    price: "$27",
    popular: false,
    isFree: false,
    description: "Start your 3D printing journey with confidence",
    features: [
      "10 premium STL files",
      "Step-by-step setup instructions",
      "Print optimization techniques",
      "Basic marketing strategies",
    ]
  },
  {
    id: 3,
    title: "Ultimate 3D Printing eBook",
    price: "$47",
    popular: true,
    isFree: false,
    description: "The complete roadmap to 3D printing profits",
    features: [
      "Comprehensive business setup guide",
      "Marketing strategy blueprint",
      "Pricing calculator & templates",
      "Advanced optimization techniques",
      "Access to private community",
    ]
  },
  {
    id: 4,
    title: "Pro STL Bundle",
    price: "$97",
    popular: false,
    isFree: false,
    description: "Premium designs ready to print and sell",
    features: [
      "30 trending premium STL files",
      "Commercial license included",
      "Monthly new design updates",
      "Print settings for each model",
      "Product photography guide",
    ]
  },
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
          What's Inside the 3D Printing Blueprint?
        </h2>
        <p className="text-xl text-gray-600">
          Choose the blueprint that fits your goals and budget. Each resource is designed to help you start and grow your 3D printing business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {blueprints.map((blueprint) => (
          <BlueprintCard 
            key={blueprint.id} 
            {...blueprint} 
            onCheckout={onCheckout}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </>
  );
};

export default BlueprintsSection;
