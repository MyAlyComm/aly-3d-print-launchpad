
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlueprintsSection from "./blueprints/BlueprintsSection";
import TestimonialsSection from "./testimonials/TestimonialsSection";
import CommercialLicenseSection from "./licenses/CommercialLicenseSection";
import { toast } from "@/components/ui/sonner";

const OfferSection = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = (blueprintId: number) => {
    console.log(`Checkout initiated for blueprint ${blueprintId}`);
    
    // Show loading toast
    toast.promise(
      // In a real implementation, this would call a Stripe checkout session
      new Promise(resolve => {
        setTimeout(resolve, 1500); // Simulate API call
      }),
      {
        loading: "Processing payment...",
        success: () => {
          // Set flag in localStorage that user has purchased
          localStorage.setItem("hasAccessToEbook", "true");
          // Navigate to success page
          navigate("/payment-success");
          return "Payment successful! Redirecting...";
        },
        error: "Payment processing failed. Please try again.",
      }
    );
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
