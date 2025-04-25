
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ChapterCardProps {
  number: number;
  title: string;
  description: string;
  isCompleted?: boolean;
}

export function ChapterCard({ number, title, description, isCompleted }: ChapterCardProps) {
  const navigate = useNavigate();

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-md relative overflow-hidden",
      isCompleted && "bg-gradient-to-br from-primary/5 to-transparent",
      !isCompleted && "hover:-translate-y-1"
    )}>
      {isCompleted && (
        <div className="absolute top-3 right-3 text-primary">
          <CheckCircle2 className="h-5 w-5" />
        </div>
      )}
      <CardHeader>
        <div className="space-y-1">
          <CardDescription>Chapter {number}</CardDescription>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
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
    </Card>
  );
}
