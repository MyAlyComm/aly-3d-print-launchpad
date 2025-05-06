
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
import ProtectedRoute from "@/components/ProtectedRoute";

export const ebookRoutes = [
  {
    path: "/dashboard",
    element: <ProtectedRoute><EbooksHub /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/new-chapter",
    element: <ProtectedRoute><NewEbookChapter /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/resources",
    element: <ProtectedRoute><Resources /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/chapter-1",
    element: <ProtectedRoute><Chapter1 /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/chapter-2",
    element: <ProtectedRoute><Chapter2 /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/chapter-3",
    element: <ProtectedRoute><Chapter3 /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/chapter-4",
    element: <ProtectedRoute><Chapter4 /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/chapter-5",
    element: <ProtectedRoute><Chapter5 /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/chapter-6",
    element: <ProtectedRoute><Chapter6 /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/chapter-7",
    element: <ProtectedRoute><Chapter7 /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/chapter-8",
    element: <ProtectedRoute><Chapter8 /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/chapter-9",
    element: <ProtectedRoute><Chapter9 /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/chapter-10",
    element: <ProtectedRoute><Chapter10 /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/chapter-11",
    element: <ProtectedRoute><Chapter11 /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-faq",
    element: <ProtectedRoute><FAQDashboard /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-mini",
    element: <ProtectedRoute><MiniBlueprint /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/submissions",
    element: <ProtectedRoute><MySubmissions /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/product-design",
    element: <ProtectedRoute><ProductDesignEngine /></ProtectedRoute>
  },
  {
    path: "/dashboard/3d-blueprint/filament-guide",
    element: <ProtectedRoute><FilamentGuide /></ProtectedRoute>
  },
];
