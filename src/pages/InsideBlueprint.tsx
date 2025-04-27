
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
import { useEffect } from "react";

const InsideBlueprint = () => {
  useEffect(() => {
    document.title = "Inside The Blueprint | Aly's 3D Printing Success Story";
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Discover how Aly built a thriving 3D printing business from scratch and learn the exact blueprint to replicate her success.';
    document.head.appendChild(metaDescription);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/10 via-white to-white">
      <BackToTop />
      <main className="space-y-1">
        <HeroStory />
        <ValueProposition />
        <DashboardPreview />
        <BlueprintPreview />
        <ChapterCarousel />
        <JourneyTimeline />
        <BlueprintTestimonials />
        <CallToAction />
        <SampleChapterPreview />
        <ChapterPreviews />
      </main>
    </div>
  );
};

export default InsideBlueprint;
