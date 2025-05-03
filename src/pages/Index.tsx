
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
import TrustedCompanies from "@/components/TrustedCompanies";

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
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    
    // Set up page loading status
    try {
      window.addEventListener('load', () => {
        setIsLoading(false);
      });
      
      // If page is already loaded, update state immediately
      if (document.readyState === 'complete') {
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error during page load:', error);
      setLoadError('Failed to initialize page components');
      setIsLoading(false);
    }
    
    return () => clearTimeout(timer);
  }, []);

  // If there's a loading error, show simple error message
  if (loadError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Page</h2>
        <p className="text-gray-700 mb-4">{loadError}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          Retry
        </button>
      </div>
    );
  }

  // Show loading state if needed
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading homepage...</p>
      </div>
    );
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
        
        <TrustedCompanies />
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
