
import AIHub from "@/pages/AIHub";
import ProductIdeaGenerator from "@/pages/ai-hub/ProductIdeaGenerator";
import BackgroundRemover from "@/pages/ai-hub/BackgroundRemover";
import ProductDescriptionGenerator from "@/pages/ai-hub/ProductDescriptionGenerator";
import ProductListing from "@/pages/ai-hub/ProductListing";
import MarketValidator from "@/pages/ai-hub/product-development/MarketValidator";
import SpecBuilder from "@/pages/ai-hub/product-development/SpecBuilder";
import ProtectedRoute from "@/components/ProtectedRoute";

export const aiHubRoutes = [
  {
    path: "/ai-hub",
    element: <ProtectedRoute><AIHub /></ProtectedRoute>
  },
  {
    path: "/ai-hub/product-development/idea-generator",
    element: <ProtectedRoute><ProductIdeaGenerator /></ProtectedRoute>
  },
  {
    path: "/ai-hub/product-development/market-validator",
    element: <ProtectedRoute><MarketValidator /></ProtectedRoute>
  },
  {
    path: "/ai-hub/product-development/spec-builder",
    element: <ProtectedRoute><SpecBuilder /></ProtectedRoute>
  },
  {
    path: "/ai-hub/visual-marketing/background-remover",
    element: <ProtectedRoute><BackgroundRemover /></ProtectedRoute>
  },
  {
    path: "/ai-hub/listing-creator/description",
    element: <ProtectedRoute><ProductDescriptionGenerator /></ProtectedRoute>
  },
  {
    path: "/ai-hub/product-listing",
    element: <ProtectedRoute><ProductListing /></ProtectedRoute>
  },
];
