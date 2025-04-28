
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
  imageUrl?: string;
}

export function ChapterCard({ 
  number, 
  title, 
  description, 
  isCompleted, 
  imageUrl 
}: ChapterCardProps) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // If it's chapter 0 (introduction), use the new-chapter route
    const path = number === 0 
      ? "/dashboard/3d-blueprint/new-chapter"
      : `/dashboard/3d-blueprint/chapter-${number}`;
    
    navigate(path);
  };

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden grid md:grid-cols-[1fr_250px]",
      isCompleted && "bg-gradient-to-br from-primary/5 to-transparent",
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
            onClick={handleNavigation}
            variant={isCompleted ? "secondary" : "default"}
            className="w-full"
          >
            {isCompleted ? "Review Chapter" : "Start Chapter"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </div>
      <div className="hidden md:block relative h-full w-[250px]">
        {imageUrl ? (
          <div className="relative h-full w-full">
            <img 
              src={imageUrl} 
              alt={`Chapter ${number} illustration`} 
              className="w-full h-full object-cover"
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent mix-blend-overlay" />
          </div>
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <Image className="text-gray-400" size={48} />
          </div>
        )}
      </div>
    </Card>
  );
}
