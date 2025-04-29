
import AIHub from "@/pages/AIHub";
import ProductIdeaGenerator from "@/pages/ai-hub/ProductIdeaGenerator";
import BackgroundRemover from "@/pages/ai-hub/BackgroundRemover";
import ProductDescriptionGenerator from "@/pages/ai-hub/ProductDescriptionGenerator";
import MarketValidator from "@/pages/ai-hub/product-development/MarketValidator";
import SpecBuilder from "@/pages/ai-hub/product-development/SpecBuilder";
import SocialMediaHub from "@/pages/ai-hub/social-media/SocialMediaHub";

export const aiHubRoutes = [
  { path: "/ai-hub", element: <AIHub /> },
  { path: "/ai-hub/product-development/idea-generator", element: <ProductIdeaGenerator /> },
  { path: "/ai-hub/product-development/market-validator", element: <MarketValidator /> },
  { path: "/ai-hub/product-development/spec-builder", element: <SpecBuilder /> },
  { path: "/ai-hub/visual-marketing/background-remover", element: <BackgroundRemover /> },
  { path: "/ai-hub/listing-creator/description", element: <ProductDescriptionGenerator /> },
  // Social media routes - maintain the root path and add specific tool paths
  { path: "/ai-hub/social-media", element: <SocialMediaHub /> },
  { path: "/ai-hub/social-media/content-calendar", element: <SocialMediaHub /> },
  { path: "/ai-hub/social-media/post-creator", element: <SocialMediaHub /> },
  { path: "/ai-hub/social-media/hashtag-research", element: <SocialMediaHub /> },
  { path: "/ai-hub/social-media/engagement-helper", element: <SocialMediaHub /> }
];
