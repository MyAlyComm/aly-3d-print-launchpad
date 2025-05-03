
import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent 
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { NavigationGroup } from "./NavigationGroup";
import { useChapterItems, ChapterItem } from "./ChapterItems";

export const CollapsibleChapters = () => {
  const { chapterItems, getActiveChapterCount } = useChapterItems();
  const [chaptersOpen, setChaptersOpen] = React.useState(true);
  const activeChapterCount = getActiveChapterCount();
  
  // Check if we're on any chapter page to initially expand the chapters section
  React.useEffect(() => {
    if (activeChapterCount > 0) {
      setChaptersOpen(true);
    }
  }, [activeChapterCount]);

  return (
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
          {/* Since ChapterItem interface now matches NavigationItem interface, this is type-safe */}
          <NavigationGroup items={chapterItems as any} className="mt-1" />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
