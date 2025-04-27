
import { lazy, Suspense } from 'react';
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { BackToTop } from "@/components/ui/back-to-top";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load non-critical components
const DetailedStorySection = lazy(() => import("@/components/DetailedStorySection"));
const OfferSection = lazy(() => import("@/components/OfferSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const TrustSection = lazy(() => import("@/components/TrustSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));
const Analytics = lazy(() => import("@/components/Analytics"));
const ZapierIntegration = lazy(() => import("@/components/ZapierIntegration"));
const PersonalMessage = lazy(() => import("@/components/PersonalMessage"));
const JourneySection = lazy(() => import("@/components/JourneySection"));
const ChaptersCarousel = lazy(() => import("@/components/ChaptersCarousel"));
const FreeResourceCards = lazy(() => import("@/components/resources/FreeResourceCards"));

const LoadingFallback = () => (
  <div className="w-full h-48 flex items-center justify-center">
    <Skeleton className="w-full h-32" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Critical components loaded immediately */}
      <NavBar />
      <HeroSection />
      <AboutSection />

      {/* Lazy loaded components */}
      <Suspense fallback={<LoadingFallback />}>
        <main>
          <section className="py-16 bg-gradient-to-b from-white to-primary/5">
            <div className="container mx-auto px-4 space-y-16">
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
      </Suspense>

      {/* Analytics and integrations loaded last */}
      <Suspense fallback={null}>
        <Analytics />
        <ZapierIntegration />
        <BackToTop />
      </Suspense>
    </div>
  );
};

export default Index;
