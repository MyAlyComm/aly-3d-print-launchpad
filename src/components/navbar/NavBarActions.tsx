
import { Button } from "@/components/ui/button";
import LeadMagnetDialog from "@/components/FreeGuideDialog";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface NavBarActionsProps {
  className?: string;
}

export const NavBarActions = ({ className = "" }: NavBarActionsProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const handleDashboardClick = () => {
    navigate(user ? "/dashboard" : "/auth");
  };
  
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <LeadMagnetDialog />
      <Button 
        onClick={handleDashboardClick}
        variant="outline"
      >
        {user ? "Dashboard" : "Login"}
      </Button>
    </div>
  );
};
