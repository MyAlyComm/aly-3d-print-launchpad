
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

// Modified to always allow access without authentication checks
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Simply render the children without any authentication checks
  console.log("Rendering protected route content - auth bypass active");
  return <>{children}</>;
};

export default ProtectedRoute;
