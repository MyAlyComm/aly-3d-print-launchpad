
import { Book, FileText, Printer, Tool } from "lucide-react";
import { Card } from "@/components/ui/card";
import FreeGuideDialog from "@/components/FreeGuideDialog";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Free FAQ Guide",
    description: "Get instant answers to the most common questions about starting a 3D printing business.",
    icon: FileText,
    buttonText: "Get FAQ Guide",
    type: "faq"
  },
  {
    title: "Mini Blueprint Guide",
    description: "A condensed version of our complete blueprint to help you get started.",
    icon: Book,
    buttonText: "Get Mini Guide",
    type: "blueprint"
  },
  {
    title: "Used Printer Buying Guide",
    description: "Learn how to find and evaluate used 3D printers for your business.",
    icon: Printer,
    buttonText: "Get Buying Guide",
    type: "printer"
  },
  {
    title: "AI Tool Mastery Guide",
    description: "Master the AI tools that will revolutionize your 3D printing workflow.",
    icon: Tool,
    buttonText: "Get AI Guide",
    type: "ai"
  }
];

export const FreeResourceCards = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Free Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start your 3D printing journey with our collection of free guides and resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {resources.map((resource, index) => (
            <Card key={index} className="relative bg-white hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="p-6 flex-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{resource.description}</p>
                
                <div className="mt-auto">
                  <FreeGuideDialog
                    title={`Get Your ${resource.title}`}
                    description="Enter your email to receive instant access"
                    buttonText={resource.buttonText}
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90">
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
