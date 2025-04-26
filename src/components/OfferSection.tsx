
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestimonialsSection from "./testimonials/TestimonialsSection";
import CommercialLicenseSection from "./licenses/CommercialLicenseSection";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import PaymentPlans from "./blueprints/PaymentPlans";

const OfferSection = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async (blueprintId: number) => {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { 
          blueprintId,
          origin: window.location.origin
        }
      });

      if (error) throw error;

      if (data?.url) {
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Choose Your Blueprint Package
          </h2>
          <p className="text-xl text-gray-600">
            Select the package that best fits your goals and start your journey to 3D printing success.
          </p>
        </div>
        
        <PaymentPlans 
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
