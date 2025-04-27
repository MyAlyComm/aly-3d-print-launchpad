
import React, { ReactNode } from "react";
import { DashboardHeader } from "./DashboardHeader";
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
    <div className="min-h-screen flex flex-col bg-gray-100 w-full overflow-x-hidden">
      <DashboardHeader title={title}>
        {extraContent}
      </DashboardHeader>
      
      <main className={cn("flex-1 container px-4 mx-auto w-full", className)}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
