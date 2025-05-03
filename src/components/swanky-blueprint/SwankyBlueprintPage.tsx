
import { SwankyHero } from "./SwankyHero";
import { SwankyValueProps } from "./SwankyValueProps";
import { SwankyGrowth } from "./SwankyGrowth";
import { SwankyTestimonials } from "./SwankyTestimonials";
import { SwankyCallToAction } from "./SwankyCallToAction";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";

const SwankyBlueprintPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        <SwankyHero />
        <SwankyValueProps />
        <SwankyGrowth />
        <SwankyTestimonials />
        <SwankyCallToAction />
      </main>
      <FooterSection />
    </div>
  );
};

export default SwankyBlueprintPage;
