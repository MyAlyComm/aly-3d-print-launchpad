
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Book, Home, Layout, BookOpen, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const NavContent = () => (
    <div className="flex h-full flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-primary">Aly's 3D Studio</h2>
        <p className="text-sm text-gray-500">Ebook Dashboard</p>
      </div>
      
      <nav className="flex-1 space-y-2">
        <Button 
          variant="ghost" 
          className="w-full justify-start"
          onClick={() => navigate("/dashboard")}
        >
          <Layout className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start"
          onClick={() => navigate("/dashboard/chapter-1")}
        >
          <Book className="mr-2 h-4 w-4" />
          Chapter 1: Getting Started
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start"
          onClick={() => navigate("/dashboard/chapter-2")}
        >
          <Book className="mr-2 h-4 w-4" />
          Chapter 2: First Prints
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start"
          onClick={() => navigate("/dashboard/chapter-3")}
        >
          <Book className="mr-2 h-4 w-4" />
          Chapter 3: Advanced Techniques
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start"
          onClick={() => navigate("/dashboard/resources")}
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Resources
        </Button>
      </nav>
      
      <div className="mt-auto pt-4 border-t border-gray-200">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => navigate("/")}
        >
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        <Button 
          variant="ghost" 
          className="w-full mt-2 text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={() => {
            localStorage.removeItem("hasAccessToEbook");
            navigate("/");
            window.location.reload();
          }}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex w-full">
      {/* Desktop Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 py-6 px-4 hidden md:flex flex-col">
        <NavContent />
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-4 py-4 flex items-center justify-between">
            {isMobile && (
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="px-4 py-6">
                    <NavContent />
                  </div>
                </DrawerContent>
              </Drawer>
            )}
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-white p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
