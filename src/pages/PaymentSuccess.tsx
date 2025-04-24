
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [paymentVerified, setPaymentVerified] = useState<boolean>(false);

  // In a real implementation, verify the payment status with Stripe
  // This is a simplified version just for demonstration
  useEffect(() => {
    const verifyPayment = () => {
      // Check if there's a payment session in localStorage
      const hasPayment = localStorage.getItem("hasAccessToEbook");
      
      if (hasPayment === "true") {
        setPaymentVerified(true);
        toast.success("Payment verified successfully!");
      } else {
        // For demo purposes, we'll set the payment as successful
        // In a real implementation, you'd verify with Stripe
        localStorage.setItem("hasAccessToEbook", "true");
        setPaymentVerified(true);
        toast.success("Payment verified successfully!");
      }
    };
    
    verifyPayment();
  }, []);

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
              <Button 
                onClick={() => navigate("/dashboard")} 
                className="w-full bg-primary hover:bg-primary-dark"
              >
                Go to Dashboard
              </Button>
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
