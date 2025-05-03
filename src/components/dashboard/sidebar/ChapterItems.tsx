
import React from "react";
import { Book, BookOpen, LucideIcon } from "lucide-react";
import { useLocation } from "react-router-dom";

export interface ChapterItem {
  title: string;
  path: string;
  icon: LucideIcon;
  isActive?: boolean;
  tooltip?: string;
  className?: string;
}

export const useChapterItems = () => {
  const location = useLocation();
  
  const isChapterActive = (chapterNum: number) => {
    return location.pathname.includes(`/chapter-${chapterNum}`);
  };
  
  const chapterItems: ChapterItem[] = [
    {
      title: "Introduction",
      path: "/dashboard/3d-blueprint/new-chapter",
      icon: Book,
    },
    {
      title: "Chapter 1: Arbitrage Windows",
      path: "/dashboard/3d-blueprint/chapter-1",
      icon: BookOpen,
      isActive: isChapterActive(1)
    },
    {
      title: "Chapter 2: Knowing Yourself",
      path: "/dashboard/3d-blueprint/chapter-2",
      icon: BookOpen,
      isActive: isChapterActive(2)
    },
    {
      title: "Chapter 3: The 3+1=40 System",
      path: "/dashboard/3d-blueprint/chapter-3",
      icon: BookOpen,
      isActive: isChapterActive(3)
    },
    {
      title: "Chapter 4: The Product Trinity",
      path: "/dashboard/3d-blueprint/chapter-4",
      icon: BookOpen,
      isActive: isChapterActive(4)
    },
    {
      title: "Chapter 5: Production Tools",
      path: "/dashboard/3d-blueprint/chapter-5",
      icon: BookOpen,
      isActive: isChapterActive(5)
    },
    {
      title: "Chapter 6: Selling Platforms",
      path: "/dashboard/3d-blueprint/chapter-6",
      icon: BookOpen,
      isActive: isChapterActive(6)
    },
    {
      title: "Chapter 7: Setting Up For Success",
      path: "/dashboard/3d-blueprint/chapter-7",
      icon: BookOpen,
      isActive: isChapterActive(7)
    },
    {
      title: "Chapter 8: Zero-Cost Marketing",
      path: "/dashboard/3d-blueprint/chapter-8",
      icon: BookOpen,
      isActive: isChapterActive(8)
    },
    {
      title: "Chapter 9: Scaling Beyond $5K",
      path: "/dashboard/3d-blueprint/chapter-9",
      icon: BookOpen,
      isActive: isChapterActive(9)
    },
    {
      title: "Chapter 10: Future-Proofing",
      path: "/dashboard/3d-blueprint/chapter-10",
      icon: BookOpen,
      isActive: isChapterActive(10)
    },
    {
      title: "Chapter 11: The Journey Ahead",
      path: "/dashboard/3d-blueprint/chapter-11",
      icon: BookOpen,
      isActive: isChapterActive(11)
    }
  ];
  
  return { 
    chapterItems,
    // Helper function to count active chapters
    getActiveChapterCount: () => chapterItems.filter(item => item.isActive).length
  };
};
