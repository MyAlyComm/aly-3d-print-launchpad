
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
import { ChevronDown, FileText, BookOpen, SparkleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mainRoutes } from "@/routes/mainRoutes";
import { ebookRoutes } from "@/routes/ebookRoutes";
import { aiHubRoutes } from "@/routes/aiHubRoutes";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);  // Close dropdown after navigation
  };

  // Filter out catch-all (*) routes
  const filteredMainRoutes = mainRoutes.filter(route => route.path !== "*");
  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-gray-700 flex items-center gap-1">
          <FileText className="h-4 w-4" />
          <span>Pages</span>
          <ChevronDown className="h-3 w-3 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white" align="start">
        <DropdownMenuLabel>Main Pages</DropdownMenuLabel>
        <DropdownMenuGroup>
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
        
        <DropdownMenuLabel>Ebooks</DropdownMenuLabel>
        <DropdownMenuGroup>
          {ebookRoutes.slice(0, 5).map((route, index) => (
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
              className="italic text-sm text-gray-500"
              onClick={() => handleNavigate("/dashboard")}
            >
              + {ebookRoutes.length - 5} more pages...
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel>AI Hub</DropdownMenuLabel>
        <DropdownMenuGroup>
          {aiHubRoutes.slice(0, 5).map((route, index) => (
            <DropdownMenuItem 
              key={`ai-${index}`} 
              className="cursor-pointer"
              onClick={() => handleNavigate(route.path)}
            >
              <SparkleIcon className="mr-2 h-4 w-4" />
              <span>{getPageTitle(route.path)}</span>
            </DropdownMenuItem>
          ))}
          {aiHubRoutes.length > 5 && (
            <DropdownMenuItem 
              className="italic text-sm text-gray-500"
              onClick={() => handleNavigate("/ai-hub")}
            >
              + {aiHubRoutes.length - 5} more tools...
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
