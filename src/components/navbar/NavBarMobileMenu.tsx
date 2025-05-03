
import { Button } from "@/components/ui/button";
import LeadMagnetDialog from "@/components/FreeGuideDialog";
import { NavBarLinks } from "./NavBarLinks";

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
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden mt-4 pt-4 pb-4 border-t border-gray-200">
      <div className="flex flex-col space-y-4">
        <NavBarLinks 
          vertical={true} 
          itemClassName="text-gray-700 hover:text-primary py-2"
          onClick={onLinkClick} // Close menu when link is clicked
        />
        
        <LeadMagnetDialog>
          <Button className="bg-secondary hover:bg-secondary-dark text-white w-full">
            Free Guide
          </Button>
        </LeadMagnetDialog>
        
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
      </div>
    </div>
  );
};
