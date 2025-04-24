
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Book, Home, Layout, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 py-6 px-4 hidden md:flex flex-col">
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
      
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Button 
          className="rounded-full w-12 h-12 shadow-lg"
          onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
        >
          <Layout className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className="fixed inset-y-0 right-0 z-40 w-64 bg-white shadow-lg transform translate-x-full transition-transform duration-200 ease-in-out md:hidden"
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-primary">Aly's 3D Studio</h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("translate-x-full")}
            >
              ✕
            </Button>
          </div>
          <nav className="space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                navigate("/dashboard");
                document.getElementById("mobile-menu")?.classList.add("translate-x-full");
              }}
            >
              <Layout className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                navigate("/dashboard/chapter-1");
                document.getElementById("mobile-menu")?.classList.add("translate-x-full");
              }}
            >
              <Book className="mr-2 h-4 w-4" />
              Chapter 1
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                navigate("/dashboard/chapter-2");
                document.getElementById("mobile-menu")?.classList.add("translate-x-full");
              }}
            >
              <Book className="mr-2 h-4 w-4" />
              Chapter 2
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                navigate("/dashboard/chapter-3");
                document.getElementById("mobile-menu")?.classList.add("translate-x-full");
              }}
            >
              <Book className="mr-2 h-4 w-4" />
              Chapter 3
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                navigate("/dashboard/resources");
                document.getElementById("mobile-menu")?.classList.add("translate-x-full");
              }}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Resources
            </Button>
          </nav>
          <div className="mt-8 pt-4 border-t border-gray-200">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                navigate("/");
                document.getElementById("mobile-menu")?.classList.add("translate-x-full");
              }}
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow">
          <div className="px-4 py-6 sm:px-6">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-white p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
