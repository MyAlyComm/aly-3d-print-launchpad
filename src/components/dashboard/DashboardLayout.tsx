
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

type DashboardLayoutProps = {
  children: ReactNode;
  title?: string;
  extraContent?: ReactNode;
  className?: string;
  isDashboardPage?: boolean;
};

const DashboardLayout = ({ 
  children, 
  title = "Dashboard", 
  extraContent,
  className,
  isDashboardPage = false
}: DashboardLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col bg-gray-100 w-full overflow-hidden">
        <DashboardSidebar />
        
        <SidebarInset>
          <header className="sticky top-0 z-30 bg-white border-b w-full">
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-2">
                {isMobile && <SidebarTrigger />}
                <h1 className="text-lg font-semibold text-gray-800 truncate">{title}</h1>
              </div>
              
              <div className="flex items-center gap-2">
                {extraContent}
              </div>
            </div>
          </header>
          
          <main className={cn("flex-1 container mx-auto w-full px-3 sm:px-4", className)}>
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
