
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { Card, CardContent } from "@/components/ui/card";

export const MarketingFunnel = () => {
  return (
    <div className="space-y-8">
      <ChapterSection title="The Zero-Cost Marketing Funnel: A 10-Step System">
        <div className="space-y-6">
          <p>
            Our marketing approach follows a systematized 10-step funnel that takes you from identifying
            your ideal customers all the way through to scaling your success. Let's explore the first 
            crucial steps that will set the foundation for your marketing success.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="step1">
              <AccordionTrigger className="text-lg font-medium">
                Step 1: Identify Your Ideal Customers
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="font-bold">Understanding the People Who Will Pay You</p>
                <p>
                  Nobody cares about your business. Let me repeat that again: NOBODY CARES ABOUT YOUR BUSINESS. 
                  What they care about is what your products can do for them.
                </p>
                
                <p>
                  This is where your Product Trinity from Chapter 4 becomes crucial. Each product in your 
                  Trinity likely appeals to slightly different customer segments:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your "Safe Bet" product might attract practical problem-solvers</li>
                  <li>Your "Strength Aligner" product could appeal to those who value your specific expertise</li>
                  <li>Your "Value Maximizer" product often attracts those seeking premium solutions</li>
                </ul>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-4">
                  <h4 className="font-bold mb-2">The Three Core Values Products Sell</h4>
                  <p>At its core, every product you sell falls into one of three categories based on what it's REALLY selling:</p>
                  
                  <div className="space-y-3 mt-3">
                    <div>
                      <p className="font-semibold">1. Time/Convenience:</p>
                      <p>Products that save time, solve problems, or make life easier. Customers buy these because they want efficiency and practical solutions.</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">2. Emotion/Experience:</p>
                      <p>Products that create feelings, enhance aesthetics, or bring joy. Customers buy these because of how they make them feel or the environment they create.</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">3. Differentiation/Branded Value:</p>
                      <p>Products similar to others but with your unique twist. Customers buy these because they connect with your approach, story, or brand.</p>
                    </div>
                  </div>
                </div>
                
                <p>
                  Looking at your Product Trinity, identify which of these core values each product primarily delivers.
                  This categorization will guide every marketing decision you make:
                </p>
                
                <ul className="list-disc pl-6 space-y-1">
                  <li>A product that sells Time/Convenience needs to focus on problem-solution messaging</li>
                  <li>A product that sells Emotion/Experience should showcase aesthetics and feelings</li>
                  <li>A product that sells Differentiation needs to highlight your unique approach</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="step2">
              <AccordionTrigger className="text-lg font-medium">
                Step 2: Master ONE Platform
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="font-bold">Learn the Art of Mastering Just ONE Platform and Then DOMINATE It</p>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-4">
                  <p className="font-bold text-center text-lg">REPEAT AFTER ME: DO NOT PAY FOR ADS.</p>
                </div>
                
                <p>
                  If you're just starting out in 3D printing, paid advertising is a straight path to burning cash. 
                  I've watched countless new entrepreneurs dump hundreds or even thousands of dollars into Facebook 
                  and Instagram ads with nothing to show for it but an empty bank account and a bruised ego.
                </p>
                
                <p className="font-semibold">Here's why paid ads fail for beginners:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">You don't know your numbers yet.</span> Professional marketers 
                    understand exactly how much they can pay to acquire a customer, what their customer lifetime 
                    value is, and how to optimize conversion rates. As a new business, you don't have this data yet, 
                    which means you're essentially gambling with your startup capital.
                  </li>
                  <li>
                    <span className="font-medium">The platforms are designed to take your money, not make you money.</span> Meta, 
                    Google, and TikTok don't care if your ads convert—they care if you keep spending. Their algorithms are 
                    sophisticated enough to show initial promise (a few cheap clicks or views) before progressively extracting 
                    more money for the same results.
                  </li>
                </ul>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-4">
                  <h4 className="font-bold mb-2">The key to success isn't being everywhere—it's being excellent somewhere.</h4>
                  <p>Choose ONE platform and master it completely before expanding. Here's how to choose:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h5 className="font-semibold mb-2">TikTok</h5>
                        <p className="text-sm">Best for emotion-driven products, viral potential, and reaching new audiences quickly. Ideal if your strongest products create feelings or experiences.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h5 className="font-semibold mb-2">Instagram Reels</h5>
                        <p className="text-sm">Best if you already have some Instagram presence or your products have strong visual appeal. Works well for all three product types but especially Differentiation-focused items.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h5 className="font-semibold mb-2">YouTube Shorts</h5>
                        <p className="text-sm">Best for more complex products, particularly Time/Convenience items that require more explanation. The longer format (up to 60 seconds) gives you time to show problem-solution sequences.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h5 className="font-semibold mb-2">Facebook Marketplace</h5>
                        <p className="text-sm">Best for local selling and testing without shipping logistics. Perfect for beginners regardless of product type.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <p className="font-medium">
                  Don't try to be on all platforms at once. Pick the single platform that best aligns with your 
                  strongest product and focus exclusively on mastering it for at least 30 days.
                </p>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-4">
                  <h4 className="font-bold mb-2">Platform Selection Decision Guide:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>If your strongest product sells <strong>Time/Convenience</strong> → YouTube Shorts or Facebook Marketplace</li>
                    <li>If your strongest product sells <strong>Emotion/Experience</strong> → TikTok or Instagram Reels</li>
                    <li>If your strongest product sells <strong>Differentiation</strong> → Instagram Reels or YouTube Shorts</li>
                    <li>If you're just starting and want immediate sales → Facebook Marketplace regardless of product type</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="step3">
              <AccordionTrigger className="text-lg font-medium">
                Step 3: Go Where They Already Are
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="font-bold">Position Yourself Where Your Customers Spend Their Time</p>
                <p>
                  Once you've chosen your platform, the next step is finding exactly where your ideal customers 
                  gather within that platform. This is the beginning of what I call the Value-First Flywheel—finding 
                  the right audience before you try to sell to them.
                </p>
                
                <p>
                  Instead of trying to build an audience from scratch, insert yourself into existing communities 
                  where your potential customers already spend time:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h5 className="font-semibold mb-2">TikTok Strategy</h5>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Research hashtags related to your products' use cases, not just #3Dprinting</li>
                        <li>Identify trending sounds in your customer niche (not just general trending sounds)</li>
                        <li>Analyze competitor content to see what's connecting with your potential audience</li>
                        <li>Focus on consumer problems and interests, not maker features</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h5 className="font-semibold mb-2">Instagram Strategy</h5>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Find niche-specific hashtags with 10K-500K posts (sweet spot for visibility)</li>
                        <li>Identify 10-15 creators serving your audience (but not selling your products)</li>
                        <li>Join engagement groups relevant to your customers' interests</li>
                        <li>Study saved content in your niche (it shows deeper interest than likes)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h5 className="font-semibold mb-2">YouTube Strategy</h5>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Search for problem-based queries related to what your products solve</li>
                        <li>Analyze comments on competitor videos to understand customer pain points</li>
                        <li>Find tutorial and how-to content related to your products' use cases</li>
                        <li>Look for questions people ask repeatedly in your niche</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h5 className="font-semibold mb-2">Facebook Marketplace Strategy</h5>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Search for similar products to see what categories perform best</li>
                        <li>Analyze listing descriptions that get the most views</li>
                        <li>Test different keywords in multiple local areas</li>
                        <li>Study the language customers use in messages and questions</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="font-medium">
                  Remember, the goal at this stage isn't to sell—it's to understand where your customers gather 
                  and what they care about. You're mapping the territory before you start building on it.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="step4">
              <AccordionTrigger className="text-lg font-medium">
                Step 4: Provide 3× Value Before Selling
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="font-bold">The 3:1 Ratio That Builds Trust and Opens Wallets</p>
                <p>
                  This is where the 3 Plus 1 system from Chapter 3 directly applies to your marketing. Just as you focus on 
                  three core products and one innovation project, your marketing should follow a similar ratio: provide 
                  three pieces of genuine value for every one promotional message.
                </p>
                
                <p>
                  The Value-First Flywheel's middle ring is all about building an audience by consistently providing 
                  value without asking for anything in return. This approach may seem counterintuitive when you're 
                  eager to make sales, but it's the fastest path to sustainable revenue.
                </p>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-4">
                  <h4 className="font-bold mb-2">The 3:1 Value Ratio By Product Type</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">For Time/Convenience Products:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Value Content: Tips, tutorials, problem-solving advice</li>
                        <li>Value Ratio: 3 helpful tips for every 1 product mention</li>
                        <li>Example: 3 videos showing workspace organization hacks, followed by 1 showcasing your desk organizer</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold">For Emotion/Experience Products:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Value Content: Inspiration, ideas, aesthetic appreciation</li>
                        <li>Value Ratio: 3 inspirational pieces for every 1 product showcase</li>
                        <li>Example: 3 posts highlighting beautiful plant arrangements, followed by 1 featuring your planters</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold">For Differentiation Products:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Value Content: Behind-the-scenes, education about your process, your unique approach</li>
                        <li>Value Ratio: 3 insider looks for every 1 product feature</li>
                        <li>Example: 3 videos showing your design philosophy, followed by 1 featuring a product it created</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p>
                  This isn't just a nice idea—it's a mathematical formula for building trust. Studies show that people 
                  need multiple positive interactions before they feel comfortable purchasing. The 3:1 ratio ensures 
                  you're creating enough positive touchpoints to build that comfort.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ChapterSection>
    </div>
  );
};
