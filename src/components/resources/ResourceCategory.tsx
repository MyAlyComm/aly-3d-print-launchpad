
import { Collapsible } from "@/components/ui/collapsible";
import { ResourceCategory as ResourceCategoryType } from "@/data/resourcesData";
import { ResourceItem } from "./ResourceItem";

interface ResourceCategoryProps {
  category: ResourceCategoryType;
}

export const ResourceCategory = ({ category }: ResourceCategoryProps) => {
  return (
    <Collapsible className="space-y-2">
      {category.items.map((item, index) => (
        <ResourceItem key={index} item={item} />
      ))}
    </Collapsible>
  );
};
