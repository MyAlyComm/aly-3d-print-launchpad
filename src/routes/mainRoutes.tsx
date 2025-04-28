
import Index from "@/pages/Index";
import Auth from "@/pages/Auth";
import NotFound from "@/pages/NotFound";
import PaymentSuccess from "@/pages/PaymentSuccess";
import UserDashboard from "@/pages/UserDashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

export const mainRoutes = [
  { path: "/", element: <Index /> },
  { path: "/auth", element: <Auth /> },
  { path: "*", element: <NotFound /> },
  { path: "/payment-success", element: <PaymentSuccess /> },
  { 
    path: "/account", 
    element: <ProtectedRoute><UserDashboard /></ProtectedRoute> 
  },
];
