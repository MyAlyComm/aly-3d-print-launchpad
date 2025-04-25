
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { DashboardNav } from "./DashboardNav";

export const DashboardSidebarContent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-primary">Aly's 3D Studio</h2>
        <p className="text-sm text-gray-500">Ebook Dashboard</p>
      </div>
      
      <DashboardNav />
      
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
};
