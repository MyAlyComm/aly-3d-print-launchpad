
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// FAQ section type definition
export interface FAQSectionType {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  icon: React.ElementType;
  gradient: string;
}

interface FAQSectionProps {
  sections: FAQSectionType[];
}

export const FAQSection = ({ sections }: FAQSectionProps) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        {sections.map((section) => (
          <Collapsible key={section.id} className="space-y-2">
            <Card className={`bg-gradient-to-r ${section.gradient} transition-colors duration-300`}>
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0 shadow-md"
                  />
                  <div className="flex-1 min-w-0">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
                      <div className="flex items-center gap-2">
                        <section.icon className="h-5 w-5 text-gray-600" />
                        <div>
                          <h3 className="font-medium text-sm md:text-base text-gray-900 group-hover:text-gray-700 transition-colors break-words">{section.title}</h3>
                          <p className="text-xs md:text-sm text-gray-600 break-words">{section.description}</p>
                        </div>
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 text-gray-600 transition-transform duration-200" />
                    </CollapsibleTrigger>
                  </div>
                </div>
                <CollapsibleContent className="mt-4">
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-line text-sm text-gray-600 pl-20">
                      {section.content}
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
