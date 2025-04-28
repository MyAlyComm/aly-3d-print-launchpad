
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { UserResponses } from "@/components/progress/UserResponses";
import { BookOpen } from "lucide-react";

const MySubmissions = () => {
  return (
    <DashboardLayout title="My Chapter Submissions">
      <div className="max-w-5xl mx-auto py-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-semibold">My Chapter Submissions</h1>
        </div>
        <p className="text-muted-foreground mb-6">
          Review and edit your submissions for all chapters. Your progress is automatically saved.
        </p>
        <UserResponses />
      </div>
    </DashboardLayout>
  );
};

export default MySubmissions;
