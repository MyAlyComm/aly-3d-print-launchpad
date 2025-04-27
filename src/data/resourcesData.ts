
import { LucideIcon, FileText, Video, Lightbulb } from "lucide-react";

export interface ResourceItem {
  title: string;
  description: string;
  preview: string;
  icon: string;
}

export interface ResourceCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  items: ResourceItem[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    icon: FileText,
    title: "Templates & Checklists",
    description: "Ready-to-use business documents",
    items: [
      {
        title: "3D Printing Business Plan Template",
        description: "Complete business planning document",
        preview: `• 3D Printing Business Plan Template\n• Product Launch Checklist\n• Pricing Strategy Worksheet\n• Marketing Campaign Planner\n• Vendor Contact List Template`,
        icon: "/lovable-uploads/573b21db-fd6b-4fe9-ba36-ae007133ace1.png"
      }
    ]
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step guidance",
    items: [
      {
        title: "Video Tutorial Collection",
        description: "Comprehensive video guides",
        preview: `• Setting Up Your First Printer\n• Optimizing Print Settings\n• Product Photography Tips\n• Creating Viral Listings\n• Marketing Your Products`,
        icon: "/lovable-uploads/19e3fb35-7a5c-4b4a-9d7e-46bee87b38c7.png"
      }
    ]
  },
  {
    icon: Lightbulb,
    title: "Design Files",
    description: "STL files and models",
    items: [
      {
        title: "3D Model Collection",
        description: "Ready-to-print designs",
        preview: `• Starter Product Collection\n• Best-Selling Designs\n• Custom Design Templates\n• Print Setting Profiles\n• Material Test Models`,
        icon: "/lovable-uploads/64a71d5f-bcf5-4645-b04a-d3926af805b6.png"
      }
    ]
  }
];
