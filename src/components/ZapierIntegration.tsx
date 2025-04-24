
import { useEffect } from "react";

// This component handles the Zapier integration
const ZapierIntegration = () => {
  useEffect(() => {
    // Check URL parameters for Stan Store's referral
    const urlParams = new URLSearchParams(window.location.search);
    const fromStanStore = urlParams.get("source") === "stanstore";
    
    if (fromStanStore) {
      // Log the referral from Stan Store
      console.log("User came from Stan Store's DM automation");
      
      // In a real implementation, you might want to track this in analytics
      // or set a cookie/localStorage item
      localStorage.setItem("referralSource", "stanstore");
    }
  }, []);
  
  return null; // This component doesn't render anything visible
};

export default ZapierIntegration;
