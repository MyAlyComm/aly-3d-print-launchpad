
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ResourceCategory } from "../resources/ResourceCategory";
import { resourceCategories } from "@/data/resourcesData";

export const ResourcesCard = () => {
  return (
    <Card className="bg-gradient-to-br from-gray-50 to-white border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl break-words">Resources & Downloads</CardTitle>
        <CardDescription>Preview the resources included in the full course</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {resourceCategories.map((category, index) => (
          <ResourceCategory key={index} category={category} />
        ))}
      </CardContent>
    </Card>
  );
};
