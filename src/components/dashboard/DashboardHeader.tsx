
import React, { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogOut, Award, Layout, Book, BookText, BookOpen, Menu } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { getBadgesForProgress } from "@/utils/gamification";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

type DashboardHeaderProps = {
  title: string;
  children?: ReactNode;
};

export const DashboardHeader = ({ title, children }: DashboardHeaderProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { chapterProgresses } = useChapterProgress();
  const badges = getBadgesForProgress(chapterProgresses as any[] || []);
  const isMobile = useIsMobile();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      localStorage.removeItem("hasAccessToEbook");
      
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out");
    }
  };

  return (
    <div className="sticky top-0 z-30 bg-white border-b w-full">
      <div className="flex h-16 items-center justify-between px-4">
        <h1 className="text-lg font-semibold truncate mr-2">{title}</h1>
        
        <div className="flex items-center gap-2">
          {!isMobile && (
            <nav className="flex items-center gap-2 mr-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/dashboard/3d-blueprint")}
              >
                <Layout className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/dashboard/3d-blueprint/new-chapter")}
              >
                <Book className="mr-2 h-4 w-4" />
                Introduction
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/dashboard/3d-blueprint/chapter-1")}
              >
                <BookText className="mr-2 h-4 w-4" />
                Chapter 1
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/dashboard/3d-blueprint/resources")}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Resources
              </Button>
            </nav>
          )}

          {isMobile && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuItem onClick={() => navigate("/dashboard/3d-blueprint")}>
                  <Layout className="mr-2 h-4 w-4" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard/3d-blueprint/new-chapter")}>
                  <Book className="mr-2 h-4 w-4" />
                  Introduction
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard/3d-blueprint/chapter-1")}>
                  <BookText className="mr-2 h-4 w-4" />
                  Chapter 1
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard/3d-blueprint/resources")}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Resources
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Award className="mr-2 h-4 w-4 text-amber-500" />
                {!isMobile && "Achievements"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {badges.length === 0 ? (
                <DropdownMenuItem disabled>
                  <span className="text-muted-foreground">No achievements yet</span>
                </DropdownMenuItem>
              ) : (
                badges.map((badge) => (
                  <DropdownMenuItem key={badge.id} className="flex items-center gap-2">
                    <span className={badge.color}>
                      <Award className="h-4 w-4" />
                    </span>
                    <span>{badge.title}</span>
                  </DropdownMenuItem>
                ))
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {children}
          
          <div className="flex items-center gap-2 ml-2">
            {!isMobile && (
              <span className="text-sm truncate max-w-[100px]">
                {user?.email?.split('@')[0]}
              </span>
            )}
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
