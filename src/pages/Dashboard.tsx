
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { ChaptersList } from "@/components/dashboard/ChaptersList";
import { ResourcesCard } from "@/components/dashboard/ResourcesCard";
import { ProgressChart } from "@/components/dashboard/ProgressChart";
import { QuickNavCards } from "@/components/dashboard/QuickNavCards";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <DashboardLayout title={`Welcome${user?.email ? ', ' + user.email.split('@')[0] : ''}`}>
      <div className="grid gap-8 pb-8">
        <div className="grid gap-6">
          <StatsCards />
          <QuickNavCards />
          <ProgressChart />
          <WelcomeCard />
        </div>

        <ChaptersList />
        <ResourcesCard />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
