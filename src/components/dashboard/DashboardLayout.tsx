
import React, { ReactNode } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebarContent } from "./DashboardSidebarContent";
import { DashboardNav } from "./DashboardNav";
import { cn } from "@/lib/utils";

type DashboardLayoutProps = {
  children: ReactNode;
  title?: string;
  extraContent?: ReactNode;
  className?: string;
};

const DashboardLayout = ({ 
  children, 
  title = "Dashboard", 
  extraContent,
  className 
}: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:z-50 lg:w-72 lg:border-r bg-white">
        <div className="h-full px-6 py-8">
          <DashboardSidebarContent />
        </div>
      </div>
      
      <div className="lg:pl-72 flex flex-col flex-1">
        <DashboardHeader title={title}>
          {extraContent}
        </DashboardHeader>
        
        <div className="block lg:hidden p-4 border-b bg-white">
          <DashboardNav />
        </div>
        
        <main className={cn("flex-1", className)}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
