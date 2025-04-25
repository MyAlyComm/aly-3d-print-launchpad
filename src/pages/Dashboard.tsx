
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

  // Define chapter information
  const chapters = [
    {
      number: 1,
      title: "Getting Started",
      description: "Learn the basics of 3D printing and set up your equipment."
    },
    {
      number: 2,
      title: "First Prints",
      description: "Create your first successful prints and calibrate your machine."
    },
    {
      number: 3,
      title: "Advanced Techniques",
      description: "Master advanced printing techniques and material settings."
    },
    {
      number: 4,
      title: "Business Foundations",
      description: "Create your business plan and legal framework."
    },
    {
      number: 5,
      title: "Marketing Your Products",
      description: "Learn how to effectively market your 3D printed products."
    },
    {
      number: 6,
      title: "Scaling Production",
      description: "Strategies for scaling your production capacity."
    }
  ];

  // Additional chapters (7-13)
  const additionalChapters = [
    {
      number: 7,
      title: "Customer Service Excellence",
      description: "Build exceptional customer service processes for your business."
    },
    {
      number: 8,
      title: "Advanced Design Skills",
      description: "Learn advanced design techniques for unique products."
    },
    {
      number: 9,
      title: "Material Science",
      description: "Understand different materials and their applications."
    },
    {
      number: 10,
      title: "Industry Specialization",
      description: "Find and develop your niche in the 3D printing market."
    },
    {
      number: 11,
      title: "Building Your Brand",
      description: "Establish a strong brand identity for your business."
    },
    {
      number: 12,
      title: "Financial Management",
      description: "Learn financial strategies for a profitable 3D printing business."
    },
    {
      number: 13,
      title: "Future Trends & Innovation",
      description: "Stay ahead with emerging technologies and future trends."
    }
  ];

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

        <div>
          <h3 className="text-lg font-bold mb-4">Core Chapters</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => (
              <ChapterCard
                key={chapter.number}
                number={chapter.number}
                title={chapter.title}
                description={chapter.description}
                isCompleted={isChapterCompleted(chapter.number)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Advanced Topics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalChapters.map((chapter) => (
              <ChapterCard
                key={chapter.number}
                number={chapter.number}
                title={chapter.title}
                description={chapter.description}
                isCompleted={isChapterCompleted(chapter.number)}
              />
            ))}
          </div>
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
