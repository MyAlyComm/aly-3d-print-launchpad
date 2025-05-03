
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavBarUserDropdown } from "@/components/navbar/NavBarUserDropdown";

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
    <div className="min-h-screen flex flex-col bg-gray-100 w-full overflow-hidden">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DashboardSidebar />
          
          <SidebarInset className="flex-1 flex flex-col">
            <header className="sticky top-0 z-30 bg-white border-b w-full">
              <div className="flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  {isMobile && <SidebarTrigger />}
                  <h1 className="text-lg font-semibold text-gray-800 truncate">{title}</h1>
                </div>
                
                <div className="flex items-center gap-3">
                  {extraContent}
                  <NavBarUserDropdown />
                </div>
              </div>
            </header>
            
            <main className={cn("flex-1 container mx-auto w-full px-3 sm:px-4 py-4", className)}>
              {children}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
