
import { BackToTop } from "@/components/ui/back-to-top";
import { useEffect } from "react";
import { SwankyHero } from "@/components/swanky-blueprint/SwankyHero";
import { SwankyValueProps } from "@/components/swanky-blueprint/SwankyValueProps";
import { SwankyGrowth } from "@/components/swanky-blueprint/SwankyGrowth";
import { SwankyTestimonials } from "@/components/swanky-blueprint/SwankyTestimonials";
import { SwankyCallToAction } from "@/components/swanky-blueprint/SwankyCallToAction";

const SwankyViewBlueprint = () => {
  useEffect(() => {
    document.title = "Scale Your Etsy Shop | SwankyView's Blueprint to Success";
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Learn how to scale your 3D printing Etsy shop with our proven blueprint. Perfect for organization and home decor product sellers.';
    document.head.appendChild(metaDescription);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/10 via-white to-white">
      <BackToTop />
      <main className="space-y-1">
        <SwankyHero />
        <SwankyValueProps />
        <SwankyGrowth />
        <SwankyTestimonials />
        <SwankyCallToAction />
      </main>
    </div>
  );
};

export default SwankyViewBlueprint;
