
import { Button } from "@/components/ui/button";
import LeadMagnetDialog from "@/components/FreeGuideDialog";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface NavBarActionsProps {
  handleDashboardClick: () => void;
  className?: string;
}

export const NavBarActions = ({ 
  handleDashboardClick, 
  className = "" 
}: NavBarActionsProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const handleDashboardButtonClick = () => {
    if (user) {
      // User is authenticated, go to dashboard
      handleDashboardClick();
    } else {
      // User is not authenticated, go to auth page
      navigate('/auth');
    }
  };
  
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <LeadMagnetDialog />
      <Button 
        onClick={handleDashboardButtonClick}
        variant="outline"
      >
        Dashboard
      </Button>
    </div>
  );
};
