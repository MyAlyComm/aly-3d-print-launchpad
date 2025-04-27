
import React, { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogOut, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { getBadgesForProgress } from "@/utils/gamification";
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

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      // Clear any local storage related to authentication
      localStorage.removeItem("hasAccessToEbook");
      
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out");
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Award className="mr-2 h-4 w-4 text-amber-500" />
                Achievements
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
          <div className="flex items-center gap-2">
            <span className="text-sm hidden md:block">
              {user?.email}
            </span>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
