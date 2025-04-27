
import { Card, CardContent } from "@/components/ui/card";
import { chapters } from "@/components/dashboard/chapters/types";
import { BookOpen } from "lucide-react";

export const ChapterPreviews = () => {
  // Select 3 key chapters to showcase
  const previewChapters = [
    chapters[4], // Market Analysis
    chapters[6], // Income Potential
    chapters[7]  // Best-Selling Products
  ];

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
