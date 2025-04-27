
import { Menu, Home, BookOpen, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { DashboardSidebarContent } from "./DashboardSidebarContent";

interface DashboardHeaderProps {
  title: string;
}

export const DashboardHeader = ({ title }: DashboardHeaderProps) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="px-4 py-4 flex items-center justify-between">
        {isMobile ? (
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="px-4 py-6">
                <DashboardSidebarContent />
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <nav className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/")}
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/dashboard")}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              All Ebooks
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/account")}
            >
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>
          </nav>
        )}
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      </div>
    </div>
  );
};
