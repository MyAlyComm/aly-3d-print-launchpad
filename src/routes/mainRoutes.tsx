
import { RouteObject } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Auth from "@/pages/Auth";
import NotFound from "@/pages/NotFound";
import InsideBlueprint from "@/pages/InsideBlueprint";
import PaymentSuccess from "@/pages/PaymentSuccess";
import FilamentGuide from "@/pages/FilamentGuide";
import ProductDesignEngine from "@/pages/ProductDesignEngine";
import UserDashboard from "@/pages/UserDashboard";

export const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/inside-blueprint",
    element: <InsideBlueprint />,
  },
  {
    path: "/payment-success",
    element: <PaymentSuccess />,
  },
  {
    path: "/account",
    element: <UserDashboard />,
  },
  {
    path: "/filament-guide",
    element: <FilamentGuide />,
  },
  {
    path: "/product-design",
    element: <ProductDesignEngine />,
  },
  {
    path: "/not-found",
    element: <NotFound />,
  },
];
