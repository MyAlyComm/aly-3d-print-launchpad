
import { Trophy, BookOpen, Rocket } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useChapterProgress } from "@/hooks/useChapterProgress";

export const StatsCards = () => {
  const { chapterProgresses, calculateOverallProgress } = useChapterProgress();
  const progress = calculateOverallProgress();
  const completedChapters = chapterProgresses?.filter(p => p.completed_at).length || 0;
  const totalChapters = 13;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Math.round(progress)}%</div>
          <p className="text-sm text-muted-foreground">Overall completion</p>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-secondary" />
            Chapters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{completedChapters}/{totalChapters}</div>
          <p className="text-sm text-muted-foreground">Chapters completed</p>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-accent" />
            Next Step
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Chapter {completedChapters + 1}</div>
          <p className="text-sm text-muted-foreground">Continue your journey</p>
        </CardContent>
      </Card>
    </div>
  );
};
