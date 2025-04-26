
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const plans = [
  {
    id: 3,
    title: "3D Blueprint: Ultimate Edition",
    price: "$97",
    image: "/lovable-uploads/80580729-6d4e-4bd0-a66c-dff6d0d890e1.png",
    features: [
      "Step-by-step product research guide",
      "Facebook Marketplace blueprint",
      "Product listing templates",
      "Top 50 best-selling products guide"
    ]
  },
  {
    id: 4,
    title: "Custom Tailored 3D Blueprint",
    price: "$297",
    image: "/lovable-uploads/d1a2c586-5f86-4edf-865e-d27b19a65ec9.png",
    features: [
      "Everything in Ultimate Edition",
      "1-on-1 product validation call",
      "Custom market research report",
      "3 months of email support"
    ]
  },
  {
    id: 5,
    title: "Product Design Bundle",
    price: "$997",
    image: "/lovable-uploads/72adc6d5-64f9-4a52-b3cd-09e2ef9b3882.png",
    features: [
      "Everything in Custom Blueprint",
      "Exclusive product designs",
      "6 months of email support",
      "Monthly group coaching calls"
    ]
  },
  {
    id: 6,
    title: "Complete Business Bundle",
    price: "$1,997",
    image: "/lovable-uploads/f2d611cd-8fd6-4e92-bc7d-844fcf09334f.jpg",
    features: [
      "Everything in Product Bundle",
      "1 year of 1-on-1 mentoring",
      "Custom business strategy",
      "Weekly accountability calls"
    ]
  }
];

interface BlueprintsSectionProps {
  onCheckout: (blueprintId: number) => Promise<void>;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const BlueprintsSection = ({ onCheckout, open, setOpen }: BlueprintsSectionProps) => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
          Choose Your Blueprint Package
        </h2>
        <p className="text-xl text-gray-600">
          Select the package that best fits your goals and start your journey to 3D printing success.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={plan.image} 
                alt={plan.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <div className="text-3xl font-bold text-primary mb-4">{plan.price}</div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onCheckout(plan.id)}
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default BlueprintsSection;
