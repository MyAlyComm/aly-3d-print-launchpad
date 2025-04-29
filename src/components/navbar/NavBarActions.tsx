
import { Button } from "@/components/ui/button";
import LeadMagnetDialog from "@/components/FreeGuideDialog";
import { useAuth } from "@/hooks/useAuth";
import { useTeamBypass } from "@/hooks/useTeamBypass";
import { NavBarUserDropdown } from "./NavBarUserDropdown";
import { useNavigate } from "react-router-dom";

interface NavBarActionsProps {
  handleDashboardClick: () => void;
  className?: string;
}

export const NavBarActions = ({ 
  handleDashboardClick, 
  className = "" 
}: NavBarActionsProps) => {
  const { user } = useAuth();
  const { isTeamBypassActive } = useTeamBypass();
  
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <LeadMagnetDialog />
      {user || isTeamBypassActive ? (
        <>
          <Button 
            onClick={handleDashboardClick}
            variant="outline"
          >
            Dashboard
          </Button>
          <NavBarUserDropdown />
        </>
      ) : (
        <Button 
          onClick={handleDashboardClick}
          variant="outline"
        >
          Sign In
        </Button>
      )}
    </div>
  );
};
