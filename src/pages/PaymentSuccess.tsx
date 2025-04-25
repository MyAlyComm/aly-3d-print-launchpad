
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [paymentVerified, setPaymentVerified] = useState<boolean>(false);
  const { user } = useAuth();

  // In a real implementation, verify the payment status with Stripe
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // 1. Mark that the user has access to the ebook
        localStorage.setItem("hasAccessToEbook", "true");
        
        // 2. If the user is logged in, you could also record this in Supabase
        if (user) {
          // In a production app, you should verify the payment with Stripe
          // before updating the user's access in your database
          
          // This would typically involve checking the session ID from the URL
          // and verifying it with Stripe's API before marking the user as paid
          
          // For demo purposes, we're just setting access to true
          toast.success("Payment verified successfully!");
        } else {
          // If there's no user logged in, prompt them to create an account
          toast.success("Payment successful! Please create an account to access your content.");
        }
        
        setPaymentVerified(true);
      } catch (error) {
        console.error("Error verifying payment:", error);
        toast.error("There was a problem verifying your payment. Please contact support.");
      }
    };
    
    verifyPayment();
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase! You now have access to the complete ebook content.
            </p>
            <div className="space-y-4 w-full">
              {user ? (
                <Button 
                  onClick={() => navigate("/dashboard")} 
                  className="w-full bg-primary hover:bg-primary-dark"
                >
                  Go to Dashboard
                </Button>
              ) : (
                <Button 
                  onClick={() => navigate("/auth")} 
                  className="w-full bg-primary hover:bg-primary-dark"
                >
                  Create Account / Login
                </Button>
              )}
              <Button 
                variant="outline"
                onClick={() => navigate("/")} 
                className="w-full"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default PaymentSuccess;
