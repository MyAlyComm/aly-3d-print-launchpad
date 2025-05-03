
import { Button } from "@/components/ui/button";
import LeadMagnetDialog from "@/components/FreeGuideDialog";
import { useNavigate } from "react-router-dom";

interface NavBarActionsProps {
  handleDashboardClick: () => void;
  className?: string;
}

export const NavBarActions = ({ 
  handleDashboardClick, 
  className = "" 
}: NavBarActionsProps) => {
  const navigate = useNavigate();
  
  // Always go directly to dashboard without authentication check
  const handleDashboardButtonClick = () => {
    handleDashboardClick();
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
