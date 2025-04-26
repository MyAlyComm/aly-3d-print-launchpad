
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const { user } = useAuth();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasShownToast, setHasShownToast] = useState(false);
  
  useEffect(() => {
    // Check if user has purchased access
    const checkAccess = async () => {
      if (!user) {
        setHasAccess(false);
        setIsLoading(false);
        return;
      }

      try {
        // In a real implementation, you would check the database
        // Here we're using localStorage as a simple demonstration
        const hasEbookAccess = localStorage.getItem("hasAccessToEbook") === "true";
        setHasAccess(hasEbookAccess);
      } catch (error) {
        console.error("Error checking access:", error);
        setHasAccess(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAccess();
  }, [user]);

  // Only show toasts once per component mount
  useEffect(() => {
    if (!isLoading && !hasShownToast) {
      if (!user) {
        toast.error("You need to be logged in to view this content");
        setHasShownToast(true);
      } else if (!hasAccess) {
        toast.error("You need to purchase access to view this content");
        setHasShownToast(true);
      }
    }
  }, [user, hasAccess, isLoading, hasShownToast]);

  if (isLoading) {
    // You could add a loading spinner here
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (!hasAccess) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
