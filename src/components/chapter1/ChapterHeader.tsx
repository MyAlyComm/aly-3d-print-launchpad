
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
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">Arbitrage Windows</h1>
        <p className="text-base sm:text-lg text-gray-700 italic mb-4">
          "In 3D printing, opportunity isn't just about what you make - it's about when you enter the market."
        </p>
        <p className="text-gray-600 max-w-3xl">
          In this chapter, you'll learn how to identify profitable arbitrage opportunities in the 3D printing space. 
          Work through each section, complete the exercises, and by the end, you'll have a clear roadmap for your
          first steps into the 3D printing business.
        </p>
        
        <div className="flex items-center mt-4 gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`${isMobile ? 'h-8 w-8' : 'h-10 w-10'} rounded-full border-2 border-white flex items-center justify-center text-xs font-medium bg-gradient-to-r from-indigo-${i*100} to-purple-${i*100}`}>
                {i}
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-500">7 sections • ~45 min</span>
        </div>
      </CardContent>
    </Card>
  );
};
