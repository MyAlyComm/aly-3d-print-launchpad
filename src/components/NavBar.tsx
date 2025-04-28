
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import LeadMagnetDialog from "./FreeGuideDialog";
import { FileText, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
            <FileText className="h-6 w-6 text-primary" />
            <a href="/" onClick={handleTitleClick} className="text-xl font-bold logo-gradient">
              3DBlueprint.io
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="focus:outline-none">
                <Button variant="ghost" className="flex items-center gap-1 px-2 py-1">
                  Home
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md p-1 z-[100]">
                <DropdownMenuItem asChild>
                  <a href="/" className="cursor-pointer">Home</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#features" className="cursor-pointer">Features</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#benefits" className="cursor-pointer">Benefits</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="focus:outline-none">
                <Button variant="ghost" className="flex items-center gap-1 px-2 py-1">
                  About <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md p-1 z-[100]">
                <DropdownMenuItem asChild>
                  <a href="/about" className="cursor-pointer">Our Story</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/about#team" className="cursor-pointer">Team</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/about#mission" className="cursor-pointer">Mission</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="focus:outline-none">
                <Button variant="ghost" className="flex items-center gap-1 px-2 py-1">
                  Blueprints <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md p-1 z-[100]">
                <DropdownMenuItem asChild>
                  <a href="#blueprints" className="cursor-pointer">All Blueprints</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#featured" className="cursor-pointer">Featured</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#new" className="cursor-pointer">New Releases</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="focus:outline-none">
                <Button variant="ghost" className="flex items-center gap-1 px-2 py-1">
                  Testimonials <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md p-1 z-[100]">
                <DropdownMenuItem asChild>
                  <a href="#testimonials" className="cursor-pointer">Customer Reviews</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#case-studies" className="cursor-pointer">Case Studies</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#success-stories" className="cursor-pointer">Success Stories</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:block">
            <LeadMagnetDialog />
          </div>

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

        {isMobileMenuOpen && (
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
              <LeadMagnetDialog>
                <Button className="bg-secondary hover:bg-secondary-dark text-white w-full">
                  Free Guide
                </Button>
              </LeadMagnetDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
