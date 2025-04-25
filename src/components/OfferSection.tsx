
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlueprintsSection from "./blueprints/BlueprintsSection";
import TestimonialsSection from "./testimonials/TestimonialsSection";
import CommercialLicenseSection from "./licenses/CommercialLicenseSection";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const OfferSection = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async (blueprintId: number) => {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { blueprintId }
      });

      if (error) throw error;

      if (data?.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      toast.error('Failed to initiate checkout. Please try again.');
    }
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
