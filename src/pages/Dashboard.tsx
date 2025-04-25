
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

  // Define chapter information based on the 3D Printing Blueprint ebook structure
  const chapters = [
    {
      number: 1,
      title: "Arbitrage Windows",
      description: "The timelines of opportunity in the 3D printing industry."
    },
    {
      number: 2,
      title: "Knowing Yourself, Knowing Your Tools",
      description: "Discover your optimal path based on your skills and resources."
    },
    {
      number: 3,
      title: "The 3 Plus 1 Equals 40 System",
      description: "A system for creating sustainable revenue in 3D printing."
    },
    {
      number: 4,
      title: "The Product Trinity",
      description: "Finding your first three winning products using the P.R.O.F.I.T.S. MATCH framework."
    },
    {
      number: 5,
      title: "Choosing Your Production Tools",
      description: "Select the right printer and accessories for your specific needs."
    },
    {
      number: 6,
      title: "Selecting Your Selling Platforms",
      description: "Find the optimal platforms to sell your 3D printed products."
    },
    {
      number: 7,
      title: "Setting Up for Success",
      description: "The 5-step setup system for consistent production and quality."
    },
    {
      number: 8,
      title: "Zero-Cost Marketing That Works",
      description: "A 10-step system to market your products without spending money."
    },
    {
      number: 9,
      title: "Scaling Beyond $5K",
      description: "Strategies to scale your business beyond the initial milestones."
    },
    {
      number: 10,
      title: "Future-Proofing Your Business",
      description: "Position your business for long-term success in a changing market."
    },
    {
      number: 11,
      title: "Your Business Ecosystem",
      description: "Building systems and partnerships that support sustainable growth."
    },
    {
      number: 12,
      title: "Advanced Product Development",
      description: "Taking your product line to the next level with innovation."
    },
    {
      number: 13,
      title: "The Journey Ahead",
      description: "Final strategies, resources, and next steps for your business."
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
            This comprehensive guide will take you from a $500 investment to $5K+ monthly revenue
            in 60 days with a systematic approach to building your 3D printing business.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Chapters</h3>
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

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Resources & Downloads</CardTitle>
            <CardDescription>STL files, checklists, and more</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Access all the supporting materials for your 3D printing business, including
              STL files, checklists, templates, and more.
            </p>
            <Button onClick={() => navigate("/dashboard/resources")}>View Resources</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
