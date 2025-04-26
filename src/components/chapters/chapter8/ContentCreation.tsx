
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const ContentCreation = () => {
  return (
    <div className="space-y-8">
      <ChapterSection title="Step 5: Create Compelling Video Content">
        <div className="space-y-6">
          <p className="font-medium">The 3 Plus 1 Video System That Drives Sales Without Being Salesy</p>
          
          <p>
            Videos drive traffic. Period. Photos might showcase your products, but videos are what get eyeballs 
            on those products in the first place. Here's how to create effective video marketing for your Product 
            Trinity using our 3 Plus 1 system:
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold mb-4">First, choose your comfort level. You don't need to be a natural on camera to create effective videos:</h4>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Level 1: Product-Only (No face, no voice)</p>
                <ul className="list-disc pl-6">
                  <li>Show just your products with text overlays</li>
                  <li>Use music and captions to convey message</li>
                  <li>Perfect for camera-shy creators</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Level 2: Hands-Only (No face, minimal voice)</p>
                <ul className="list-disc pl-6">
                  <li>Show your hands demonstrating the product</li>
                  <li>Use simple narration if comfortable</li>
                  <li>Good balance of personal touch without exposure</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Level 3: Voice-Over (No face, just voice)</p>
                <ul className="list-disc pl-6">
                  <li>Product footage with your narration</li>
                  <li>Allows personality without being on camera</li>
                  <li>Great for those comfortable speaking</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Level 4: Full Presenter (On camera)</p>
                <ul className="list-disc pl-6">
                  <li>You appear as the presenter/demonstrator</li>
                  <li>Creates strongest connection with audience</li>
                  <li>Best for those comfortable on camera</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h4 className="font-semibold mb-4">Next, create a monthly plan following the 3 Plus 1 system:</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium">Week 1: Planning & Analysis</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Research top-performing videos in your product categories</li>
                  <li>Plan your specific video concepts for each product</li>
                  <li>Set up a simple filming area with good lighting</li>
                  <li>Create a content calendar for the month</li>
                  <li>Gather any props or materials needed for filming</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Week 2: First Core Content Creation</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Create ONE video for each product (3 total)</li>
                  <li>Each video should use the appropriate approach for that product's category</li>
                  <li>Focus on quality, clarity, and proper lighting</li>
                  <li>Post and analyze initial performance</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Week 3: Second Core Content Creation</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Create a SECOND video for each product (3 more total)</li>
                  <li>Apply learnings from your first week's performance</li>
                  <li>Try different angles or benefits for the same products</li>
                  <li>Maintain consistent branding elements</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Week 4: Plus 1 Documentation and Sharing</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Create 1-2 videos documenting your Week 4 "Plus 1" activities from Chapter 3</li>
                  <li>Share your learning process and progress with your audience</li>
                  <li>This "behind-the-scenes" content builds connection</li>
                  <li>Use a more authentic, documentary-style approach</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold mb-4">Tailor your content to what your products are REALLY selling:</h4>
            
            <div className="space-y-6">
              <div>
                <p className="font-medium">If your product SAVES TIME/EFFORT, show:</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="text-sm">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>The problem it solves</li>
                      <li>How it works</li>
                      <li>The time/effort saved</li>
                    </ul>
                  </div>
                  <div className="text-sm">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Real-world usage scenarios</li>
                      <li>Before → after transformations</li>
                      <li>Features → benefits translations</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm mt-2 font-medium">Keep videos under 30 seconds, direct and clear</p>
              </div>
              
              <Separator />
              
              <div>
                <p className="font-medium">If your product CREATES EMOTION, show:</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="text-sm">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>The aesthetic appeal</li>
                      <li>The environment it enhances</li>
                      <li>The mood it creates</li>
                    </ul>
                  </div>
                  <div className="text-sm">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>The lifestyle it represents</li>
                      <li>Product in its natural environment</li>
                      <li>Plain setting → transformed by your product</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm mt-2 font-medium">Soft lighting → dramatic lighting to set the mood</p>
              </div>
              
              <Separator />
              
              <div>
                <p className="font-medium">If your product offers UNIQUE DIFFERENTIATION, show:</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="text-sm">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Your unique features or approach</li>
                      <li>Your brand personality</li>
                      <li>What makes it special</li>
                    </ul>
                  </div>
                  <div className="text-sm">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Why people should choose yours</li>
                      <li>Competitors' approach → your unique approach</li>
                      <li>Standard features → your special additions</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm mt-2 font-medium">Generic experience → your branded experience</p>
              </div>
            </div>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="Steps 6-7: Customer Segmentation & Over-Delivering">
        <ChapterGrid className="grid-cols-1 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Step 6: Segment Your Customers</h3>
            <p className="text-sm">The Art of Moving Some Fast and Nurturing Others</p>
            
            <p>
              Not all customers are ready to buy at the same time. Some will purchase immediately upon discovering your 
              products, while others need nurturing through multiple touchpoints. Your marketing system needs to 
              accommodate both types.
            </p>
            
            <div className="space-y-4 mt-4">
              <div>
                <p className="font-medium">Fast-Track Components:</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Direct call-to-action links in profile/bio</li>
                  <li>"Shop now" stickers on stories</li>
                  <li>Clear pricing and availability information</li>
                  <li>Friction-free checkout process</li>
                  <li>Quick response to purchase inquiries</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Nurturing Components:</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Lead magnets that provide additional value</li>
                  <li>Simple landing pages that educate and build credibility</li>
                  <li>Follow-up content that addresses common objections</li>
                  <li>Social proof showcasing other customers' experiences</li>
                  <li>Engagement that builds relationship without pushing sales</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
              <h4 className="font-medium mb-2">Lead Magnets Based on Product Types</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">For Time/Convenience Products:</p>
                  <ul className="list-disc pl-6">
                    <li>Free guides that solve related problems</li>
                    <li>Checklists that simplify complex processes</li>
                    <li>Example: "5-Minute Desk Organization Checklist"</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium">For Emotion/Experience Products:</p>
                  <ul className="list-disc pl-6">
                    <li>Inspiration lookbooks</li>
                    <li>Style guides</li>
                    <li>Example: "Spring Planter Arrangement Guide"</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium">For Differentiation Products:</p>
                  <ul className="list-disc pl-6">
                    <li>Behind-the-scenes insights</li>
                    <li>Process explanations</li>
                    <li>Example: "Our Sustainable Design Approach"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Step 7: Over Deliver</h3>
            <p className="text-sm">The Art of an Exceptional Customer Experience</p>
            
            <p>
              The moment a customer makes a purchase is when your real marketing opportunity begins. Exceptional customer 
              experiences create word-of-mouth that no ad could ever replicate. This is especially powerful for 3D printing 
              businesses because you control the entire production and delivery process.
            </p>
            
            <div className="space-y-2 mt-4">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-medium">Shipping Speed Surprises</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1">
                    <li>Promise 5-7 day shipping but deliver in 2-3 days</li>
                    <li>Send immediate updates when orders ship</li>
                    <li>Use tracking options even for lower-priced items</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-medium">Packaging That Markets For You</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1">
                    <li>Include a QR code linking to your social profiles</li>
                    <li>Add a small "share your purchase" card with your handle</li>
                    <li>Use packaging appropriate for the product's value</li>
                    <li>Add Thank You notes (bonus: handwritten)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-medium">Unexpected Freebies</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1">
                    <li>Small complementary items based on product type</li>
                    <li>Printed care/maintenance instructions</li>
                    <li>Decorative elements that enhance the experience</li>
                    <li>Branded elements that reinforce your unique approach</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-medium">The Photo Incentive & Referral System</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1">
                    <li>Discount on next purchase for customers who share photos</li>
                    <li>Include two business cards—one to keep, one to share</li>
                    <li>Specific discount code they can share with friends</li>
                    <li>Simple referral program (10% off for both parties)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <p className="font-medium text-sm italic mt-4">
              Remember: The goal isn't just customer satisfaction; it's customer stories. 
              Give them something specific they'll want to tell others about.
            </p>
          </div>
        </ChapterGrid>
      </ChapterSection>
      
      <ChapterSection title="Steps 8-9: Creating Advocates & Partnerships">
        <ChapterGrid className="grid-cols-1 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Step 8: Turn Customers Into Advocates</h3>
            <p className="text-sm">Creating an Army of Unpaid Salespeople</p>
            
            <p>
              Your happiest customers can become your most effective marketing force—if you give them the tools and 
              incentives to do so. This step transforms one-time buyers into ongoing advocates who bring new customers to you.
            </p>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <h4 className="font-medium mb-2">The digital-physical connection is your unique advantage</h4>
              <p className="text-sm">
                Unlike purely digital products, your physical items exist in the real world where they're seen and discussed.
                Leverage this by creating shareable moments and amplifying social proof.
              </p>
            </div>
            
            <div className="space-y-3 mt-4">
              <div>
                <p className="font-medium">Creating Shareable Moments:</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Design products with "Instagram spots"—distinctive visual elements</li>
                  <li>Include a branded card suggesting sharing with a specific hashtag</li>
                  <li>Make the unboxing process itself worthy of recording</li>
                  <li>Add unexpected elements that create genuine surprise</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Amplifying Social Proof:</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Create a gallery of customer photos on your social profiles</li>
                  <li>Respond to and share every mention of your products</li>
                  <li>Feature customer stories prominently in your marketing</li>
                  <li>Create regular "customer spotlight" content</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
              <h4 className="font-medium mb-2">Building Community Around Products</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">For Time/Convenience products:</p>
                  <ul className="list-disc pl-6">
                    <li>Create problem-solving communities where customers share tips</li>
                    <li>Host occasional livestreams addressing common questions</li>
                    <li>Encourage customers to share their own hacks</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium">For Emotion/Experience products:</p>
                  <ul className="list-disc pl-6">
                    <li>Create hashtags for style collections or seasonal displays</li>
                    <li>Feature artistic arrangements of your products</li>
                    <li>Build communities around the lifestyle your products enhance</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium">For Differentiation products:</p>
                  <ul className="list-disc pl-6">
                    <li>Highlight the shared values between you and customers</li>
                    <li>Create "insider" content that makes customers feel included</li>
                    <li>Develop brand language and culture customers can adopt</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Step 9: Create Strategic Partnerships</h3>
            <p className="text-sm">Amplify Your Reach Through Collaboration</p>
            
            <p>
              Strategic partnerships with complementary businesses can exponentially expand your reach without spending 
              money on advertising. This approach leverages existing trust in other brands to introduce your products 
              to pre-qualified audiences.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <h4 className="font-medium mb-2">Identifying Potential Partners By Product Type</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">For Time/Convenience Products:</p>
                  <ul className="list-disc pl-6">
                    <li>Productivity tool creators</li>
                    <li>Organizational coaches</li>
                    <li>Efficiency experts</li>
                    <li>Example: Desk organizers + productivity app creators</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium">For Emotion/Experience Products:</p>
                  <ul className="list-disc pl-6">
                    <li>Style influencers</li>
                    <li>Interior designers</li>
                    <li>Lifestyle bloggers</li>
                    <li>Example: Planters + indoor plant shops</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium">For Differentiation Products:</p>
                  <ul className="list-disc pl-6">
                    <li>Values-aligned brands</li>
                    <li>Process-focused creators</li>
                    <li>Philosophy-sharing platforms</li>
                    <li>Example: Sustainable designs + eco-conscious bloggers</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-sm mt-4">
              Apply the 3:1 value exchange principle to partnerships as well. For every promotional opportunity 
              you request, offer three valuable contributions first.
            </p>
            
            <div className="space-y-3 mt-4">
              <div>
                <p className="font-medium">Partnership Value Exchange Ideas:</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Create exclusive designs for their audience</li>
                  <li>Offer special discount codes for their followers</li>
                  <li>Provide content for their platforms</li>
                  <li>Share their content with your audience</li>
                  <li>Create co-branded products or bundles</li>
                  <li>Contribute your expertise for their projects</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-medium mb-1">Effective Outreach Structure:</p>
                <ol className="list-decimal pl-6 text-sm space-y-1">
                  <li>Specific compliment showing you know their work</li>
                  <li>Clear explanation of audience overlap</li>
                  <li>Value you can provide (3 specific offerings)</li>
                  <li>Potential collaboration idea</li>
                  <li>Simple next step they can take</li>
                </ol>
              </div>
            </div>
          </div>
        </ChapterGrid>
      </ChapterSection>
    </div>
  );
};
