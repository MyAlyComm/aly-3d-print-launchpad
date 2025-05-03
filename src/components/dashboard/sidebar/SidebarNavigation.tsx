
import React from "react";
import { 
  Home, 
  BookOpen, 
  Book, 
  BookText, 
  ClipboardList, 
  Box, 
  Package 
} from "lucide-react";
import { NavigationGroup } from "./NavigationGroup";

export const SidebarNavigation = () => {
  const navigationItems = {
    navigation: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: Home,
      },
      {
        title: "Home Page",
        path: "/",
        icon: Home,
      }
    ],
    blueprintContent: [
      {
        title: "Blueprint Dashboard",
        path: "/dashboard/3d-blueprint",
        icon: Book,
      },
      {
        title: "Introduction",
        path: "/dashboard/3d-blueprint/new-chapter",
        icon: Book,
      },
      {
        title: "Chapter 1: Arbitrage Windows",
        path: "/dashboard/3d-blueprint/chapter-1",
        icon: BookText,
      },
      {
        title: "Chapter 2: Knowing Yourself",
        path: "/dashboard/3d-blueprint/chapter-2",
        icon: BookText,
      }
    ],
    resources: [
      {
        title: "Resources",
        path: "/dashboard/3d-blueprint/resources",
        icon: BookOpen,
      },
      {
        title: "My Submissions",
        path: "/dashboard/3d-blueprint/submissions",
        icon: ClipboardList,
      }
    ],
    tools: [
      {
        title: "Product Design Engine",
        path: "/dashboard/3d-blueprint/product-design",
        icon: Box,
      },
      {
        title: "Filament Guide",
        path: "/dashboard/3d-blueprint/filament-guide",
        icon: Package,
      }
    ]
  };

  return (
    <>
      <NavigationGroup label="Navigation" items={navigationItems.navigation} />
      <NavigationGroup label="Blueprint Content" items={navigationItems.blueprintContent} />
      <NavigationGroup label="Resources" items={navigationItems.resources} />
      <NavigationGroup label="Tools" items={navigationItems.tools} />
    </>
  );
};
