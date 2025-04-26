
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { useChapterProgress } from "@/hooks/useChapterProgress";

export const QuickNavCards = () => {
  const navigate = useNavigate();
  const { getChapterLatestSection } = useChapterProgress();
  
  const getNextIncompleteChapter = () => {
    for (let i = 0; i <= 11; i++) {
      const chapterProgress = getChapterLatestSection(i);
      if (!chapterProgress?.completed_at) {
        return i;
      }
    }
    return 0;
  };

  const nextChapter = getNextIncompleteChapter();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Continue Learning</h3>
              <p className="text-sm text-muted-foreground">
                Pick up where you left off
              </p>
            </div>
            <Button 
              onClick={() => navigate(nextChapter === 0 ? "/dashboard/new-chapter" : `/dashboard/chapter-${nextChapter}`)}
              className="ml-4"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              {nextChapter === 0 ? "Start Introduction" : `Start Chapter ${nextChapter}`}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-secondary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                Access support resources
              </p>
            </div>
            <Button 
              variant="secondary"
              onClick={() => navigate("/dashboard/resources")}
              className="ml-4"
            >
              View Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
