
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History, Timer, TrendingUp } from "lucide-react";

interface StorySectionProps {
  onSubmit?: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onSubmit }) => {
  return (
    <section className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <History className="h-6 w-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">My Story & Journey</h2>
        </div>

        <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
          <p className="text-gray-700 mb-6 leading-relaxed">
            You could say I'm a quick learner. Growing up in the age of social media and the internet, 
            combined with my unique perspectives from years studying philosophy and art history is definitely 
            one of the reasons I've been able to do so much in so little time.
          </p>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Before we get into the details of how to start and grow a business, I want you to go into 
              it with an open mind. Throw away any ideas you have about what you can or can't do, what 
              limitations you have - whether financial, geolocational or mental. If you believe that you 
              can succeed - you've already won the first of 2 battles. The second, is making it happen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In order to absorb the information in this book I need you to be agnostic. You've probably 
              seen YouTube videos talking about 3D printing, maybe you know a guy with one in his garage, 
              or maybe you read an article online. But for as much good information as there is online, 
              there's an equal amount of junk science. That's why I'm asking you to be a fresh slate. 
              Because an open mind will always grow faster than one who is clouded by preconception.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4">
              <Timer className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-gray-800">From $500 to $20K in 60 Days</h3>
            </div>
            
            <p className="text-gray-700 font-medium">First: I got lucky, and then I got smart.</p>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                When I bought my first 3D printer in August 2024 I had no idea what I wanted to make. 
                I just wanted to make. As an artist growing up in China - my family wasn't interested 
                in supporting my artistic expression. I wanted to create, they wanted me to go to school 
                and learn. So a philosophy and art history major was the best chance I had at doing both.
              </p>
              
              <p className="leading-relaxed">
                I bought a 3D printer at the tail end of summer vacation. I wanted to use it to make 
                mixed media art, expressions of the female form. But before I could make my first piece - 
                fate and opportunity got in the way. A friend who knew I was quite artistic asked me to 
                make a logo for his clothing store.
              </p>
              
              <p className="leading-relaxed">
                While we were chatting I was browsing the store and a rack of mini Air Jordan keychains 
                sparked an idea. What if I could make the logo, and then keychains out of it? And so 
                that's what I did.
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-8">
            <div className="flex items-center gap-3 border-b pb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-gray-800">Building a Real Business</h3>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Revenue is vanity. Profit is sanity. And all of mine went back into the business. 
                With the roughly 80% net margins I was averaging, I bought my second printer only a 
                week after my first sale. By the end of month 1 I'd taken my $500 investment and 
                turned it into 8 printers, inventory and the start of a side hustle. By the end of 
                month 2 I had what most would consider a viable small business, churning out more 
                than 5K of profit (after paying myself).
              </p>
              
              <p className="leading-relaxed">
                Now, less than 9 months after I loaded my first roll of filament - I've sold tens of 
                thousands of units of product around the world, helped thousands of people start or grow 
                their 3D business, and created multiple products from scratch - sold every day by others 
                thanks to the free commercial licenses I give away.
              </p>
              
              <p className="leading-relaxed">
                I say these things not to bolster my position, but to inspire you to create and to dream 
                big. Some of the people in the industry I once looked up to the most are now my co founders, 
                collaborators or colleagues. This isn't because I'm special. It's because I was at the right 
                time at the right place, and you are too.
              </p>
              
              <p className="font-medium mt-6">
                But you have to act fast. And then, you have to get smart.
              </p>
              
              <p className="italic">
                Remember, this isn't just about 3D printing—it's about recognizing and seizing a rare 
                arbitrage window of opportunity that won't stay open forever. Let's get started.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {onSubmit && (
        <div className="flex justify-end">
          <Button 
            onClick={onSubmit}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
          >
            Continue
          </Button>
        </div>
      )}
    </section>
  );
};
