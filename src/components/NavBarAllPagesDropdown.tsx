
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, BookOpen } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { mainRoutes } from "@/routes/mainRoutes";
import { ebookRoutes } from "@/routes/ebookRoutes";
import { useState, useEffect } from "react";

// Helper function to get clean page title from route path
const getPageTitle = (path: string): string => {
  // Remove leading slash and split by remaining slashes
  const segments = path.replace(/^\//, "").split("/");
  
  // For root path
  if (segments[0] === "") return "Home";
  
  // For regular paths, format the last segment
  const lastSegment = segments[segments.length - 1];
  return lastSegment
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function NavBarAllPagesDropdown() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Close dropdown on location change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);  // Close dropdown after navigation
  };

  // Filter out catch-all (*) routes and ensure all routes have valid paths
  const filteredMainRoutes = mainRoutes.filter(route => 
    route.path !== "*" && 
    typeof route.path === "string" && 
    !route.path.startsWith("/dashboard") &&
    route.path !== "/" // Exclude home page as it's already in main nav
  );
  
  const filteredEbookRoutes = ebookRoutes.filter(route => 
    typeof route.path === "string" && 
    route.path.includes("/dashboard/3d-blueprint")
  ).slice(0, 5); // Limit to first 5 chapters
  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-gray-700 flex items-center gap-1">
          <FileText className="h-4 w-4" />
          <span>Pages</span>
          <ChevronDown className="h-3 w-3 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white z-50" align="start">
        <DropdownMenuLabel>Main Pages</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem 
            key="home-page"
            className="cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            <FileText className="mr-2 h-4 w-4" />
            <span>Home</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            key="inside-blueprint"
            className="cursor-pointer"
            onClick={() => handleNavigate("/inside-blueprint")}
          >
            <FileText className="mr-2 h-4 w-4" />
            <span>Inside Blueprint</span>
          </DropdownMenuItem>
          {filteredMainRoutes.map((route, index) => (
            <DropdownMenuItem 
              key={`main-${index}`}
              className="cursor-pointer"
              onClick={() => handleNavigate(route.path)}
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>{getPageTitle(route.path)}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel>Blueprint Content</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem 
            className="cursor-pointer"
            onClick={() => handleNavigate("/dashboard")}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
          {filteredEbookRoutes.map((route, index) => (
            <DropdownMenuItem 
              key={`ebook-${index}`} 
              className="cursor-pointer"
              onClick={() => handleNavigate(route.path)}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              <span>{getPageTitle(route.path)}</span>
            </DropdownMenuItem>
          ))}
          {ebookRoutes.length > 5 && (
            <DropdownMenuItem 
              className="italic text-sm text-gray-500 cursor-pointer"
              onClick={() => handleNavigate("/dashboard")}
            >
              + More chapters in dashboard...
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
