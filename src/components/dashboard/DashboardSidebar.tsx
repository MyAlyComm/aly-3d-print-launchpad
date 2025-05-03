
import React from "react";
import { 
  Sidebar, 
  SidebarContent
} from "@/components/ui/sidebar";

import { SidebarHeader } from "./sidebar/SidebarHeader";
import { SidebarNavigation } from "./sidebar/SidebarNavigation";
import { SidebarFooterSection } from "./sidebar/SidebarFooterSection";

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      
      <SidebarContent>
        <SidebarNavigation />
      </SidebarContent>
      
      <SidebarFooterSection />
    </Sidebar>
  );
}
