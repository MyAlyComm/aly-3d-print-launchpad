
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export const ResourcesCard = () => {
  const resourceCategories = [
    {
      icon: "/lovable-uploads/573b21db-fd6b-4fe9-ba36-ae007133ace1.png",
      title: "Templates & Checklists",
      description: "Ready-to-use business documents",
      preview: `• 3D Printing Business Plan Template
• Product Launch Checklist
• Pricing Strategy Worksheet
• Marketing Campaign Planner
• Vendor Contact List Template`
    },
    {
      icon: "/lovable-uploads/19e3fb35-7a5c-4b4a-9d7e-46bee87b38c7.png",
      title: "Video Tutorials",
      description: "Step-by-step guidance",
      preview: `• Setting Up Your First Printer
• Optimizing Print Settings
• Product Photography Tips
• Creating Viral Listings
• Marketing Your Products`
    },
    {
      icon: "/lovable-uploads/64a71d5f-bcf5-4645-b04a-d3926af805b6.png",
      title: "Design Files",
      description: "STL files and models",
      preview: `• Starter Product Collection
• Best-Selling Designs
• Custom Design Templates
• Print Setting Profiles
• Material Test Models`
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-gray-50 to-white border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl break-words">Resources & Downloads</CardTitle>
        <CardDescription>Preview the resources included in the full course</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {resourceCategories.map((category) => (
          <Collapsible key={category.title} className="space-y-2">
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-colors duration-300">
              <div className="p-4">
                <CollapsibleTrigger className="flex items-start gap-4 w-full text-left group">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 group-hover:border-primary/20 transition-colors flex-shrink-0">
                    <img 
                      src={category.icon} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sm md:text-base text-purple-900 group-hover:text-purple-700 transition-colors">{category.title}</h4>
                        <p className="text-xs text-gray-600">{category.description}</p>
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 text-purple-600 transition-transform duration-200" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 pl-16">
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-line text-sm text-gray-600">
                      {category.preview}
                      <p className="mt-3 text-xs text-purple-600 italic">
                        These resources are available in the full course
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Card>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
};
