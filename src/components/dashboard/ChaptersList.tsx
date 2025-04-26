import { useChapterProgress } from "@/hooks/useChapterProgress";
import { ChapterCard } from "./ChapterCard";

export const ChaptersList = () => {
  const { isChapterCompleted } = useChapterProgress();

  const chapters = [
    {
      number: 0,
      title: "Introduction: The Opportunity",
      description: "Understanding the 3D printing revolution and how to use this blueprint for success.",
      imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
    },
    {
      number: 1,
      title: "Arbitrage Windows",
      description: "Understand why now is the perfect time to start a 3D printing business and how to recognize valuable market opportunities.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 2,
      title: "Knowing Yourself, Knowing Your Tools",
      description: "Discover how to align your natural strengths with your business model using the Decision Tree Framework.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 3,
      title: "The 3 Plus 1 Equals 40 System",
      description: "Learn the powerful focus system that helped me turn $500 into $20,000 in just 60 days.",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
    },
    {
      number: 4,
      title: "The Product Trinity",
      description: "Master the P.R.O.F.I.T.S. MATCH framework for selecting products with the highest chance of success.",
      imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8"
    },
    {
      number: 5,
      title: "Choosing Your Production Tools",
      description: "Select the right printer and setup for your specific products and business goals.",
      imageUrl: "https://images.unsplash.com/photo-1615936998658-70e47a5ada00"
    },
    {
      number: 6,
      title: "Selecting Your Selling Platforms",
      description: "Identify the perfect platforms to reach your ideal customers without wasting time.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
    },
    {
      number: 7,
      title: "Setting Up for Success",
      description: "Create efficient workflows and systems that scale as your business grows.",
      imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f"
    },
    {
      number: 8,
      title: "Zero-Cost Marketing That Works",
      description: "Generate sales without spending money on ads using proven content strategies.",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8659373a3e97"
    },
    {
      number: 9,
      title: "Scaling Beyond $5K",
      description: "Take your established business to the next level with advanced strategies and systems.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      number: 10,
      title: "Future-Proofing Your Business",
      description: "Prepare for industry changes and position yourself for long-term success.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      number: 11,
      title: "The Journey Ahead",
      description: "Reflect on your journey and prepare for your next steps as a successful 3D printing entrepreneur.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Your Learning Journey</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
};
