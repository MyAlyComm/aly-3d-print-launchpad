
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

export const ChapterHeader = () => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50 overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
          Chapter 1
        </Badge>
      </div>
      <CardContent className={`${isMobile ? 'p-4' : 'pt-6'} relative z-10`}>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">Understanding the Opportunity</h1>
      </CardContent>
    </Card>
  );
};
