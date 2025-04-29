
import { Button } from "@/components/ui/button";
import LeadMagnetDialog from "@/components/FreeGuideDialog";
import { useAuth } from "@/hooks/useAuth";
import { useTeamBypass } from "@/hooks/useTeamBypass";

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
      <Button 
        onClick={handleDashboardClick}
        variant="outline"
      >
        {user || isTeamBypassActive ? 'Dashboard' : 'Sign In'}
      </Button>
    </div>
  );
};
