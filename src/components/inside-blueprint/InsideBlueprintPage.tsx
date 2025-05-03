
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import { BlueprintPreview } from "./BlueprintPreview";
import { ChapterCarousel } from "./ChapterCarousel";
import { CallToAction } from "./CallToAction";
import { BlueprintTestimonials } from "./BlueprintTestimonials";
import { HeroStory } from "./HeroStory";
import { JourneyTimeline } from "./JourneyTimeline";
import { ChapterPreviews } from "./ChapterPreviews";
import { ValueProposition } from "./ValueProposition";

const InsideBlueprintPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        <HeroStory />
        <BlueprintPreview />
        <ChapterCarousel />
        <JourneyTimeline />
        <ValueProposition />
        <ChapterPreviews />
        <BlueprintTestimonials />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
};

export default InsideBlueprintPage;
