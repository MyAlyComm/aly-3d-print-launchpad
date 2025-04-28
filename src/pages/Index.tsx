
import { lazy, Suspense } from 'react';
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load all non-critical components
const AboutSection = lazy(() => import("@/components/AboutSection"));
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
  <div className="w-full h-48">
    <Skeleton className="w-full h-32" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Critical path components loaded immediately */}
      <NavBar />
      <HeroSection />

      {/* Lazy loaded sections with loading fallback */}
      <Suspense fallback={<LoadingFallback />}>
        <main>
          <section className="py-16 bg-gradient-to-b from-white to-primary/5">
            <div className="container mx-auto px-4">
              <Suspense fallback={<LoadingFallback />}>
                <AboutSection />
              </Suspense>
              <Suspense fallback={<LoadingFallback />}>
                <ChaptersCarousel />
              </Suspense>
              <Suspense fallback={<LoadingFallback />}>
                <FreeResourceCards />
              </Suspense>
              <Suspense fallback={<LoadingFallback />}>
                <JourneySection />
              </Suspense>
              <Suspense fallback={<LoadingFallback />}>
                <PersonalMessage />
              </Suspense>
            </div>
          </section>
          <Suspense fallback={<LoadingFallback />}>
            <OfferSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <HowItWorksSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <DetailedStorySection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <TrustSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <FAQSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <FooterSection />
          </Suspense>
        </main>
      </Suspense>

      {/* Analytics and integrations loaded last */}
      <Suspense fallback={null}>
        <Analytics />
        <ZapierIntegration />
      </Suspense>
    </div>
  );
};

export default Index;
