
import React from 'react';
import { Card } from "@/components/ui/card";

export const DecisionTreeSection = () => {
  return (
    <section id="framework" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">The Decision Tree Framework</h2>
      
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
          alt="Decision making framework"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 italic text-center">Finding your path through structured decision-making</p>
      </div>

      <Card className="p-6 mb-8">
        <div className="space-y-4">
          <p>After helping thousands of aspiring 3D printing entrepreneurs, I've developed a comprehensive decision framework that will guide you toward your optimal path. Unlike one-size-fits-all advice, this framework considers your unique combination of circumstances, skills, and ambitions.</p>
          <p>The beauty of this approach is that it doesn't ask you to make decisions about things you don't yet understand (like which markets to target). Instead, it focuses on what you already know about yourself and your situation, then provides tailored recommendations.</p>
          <p>Let's walk through the seven key factors that will determine your optimal path:</p>
        </div>
      </Card>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">1. Budget Assessment</h3>
          <Card className="p-6">
            <p className="mb-4">Your available capital is the first and most concrete factor in determining your path. But here's the surprising truth: you can start a 3D printing business with literally $0. Let's look at each budget tier:</p>
            
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="font-bold text-lg">$0 Budget</h4>
                <p className="mt-2">Even with no money to invest upfront:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You can focus on brokering deals between existing printing businesses and clients</li>
                  <li>You can set up dropshipping arrangements with established producers</li>
                  <li>You can provide design services that others can print</li>
                  <li>You can leverage partnerships where others handle production while you focus on marketing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">$500-$1,000 Budget</h4>
                <p className="mt-2">With this entry-level investment:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You can purchase a single budget printer and basic supplies</li>
                  <li>You'll need to focus on high-margin products to recoup your investment quickly</li>
                  <li>Your growth will be gradual but sustainable</li>
                  <li>You'll reinvest almost everything in the early months</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">$1,000-$2,000 Budget</h4>
                <p className="mt-2">This middle range offers more flexibility:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You can start with a higher-quality printer or multiple budget printers</li>
                  <li>You can test more product ideas simultaneously</li>
                  <li>You have some buffer for marketing experiments</li>
                  <li>You can afford more diverse materials and finishes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">$2,000-$5,000 Budget</h4>
                <p className="mt-2">With this substantial investment:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You can create a small production setup with multiple printers</li>
                  <li>You can enter more material-intensive niches</li>
                  <li>You have significant room for testing different product lines</li>
                  <li>You can set up more automated workflows from day one</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">$5,000+ Budget</h4>
                <p className="mt-2">For those with significant resources:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You can build a professional-level operation from the start</li>
                  <li>You can invest in advanced automation and workflow tools</li>
                  <li>You can support large-scale production and rapid iteration</li>
                  <li>You can consider more strategic marketing campaigns</li>
                </ul>
              </div>
            </div>
            <p className="mt-6">Be honest with yourself about which tier you're in. There's no shame in starting small—I did, and it forced me to be strategic rather than wasteful. What matters is aligning your strategy with your resources.</p>
          </Card>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">2. 3D Printing Experience</h3>
          <Card className="p-6">
            <p className="mb-4">Your existing level of experience with 3D printing technology impacts how quickly you can get started and what learning curve you're facing:</p>
            
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="font-bold text-lg">No Experience</h4>
                <p className="mt-2">If you've never used a 3D printer before:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You'll need to allocate time for basic learning and troubleshooting</li>
                  <li>You should choose beginner-friendly printers with good support</li>
                  <li>Your initial products should be simpler designs with reliable prints</li>
                  <li>You'll benefit from starting with proven, tested models</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Beginner Experience</h4>
                <p className="mt-2">If you've used 3D printers but aren't confident:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You understand the basics but are still learning optimization</li>
                  <li>You can handle common issues but might struggle with complex ones</li>
                  <li>You'll benefit from communities and resources for ongoing learning</li>
                  <li>You should focus on mastering one printer before expanding</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Intermediate Experience</h4>
                <p className="mt-2">If you're comfortable with 3D printing technology:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You can troubleshoot most common issues without assistance</li>
                  <li>You understand the trade-offs between speed, quality, and durability</li>
                  <li>You can make informed choices about different materials and settings</li>
                  <li>You can handle a small fleet of printers efficiently</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Advanced Experience</h4>
                <p className="mt-2">If you're highly skilled with 3D printing:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You can optimize print settings for maximum efficiency</li>
                  <li>You understand the technical nuances of different printer types</li>
                  <li>You can modify and repair printers when needed</li>
                  <li>You can handle complex, multi-material or large prints</li>
                </ul>
              </div>
            </div>
            <p className="mt-6">Your experience level isn't a permanent limitation—it's just your starting point. The key is to be honest about where you are now so you can choose the appropriate learning path.</p>
          </Card>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">3. Time Availability</h3>
          <Card className="p-6">
            <p className="mb-4">How much time you can realistically dedicate to your business will shape your entire strategy:</p>
            
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="font-bold text-lg">1-5 Hours Per Week</h4>
                <p className="mt-2">If you have minimal time (perhaps alongside a full-time job):</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You'll need to focus on heavily automated processes</li>
                  <li>You should choose longer prints that run while you're busy elsewhere</li>
                  <li>You'll want to prioritize low-maintenance products and systems</li>
                  <li>You might consider partnership models where others handle time-intensive tasks</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">5-15 Hours Per Week</h4>
                <p className="mt-2">With this part-time commitment:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You can manage a small product line with regular attention</li>
                  <li>You'll need systems that maximize your productivity during available hours</li>
                  <li>You might focus more on weekend batch production</li>
                  <li>You can handle some custom orders with longer turnaround times</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">15-30 Hours Per Week</h4>
                <p className="mt-2">With significant part-time dedication:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You can manage a diverse product line</li>
                  <li>You can handle moderate customer interaction and custom orders</li>
                  <li>You can implement more active marketing strategies</li>
                  <li>You can dedicate time to ongoing learning and optimization</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">30+ Hours Per Week</h4>
                <p className="mt-2">With full-time focus:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You can scale more rapidly across multiple products</li>
                  <li>You can manage complex production schedules</li>
                  <li>You can engage more deeply with your market</li>
                  <li>You can dedicate significant time to growth strategies</li>
                </ul>
              </div>
            </div>
            <p className="mt-6">Be realistic about your time—overcommitting leads to burnout, while underutilizing your available hours leaves opportunity on the table.</p>
          </Card>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">4. Your Strongest Skills</h3>
          <Card className="p-6">
            <p className="mb-4">Your existing skills are perhaps your greatest asset. The optimal business model leverages what you're already good at:</p>
            
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="font-bold text-lg">Design Skills</h4>
                <p className="mt-2">If you're strong in design and creative work:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You might focus on creating unique, high-value models</li>
                  <li>You could offer custom design services alongside physical products</li>
                  <li>You'll excel at creating visually distinctive branding</li>
                  <li>You might consider selling designs as STL files in addition to printed products</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Marketing Skills</h4>
                <p className="mt-2">If you excel at promotion and customer acquisition:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You might focus less on unique products and more on superior marketing</li>
                  <li>You could build stronger social media presence and content strategy</li>
                  <li>You'll be better positioned to create viral campaigns</li>
                  <li>You could partner with designers while you handle the selling</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Technical Skills</h4>
                <p className="mt-2">If you're technically inclined:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You might offer more complex or precision-dependent products</li>
                  <li>You could provide engineering-focused solutions</li>
                  <li>You'll be better at optimizing production workflows</li>
                  <li>You might develop unique technical improvements to common products</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Business/Sales Skills</h4>
                <p className="mt-2">If you're strong in business operations or sales:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You might focus on scaling operations and building systems</li>
                  <li>You could excel at B2B relationships and larger contracts</li>
                  <li>You'll be better at negotiating partnerships and deals</li>
                  <li>You might build a team faster while focusing on management</li>
                </ul>
              </div>
            </div>
            <p className="mt-6">Your strongest skills should guide your business model. Don't fight against your natural strengths trying to follow someone else's path.</p>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">5. Creative Aptitude</h3>
          <Card className="p-6">
            <p className="mb-4">Beyond specific skills is your overall creative orientation—how you naturally approach problems and opportunities:</p>
            
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="font-bold text-lg">Visionary</h4>
                <p className="mt-2">If you naturally see opportunities and innovative solutions:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You'll excel at identifying unmet market needs</li>
                  <li>You'll develop unique product concepts even without technical skills</li>
                  <li>You'll create distinctive brand identities and marketing approaches</li>
                  <li>You'll instinctively understand what makes a product appealing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Improver</h4>
                <p className="mt-2">If you're good at enhancing existing ideas:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You'll excel at refining products to make them more functional</li>
                  <li>You'll identify ways to improve customer experience</li>
                  <li>You'll adapt existing marketing approaches to your specific offerings</li>
                  <li>You'll see opportunities to combine or modify proven concepts</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Executor</h4>
                <p className="mt-2">If you're implementation-focused:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You'll excel at turning concepts into reality</li>
                  <li>You'll implement effective systems and processes</li>
                  <li>You'll follow through on projects to completion</li>
                  <li>You'll maintain consistent quality and delivery</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Analytical</h4>
                <p className="mt-2">If you're data-driven and methodical:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You'll excel at optimizing production processes</li>
                  <li>You'll implement metrics-based marketing strategies</li>
                  <li>You'll methodically test and improve existing product lines</li>
                  <li>You'll create robust systems for scaling production</li>
                </ul>
              </div>
            </div>
            <p className="mt-6">Understanding your creative orientation helps you choose the right role in the ecosystem and the right problems to solve.</p>
          </Card>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">6. Geographic Location</h3>
          <Card className="p-6">
            <p className="mb-4">Your physical location affects everything from market access to shipping costs, material availability, and customer expectations. Let's look at both location type and regional considerations:</p>
            
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="font-bold text-lg">Location Type</h4>
                <div className="space-y-4 ml-4 mt-2">
                  <div>
                    <h5 className="font-medium">Major City</h5>
                    <p className="mt-1">If you're based in a large urban center:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>You have access to a large local market for in-person pickup/delivery</li>
                      <li>You might focus on quick turnaround for local businesses</li>
                      <li>You can participate in markets, fairs, and events</li>
                      <li>You have potential for physical retail partnerships</li>
                      <li>Space limitations may constrain your production capacity</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Mid-Size City</h5>
                    <p className="mt-1">If you're in a medium-sized metropolitan area:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>You have a balance of local opportunity and less competition</li>
                      <li>You might become the go-to local provider more easily</li>
                      <li>You can serve both local and national markets</li>
                      <li>You might find niches specific to your regional economy</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Suburban</h5>
                    <p className="mt-1">If you're in a suburban area:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>You have good shipping infrastructure without urban costs</li>
                      <li>You might focus more on e-commerce with occasional local delivery</li>
                      <li>You can tap into both nearby urban markets and nationwide shipping</li>
                      <li>You often have more space for multiple printers and inventory</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Rural/Remote</h5>
                    <p className="mt-1">If you're in a rural or remote location:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>You'll likely focus almost exclusively on e-commerce</li>
                      <li>You'll need to consider shipping costs and times carefully</li>
                      <li>You might focus on higher-value, lower-weight items</li>
                      <li>You can leverage lower operating costs for better margins</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Regional Considerations</h4>
                <div className="space-y-4 ml-4 mt-2">
                  <div>
                    <h5 className="font-medium">North America (US & Canada)</h5>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Marketplace Access: Established platforms like Etsy, Amazon, eBay with strong buyer bases</li>
                      <li>Shipping Infrastructure: Extensive domestic networks with competitive rates</li>
                      <li>Customer Base: Familiar with and receptive to 3D printed products</li>
                      <li>Material Availability: Wide variety of filaments with fast shipping options</li>
                      <li>Market Opportunity: Strong demand for custom and personalized products</li>
                      <li>Regulatory Environment: Relatively straightforward for small businesses</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Europe</h5>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Marketplace Diversity: Both region-wide and country-specific platforms</li>
                      <li>Cross-Border Considerations: VAT and customs between EU/non-EU countries</li>
                      <li>Shipping Efficiency: Dense population centers enable efficient delivery networks</li>
                      <li>Environmental Focus: Higher customer expectations for sustainable products and packaging</li>
                      <li>Market Segmentation: Distinct preferences between different countries</li>
                      <li>Regulatory Environment: More standardized within EU, varying elsewhere</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Asia</h5>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Market Maturity: Varies dramatically by country (Japan/Korea/Singapore vs. emerging markets)</li>
                      <li>Manufacturing Advantage: Proximity to production centers can lower material costs</li>
                      <li>Marketplaces: Country-specific platforms often dominate (e.g., Taobao in China)</li>
                      <li>Competition: More established 3D printing ecosystems in some regions (China, Singapore)</li>
                      <li>Shipping Infrastructure: Excellent in developed regions, challenging in others</li>
                      <li>Regulatory Environment: Varies significantly by country</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Australia & New Zealand</h5>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Geographic Isolation: Higher shipping costs but less international competition</li>
                      <li>Market Size: Smaller domestic market but higher receptivity to local businesses</li>
                      <li>Shipping Considerations: Long distances within country and internationally</li>
                      <li>Material Cost: Higher due to import requirements</li>
                      <li>Marketplace Access: Both international platforms and regional ones</li>
                      <li>Business Environment: Supportive of small businesses with straightforward regulations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Latin America</h5>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Emerging Opportunity: Less saturated market with growing interest</li>
                      <li>Shipping Challenges: Variable infrastructure quality between and within countries</li>
                      <li>Material Availability: More limited selection with higher costs</li>
                      <li>Market Education: May require more customer education about 3D printing</li>
                      <li>Payment Systems: Consider local payment method preferences</li>
                      <li>Import Considerations: Material sourcing may involve more complex importing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Africa</h5>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Developing Market: Early-stage opportunity with first-mover advantages</li>
                      <li>Infrastructure Variation: Significant differences between urban centers and other areas</li>
                      <li>Market Needs: Strong demand for practical, problem-solving products</li>
                      <li>Material Sourcing: May require strategic international ordering</li>
                      <li>Business Model: May favor B2B or institutional clients initially</li>
                      <li>Mobile Commerce: Strong mobile payment adoption in many regions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Middle East</h5>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Market Segmentation: Luxury niche opportunities alongside practical applications</li>
                      <li>Material Logistics: Plan for reliable supply chains</li>
                      <li>Regulatory Environment: Varies significantly by country</li>
                      <li>Business Culture: May prioritize relationship building before transactions</li>
                      <li>Shipping Networks: Well-developed in major centers, more challenging elsewhere</li>
                      <li>Customization Value: High premium for personalized and custom products</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6">Your location is neither a limitation nor an advantage by itself—it's a factor that helps determine your optimal approach. Each location type and region offers distinct opportunities when matched with the right business model.</p>
          </Card>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">7. Growth Ambitions</h3>
          <Card className="p-6">
            <p className="mb-4">Finally, your personal goals for the business will shape your entire approach:</p>
            
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="font-bold text-lg">Hobby Income</h4>
                <p className="mt-2">If you're primarily looking for a creative outlet that pays for itself:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You'll focus on enjoyable products and processes</li>
                  <li>You'll grow more organically with less pressure</li>
                  <li>You might prioritize creative satisfaction over optimization</li>
                  <li>You'll maintain more flexibility in your approach</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Side Income</h4>
                <p className="mt-2">If you're aiming to supplement your main income:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You'll focus on consistent, reliable revenue streams</li>
                  <li>You'll need efficient systems that work alongside other commitments</li>
                  <li>You'll prioritize sustainable growth over rapid scaling</li>
                  <li>You'll likely reinvest a portion of profits while taking some income</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Income Replacement</h4>
                <p className="mt-2">If you're working toward full-time self-employment:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You'll need a strategic plan for scaling to replace your current income</li>
                  <li>You'll focus on building predictable, diversified revenue streams</li>
                  <li>You'll need to develop systems that can eventually run without constant attention</li>
                  <li>You'll think more about long-term sustainability and market position</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">Scalable Business</h4>
                <p className="mt-2">If you're building a growth-focused venture:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You'll focus on models that can scale beyond just you</li>
                  <li>You'll think about team building and delegation from early on</li>
                  <li>You'll prioritize systems and processes that support rapid growth</li>
                  <li>You'll consider future funding or expansion opportunities</li>
                </ul>
              </div>
            </div>
            <p className="mt-6">Your ambitions should match your strategy—there's no wrong answer, but there needs to be alignment between your goals and your approach.</p>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">The Decision Tree Output: Your Personalized Path</h3>
          <Card className="p-6">
            <p className="mb-4">After assessing yourself across these seven factors, the decision framework leads to four key outputs that will guide your journey:</p>
            
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="font-bold text-lg">1. Printer Recommendations</h4>
                <p className="mt-2">Based on your budget, experience level, time availability, and other factors, you'll receive specific recommendations for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>The optimal printer model(s) for your situation</li>
                  <li>Necessary accessories and supplies</li>
                  <li>Upgrade paths as you grow</li>
                  <li>Setup priorities and configurations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">2. Suggested Markets</h4>
                <p className="mt-2">Instead of asking you to choose markets you don't yet understand, this framework will suggest appropriate markets based on your skills, location, and other factors:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Industry verticals most aligned with your strengths</li>
                  <li>Product categories with the right complexity level</li>
                  <li>Customer groups you're best positioned to serve</li>
                  <li>Pricing tiers appropriate for your situation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">3. Marketing Strategy</h4>
                <p className="mt-2">Your personalized marketing approach will consider your time, skills, location, and goals:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Platform recommendations (social media, marketplaces, etc.)</li>
                  <li>Content creation frameworks tailored to your abilities</li>
                  <li>Customer acquisition strategies matched to your resources</li>
                  <li>Positioning approaches that leverage your strengths</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">4. Growth Timeline</h4>
                <p className="mt-2">Finally, you'll receive a realistic growth timeline that accounts for all your circumstances:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Month-by-month milestones appropriate for your situation</li>
                  <li>Investment and reinvestment guidelines</li>
                  <li>Expansion triggers and decision points</li>
                  <li>Long-term vision aligned with your ambitions</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
