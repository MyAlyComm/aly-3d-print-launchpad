
import React from "react";
import { SidebarHeader as Header } from "@/components/ui/sidebar";
import { BriefcaseBusiness } from "lucide-react";

export const SidebarHeader = () => {
  return (
    <Header className="px-4 py-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary/10">
          <BriefcaseBusiness className="h-5 w-5 text-primary" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-primary">Blueprint</h2>
          <p className="text-xs text-muted-foreground">Dashboard</p>
        </div>
      </div>
    </Header>
  );
};
