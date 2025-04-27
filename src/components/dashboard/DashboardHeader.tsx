
import { Menu, Home, BookOpen, User, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { DashboardSidebarContent } from "./DashboardSidebarContent";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useChapterProgress } from "@/hooks/useChapterProgress";

interface DashboardHeaderProps {
  title: string;
}

export const DashboardHeader = ({ title }: DashboardHeaderProps) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { getChapterLatestSection } = useChapterProgress();
  
  const getNextIncompleteChapter = () => {
    for (let i = 0; i <= 11; i++) {
      const chapterProgress = getChapterLatestSection(i);
      if (!chapterProgress?.completed_at) {
        return i;
      }
    }
    return 0;
  };

  const nextChapter = getNextIncompleteChapter();

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="px-4 py-4 flex items-center justify-between">
        {isMobile ? (
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="px-4 py-6">
                <DashboardSidebarContent />
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <nav className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/")}
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/dashboard")}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              All Ebooks
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/account")}
            >
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-2">
                  Chapters <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => navigate(`/dashboard/3d-blueprint/chapter-${nextChapter}`)}>
                  Continue: Chapter {nextChapter === 0 ? "Introduction" : nextChapter}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard/3d-blueprint/new-chapter")}>
                  Introduction
                </DropdownMenuItem>
                {Array.from({length: 11}, (_, i) => i + 1).map((num) => (
                  <DropdownMenuItem key={num} onClick={() => navigate(`/dashboard/3d-blueprint/chapter-${num}`)}>
                    Chapter {num}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        )}
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      </div>
    </div>
  );
};
