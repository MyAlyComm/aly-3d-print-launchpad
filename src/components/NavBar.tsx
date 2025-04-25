import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import FreeGuideDialog from "./FreeGuideDialog";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position for navbar styling
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
    // If we're already on the homepage, scroll to top instead of navigating
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    // If not on homepage, default link behavior will navigate to homepage
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
          <div className="flex items-center">
            <a href="/" onClick={handleTitleClick} className="text-xl font-bold text-primary">
              Aly's 3D Studio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">
              Blueprints
            </a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">
              Testimonials
            </a>
          </div>

          <div className="hidden md:block">
            <FreeGuideDialog />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-primary py-2">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-primary py-2">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-primary py-2">
                Blueprints
              </a>
              <a href="#" className="text-gray-700 hover:text-primary py-2">
                Testimonials
              </a>
              <FreeGuideDialog>
                <Button className="bg-secondary hover:bg-secondary-dark text-white w-full">
                  Free Guide
                </Button>
              </FreeGuideDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
