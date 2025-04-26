
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";

export const Introduction = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">
        Chapter 8: Zero-Cost Marketing That Works
      </h1>
      
      <ChapterSection title="Introduction: The Real Deal on Marketing">
        <div className="space-y-6">
          <p>
            The reason so many of the biggest brands in the industry come to me asking for help isn't because 
            I shot the perfect and most cinematic reels or built the most cutting edge ecommerce sites, it's 
            because I'm really good at marketing. And marketing is the thing that will make or break your new business.
          </p>
          
          <p className="font-medium">
            The good news is you don't have to be a marketing expert, social media influencer or content creator 
            to get sales or grow your brand. All you have to do is figure out who your customers are (before they 
            become one), and create a system that attracts them.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="italic">
              There is a tremendous amount of nuance when it comes to advertising and funneling. The customer 
              journey could be a years long orchestration of careful community building and value giving, or it 
              could be a 5 second video and they've added to cart before it's even finished. There's no right way 
              to do it, there's a ton of wrong ways, and the way that's best for you will change over time. 
              <span className="font-medium"> Time will be our guiding light here.</span>
            </p>
          </div>
          
          <p>
            You might have the best system on paper but the only 2 things here that matter are results, and the 
            public perception of your business. And most people spend way too much time focused on the latter. 
            You want fast results and I want to give you the best advice tailored to your situation.
          </p>
        </div>
      </ChapterSection>
      
      <ChapterSection title="The Framework For This Chapter">
        <div className="space-y-6">
          <p>
            Instead of overwhelming you with disconnected tactics or theoretical frameworks, I've distilled 
            everything I've learned into a sequential 10-step system that creates a clear path from finding 
            customers to scaling your success.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <InfoCard 
              title="What You'll Learn" 
              points={[
                "How to identify your ideal customers with precision",
                "Why focusing on ONE platform is crucial for beginners",
                "How to leverage existing communities instead of building from scratch",
                "Creating content that actually drives sales, not just likes",
                "Turning one-time buyers into repeat customers and advocates"
              ]}
            />
            
            <InfoCard 
              title="Why This Matters" 
              points={[
                "Marketing makes or breaks your 3D printing business",
                "Zero-cost doesn't mean zero-effort, but it does mean zero financial risk",
                "These strategies have worked for hundreds of my students",
                "This system is specifically designed for 3D printing businesses",
                "You'll create a sustainable system, not just a one-time campaign"
              ]}
            />
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">The Zero-Cost Marketing Promise</h3>
            <p>
              By the end of this chapter, you'll have a complete marketing system that requires no advertising budget. 
              You'll know exactly where your customers are, what content will attract them, and how to turn them into 
              not just buyers but advocates for your business.
            </p>
          </div>
        </div>
      </ChapterSection>
    </div>
  );
};
