
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

export const MarketingWorksheet = () => {
  const handleSave = () => {
    toast({
      title: "Progress saved",
      description: "Your marketing worksheet progress has been saved.",
    });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight">
        CHAPTER 8 WORKSHEET: YOUR ZERO-COST MARKETING PLAN
      </h2>
      
      <div className="bg-muted rounded-lg p-6">
        <p className="italic">
          Complete this worksheet to create your personalized marketing plan. You can save your progress
          and return to it later. This worksheet will help you apply all the key concepts from this chapter
          to your specific products and situation.
        </p>
      </div>
      
      <ChapterSection title="PART 1: IDENTIFY WHAT YOUR PRODUCTS ARE REALLY SELLING">
        <p>For each product in your Trinity, identify which core value it primarily delivers:</p>
        
        <div className="space-y-6 mt-4">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h3 className="font-semibold">1. Your "Safe Bet" product:</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">What problem does it solve?</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">What emotion does it create?</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">What makes it different?</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div className="mt-4">
                  <p className="block text-sm font-medium text-gray-700 mb-2">This product is primarily selling:</p>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="safeBetValue" value="time" />
                      <span className="ml-2">Time/Convenience</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="safeBetValue" value="emotion" />
                      <span className="ml-2">Emotion/Experience</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="safeBetValue" value="differentiation" />
                      <span className="ml-2">Differentiation</span>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h3 className="font-semibold">2. Your "Strength Aligner" product:</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">What problem does it solve?</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">What emotion does it create?</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">What makes it different?</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div className="mt-4">
                  <p className="block text-sm font-medium text-gray-700 mb-2">This product is primarily selling:</p>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="strengthAlignerValue" value="time" />
                      <span className="ml-2">Time/Convenience</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="strengthAlignerValue" value="emotion" />
                      <span className="ml-2">Emotion/Experience</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="strengthAlignerValue" value="differentiation" />
                      <span className="ml-2">Differentiation</span>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h3 className="font-semibold">3. Your "Value Maximizer" product:</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">What problem does it solve?</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">What emotion does it create?</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">What makes it different?</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div className="mt-4">
                  <p className="block text-sm font-medium text-gray-700 mb-2">This product is primarily selling:</p>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="valueMaximizerValue" value="time" />
                      <span className="ml-2">Time/Convenience</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="valueMaximizerValue" value="emotion" />
                      <span className="ml-2">Emotion/Experience</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="valueMaximizerValue" value="differentiation" />
                      <span className="ml-2">Differentiation</span>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ChapterSection>
      
      <ChapterSection title="PART 2: CHOOSE YOUR ONE PLATFORM">
        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Platform Selection Matrix:</h3>
            <p className="text-sm mb-4">Rate each platform from 1-5 based on these factors:</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-gray-500 text-sm"></th>
                    <th className="px-4 py-2 text-center font-medium text-gray-500 text-sm">TikTok</th>
                    <th className="px-4 py-2 text-center font-medium text-gray-500 text-sm">Instagram Reels</th>
                    <th className="px-4 py-2 text-center font-medium text-gray-500 text-sm">YouTube Shorts</th>
                    <th className="px-4 py-2 text-center font-medium text-gray-500 text-sm">Facebook Marketplace</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">Matches product type</td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">Your comfort level</td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">Local market strength</td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">Effort required</td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" min="1" max="5" className="w-10 text-center" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">TOTAL SCORE</td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" className="w-10 text-center" readOnly />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" className="w-10 text-center" readOnly />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" className="w-10 text-center" readOnly />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="number" className="w-10 text-center" readOnly />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              My ONE platform for the next 30 days will be:
            </label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md">
              <option value="">Select your platform</option>
              <option value="tiktok">TikTok</option>
              <option value="instagram">Instagram Reels</option>
              <option value="youtube">YouTube Shorts</option>
              <option value="facebook">Facebook Marketplace</option>
            </select>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="PART 3: FIND WHERE YOUR CUSTOMERS ALREADY GATHER">
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold">If you chose TikTok:</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">5 hashtags my customers follow:</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">3 trending sounds in my niche:</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">5 competitors to study:</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold">If you chose Instagram:</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">5 niche hashtags (10K-500K posts):</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">5 creators serving my audience:</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">3 engagement groups to join:</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold">If you chose YouTube:</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">5 search queries related to my products:</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">3 channels with my target audience:</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">5 common questions in my niche:</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold">If you chose Facebook Marketplace:</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">5 best-performing categories:</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">3 keywords to test:</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">5 listing styles to analyze:</label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={2}></textarea>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ChapterSection>
      
      <ChapterSection title="PART 4: YOUR 30-DAY CONTENT CALENDAR">
        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Example Calendar Structure:</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">WEEK 1: FOUNDATION BUILDING</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Day 1: Research platform and set up account</li>
                  <li>Day 2: Study top 10 competitors in your niche</li>
                  <li>Day 3: Identify top 5 hashtags/keywords for your products</li>
                  <li>Day 4: Create profile/bio optimized for your products</li>
                  <li>Day 5: Set up simple filming area with good lighting</li>
                  <li>Day 6: Plan your first 3 value-providing content pieces</li>
                  <li>Day 7: Weekly review - Document what you've learned</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium">WEEK 2: CONTENT CREATION KICKOFF</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Day 8: Create and post first value content piece</li>
                  <li>Day 9: Engage with 10 potential customers</li>
                  <li>Day 10: Create and post second value content piece</li>
                  <li>Day 11: Engage with 10 more potential customers</li>
                  <li>Day 12: Create and post third value content piece</li>
                  <li>Day 13: Create product showcase for strongest Trinity product</li>
                  <li>Day 14: Weekly review - Document metrics and response</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium">WEEK 3: MOMENTUM BUILDING</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Day 15: Create and post fourth value content piece</li>
                  <li>Day 16: Respond to all comments and messages</li>
                  <li>Day 17: Create product showcase for second Trinity product</li>
                  <li>Day 18: Create and post fifth value content piece</li>
                  <li>Day 19: Identify 3 potential strategic partners</li>
                  <li>Day 20: Create product showcase for third Trinity product</li>
                  <li>Day 21: Weekly review - Analyze which content performed best</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium">WEEK 4: INNOVATION AND ANALYSIS</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Day 22: Create and post sixth value content piece</li>
                  <li>Day 23: Test one new content approach (Your Plus 1)</li>
                  <li>Day 24: Make first outreach to potential partner</li>
                  <li>Day 25: Create simple lead magnet for strongest product</li>
                  <li>Day 26: Document first month results and key learnings</li>
                  <li>Day 27: Plan next month's content strategy</li>
                  <li>Day 28-30: Set specific targets for Month 2</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h3 className="font-semibold">Fill in your actual content ideas:</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Value Content Ideas (What specific topics will you cover?):</label>
                <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={4}></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Showcase Ideas (How will you present each product?):</label>
                <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={4}></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Plus 1 Experiment:</label>
                <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" rows={3}></textarea>
              </div>
              
              <button 
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-4"
              >
                Save My Marketing Plan
              </button>
            </CardContent>
          </Card>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Remember:</h3>
            <p>
              Your first marketing plan doesn't need to be perfect—it needs to be implemented. Take action now, 
              refine later, and never stop testing new approaches as your business grows.
            </p>
            <p className="mt-4">
              The 3D printing entrepreneurs who succeed aren't the ones with the perfect marketing strategy on paper. 
              They're the ones who put imperfect strategies into action, learn from the results, and continuously 
              improve based on real customer feedback.
            </p>
            <p className="mt-4 font-medium">
              In Chapter 9, we'll explore how to scale your business beyond your first $5,000, building on the 
              foundation you've created with your products, systems, and marketing.
            </p>
          </div>
        </div>
      </ChapterSection>
    </div>
  );
};
