
import Dashboard from "@/pages/Dashboard";
import EbooksHub from "@/pages/EbooksHub";
import NewEbookChapter from "@/pages/NewEbookChapter";
import Resources from "@/pages/Resources";
import Chapter1 from "@/pages/Chapter1";
import Chapter2 from "@/pages/Chapter2";
import Chapter3 from "@/pages/Chapter3";
import Chapter4 from "@/pages/Chapter4";
import Chapter5 from "@/pages/Chapter5";
import Chapter6 from "@/pages/Chapter6";
import Chapter7 from "@/pages/Chapter7";
import Chapter8 from "@/pages/Chapter8";
import Chapter9 from "@/pages/Chapter9";
import Chapter10 from "@/pages/Chapter10";
import Chapter11 from "@/pages/Chapter11";
import FAQDashboard from "@/pages/FAQDashboard";
import MiniBlueprint from "@/pages/MiniBlueprint";
import MySubmissions from "@/pages/MySubmissions";
import ProductDesignEngine from "@/pages/ProductDesignEngine";
import FilamentGuide from "@/pages/FilamentGuide";

export const ebookRoutes = [
  { path: "/dashboard", element: <EbooksHub /> },
  { path: "/dashboard/3d-blueprint", element: <Dashboard /> },
  { path: "/dashboard/3d-blueprint/new-chapter", element: <NewEbookChapter /> },
  { path: "/dashboard/3d-blueprint/resources", element: <Resources /> },
  { path: "/dashboard/3d-blueprint/chapter-1", element: <Chapter1 /> },
  { path: "/dashboard/3d-blueprint/chapter-2", element: <Chapter2 /> },
  { path: "/dashboard/3d-blueprint/chapter-3", element: <Chapter3 /> },
  { path: "/dashboard/3d-blueprint/chapter-4", element: <Chapter4 /> },
  { path: "/dashboard/3d-blueprint/chapter-5", element: <Chapter5 /> },
  { path: "/dashboard/3d-blueprint/chapter-6", element: <Chapter6 /> },
  { path: "/dashboard/3d-blueprint/chapter-7", element: <Chapter7 /> },
  { path: "/dashboard/3d-blueprint/chapter-8", element: <Chapter8 /> },
  { path: "/dashboard/3d-blueprint/chapter-9", element: <Chapter9 /> },
  { path: "/dashboard/3d-blueprint/chapter-10", element: <Chapter10 /> },
  { path: "/dashboard/3d-blueprint/chapter-11", element: <Chapter11 /> },
  { path: "/dashboard/3d-faq", element: <FAQDashboard /> },
  { path: "/dashboard/3d-mini", element: <MiniBlueprint /> },
  { path: "/dashboard/3d-blueprint/submissions", element: <MySubmissions /> },
  { path: "/dashboard/3d-blueprint/product-design", element: <ProductDesignEngine /> },
  { path: "/dashboard/3d-blueprint/filament-guide", element: <FilamentGuide /> }
];
