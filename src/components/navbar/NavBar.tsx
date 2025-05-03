
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavBarLogo } from "./NavBarLogo";
import { NavBarLinks } from "./NavBarLinks";
import { NavBarActions } from "./NavBarActions";
import { NavBarMobileMenu } from "./NavBarMobileMenu";
import { NavBarMobileToggle } from "./NavBarMobileToggle";
import { NavBarUserDropdown } from "./NavBarUserDropdown"; 
import { useAuth } from "@/hooks/useAuth";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  // Check if we're on a dashboard route to hide the navbar
  const isDashboardRoute = location.pathname.includes('/dashboard') || 
                          location.pathname.includes('/ebooks');
  
  // Don't render the navbar at all on dashboard routes
  if (isDashboardRoute) {
    return null;
  }

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Define simplified navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/inside-blueprint", label: "Inside Blueprint" },
  ];

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
          <NavBarLogo handleTitleClick={handleTitleClick} />

          <NavBarLinks className="hidden md:flex" links={navLinks} />
          
          <div className="hidden md:flex items-center space-x-4">
            <NavBarActions />
            {user && <NavBarUserDropdown />}
          </div>

          <NavBarMobileToggle 
            isOpen={isMobileMenuOpen}
            toggleOpen={toggleMobileMenu}
          />
        </div>

        <NavBarMobileMenu 
          isOpen={isMobileMenuOpen} 
          onLinkClick={handleMobileLinkClick}
          links={navLinks}
        />
      </div>
    </nav>
  );
};

export default NavBar;
