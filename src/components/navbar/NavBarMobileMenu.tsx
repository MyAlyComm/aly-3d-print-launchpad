
import { Button } from "@/components/ui/button";
import LeadMagnetDialog from "@/components/FreeGuideDialog";
import { NavBarLinks } from "./NavBarLinks";
import { useAuth } from "@/hooks/useAuth";
import { useTeamBypass } from "@/hooks/useTeamBypass";
import { NavBarAllPagesDropdown } from "../NavBarAllPagesDropdown";
import { NavBarUserDropdown } from "./NavBarUserDropdown";

interface NavBarMobileMenuProps {
  isOpen: boolean;
  handleDashboardClick: () => void;
  onLinkClick: () => void; // Close menu callback
}

export const NavBarMobileMenu = ({ 
  isOpen, 
  handleDashboardClick,
  onLinkClick
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
          onClick={onLinkClick} // Close menu when link is clicked
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
        
        {user || isTeamBypassActive ? (
          <div className="flex flex-col space-y-4">
            <Button 
              onClick={() => {
                handleDashboardClick();
                onLinkClick(); // Close menu when dashboard is clicked
              }}
              variant="outline"
              className="w-full"
            >
              Dashboard
            </Button>
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-sm text-gray-600">Account Options</span>
              <NavBarUserDropdown />
            </div>
          </div>
        ) : (
          <Button 
            onClick={() => {
              handleDashboardClick();
              onLinkClick(); // Close menu when sign in is clicked
            }}
            variant="outline"
            className="w-full"
          >
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
};
