
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ResourcesCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="bg-gradient-to-br from-gray-50 to-white border-primary/20">
      <CardHeader>
        <CardTitle>Resources & Downloads</CardTitle>
        <CardDescription>Access all supporting materials for your business</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-gray-600 max-w-lg">
            Access all the supporting materials for your 3D printing business, including
            STL files, checklists, templates, and more.
          </p>
          <Button 
            onClick={() => navigate("/dashboard/resources")}
            className="shrink-0"
          >
            View Resources
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
