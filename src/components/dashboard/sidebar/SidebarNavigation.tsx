
import React from "react";
import { NavigationGroup } from "./NavigationGroup";
import { CollapsibleChapters } from "./CollapsibleChapters";
import { useNavigationItems } from "./NavigationItems";
import { useChapterItems } from "./ChapterItems";

export const SidebarNavigation = () => {
  const navigationItems = useNavigationItems();
  const { getActiveChapterCount } = useChapterItems();
  
  // Count how many chapters are active to show badge
  const activeChapterCount = getActiveChapterCount();

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
        
        <CollapsibleChapters />
          
        <NavigationGroup label="Resources" items={navigationItems.resources} />
        <NavigationGroup label="Tools" items={navigationItems.tools} />
      </div>
    </>
  );
};
