
import { useState } from "react";
import BlueprintsSection from "./blueprints/BlueprintsSection";
import TestimonialsSection from "./testimonials/TestimonialsSection";
import CommercialLicenseSection from "./licenses/CommercialLicenseSection";

const OfferSection = () => {
  const [open, setOpen] = useState(false);

  const handleCheckout = (blueprintId: number) => {
    console.log(`Checkout initiated for blueprint ${blueprintId}`);
    alert(`Stripe checkout would be initiated here for blueprint ${blueprintId}`);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <BlueprintsSection 
          onCheckout={handleCheckout}
          open={open}
          setOpen={setOpen}
        />
        <TestimonialsSection />
        <CommercialLicenseSection open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default OfferSection;
