
import React from "react";
import { SidebarHeader as Header } from "@/components/ui/sidebar";

export const SidebarHeader = () => {
  return (
    <Header className="px-4 py-4">
      <div className="flex flex-col">
        <h2 className="text-lg font-bold text-primary">3DBlueprint.io</h2>
        <p className="text-xs text-gray-500">3D Printing Blueprint</p>
      </div>
    </Header>
  );
};
