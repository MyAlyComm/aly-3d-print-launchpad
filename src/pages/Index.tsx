
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OfferSection from "@/components/OfferSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import Analytics from "@/components/Analytics";
import ZapierIntegration from "@/components/ZapierIntegration";
import PersonalMessage from "@/components/PersonalMessage";
import JourneySection from "@/components/JourneySection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Aly's 3D Printing Blueprint | Launch Your 3D Printing Business";
    
    // Set meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Get instant access to guides, STL files, and strategies to start profiting from 3D printing, even with a $500 budget.';
    document.head.appendChild(metaDescription);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Analytics and Integration Components */}
      <Analytics />
      <ZapierIntegration />
      
      {/* Main Landing Page Content */}
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <OfferSection />
        <HowItWorksSection />
        <TrustSection />
        <FAQSection />
        <section className="py-16">
          <div className="container mx-auto px-4 space-y-8">
            <PersonalMessage />
            <JourneySection />
          </div>
        </section>
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
