
import { Home, BookOpen, User, Award, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { DashboardNav } from "./DashboardNav";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { getBadgesForProgress } from "@/utils/gamification";

export const DashboardSidebarContent = () => {
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
    <div className="flex h-full flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-primary">3DBlueprint.io</h2>
        <p className="text-sm text-gray-500">3D Printing Blueprint</p>
      </div>
      
      <DashboardNav />
      
      <div className="mt-auto pt-4 border-t border-gray-200 space-y-2">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => navigate("/")}
        >
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Button 
          variant="ghost" 
          className="w-full text-primary"
          onClick={() => navigate("/dashboard")}
        >
          <BookOpen className="mr-2 h-4 w-4" />
          All Ebooks
        </Button>

        <Button 
          variant="ghost" 
          className="w-full"
          onClick={() => navigate("/account")}
        >
          <User className="mr-2 h-4 w-4" />
          My Account
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start bg-primary/5 hover:bg-primary/10">
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
                <DropdownMenuItem key={badge.id}>
                  <List className="mr-2 h-4 w-4" />
                  {badge.title}
                </DropdownMenuItem>
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button 
          variant="ghost" 
          className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};
