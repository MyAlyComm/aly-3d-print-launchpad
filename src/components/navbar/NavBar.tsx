
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useTeamBypass } from "@/hooks/useTeamBypass";
import { NavBarAllPagesDropdown } from "../NavBarAllPagesDropdown";
import { NavBarLogo } from "./NavBarLogo";
import { NavBarLinks } from "./NavBarLinks";
import { NavBarActions } from "./NavBarActions";
import { NavBarMobileMenu } from "./NavBarMobileMenu";
import { NavBarMobileToggle } from "./NavBarMobileToggle";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isTeamBypassActive } = useTeamBypass();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTitleClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  const handleDashboardClick = () => {
    if (user || isTeamBypassActive) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };

  const handleLogoDoubleClick = () => {
    // Kept for backward compatibility but no longer needed
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <NavBarLogo 
              handleTitleClick={handleTitleClick} 
              handleLogoDoubleClick={handleLogoDoubleClick} 
            />
            
            {/* Always show the Pages Dropdown */}
            <div className="ml-4 hidden md:block">
              <NavBarAllPagesDropdown />
            </div>
          </div>

          <NavBarLinks className="hidden md:flex" />
          <NavBarActions 
            handleDashboardClick={handleDashboardClick}
            className="hidden md:flex"
          />

          <NavBarMobileToggle 
            isOpen={isMobileMenuOpen}
            toggleOpen={toggleMobileMenu}
          />
        </div>

        <NavBarMobileMenu 
          isOpen={isMobileMenuOpen} 
          handleDashboardClick={handleDashboardClick}
          onLinkClick={handleMobileLinkClick}
        />
      </div>
    </nav>
  );
};

export default NavBar;
