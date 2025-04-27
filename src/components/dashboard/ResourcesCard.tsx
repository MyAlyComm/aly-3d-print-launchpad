
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, Image, ArrowRight } from "lucide-react";

export const ResourcesCard = () => {
  const navigate = useNavigate();

  const resourceCategories = [
    {
      icon: FileText,
      title: "Templates & Checklists",
      description: "Ready-to-use business documents",
      path: "/dashboard/3d-blueprint/resources#templates"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step guidance",
      path: "/dashboard/3d-blueprint/resources#videos"
    },
    {
      icon: Image,
      title: "Design Files",
      description: "STL files and models",
      path: "/dashboard/3d-blueprint/resources#designs"
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-gray-50 to-white border-primary/20">
      <CardHeader>
        <CardTitle>Resources & Downloads</CardTitle>
        <CardDescription>Access all supporting materials for your business</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3 mb-4">
          {resourceCategories.map((category) => (
            <div 
              key={category.title}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/5 transition-colors cursor-pointer"
              onClick={() => navigate(category.path)}
            >
              <category.icon className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">{category.title}</h4>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Button 
          onClick={() => navigate("/dashboard/3d-blueprint/resources")}
          className="w-full"
        >
          View All Resources
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
