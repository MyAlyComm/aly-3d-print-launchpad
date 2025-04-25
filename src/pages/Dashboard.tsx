
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { ChaptersList } from "@/components/dashboard/ChaptersList";
import { ResourcesCard } from "@/components/dashboard/ResourcesCard";
import { ChapterProgress } from "@/components/progress/ChapterProgress";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div className="grid gap-8 pb-8">
        <div className="grid gap-6">
          <StatsCards />
          <WelcomeCard />
        </div>

        <div className="max-w-3xl">
          <ChapterProgress />
        </div>

        <ChaptersList />
        <ResourcesCard />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
