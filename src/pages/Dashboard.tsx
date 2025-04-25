import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChapterCard } from "@/components/dashboard/ChapterCard";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { ChapterProgress } from "@/components/progress/ChapterProgress";

const Dashboard = () => {
  const navigate = useNavigate();
  const { chapterProgresses, isLoading } = useChapterProgress();

  const isChapterCompleted = (chapterNumber: number) => {
    return chapterProgresses?.some(
      (progress) => progress.chapter_number === chapterNumber && progress.completed_at
    );
  };

  return (
    <DashboardLayout title="Dashboard">
      <div className="grid gap-6">
        <div className="max-w-3xl">
          <ChapterProgress />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Welcome to Your 3D Printing Blueprint</h2>
          <p className="text-gray-600 mb-6">
            This dashboard gives you access to the complete ebook content along with
            additional resources to help you launch your 3D printing business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChapterCard
            number={1}
            title="Getting Started"
            description="Learn the basics of 3D printing and set up your equipment."
            isCompleted={isChapterCompleted(1)}
          />
          <ChapterCard
            number={2}
            title="First Prints"
            description="Create your first successful prints and calibrate your machine."
            isCompleted={isChapterCompleted(2)}
          />
          <ChapterCard
            number={3}
            title="Advanced Techniques"
            description="Master advanced printing techniques and material settings."
            isCompleted={isChapterCompleted(3)}
          />
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Resources & Downloads</CardTitle>
            <CardDescription>STL files, checklists, and more</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Access all the supporting materials for your 3D printing business, including
              STL files, checklists, and more.
            </p>
            <Button onClick={() => navigate("/dashboard/resources")}>View Resources</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
