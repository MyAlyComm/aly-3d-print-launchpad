
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ChapterCardProps {
  number: number;
  title: string;
  description: string;
  isCompleted?: boolean;
  imageUrl?: string; // New prop for chapter image
}

export function ChapterCard({ 
  number, 
  title, 
  description, 
  isCompleted, 
  imageUrl 
}: ChapterCardProps) {
  const navigate = useNavigate();

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-md relative overflow-hidden grid md:grid-cols-[1fr_200px]",
      isCompleted && "bg-gradient-to-br from-primary/5 to-transparent",
      !isCompleted && "hover:-translate-y-1"
    )}>
      {isCompleted && (
        <div className="absolute top-3 right-3 text-primary z-10">
          <CheckCircle2 className="h-5 w-5" />
        </div>
      )}
      <div className="space-y-4 p-6">
        <CardHeader className="p-0">
          <div className="space-y-1">
            <CardDescription>Chapter {number}</CardDescription>
            <CardTitle className="line-clamp-1">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
            {description}
          </p>
          <Button 
            onClick={() => navigate(`/dashboard/chapter-${number}`)}
            variant={isCompleted ? "secondary" : "default"}
            className="w-full"
          >
            {isCompleted ? "Review Chapter" : "Start Chapter"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </div>
      <div className="hidden md:block">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Chapter ${number} illustration`} 
            className="w-full h-full object-cover rounded-r-lg opacity-80 hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <Image className="text-gray-400" size={48} />
          </div>
        )}
      </div>
    </Card>
  );
}
