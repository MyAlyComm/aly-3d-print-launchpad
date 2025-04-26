
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, BookOpen } from "lucide-react";
import { useChapterForm } from "@/hooks/useChapterForm";

interface BookIntroSectionProps {
  onSubmit?: () => void;
}

export const BookIntroSection: React.FC<BookIntroSectionProps> = ({ onSubmit }) => {
  const { saveResponse } = useChapterForm(1, 'intro');
  
  const handleContinue = () => {
    saveResponse('introduction-complete', {
      checkboxes: { viewed: true }
    }, true);
    if (onSubmit) onSubmit();
  };

  return (
    <section className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Book className="h-6 w-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome to Your Journey</h2>
        </div>

        <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
          <p className="text-gray-700 mb-6 leading-relaxed">
            I developed this book to be easy to follow. Each chapter begins with a bit of my story, 
            my experience and the lessons I learned, as well as some philosophical ponderings that 
            always question the bigger picture before getting too narrowed down on just one thing.
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            After all, life is all about perspective. And the biggest reason I was successful was 
            because at each step of my journey I would stop and reflect to understand my weaknesses - 
            create a pathway to overcome them through learning, testing and iteration. And I would 
            realign my perspective to always have the bigger picture in mind.
          </p>

          <p className="text-gray-700 font-medium">
            At the conclusion of each chapter you'll be left with two things:
          </p>
          <ul className="list-disc list-inside mb-6 mt-2 space-y-1 text-gray-700">
            <li>A system to self-assess</li>
            <li>A system to grow</li>
          </ul>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold text-gray-800">Chapter Overview</h3>
          </div>
          
          <div className="grid gap-4">
            {[
              {
                number: 1,
                title: "Arbitrage Windows - The Timelines of Opportunity",
                description: "Understand why now is the perfect time to start a 3D printing business and how to recognize valuable market opportunities."
              },
              {
                number: 2,
                title: "Knowing Yourself, Knowing Your Tools",
                description: "Discover how to align your natural strengths with your business model using the Decision Tree Framework."
              },
              {
                number: 3,
                title: "The 3 Plus 1 Equals 40 System",
                description: "Learn the powerful focus system that helped me turn $500 into $20,000 in just 60 days."
              },
              {
                number: 4,
                title: "The Product Trinity - Finding Your First Three Winning Products",
                description: "Master the P.R.O.F.I.T.S. MATCH framework for selecting products with the highest chance of success."
              },
              {
                number: 5,
                title: "Choosing Your Production Tools",
                description: "Select the right printer and setup for your specific products and business goals."
              },
              {
                number: 6,
                title: "Selecting Your Selling Platforms",
                description: "Identify the perfect platforms to reach your ideal customers without wasting time."
              },
              {
                number: 7,
                title: "Setting Up for Success",
                description: "Create efficient workflows and systems that scale as your business grows."
              },
              {
                number: 8,
                title: "Zero-Cost Marketing That Works",
                description: "Generate sales without spending money on ads using proven content strategies."
              },
              {
                number: 9,
                title: "Scaling Beyond $5K",
                description: "Take your established business to the next level with advanced strategies and systems."
              },
              {
                number: 10,
                title: "Future-Proofing Your Business",
                description: "Prepare for industry changes and position yourself for long-term success."
              }
            ].map((chapter) => (
              <Card key={chapter.number} className="p-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">{chapter.number}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{chapter.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{chapter.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {onSubmit && (
        <div className="flex justify-end">
          <Button 
            onClick={handleContinue}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
          >
            Start Chapter 1
          </Button>
        </div>
      )}
    </section>
  );
};
