
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { ChaptersList } from "@/components/dashboard/ChaptersList";
import { ResourcesCard } from "@/components/dashboard/ResourcesCard";
import { QuickNavCards } from "@/components/dashboard/QuickNavCards";
import { DashboardHero } from "@/components/dashboard/DashboardHero";
import { useAuth } from "@/hooks/useAuth";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { getBadgesForProgress } from "@/utils/gamification";

const Dashboard = () => {
  const { user } = useAuth();
  const { chapterProgresses } = useChapterProgress();
  const badges = getBadgesForProgress(chapterProgresses as any[] || []);
  
  return (
    <DashboardLayout 
      title={`Welcome${user?.email ? ', ' + user.email.split('@')[0] : ''}`}
      extraContent={
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="ml-auto">
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
                    {badge.icon === 'Star' && <Award className="h-4 w-4" />}
                    {badge.icon === 'Trophy' && <Award className="h-4 w-4" />}
                    {badge.icon === 'Medal' && <Award className="h-4 w-4" />}
                    {badge.icon === 'Rocket' && <Award className="h-4 w-4" />}
                    {badge.icon === 'Flag' && <Award className="h-4 w-4" />}
                  </span>
                  <span>{badge.title}</span>
                </DropdownMenuItem>
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      }
    >
      <DashboardHero />
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 pb-8 mt-6">
          <StatsCards />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <WelcomeCard />
              <ResourcesCard />
            </div>
            <div className="md:col-span-2">
              <ChaptersList />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
