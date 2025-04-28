
import React, { useState, ReactNode } from "react";
import { AIHubSidebar } from "./AIHubSidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface AIHubLayoutProps {
  children: ReactNode;
  title?: string;
}

export const AIHubLayout = ({ children, title = "3D Print Business AI Hub" }: AIHubLayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 border-r bg-white">
        <div className="h-full px-2 py-4">
          <AIHubSidebar />
        </div>
      </aside>
      
      {/* Mobile sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="absolute top-4 left-4 z-50">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-60 px-0">
            <AIHubSidebar />
          </SheetContent>
        </Sheet>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm py-4 px-6 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
