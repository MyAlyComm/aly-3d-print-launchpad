
import { ReactNode } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebarContent } from "./DashboardSidebarContent";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex w-full">
      {/* Desktop Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 py-6 px-4 hidden md:flex flex-col">
        <DashboardSidebarContent />
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader title={title} />
        <div className="bg-white px-4 py-2 border-b border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm text-gray-600"
            onClick={() => navigate('/dashboard')}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Ebooks Hub
          </Button>
        </div>
        <main className="flex-1 overflow-y-auto bg-white p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
