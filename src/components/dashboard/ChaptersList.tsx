
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { ChapterCard } from "./ChapterCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const ChaptersList = () => {
  const { isChapterCompleted, calculateOverallProgress } = useChapterProgress();
  const navigate = useNavigate();
  const progress = calculateOverallProgress();

  const chapters = [
    {
      number: 0,
      title: "Introduction: The Opportunity",
      description: "Understanding the 3D printing revolution and how to use this blueprint for success.",
      imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      number: 1,
      title: "Arbitrage Windows",
      description: "Understand why now is the perfect time to start a 3D printing business and how to recognize valuable market opportunities.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      number: 2,
      title: "Knowing Yourself, Knowing Your Tools",
      description: "Discover how to align your natural strengths with your business model using the Decision Tree Framework.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      number: 3,
      title: "The 3 Plus 1 Equals 40 System",
      description: "Learn the powerful focus system that helped me turn $500 into $20,000 in just 60 days.",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      number: 4,
      title: "The Product Trinity",
      description: "Master the P.R.O.F.I.T.S. MATCH framework for selecting products with the highest chance of success.",
      imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      number: 5,
      title: "Choosing Your Production Tools",
      description: "Select the right printer and setup for your specific products and business goals.",
      imageUrl: "https://images.unsplash.com/photo-1615936998658-70e47a5ada00?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      number: 6,
      title: "Selecting Your Selling Platforms",
      description: "Identify the perfect platforms to reach your ideal customers without wasting time.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      number: 7,
      title: "Setting Up for Success",
      description: "Create efficient workflows and systems that scale as your business grows.",
      imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      number: 8,
      title: "Zero-Cost Marketing That Works",
      description: "Generate sales without spending money on ads using proven content strategies.",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8659373a3e97?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      number: 9,
      title: "Scaling Beyond $5K",
      description: "Take your established business to the next level with advanced strategies and systems.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      number: 10,
      title: "Future-Proofing Your Business",
      description: "Prepare for industry changes and position yourself for long-term success.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      number: 11,
      title: "The Journey Ahead",
      description: "Reflect on your journey and prepare for your next steps as a successful 3D printing entrepreneur.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=500"
    }
  ];

  // Find the next chapter to complete
  const findNextChapterToComplete = () => {
    for (let i = 0; i <= 11; i++) {
      if (!isChapterCompleted(i)) {
        return i;
      }
    }
    return 0;
  };

  const nextChapter = findNextChapterToComplete();
  
  // Group chapters for tab display
  const beginnerChapters = chapters.filter(c => c.number >= 0 && c.number <= 3);
  const intermediateChapters = chapters.filter(c => c.number >= 4 && c.number <= 7);
  const advancedChapters = chapters.filter(c => c.number >= 8 && c.number <= 11);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h3 className="text-xl font-bold">Your Learning Journey</h3>
        <div className="w-full md:w-1/3 space-y-1">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>
      
      <div className="mb-8">
        <div className="p-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg flex flex-col md:flex-row gap-4 justify-between items-center">
          <div>
            <h4 className="font-medium text-lg">Continue Learning</h4>
            <p className="text-sm text-muted-foreground">
              {nextChapter === 0 ? "Start with the Introduction" : `Resume with Chapter ${nextChapter}`}
            </p>
          </div>
          <Button 
            onClick={() => navigate(nextChapter === 0 ? 
              "/dashboard/new-chapter" : 
              `/dashboard/chapter-${nextChapter}`
            )}
          >
            {nextChapter === 0 ? "Start Introduction" : `Continue Chapter ${nextChapter}`}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Chapters</TabsTrigger>
          <TabsTrigger value="beginner">Beginner (0-3)</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate (4-7)</TabsTrigger>
          <TabsTrigger value="advanced">Advanced (8-11)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6">
            {chapters.map((chapter) => (
              <ChapterCard
                key={chapter.number}
                number={chapter.number}
                title={chapter.title}
                description={chapter.description}
                isCompleted={isChapterCompleted(chapter.number)}
                imageUrl={chapter.imageUrl}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="beginner" className="mt-0">
          <div className="grid gap-6">
            {beginnerChapters.map((chapter) => (
              <ChapterCard
                key={chapter.number}
                number={chapter.number}
                title={chapter.title}
                description={chapter.description}
                isCompleted={isChapterCompleted(chapter.number)}
                imageUrl={chapter.imageUrl}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="intermediate" className="mt-0">
          <div className="grid gap-6">
            {intermediateChapters.map((chapter) => (
              <ChapterCard
                key={chapter.number}
                number={chapter.number}
                title={chapter.title}
                description={chapter.description}
                isCompleted={isChapterCompleted(chapter.number)}
                imageUrl={chapter.imageUrl}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="mt-0">
          <div className="grid gap-6">
            {advancedChapters.map((chapter) => (
              <ChapterCard
                key={chapter.number}
                number={chapter.number}
                title={chapter.title}
                description={chapter.description}
                isCompleted={isChapterCompleted(chapter.number)}
                imageUrl={chapter.imageUrl}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
