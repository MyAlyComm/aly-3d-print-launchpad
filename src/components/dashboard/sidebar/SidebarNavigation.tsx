
import React from "react";
import { 
  Home, 
  BookOpen, 
  Book, 
  BookText, 
  ClipboardList, 
  Box, 
  Package,
  ChevronDown
} from "lucide-react";
import { NavigationGroup } from "./NavigationGroup";
import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent 
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

export const SidebarNavigation = () => {
  const location = useLocation();
  const [chaptersOpen, setChaptersOpen] = React.useState(true);
  
  // Check if we're on any chapter page to initially expand the chapters section
  React.useEffect(() => {
    if (location.pathname.includes("/chapter-")) {
      setChaptersOpen(true);
    }
  }, []);

  const isChapterActive = (chapterNum: number) => {
    return location.pathname.includes(`/chapter-${chapterNum}`);
  };
  
  const navigationItems = {
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

  const chapterItems = [
    {
      title: "Introduction",
      path: "/dashboard/3d-blueprint/new-chapter",
      icon: Book,
    },
    {
      title: "Chapter 1: Arbitrage Windows",
      path: "/dashboard/3d-blueprint/chapter-1",
      icon: BookText,
      isActive: isChapterActive(1)
    },
    {
      title: "Chapter 2: Knowing Yourself",
      path: "/dashboard/3d-blueprint/chapter-2",
      icon: BookText,
      isActive: isChapterActive(2)
    },
    {
      title: "Chapter 3: The 3+1=40 System",
      path: "/dashboard/3d-blueprint/chapter-3",
      icon: BookText,
      isActive: isChapterActive(3)
    },
    {
      title: "Chapter 4: The Product Trinity",
      path: "/dashboard/3d-blueprint/chapter-4",
      icon: BookText,
      isActive: isChapterActive(4)
    },
    {
      title: "Chapter 5: Production Tools",
      path: "/dashboard/3d-blueprint/chapter-5",
      icon: BookText,
      isActive: isChapterActive(5)
    },
    {
      title: "Chapter 6: Selling Platforms",
      path: "/dashboard/3d-blueprint/chapter-6",
      icon: BookText,
      isActive: isChapterActive(6)
    },
    {
      title: "Chapter 7: Setting Up For Success",
      path: "/dashboard/3d-blueprint/chapter-7",
      icon: BookText,
      isActive: isChapterActive(7)
    },
    {
      title: "Chapter 8: Zero-Cost Marketing",
      path: "/dashboard/3d-blueprint/chapter-8",
      icon: BookText,
      isActive: isChapterActive(8)
    },
    {
      title: "Chapter 9: Scaling Beyond $5K",
      path: "/dashboard/3d-blueprint/chapter-9",
      icon: BookText,
      isActive: isChapterActive(9)
    },
    {
      title: "Chapter 10: Future-Proofing",
      path: "/dashboard/3d-blueprint/chapter-10",
      icon: BookText,
      isActive: isChapterActive(10)
    },
    {
      title: "Chapter 11: The Journey Ahead",
      path: "/dashboard/3d-blueprint/chapter-11",
      icon: BookText,
      isActive: isChapterActive(11)
    }
  ];

  // Count how many chapters are active to show badge
  const activeChapterCount = chapterItems.filter(item => item.isActive).length;

  return (
    <>
      <NavigationGroup label="Navigation" items={navigationItems.navigation} />
      
      <div className="relative flex w-full min-w-0 flex-col p-2">
        <div className="flex h-8 shrink-0 items-center justify-between rounded-md px-2 text-xs font-medium text-sidebar-foreground/70">
          <span>Blueprint Content</span>
          {activeChapterCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-md bg-primary/10 px-1 text-xs font-medium text-primary">
              {activeChapterCount}
            </span>
          )}
        </div>
        
        <div className="w-full text-sm">
          <Collapsible 
            open={chaptersOpen} 
            onOpenChange={setChaptersOpen}
            className="w-full"
          >
            <CollapsibleTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="flex w-full justify-between px-2 py-1 h-auto text-left"
              >
                <span className="text-xs font-medium">Chapters</span>
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform", 
                    chaptersOpen && "transform rotate-180"
                  )} 
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <NavigationGroup items={chapterItems} className="mt-1" />
            </CollapsibleContent>
          </Collapsible>
          
          <NavigationGroup label="Resources" items={navigationItems.resources} />
          <NavigationGroup label="Tools" items={navigationItems.tools} />
        </div>
      </div>
    </>
  );
};
