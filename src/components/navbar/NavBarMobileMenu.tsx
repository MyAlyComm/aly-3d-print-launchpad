
import { Button } from "@/components/ui/button";
import LeadMagnetDialog from "@/components/FreeGuideDialog";
import { NavBarLinks } from "./NavBarLinks";
import { useAuth } from "@/hooks/useAuth";
import { useTeamBypass } from "@/hooks/useTeamBypass";
import { NavBarAllPagesDropdown } from "../NavBarAllPagesDropdown";

interface NavBarMobileMenuProps {
  isOpen: boolean;
  handleDashboardClick: () => void;
}

export const NavBarMobileMenu = ({ 
  isOpen, 
  handleDashboardClick 
}: NavBarMobileMenuProps) => {
  const { user } = useAuth();
  const { isTeamBypassActive } = useTeamBypass();
  
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden mt-4 pt-4 pb-4 border-t border-gray-200">
      <div className="flex flex-col space-y-4">
        <NavBarLinks 
          vertical={true} 
          itemClassName="text-gray-700 hover:text-primary py-2"
        />
        
        {isTeamBypassActive && (
          <div className="py-2">
            <NavBarAllPagesDropdown />
          </div>
        )}
        
        <LeadMagnetDialog>
          <Button className="bg-secondary hover:bg-secondary-dark text-white w-full">
            Free Guide
          </Button>
        </LeadMagnetDialog>
        
        <Button 
          onClick={handleDashboardClick}
          variant="outline"
          className="w-full"
        >
          {user || isTeamBypassActive ? 'Dashboard' : 'Sign In'}
        </Button>
      </div>
    </div>
  );
};
