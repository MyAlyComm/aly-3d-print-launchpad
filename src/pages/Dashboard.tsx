
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Dashboard">
      <div className="grid gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Welcome to Your 3D Printing Blueprint</h2>
          <p className="text-gray-600 mb-6">
            This dashboard gives you access to the complete ebook content along with
            additional resources to help you launch your 3D printing business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Chapter 1</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Learn the basics of 3D printing and set up your equipment.</p>
              <Button onClick={() => navigate("/dashboard/chapter-1")}>Read Chapter</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>First Prints</CardTitle>
              <CardDescription>Chapter 2</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Create your first successful prints and calibrate your machine.</p>
              <Button onClick={() => navigate("/dashboard/chapter-2")}>Read Chapter</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Techniques</CardTitle>
              <CardDescription>Chapter 3</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Master advanced printing techniques and material settings.</p>
              <Button onClick={() => navigate("/dashboard/chapter-3")}>Read Chapter</Button>
            </CardContent>
          </Card>
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
