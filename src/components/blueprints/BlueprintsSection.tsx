
import BlueprintCard from "./BlueprintCard";

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
    ]
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
    title: "Custom Tailored 3D Blueprint",
    price: "$297",
    popular: false,
    isFree: false,
    description: "Personalized guidance for your success",
    features: [
      "Custom-tailored blueprint",
      "1-month PrintProfit.io membership",
      "Personalized strategy session",
      "Priority support access",
      "Custom product recommendations",
    ]
  },
  {
    id: 5,
    title: "Product Design Bundle",
    price: "$997",
    popular: false,
    isFree: false,
    description: "Full product design service",
    features: [
      "Complete product design",
      "Market research & validation",
      "Production-ready files",
      "Commercial license included",
      "Unlimited revisions",
    ]
  },
  {
    id: 6,
    title: "Complete Business Bundle",
    price: "$1,997",
    popular: false,
    isFree: false,
    description: "Your entire business, built for you",
    features: [
      "Custom branding package",
      "Professional website",
      "Social media strategy",
      "Product selection & design",
      "Launch plan & timeline",
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
          Choose Your Path to Success
        </h2>
        <p className="text-xl text-gray-600">
          Select the blueprint that matches your goals and investment level. From free guides to full-service solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
