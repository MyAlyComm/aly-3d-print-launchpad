
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
    <Card className="backdrop-blur-sm">
      <CardContent className="p-6 space-y-6">
        {sections.map((section) => (
          <Collapsible key={section.id} className="space-y-3">
            <Card 
              className={`bg-gradient-to-r ${section.gradient} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden border border-white/20`}
            >
              <div className="p-5 relative">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
                <div className="relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300 ring-2 ring-white/20">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <section.icon className="h-6 w-6 text-primary" />
                            <h3 className="font-semibold text-lg md:text-xl text-gray-800 group-hover:text-primary transition-colors break-words">
                              {section.title}
                            </h3>
                          </div>
                          <p className="text-sm md:text-base text-gray-600 break-words leading-relaxed">
                            {section.description}
                          </p>
                        </div>
                        <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-hover:text-primary group-data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                    </div>
                  </div>
                  <CollapsibleContent className="mt-6">
                    <div className="pl-24">
                      <div className="prose prose-sm max-w-none">
                        <div className="text-gray-600 leading-relaxed whitespace-pre-line bg-white/40 p-4 rounded-lg backdrop-blur-sm shadow-inner">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </div>
            </Card>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
};
