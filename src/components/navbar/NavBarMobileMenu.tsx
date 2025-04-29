
import { useState } from "react";
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
        <a href="/" className="text-gray-700 hover:text-primary py-2">
          Home
        </a>
        <a href="/about" className="text-gray-700 hover:text-primary py-2">
          About
        </a>
        <a href="#blueprints" className="text-gray-700 hover:text-primary py-2">
          Blueprints
        </a>
        <a href="#testimonials" className="text-gray-700 hover:text-primary py-2">
          Testimonials
        </a>
        {isTeamBypassActive && (
          <>
            {/* Show All Pages dropdown in mobile menu when team access is active */}
            <div className="py-2">
              <NavBarAllPagesDropdown />
            </div>
            <a href="/dashboard" className="text-primary hover:text-primary/80 py-2">
              Dashboard
            </a>
            <a href="/account" className="text-primary hover:text-primary/80 py-2">
              Account
            </a>
          </>
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
