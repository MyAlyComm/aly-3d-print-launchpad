
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
    <div className="min-h-screen bg-gradient-to-b from-primary-light/10 via-white to-white">
      <BackToTop />
      <main className="space-y-1">
        <div className="absolute inset-0 gradient-blur pointer-events-none" />
        <HeroStory />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <ValueProposition />
        </div>
        <ChapterHighlight />
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
          <JourneyTimeline />
        </div>
        <CallToAction />
      </main>
    </div>
  );
};

export default InsideBlueprint;
