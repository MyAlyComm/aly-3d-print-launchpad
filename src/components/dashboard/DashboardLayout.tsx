
import { ReactNode } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebarContent } from "./DashboardSidebarContent";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex w-full">
      {/* Desktop Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 py-6 px-4 hidden md:flex flex-col">
        <DashboardSidebarContent />
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader title={title} />
        <main className="flex-1 overflow-y-auto bg-white p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
