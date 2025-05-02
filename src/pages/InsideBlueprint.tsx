
import { useEffect } from 'react';
import { BackToTop } from "@/components/ui/back-to-top";
import { HeroStory } from "@/components/inside-blueprint/HeroStory";
import { ValueProposition } from "@/components/inside-blueprint/ValueProposition";
import { DashboardPreview } from "@/components/inside-blueprint/DashboardPreview";
import { JourneyTimeline } from "@/components/inside-blueprint/JourneyTimeline";
import { BlueprintPreview } from "@/components/inside-blueprint/BlueprintPreview";
import { BlueprintTestimonials } from "@/components/inside-blueprint/BlueprintTestimonials";
import { CallToAction } from "@/components/inside-blueprint/CallToAction";
import { SampleChapterPreview } from "@/components/inside-blueprint/SampleChapterPreview";
import { ChapterPreviews } from "@/components/inside-blueprint/ChapterPreviews";
import { ChapterCarousel } from "@/components/inside-blueprint/ChapterCarousel";
import FreeResourceCards from "@/components/resources/FreeResourceCards";
import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Only lazy-load this component as it's less critical
const FAQPageCTA = lazy(() => 
  import("@/components/dashboard/FAQPageCTA")
    .catch(err => {
      console.error("Failed to load FAQPageCTA:", err);
      return { default: () => null };
    })
);

const InsideBlueprint = () => {
  useEffect(() => {
    // SEO Optimizations
    document.title = "Inside The Blueprint | Aly's Complete 3D Printing Business Guide";
    
    const metaTags = [
      { name: 'description', content: 'Discover how Aly built a thriving 3D printing business from scratch and learn the exact blueprint to replicate her success. Get access to proven systems and strategies.' },
      { name: 'keywords', content: '3D printing business, business blueprint, 3D printing guide, Aly 3D prints, business systems, 3D printing success' },
      { property: 'og:title', content: 'Inside The Blueprint | Aly\'s 3D Printing Success Story' },
      { property: 'og:description', content: 'Learn the exact systems and strategies to build a profitable 3D printing business with our comprehensive blueprint.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/lovable-uploads/511b02f5-662b-4442-ada4-7d79753c2d2d.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Inside The Blueprint | Aly\'s 3D Printing Success Story' },
      { name: 'twitter:description', content: 'Learn the exact systems and strategies to build a profitable 3D printing business with our comprehensive blueprint.' },
      { name: 'twitter:image', content: '/lovable-uploads/511b02f5-662b-4442-ada4-7d79753c2d2d.jpg' }
    ];

    metaTags.forEach(tag => {
      let meta = document.createElement('meta');
      Object.keys(tag).forEach(key => {
        meta.setAttribute(key, tag[key]);
      });
      document.head.appendChild(meta);
    });

    return () => {
      // Cleanup meta tags on unmount
      metaTags.forEach(tag => {
        const selector = Object.keys(tag).map(key => `meta[${key}="${tag[key]}"]`).join(',');
        document.querySelector(selector)?.remove();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/10 via-white to-white">
      <BackToTop />
      <main className="space-y-1">
        <HeroStory />
        <ValueProposition />
        <FreeResourceCards />
        <DashboardPreview />
        <BlueprintPreview />
        <ChapterCarousel />
        <JourneyTimeline />
        <BlueprintTestimonials />
        <CallToAction />
        <SampleChapterPreview />
        <ChapterPreviews />
        
        <Suspense fallback={<Skeleton className="h-16 w-full" />}>
          <FAQPageCTA />
        </Suspense>
      </main>
    </div>
  );
};

export default InsideBlueprint;
