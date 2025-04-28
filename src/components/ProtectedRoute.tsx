
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [hasShownToast, setHasShownToast] = useState(false);
  
  useEffect(() => {
    // Check if user has purchased access
    const checkAccess = async () => {
      if (isLoading) return;
      
      if (!user) {
        setHasAccess(false);
        setCheckingAccess(false);
        return;
      }

      try {
        // In a real implementation, you would check the database
        // Here we're using localStorage as a simple demonstration
        const hasEbookAccess = localStorage.getItem("hasAccessToEbook") === "true";
        
        // If user has any user_metadata.has_access, use that instead
        const userHasAccess = user.user_metadata?.has_access === true;
        
        setHasAccess(hasEbookAccess || userHasAccess);
      } catch (error) {
        console.error("Error checking access:", error);
        setHasAccess(false);
      } finally {
        setCheckingAccess(false);
      }
    };

    checkAccess();
  }, [user, isLoading]);

  // Only show toasts once per component mount
  useEffect(() => {
    if (!checkingAccess && !hasShownToast) {
      if (!user) {
        toast.error("Please sign in to access this content");
        setHasShownToast(true);
      } else if (!hasAccess) {
        toast.error("You need to purchase access to view this content");
        setHasShownToast(true);
      }
    }
  }, [user, hasAccess, checkingAccess, hasShownToast]);

  if (isLoading || checkingAccess) {
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
