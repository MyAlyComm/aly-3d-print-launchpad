import { useChapterProgress } from "@/hooks/useChapterProgress";
import { ChapterCard } from "./ChapterCard";

export const ChaptersList = () => {
  const { isChapterCompleted } = useChapterProgress();

  const chapters = [
    {
      number: 1,
      title: "Arbitrage Windows",
      description: "The timelines of opportunity in the 3D printing industry.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 2,
      title: "Knowing Yourself, Knowing Your Tools",
      description: "Discover your optimal path based on your skills and resources.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 3,
      title: "The 3 Plus 1 Equals 40 System",
      description: "A system for creating sustainable revenue in 3D printing.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 4,
      title: "The Product Trinity",
      description: "Finding your first three winning products using the P.R.O.F.I.T.S. MATCH framework.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 5,
      title: "Choosing Your Production Tools",
      description: "Select the right printer and accessories for your specific needs.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 6,
      title: "Selecting Your Selling Platforms",
      description: "Find the optimal platforms to sell your 3D printed products.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 7,
      title: "Setting Up for Success",
      description: "The 5-step setup system for consistent production and quality.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 8,
      title: "Zero-Cost Marketing That Works",
      description: "A 10-step system to market your products without spending money.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 9,
      title: "Scaling Beyond $5K",
      description: "Strategies to scale your business beyond the initial milestones.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 10,
      title: "Future-Proofing Your Business",
      description: "Position your business for long-term success in a changing market.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 11,
      title: "Your Business Ecosystem",
      description: "Building systems and partnerships that support sustainable growth.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 12,
      title: "Advanced Product Development",
      description: "Taking your product line to the next level with innovation.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 13,
      title: "The Journey Ahead",
      description: "Final strategies, resources, and next steps for your business.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
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
