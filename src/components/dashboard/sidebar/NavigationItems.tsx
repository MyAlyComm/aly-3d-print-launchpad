
import React from "react";
import { 
  Home, 
  Book, 
  BookOpen, 
  ClipboardList, 
  Box, 
  Package,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  path: string;
  icon: React.ElementType;
}

export interface NavigationSections {
  navigation: NavigationItem[];
  resources: NavigationItem[];
  tools: NavigationItem[];
}

export const useNavigationItems = () => {
  const navigationItems: NavigationSections = {
    navigation: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: Home,
      },
      {
        title: "Blueprint Dashboard",
        path: "/dashboard/3d-blueprint",
        icon: Book,
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

  return navigationItems;
};
