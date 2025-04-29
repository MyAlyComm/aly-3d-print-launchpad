
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { ChaptersList } from "@/components/dashboard/ChaptersList";
import { ResourcesCard } from "@/components/dashboard/ResourcesCard";
import { DashboardHero } from "@/components/dashboard/DashboardHero";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <DashboardLayout 
      title={`Welcome${user?.email ? ', ' + user.email.split('@')[0] : ''}`}
      isDashboardPage={true}
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
