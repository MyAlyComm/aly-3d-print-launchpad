
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
      imageUrl: "/lovable-uploads/cd69d117-8edf-4d26-8dca-118a8eefc2ca.png"
    },
    {
      number: 1,
      title: "Arbitrage Windows",
      description: "Understand why now is the perfect time to start a 3D printing business and how to recognize valuable market opportunities.",
      imageUrl: "/lovable-uploads/e2aae954-787a-4ee9-8049-b54a740fbb08.png"
    },
    {
      number: 2,
      title: "Knowing Yourself, Knowing Your Tools",
      description: "Discover how to align your natural strengths with your business model using the Decision Tree Framework.",
      imageUrl: "/lovable-uploads/505facc9-e951-45f0-95d1-5273e941c0e7.png"
    },
    {
      number: 3,
      title: "The 3 Plus 1 Equals 40 System",
      description: "Learn the powerful focus system that helped me turn $500 into $20,000 in just 60 days.",
      imageUrl: "/lovable-uploads/7b8f148d-7d41-4060-8f03-392a74f14209.png"
    },
    {
      number: 4,
      title: "The Product Trinity",
      description: "Master the P.R.O.F.I.T.S. MATCH framework for selecting products with the highest chance of success.",
      imageUrl: "/lovable-uploads/9d3b4d8b-3516-44e5-9408-8021aafb2f0f.png"
    },
    {
      number: 5,
      title: "Choosing Your Production Tools",
      description: "Select the right printer and setup for your specific products and business goals.",
      imageUrl: "/lovable-uploads/fc1baf39-e8b0-4bb0-b151-42f879ec5c0d.png"
    },
    {
      number: 6,
      title: "Selecting Your Selling Platforms",
      description: "Identify the perfect platforms to reach your ideal customers without wasting time.",
      imageUrl: "/lovable-uploads/d464c414-aae6-45ea-b79e-d96b4579e828.png"
    },
    {
      number: 7,
      title: "Setting Up for Success",
      description: "Create efficient workflows and systems that scale as your business grows.",
      imageUrl: "/lovable-uploads/d2ab4c55-dca3-4e07-9774-604ce70e2974.png"
    },
    {
      number: 8,
      title: "Zero-Cost Marketing That Works",
      description: "Generate sales without spending money on ads using proven content strategies.",
      imageUrl: "/lovable-uploads/a7e858b3-990b-44cc-b009-5e12f0dca422.png"
    },
    {
      number: 9,
      title: "Scaling Beyond $5K",
      description: "Take your established business to the next level with advanced strategies and systems.",
      imageUrl: "/lovable-uploads/c6bb8abe-6465-4ec3-b3a3-199bc39b343e.png"
    },
    {
      number: 10,
      title: "Future-Proofing Your Business",
      description: "Prepare for industry changes and position yourself for long-term success.",
      imageUrl: "/lovable-uploads/0b66cdea-300e-480b-94fb-66b15d2b9dd7.png"
    },
    {
      number: 11,
      title: "The Journey Ahead",
      description: "Reflect on your journey and prepare for your next steps as a successful 3D printing entrepreneur.",
      imageUrl: "/lovable-uploads/d464c414-aae6-45ea-b79e-d96b4579e828.png"
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
