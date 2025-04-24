
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, DollarSign, Clock, Users, PenTool } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const ChapterOne = () => {
  return (
    <DashboardLayout title="Chapter 1: Getting Started">
      <ScrollArea className="h-full pr-4">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
              <nav className="space-y-1">
                <a href="#opportunity" className="block text-blue-600 hover:underline">The 3D Printing Opportunity</a>
                <a href="#arbitrage" className="block text-blue-600 hover:underline">The Arbitrage Window Explained</a>
                <a href="#myths" className="block text-blue-600 hover:underline">Breaking Through Misconceptions</a>
                <a href="#success-factors" className="block text-blue-600 hover:underline">Key Success Factors</a>
                <a href="#budget" className="block text-blue-600 hover:underline">Starting Budget Considerations</a>
                <a href="#equipment" className="block text-blue-600 hover:underline">Required Equipment</a>
                <a href="#setup" className="block text-blue-600 hover:underline">Printer Setup and Calibration</a>
              </nav>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <section id="opportunity" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">The 3D Printing Opportunity</h2>
                  <div className="mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                      alt="3D Printing Setup"
                      className="rounded-lg w-full h-64 object-cover mb-4"
                    />
                    <p className="text-sm text-gray-500 italic">Modern 3D printing setup for small businesses</p>
                  </div>
                  
                  {/* Success Story */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6 border border-purple-100">
                    <h3 className="text-xl font-semibold mb-2">My Story: From Zero to $20K in 60 Days</h3>
                    <blockquote className="border-l-4 border-purple-400 pl-4 italic">
                      "9 months ago I had never even touched a 3D printer. With just $500 in starting capital, 
                      I generated $6,300 in my first month and grew from 1 little printer to 8. By month two, 
                      I hit $20K in sales—all while studying philosophy at university full time."
                    </blockquote>
                    
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Now sold to 60+ countries with multiple viral products
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Billion-dollar brands seek my marketing and consulting help
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Zero previous experience or special connections
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to Chapter 1 of the 3D Printing Blueprint! In this chapter, we'll cover the essential 
                    foundations you need to start your 3D printing business, even on a budget as low as $500.
                  </p>
                </section>

                <section id="arbitrage" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">The Arbitrage Window Explained</h2>
                  
                  <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">What is an Arbitrage Window?</h3>
                    <p className="mb-4">An arbitrage window opens when:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">1</span>
                        <div>
                          <p className="text-gray-700">A technology becomes accessible to average people</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">2</span>
                        <div>
                          <p className="text-gray-700">But knowledge about how to leverage it remains limited</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">3</span>
                        <div>
                          <p className="text-gray-700">And the market hasn't yet been flooded with competitors</p>
                        </div>
                      </li>
                    </ul>
                    
                    <p className="mt-4 text-gray-700">
                      This creates a brief period—sometimes months, sometimes a few years—where extraordinary 
                      profits are possible for those who recognize the opportunity and act.
                    </p>
                  </div>
                  
                  {/* Why Now */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                    <h4 className="font-semibold text-blue-700 mb-2">Why Now Is The Perfect Time</h4>
                    <p className="text-blue-700 mb-3">
                      The 3D Printing Arbitrage Window is Wide Open
                    </p>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Technology Accessibility: Sub-$500 printers produce professional results</li>
                      <li>• Knowledge Gap: Business strategies aren't widely understood</li>
                      <li>• Market Readiness: Consumers value and understand 3D printed products</li>
                      <li>• Limited Competition: Profitable niches remain undiscovered</li>
                    </ul>
                    <p className="mt-3 text-blue-700">
                      The industry expanded by 47% in 2024 alone, with an estimated 8.3 million units shipping by year-end.
                    </p>
                  </div>
                </section>

                <section id="myths" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Breaking Through Misconceptions</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">The Stained Glass Effect</h3>
                    <p className="text-gray-700 mb-4">
                      Common myths creating opportunity for you:
                    </p>
                  </div>
                  
                  <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="myth-1">
                      <AccordionTrigger className="font-medium">
                        "It's too technical"
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex gap-4">
                          <div className="w-1 bg-green-400"></div>
                          <p><span className="font-semibold">Reality:</span> Modern printers are as easy as coffee makers. With user-friendly interfaces and automated setup procedures, most printers today can be operational within an hour of unboxing.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="myth-2">
                      <AccordionTrigger className="font-medium">
                        "The market is saturated"
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex gap-4">
                          <div className="w-1 bg-green-400"></div>
                          <p><span className="font-semibold">Reality:</span> Most sellers compete in only a handful of categories. The vast majority of 3D printing entrepreneurs cluster around figurines, cosplay items, and basic household goods, leaving countless niches untouched.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="myth-3">
                      <AccordionTrigger className="font-medium">
                        "You need dozens of printers"
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex gap-4">
                          <div className="w-1 bg-green-400"></div>
                          <p><span className="font-semibold">Reality:</span> I made $5,000+ with just one printer. By focusing on high-margin products and efficient production scheduling, a single well-maintained printer can generate significant revenue.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="myth-4">
                      <AccordionTrigger className="font-medium">
                        "It's just a hobby"
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex gap-4">
                          <div className="w-1 bg-green-400"></div>
                          <p><span className="font-semibold">Reality:</span> Thousands have built six and seven-figure businesses. With proper business strategies and marketing approaches, 3D printing has proven to be a foundation for scalable, professional businesses.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="myth-5">
                      <AccordionTrigger className="font-medium">
                        "The profit margins aren't sustainable"
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex gap-4">
                          <div className="w-1 bg-green-400"></div>
                          <p><span className="font-semibold">Reality:</span> Products routinely achieve 80%+ margins. When you combine low material costs with targeted marketing to the right customer segments, profit margins can be extraordinarily high compared to traditional retail.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                    <p className="text-amber-800 italic">Every time someone believes these myths, your opportunity grows.</p>
                  </div>
                  
                  <div className="mt-6 p-5 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold mb-3">The Real Success Formula</h3>
                    <p className="mb-4">The entrepreneurs who succeed focus on:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Solving specific problems for specific people</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Creating systems rather than one-off products</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Building marketing that connects with real customers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Consistent implementation rather than perfect products</span>
                      </li>
                    </ul>
                    <p className="mt-4 font-semibold text-center">"It's less about what you sell—and more about how you sell it."</p>
                  </div>
                </section>

                <section id="success-factors" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Key Success Factors</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">The 7 Key Factors That Determine Your Path</h3>
                    <p className="text-gray-700 mb-4">
                      Understanding Your Unique Advantage - Your optimal approach depends on:
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center mb-3">
                        <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                        <h4 className="font-semibold">Budget Assessment</h4>
                      </div>
                      <p className="text-gray-700">What financial resources you have available</p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center mb-3">
                        <PenTool className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold">3D Printing Experience</h4>
                      </div>
                      <p className="text-gray-700">Your current technical comfort level</p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center mb-3">
                        <Clock className="h-5 w-5 text-amber-600 mr-2" />
                        <h4 className="font-semibold">Time Availability</h4>
                      </div>
                      <p className="text-gray-700">How many hours you can dedicate weekly</p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center mb-3">
                        <Users className="h-5 w-5 text-purple-600 mr-2" />
                        <h4 className="font-semibold">Geographic Location</h4>
                      </div>
                      <p className="text-gray-700">Where you're based and your market access</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-5 rounded-lg text-center border border-blue-100">
                    <p className="text-blue-800 font-semibold">
                      There's no one-size-fits-all approach—your unique combination creates your advantage.
                    </p>
                  </div>
                </section>

                <section id="budget" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Starting Budget Considerations</h2>
                  
                  <Tabs defaultValue="budget-1" className="w-full">
                    <TabsList className="grid grid-cols-5 mb-6">
                      <TabsTrigger value="budget-1">$0</TabsTrigger>
                      <TabsTrigger value="budget-2">$500-$1,000</TabsTrigger>
                      <TabsTrigger value="budget-3">$1,000-$2,000</TabsTrigger>
                      <TabsTrigger value="budget-4">$2,000-$5,000</TabsTrigger>
                      <TabsTrigger value="budget-5">$5,000+</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="budget-1" className="p-6 bg-white rounded-lg border border-gray-200">
                      <h3 className="font-semibold text-lg mb-2">$0 Budget</h3>
                      <p className="mb-4">Broker between clients and existing services, focus on partnerships</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Connect customers with printing services</li>
                        <li>Offer design services for clients who need 3D models</li>
                        <li>Build partnerships with existing printer owners</li>
                        <li>Focus on knowledge and connections rather than equipment</li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="budget-2" className="p-6 bg-white rounded-lg border border-gray-200">
                      <h3 className="font-semibold text-lg mb-2">$500-$1,000 Budget</h3>
                      <p className="mb-4">Single printer startup with high-margin products (where I started)</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Purchase one quality entry-level printer like the Ender 3</li>
                        <li>Focus on high-margin, low-material products</li>
                        <li>Start with 1-2 types of filament</li>
                        <li>Reinvest profits quickly to expand capacity</li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="budget-3" className="p-6 bg-white rounded-lg border border-gray-200">
                      <h3 className="font-semibold text-lg mb-2">$1,000-$2,000 Budget</h3>
                      <p className="mb-4">Quality printer or multiple budget units, more testing capacity</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Option to get one mid-tier printer or two budget printers</li>
                        <li>Expand filament variety for product diversification</li>
                        <li>Add basic post-processing equipment</li>
                        <li>Budget for product testing and development</li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="budget-4" className="p-6 bg-white rounded-lg border border-gray-200">
                      <h3 className="font-semibold text-lg mb-2">$2,000-$5,000 Budget</h3>
                      <p className="mb-4">Multi-printer operation with diverse product lines</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Set up 3-6 printers for parallel production</li>
                        <li>Invest in workflow optimization tools</li>
                        <li>Add specialized printers for specific applications</li>
                        <li>Develop multiple product lines simultaneously</li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="budget-5" className="p-6 bg-white rounded-lg border border-gray-200">
                      <h3 className="font-semibold text-lg mb-2">$5,000+ Budget</h3>
                      <p className="mb-4">Professional setup with automation potential</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Create a printer farm with 10+ units</li>
                        <li>Implement automation and monitoring systems</li>
                        <li>Dedicate space for a professional workshop</li>
                        <li>Invest in advanced post-processing equipment</li>
                        <li>Hire help for scaling operations faster</li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-6 text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 font-medium">
                      Start with what you have, reinvest profits, and scale strategically.
                    </p>
                  </div>
                </section>

                <section id="equipment" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Required Equipment</h2>
                  <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="basic-equipment">
                      <AccordionTrigger>Essential Equipment List</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>A reliable 3D printer (Recommended: Ender 3 or similar)</li>
                          <li>A computer for slicing and design</li>
                          <li>Basic filament (PLA is most beginner-friendly)</li>
                          <li>Basic tools for maintenance and post-processing</li>
                          <li>Optional: A dedicated workspace</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Collapsible className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <CollapsibleTrigger className="flex justify-between items-center w-full font-medium">
                      <span>View Recommended Equipment for Each Budget Level</span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">$500-$1,000 Starter Equipment</h4>
                          <ul className="list-disc pl-5 text-gray-700">
                            <li>Ender 3 or Ender 3 Pro printer</li>
                            <li>2-3 rolls of PLA filament</li>
                            <li>Basic toolkit (included with most printers)</li>
                            <li>Digital calipers</li>
                            <li>Isopropyl alcohol for bed cleaning</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold">$1,000-$2,000 Equipment</h4>
                          <ul className="list-disc pl-5 text-gray-700">
                            <li>Prusa i3 MK3S+ or 2 Ender 3 printers</li>
                            <li>Various filament types (PLA, PETG, TPU)</li>
                            <li>Filament dryer</li>
                            <li>Basic post-processing tools (files, sandpaper)</li>
                            <li>Spare parts (nozzles, Bowden tubes)</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold">$2,000+ Advanced Setup</h4>
                          <ul className="list-disc pl-5 text-gray-700">
                            <li>Multiple printers of various sizes</li>
                            <li>Specialized printers (resin or large format)</li>
                            <li>Advanced post-processing equipment</li>
                            <li>Monitoring systems (cameras, OctoPrint)</li>
                            <li>Dedicated workstation with powerful computer</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </section>

                {/* Printer Setup Section */}
                <section id="setup" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Printer Setup and Calibration</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-4 text-lg">Initial Setup</h3>
                      <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li>Assemble your printer carefully, following the manufacturer's instructions</li>
                        <li>Level the bed - this is critical for good first layer adhesion</li>
                        <li>Calibrate your extruder to ensure accurate filament flow</li>
                        <li>Run a test print to verify everything is working properly</li>
                      </ol>
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                        alt="3D Printer Setup Process"
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </section>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Chapter Summary</h3>
                  <p className="text-gray-700">
                    In this chapter, we've covered the fundamental concepts behind the 3D printing business opportunity,
                    debunked common myths, and outlined how to start with various budget levels. We've also covered the
                    basic equipment needed and initial setup procedures. In Chapter 2, we'll dive deeper into creating
                    your first products and optimizing your printing process for quality and efficiency.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollArea>
    </DashboardLayout>
  );
};

export default ChapterOne;
