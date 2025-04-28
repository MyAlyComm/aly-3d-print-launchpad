
import { Book, FileText, Printer, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import FreeGuideDialog from "@/components/FreeGuideDialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    title: "Free FAQ Guide",
    description: "Get instant answers to the most common questions about starting a 3D printing business.",
    icon: FileText,
    buttonText: "Get FAQ Guide",
    type: "faq",
    gradient: "from-blue-500/20 to-purple-500/20",
    badgeText: "Most Popular"
  },
  {
    title: "Mini Blueprint Guide",
    description: "A condensed version of our complete blueprint to help you get started.",
    icon: Book,
    buttonText: "Get Mini Guide",
    type: "blueprint",
    gradient: "from-orange-500/20 to-red-500/20",
    badgeText: "Essential"
  },
  {
    title: "Used Printer Buying Guide",
    description: "Learn how to find and evaluate used 3D printers for your business.",
    icon: Printer,
    buttonText: "Get Buying Guide",
    type: "printer",
    gradient: "from-green-500/20 to-emerald-500/20",
    badgeText: "Equipment"
  },
  {
    title: "AI Tool Mastery Guide",
    description: "Master the AI tools that will revolutionize your 3D printing workflow.",
    icon: Wrench,
    buttonText: "Get AI Guide",
    type: "ai",
    gradient: "from-purple-500/20 to-pink-500/20",
    badgeText: "Advanced"
  }
];

export const FreeResourceCards = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Free Resources
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Start your 3D printing journey with our collection of free guides and resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-to-br ${resource.gradient} hover:shadow-lg transition-all duration-300 group backdrop-blur-sm border-0`}
            >
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="bg-white/80 text-gray-700 font-medium">
                  {resource.badgeText}
                </Badge>
              </div>
              <div className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{resource.description}</p>
                
                <div className="mt-auto">
                  <FreeGuideDialog
                    title={`Get Your ${resource.title}`}
                    description="Enter your email to receive instant access"
                    buttonText={resource.buttonText}
                  >
                    <Button 
                      className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200/50 shadow-sm group-hover:translate-y-[-2px] transition-all duration-300"
                    >
                      {resource.buttonText}
                    </Button>
                  </FreeGuideDialog>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
