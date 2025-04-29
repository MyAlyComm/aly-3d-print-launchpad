
import Index from "@/pages/Index";
import Auth from "@/pages/Auth";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import PaymentSuccess from "@/pages/PaymentSuccess";
import UserDashboard from "@/pages/UserDashboard";
import Dashboard from "@/pages/Dashboard";

export const mainRoutes = [
  { path: "/", element: <Index /> },
  { path: "/auth", element: <Auth /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> },
  { path: "/payment-success", element: <PaymentSuccess /> },
  { path: "/account", element: <UserDashboard /> },
  { path: "/dashboard", element: <Dashboard /> },
];
