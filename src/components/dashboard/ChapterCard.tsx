
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ChapterCardProps {
  number: number;
  title: string;
  description: string;
  isCompleted?: boolean;
}

export function ChapterCard({ number, title, description, isCompleted }: ChapterCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="relative">
      {isCompleted && (
        <div className="absolute top-3 right-3">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Chapter {number}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <Button onClick={() => navigate(`/dashboard/chapter-${number}`)}>
          {isCompleted ? "Review Chapter" : "Read Chapter"}
        </Button>
      </CardContent>
    </Card>
  );
}
