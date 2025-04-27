
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ResourcesCard = () => {
  const navigate = useNavigate();

  const resourceCategories = [
    {
      icon: "/lovable-uploads/573b21db-fd6b-4fe9-ba36-ae007133ace1.png",
      title: "Templates & Checklists",
      description: "Ready-to-use business documents",
      path: "/dashboard/3d-blueprint/resources#templates"
    },
    {
      icon: "/lovable-uploads/19e3fb35-7a5c-4b4a-9d7e-46bee87b38c7.png",
      title: "Video Tutorials",
      description: "Step-by-step guidance",
      path: "/dashboard/3d-blueprint/resources#videos"
    },
    {
      icon: "/lovable-uploads/64a71d5f-bcf5-4645-b04a-d3926af805b6.png",
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
              className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-accent/5 transition-colors cursor-pointer group"
              onClick={() => navigate(category.path)}
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 group-hover:border-primary/20 transition-colors">
                <img 
                  src={category.icon} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
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
