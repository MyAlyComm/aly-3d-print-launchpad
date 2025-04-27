
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ContinueLearningProps {
  nextChapter: number;
}

export const ContinueLearning = ({ nextChapter }: ContinueLearningProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="mb-8">
      <div className="p-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="text-center md:text-left">
          <h4 className="font-medium text-lg break-words">Continue Reading</h4>
          <p className="text-sm text-muted-foreground break-words">
            {nextChapter === 0 ? "Start with My Story" : `Continue with Chapter ${nextChapter}`}
          </p>
        </div>
        <Button 
          onClick={() => navigate(nextChapter === 0 ? 
            "/dashboard/3d-blueprint/new-chapter" : 
            `/dashboard/3d-blueprint/chapter-${nextChapter}`
          )}
          className="whitespace-nowrap"
        >
          {nextChapter === 0 ? "Start Reading" : `Continue Chapter ${nextChapter}`}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
