
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  const [hasShownToast, setHasShownToast] = useState(false);
  
  useEffect(() => {
    // Show toast only once per component mount and when authentication check completes
    if (!isLoading && !user && !hasShownToast) {
      toast.error("Please sign in to access this content", {
        description: "You need to be logged in to view this page",
        duration: 4000,
      });
      setHasShownToast(true);
    }
  }, [user, isLoading, hasShownToast]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    // Redirect to auth page and store the current location
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
