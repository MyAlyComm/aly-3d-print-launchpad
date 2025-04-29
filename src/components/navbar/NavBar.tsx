
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
  const { isTeamBypassActive, activateTeamBypass } = useTeamBypass();

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
    activateTeamBypass();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
            
            {/* All Pages Dropdown - Only visible when team access is active */}
            {isTeamBypassActive && (
              <div className="ml-4">
                <NavBarAllPagesDropdown />
              </div>
            )}
          </div>

          <NavBarLinks className="hidden md:flex items-center space-x-8" />
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
        />
      </div>
    </nav>
  );
};

export default NavBar;
