import { Card, CardContent } from "@/components/ui/card";
import { chapters } from "@/components/dashboard/chapters/types";
import { BookOpen } from "lucide-react";
import { ArbitrageIntro } from "@/components/chapters/chapter1/ArbitrageIntro";
import { Introduction as IncomeChapter } from "@/components/chapters/chapter6/Introduction";
import { Introduction as BestSellersChapter } from "@/components/chapters/chapter7/Introduction";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ChapterPreviews = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const previewChapters = [
    {
      number: 0,
      title: "My Story: Zero to $20K",
      description: "The journey from a $300 printer to a global business in just 60 days.",
      imageUrl: chapters[0].imageUrl
    },
    {
      number: 1,
      title: "Finding Your Perfect Starting Point",
      description: `Learn how to identify your ideal "Home Base" platform and build strategically from there. We'll explore how to tap into existing marketplaces and leverage AI tools to maximize your success.`,
      imageUrl: chapters[0].imageUrl
    },
    chapters[7]  // Best-Selling Products
  ];

  const getChapterContent = (number: number) => {
    switch (number) {
      case 0:
        return (
          <div className="prose prose-sm max-w-none">
            <p className="mb-4">
              When I bought my first 3D printer, I had no idea it would change my life. It was a simple $300 machine, and I was just hoping to make some fun trinkets.
            </p>
            <p className="mb-4">
              60 days later, I had generated over $20,000 in sales and was managing a fleet of printers running 24/7. The demand was insane, and I could barely keep up.
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-3">The Turning Point</h3>
            <p className="mb-4">
              The real breakthrough came when I discovered there were "Arbitrage Windows" - periods where demand far exceeded supply, and the barriers to entry were still low.
            </p>
            <p className="mb-4">
              I wasn't competing on price or even quality initially. I was simply showing up where buyers already were, with products they already wanted, when few others were doing the same.
            </p>
            <p className="mb-6">
              This realization led me to develop systems and strategies that would eventually help hundreds of others build their own successful 3D printing businesses.
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-3">The Journey Ahead</h3>
            <p className="text-sm text-gray-600 italic">
              Continue reading to learn how a simple $300 investment turned into a thriving global business...
            </p>
          </div>
        );
      case 1:
        return (
          <div className="prose prose-sm max-w-none">
            <p className="mb-4">
              There's a million different ways to sell your 3D prints. In fact, between social media platforms and sales channels combined with the various softwares and content strategies associated with each - it can be incredibly overwhelming.
            </p>
            <p className="mb-4">
              In your first 60 days, you don't need to be everywhere. You need to master one platform first, then expand strategically.
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-3">The Platform Strategy</h3>
            <p className="mb-4">
              For people starting out I suggest picking a platform that already has traffic. If you spend a month building the world's best website but nobody knows it exists, you're not going to make very many sales.
            </p>
            <p className="mb-4">
              In the beginning your time is best spent by going somewhere there's already buyers. I started out by selling on Facebook Marketplace. It costs nothing to post, you can make listings in seconds, and with strategic pricing and keywords you can get eyeballs on your listings in minutes.
            </p>
            <p className="mb-6">
              I made enough money on Facebook in my first month that I was able to buy 7 more printers before I ever had a website.
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-3">Real Success Stories</h3>
            <p className="text-sm text-gray-600 italic">
              Read more to discover inspiring stories from Project Trill and Juri's journey in the complete chapter...
            </p>
          </div>
        );
      case 7:
        return <IncomeChapter />;
      case 8:
        return <BestSellersChapter />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Preview Key Chapters</h2>
          <p className="text-gray-600 text-lg">
            Get a glimpse of what's inside the complete blueprint
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {previewChapters.map((chapter) => (
            <Card 
              key={chapter.number}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">Chapter {chapter.number}</span>
                </div>
                
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {chapter.title}
                </h3>
                
                <p className="text-gray-600">
                  {chapter.description}
                </p>
                
                <Button
                  variant="outline"
                  onClick={() => setSelectedChapter(selectedChapter === chapter.number ? null : chapter.number)}
                  className="w-full"
                >
                  {selectedChapter === chapter.number ? "Close Preview" : "Read Preview"}
                </Button>

                {selectedChapter === chapter.number && (
                  <Card className="mt-4">
                    <CardContent className="p-4">
                      <ScrollArea className="h-[300px]">
                        {getChapterContent(chapter.number)}
                      </ScrollArea>
                    </CardContent>
                  </Card>
                )}
                
                {chapter.imageUrl && (
                  <div className="relative mt-4 aspect-video overflow-hidden rounded-lg">
                    <img
                      src={chapter.imageUrl}
                      alt={`Chapter ${chapter.number} preview`}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
