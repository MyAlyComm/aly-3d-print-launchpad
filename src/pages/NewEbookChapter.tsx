
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MiniProgress } from "@/components/progress/MiniProgress";
import { useToast } from "@/hooks/use-toast";
import { useChapterForm } from "@/hooks/useChapterForm";

const NewEbookChapter = () => {
  const [section, setSection] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Introduction chapter sections
  const sections = [
    {
      id: "opportunity",
      title: "The Opportunity",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">INTRODUCTION: THE OPPORTUNITY</h2>
          <p className="text-gray-700">
            3D printing used to be for tinkering engineers. Now it's for anyone.
          </p>
          <p className="text-gray-700">
            What was once a clunky mess of wires and hardware is now as sleek as an iPhone. When some people think of 3D printing, they think of cheap plastic toys and keychains. But the reality is that around the world, tens of thousands of entrepreneurs are making millions of dollars selling problem-solving products. And all you need to join them is a computer, a smartphone, and a place to plug in your printer.
          </p>
        </div>
      )
    },
    {
      id: "how-to-use",
      title: "How To Use This Book",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">HOW TO USE THIS BOOK</h2>
          <p className="text-gray-700">
            This book is designed to be both a practical guide and an action plan. Each chapter builds on the previous one, creating a complete roadmap from zero to your first $5,000+ in revenue.
          </p>
          <div className="space-y-3">
            <p className="text-gray-700 font-medium">To get the most out of this blueprint:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Complete the worksheets at the end of each chapter before moving to the next</li>
              <li>Take action quickly rather than seeking perfection</li>
              <li>Focus on one platform before expanding to others</li>
              <li>Follow the product selection framework exactly as outlined</li>
              <li>Trust the process even when it feels uncomfortable</li>
            </ul>
          </div>
          <p className="text-gray-700">
            What sets this book apart is that it's not theoretical—it's based on real results from hundreds of entrepreneurs I've mentored who have successfully built 3D printing businesses from scratch.
          </p>
        </div>
      )
    },
    {
      id: "book-structure",
      title: "Book Structure",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">BOOK STRUCTURE</h2>
          <p className="text-gray-700">
            I developed this book to be easy to follow. Each chapter begins with a bit of my story, my experience and the lessons I learned, as well as some philosophical ponderings that always question the bigger picture before getting too narrowed down on just one thing.
          </p>
          <p className="text-gray-700">
            After all, life is all about perspective. And the biggest reason I was successful was because at each step of my journey I would stop and reflect to understand my weaknesses - create a pathway to overcome them through learning, testing and iteration. And I would realign my perspective to always have the bigger picture in mind.
          </p>
          <p className="text-gray-700">
            At the conclusion of each chapter you'll be left with two things: a system to self-assess, and a system to grow. And I guarantee that each and every person who takes the time to complete these systems will walk away from this book a more well-rounded entrepreneur and a more empowered creator.
          </p>
        </div>
      )
    },
    {
      id: "chapters-overview",
      title: "Chapters Overview",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">CHAPTERS OVERVIEW</h2>
          <div className="space-y-4">
            {[
              { num: 1, title: "Arbitrage Windows - The Timelines of Opportunity", desc: "Understand why now is the perfect time to start a 3D printing business and how to recognize valuable market opportunities." },
              { num: 2, title: "Knowing Yourself, Knowing Your Tools", desc: "Discover how to align your natural strengths with your business model using the Decision Tree Framework." },
              { num: 3, title: "The 3 Plus 1 Equals 40 System", desc: "Learn the powerful focus system that helped me turn $500 into $20,000 in just 60 days." },
              { num: 4, title: "The Product Trinity - Finding Your First Three Winning Products", desc: "Master the P.R.O.F.I.T.S. MATCH framework for selecting products with the highest chance of success." },
              { num: 5, title: "Choosing Your Production Tools", desc: "Select the right printer and setup for your specific products and business goals." },
              { num: 6, title: "Selecting Your Selling Platforms", desc: "Identify the perfect platforms to reach your ideal customers without wasting time." },
              { num: 7, title: "Setting Up for Success", desc: "Create efficient workflows and systems that scale as your business grows." },
              { num: 8, title: "Zero-Cost Marketing That Works", desc: "Generate sales without spending money on ads using proven content strategies." },
              { num: 9, title: "Scaling Beyond $5K", desc: "Take your established business to the next level with advanced strategies and systems." },
              { num: 10, title: "Future-Proofing Your Business", desc: "Prepare for industry changes and position yourself for long-term success." }
            ].map((chapter) => (
              <div key={chapter.num} className="border-l-4 border-primary pl-4">
                <h3 className="font-bold">Chapter {chapter.num}: {chapter.title}</h3>
                <p className="text-gray-600 text-sm">{chapter.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "story",
      title: "My Story & Journey",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">MY STORY & JOURNEY</h2>
          <p className="text-gray-700">
            You could say I'm a quick learner. Growing up in the age of social media and the internet, combined with my unique perspectives from years studying philosophy and art history is definitely one of the reasons I've been able to do so much in so little time.
          </p>
          <p className="text-gray-700">
            Before we get into the details of how to start and grow a business, I want you to go into it with an open mind. Throw away any ideas you have about what you can or can't do, what limitations you have - whether financial, geolocational or mental. If you believe that you can succeed - you've already won the first of 2 battles. The second, is making it happen.
          </p>
          <p className="text-gray-700">
            In order to absorb the information in this book I need you to be agnostic. You've probably seen YouTube videos talking about 3D printing, maybe you know a guy with one in his garage, or maybe you read an article online. But for as much good information as there is online, there's an equal amount of junk science. That's why I'm asking you to be a fresh slate. Because an open mind will always grow faster than one who is clouded by preconception.
          </p>
        </div>
      )
    },
    {
      id: "journey",
      title: "From $500 to $20K",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">From $500 to $20K in 60 Days</h3>
          <p className="text-gray-700">
            First: I got lucky, and then I got smart.
          </p>
          <p className="text-gray-700">
            When I bought my first 3D printer in August 2024 I had no idea what I wanted to make. I just wanted to make. As an artist growing up in China - my family wasn't interested in supporting my artistic expression. I wanted to create, they wanted me to go to school and learn. So a philosophy and art history major was the best chance I had at doing both.
          </p>
          <p className="text-gray-700">
            I bought a 3D printer at the tail end of summer vacation. I wanted to use it to make mixed media art, expressions of the female form. But before I could make my first piece - fate and opportunity got in the way. A friend who knew I was quite artistic asked me to make a logo for his clothing store.
          </p>
          <p className="text-gray-700">
            While we were chatting I was browsing the store and a rack of mini Air Jordan keychains sparked an idea. What if I could make the logo, and then keychains out of it? And so that's what I did.
          </p>
          <p className="text-gray-700">
            The following 2 months led me on a rollercoaster of constant learning, struggles, success and growth. I got scammed online trying to hire my first 3D modeler. I got told I was stupid on Facebook groups by more men than I can count. And I made tactical errors that cost me tens of thousands of dollars, if not more.
          </p>
          <p className="text-gray-700">
            But through it all I somehow managed to make $500 in my first week. $6,300 in my first month. And almost $20K after 60 days.
          </p>
        </div>
      )
    },
    {
      id: "business",
      title: "Building a Real Business",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Building a Real Business</h3>
          <p className="text-gray-700">
            Revenue is vanity. Profit is sanity. And all of mine went back into the business. With the roughly 80% net margins I was averaging, I bought my second printer only a week after my first sale. By the end of month 1 I'd taken my $500 investment and turned it into 8 printers, inventory and the start of a side hustle. By the end of month 2 I had what most would consider a viable small business, churning out more than 5K of profit (after paying myself).
          </p>
          <p className="text-gray-700">
            I did that part time, while going to University - with nothing more than the internet and a little advice from some friends.
          </p>
          <p className="text-gray-700">
            Now, less than 9 months after I loaded my first roll of filament - I've sold tens of thousands of units of product around the world, helped thousands of people start or grow their 3D business, and created multiple products from scratch - sold every day by others thanks to the free commercial licenses I give away.
          </p>
          <p className="text-gray-700">
            What's even crazier is that I've learned so much and grown so fast that several of the biggest multibillion dollar companies in the space have sought me out to hire me to run a project, consult on marketing efforts & give insights on the state of industry. Every day I'm approached by companies asking me to work with them and my inbox is constantly filled with messages asking for help - I get very little sleep.
          </p>
          <p className="text-gray-700">
            And while I may have billion dollar ambitions I know that not everyone can handle the constant workload of 16 hour days. It's why I'm creating a first of its kind set of AI powered agents to help people like you save time and create more intrinsic value. It's a technology that pushed me to the limits of my mental and metaphysical capacities, and one that I plan to spend years perfecting.
          </p>
        </div>
      )
    },
    {
      id: "conclusion",
      title: "Conclusion",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            I say these things not to bolster my position, but to inspire you to create and to dream big. Some of the people in the industry I once looked up to the most are now my co founders, collaborators or colleagues. This isn't because I'm special. It's because I was at the right time at the right place, and you are too.
          </p>
          <p className="text-gray-700">
            But you have to act fast. And then, you have to get smart.
          </p>
          <p className="text-gray-700 font-medium">
            Remember, this isn't just about 3D printing—it's about recognizing and seizing a rare arbitrage window of opportunity that won't stay open forever. Let's get started.
          </p>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-center">
              <Button 
                onClick={() => {
                  toast({
                    title: "Introduction Completed!",
                    description: "You're ready to continue to Chapter 1."
                  });
                  navigate("/dashboard");
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                Complete Introduction
              </Button>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (section < sections.length - 1) {
      setSection(section + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (section > 0) {
      setSection(section - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <DashboardLayout title="Introduction: The Opportunity">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <MiniProgress currentChapter={0} />
        
        <Card className="mb-6">
          <CardContent className="p-6">
            {sections[section].content}
            
            <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={section === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              
              {section < sections.length - 1 ? (
                <Button onClick={handleNext}>
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default NewEbookChapter;
