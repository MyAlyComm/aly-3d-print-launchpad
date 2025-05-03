
import { useState, useEffect } from 'react';
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DetailedStorySection from "@/components/DetailedStorySection";
import OfferSection from "@/components/OfferSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import ChaptersCarousel from "@/components/ChaptersCarousel";
import FreeResourceCards from "@/components/resources/FreeResourceCards";
import { Skeleton } from "@/components/ui/skeleton";
import JourneySection from "@/components/JourneySection";
import PersonalMessage from "@/components/PersonalMessage";
import InsideBlueprintPage from "@/components/inside-blueprint/InsideBlueprintPage";
import { useParams } from "react-router-dom";

// These components can still be lazy-loaded as they're not critical
import { lazy, Suspense } from 'react';
const Analytics = lazy(() => import("@/components/Analytics"));
const ZapierIntegration = lazy(() => import("@/components/ZapierIntegration"));

const LoadingFallback = () => (
  <div className="w-full h-48">
    <Skeleton className="w-full h-32" />
  </div>
);

const Index = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { viewType } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Render Inside Blueprint view if specified in URL parameter
  if (viewType === "inside") {
    return <InsideBlueprintPage />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Critical path components loaded immediately */}
      <NavBar />
      <HeroSection />

      {/* Main content sections */}
      <main>
        <section className="py-16 bg-gradient-to-b from-white to-primary/5">
          <div className="container mx-auto px-4">
            <AboutSection />
            <ChaptersCarousel />
            <FreeResourceCards />
            <JourneySection />
            <PersonalMessage />
          </div>
        </section>
        
        <OfferSection />
        <HowItWorksSection />
        <DetailedStorySection />
        <TrustSection />
        <FAQSection />
        <FooterSection />
      </main>

      {/* Analytics and integrations loaded last */}
      <Suspense fallback={null}>
        <Analytics />
        <ZapierIntegration />
      </Suspense>
    </div>
  );
};

export default Index;
