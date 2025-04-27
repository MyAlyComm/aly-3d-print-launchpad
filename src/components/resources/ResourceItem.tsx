
import { ResourceItem as ResourceItemType } from "@/data/resourcesData";
import { Card } from "@/components/ui/card";
import { CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface ResourceItemProps {
  item: ResourceItemType;
}

export const ResourceItem = ({ item }: ResourceItemProps) => {
  return (
    <Card className="bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-colors duration-300">
      <div className="p-4">
        <CollapsibleTrigger className="flex items-start gap-4 w-full text-left group">
          <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 group-hover:border-primary/20 transition-colors flex-shrink-0">
            <img 
              src={item.icon} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-sm md:text-base text-purple-900 group-hover:text-purple-700 transition-colors">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 text-purple-600 transition-transform duration-200" />
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 pl-16">
          <div className="prose prose-sm max-w-none">
            <div className="whitespace-pre-line text-sm text-gray-600">
              {item.preview}
              <p className="mt-3 text-xs text-purple-600 italic">
                These resources are available in the full course
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Card>
  );
};
