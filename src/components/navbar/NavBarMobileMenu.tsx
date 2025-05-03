
import { Button } from "@/components/ui/button";
import LeadMagnetDialog from "@/components/FreeGuideDialog";
import { NavBarLinks, NavLinkItem } from "./NavBarLinks";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface NavBarMobileMenuProps {
  isOpen: boolean;
  onLinkClick: () => void; // Close menu callback
  links?: NavLinkItem[];
}

export const NavBarMobileMenu = ({ 
  isOpen, 
  onLinkClick,
  links
}: NavBarMobileMenuProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  if (!isOpen) return null;
  
  const handleDashboardClick = () => {
    navigate(user ? "/dashboard" : "/auth");
    onLinkClick();
  };

  const handleAccountClick = () => {
    navigate("/account");
    onLinkClick();
  };
  
  return (
    <div className="md:hidden mt-4 pt-4 pb-4 border-t border-gray-200">
      <div className="flex flex-col space-y-4">
        <NavBarLinks 
          vertical={true} 
          itemClassName="text-gray-700 hover:text-primary py-2"
          onClick={onLinkClick}
          links={links}
        />
        
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
          {user ? "Dashboard" : "Login"}
        </Button>
        
        {user && (
          <Button 
            onClick={handleAccountClick}
            variant="ghost"
            className="w-full"
          >
            My Account
          </Button>
        )}
      </div>
    </div>
  );
};
