
import { BackToTop } from "@/components/ui/back-to-top";
import { ChapterHighlight } from "@/components/inside-blueprint/ChapterHighlight";
import { HeroStory } from "@/components/inside-blueprint/HeroStory";
import { JourneyTimeline } from "@/components/inside-blueprint/JourneyTimeline";
import { ValueProposition } from "@/components/inside-blueprint/ValueProposition";
import { CallToAction } from "@/components/inside-blueprint/CallToAction";
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
    <div className="min-h-screen">
      <BackToTop />
      <main>
        <HeroStory />
        <ValueProposition />
        <ChapterHighlight />
        <JourneyTimeline />
        <CallToAction />
      </main>
    </div>
  );
};

export default InsideBlueprint;
