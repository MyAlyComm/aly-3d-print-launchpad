
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
                <a href="#introduction" className="block text-blue-600 hover:underline">Introduction to 3D Printing Business</a>
                <a href="#equipment" className="block text-blue-600 hover:underline">Required Equipment</a>
                <a href="#setup" className="block text-blue-600 hover:underline">Printer Setup and Calibration</a>
                <a href="#software" className="block text-blue-600 hover:underline">Software Tools</a>
                <a href="#niche" className="block text-blue-600 hover:underline">Finding Your Niche</a>
                <a href="#steps" className="block text-blue-600 hover:underline">Your First Business Steps</a>
              </nav>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <section id="introduction" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduction to 3D Printing Business</h2>
                  <div className="mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                      alt="3D Printing Setup"
                      className="rounded-lg w-full h-64 object-cover mb-4"
                    />
                    <p className="text-sm text-gray-500 italic">Modern 3D printing setup for small businesses</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to Chapter 1 of the 3D Printing Blueprint! In this chapter, we'll cover the essential 
                    foundations you need to start your 3D printing business, even on a budget as low as $500.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                    <p className="text-blue-700">
                      3D printing has revolutionized manufacturing by making it accessible to individuals and small 
                      businesses. The barriers to entry are lower than ever before, and the market for custom 3D 
                      printed products continues to grow.
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
                </section>

                {/* Continue with other sections using similar patterns */}
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

                {/* Software Tools Section */}
                <section id="software" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Software Tools</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-4">Slicers</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Cura (free)</li>
                        <li>• PrusaSlicer (free)</li>
                        <li>• Simplify3D (paid)</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-4">Design Software</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Tinkercad (free, browser-based)</li>
                        <li>• Fusion 360 (free for hobbyists)</li>
                        <li>• Blender (free, open-source)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Finding Your Niche Section */}
                <section id="niche" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Finding Your Niche</h2>
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-4">Popular 3D Printing Niches</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Customized gifts and personalized items</li>
                        <li>• Cosplay and prop making</li>
                        <li>• Functional household items</li>
                      </ul>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Educational models</li>
                        <li>• Prototyping for local businesses</li>
                        <li>• Architectural models</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* First Business Steps Section */}
                <section id="steps" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Your First Business Steps</h2>
                  <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
                    <ol className="space-y-4">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">1</span>
                        <div>
                          <h4 className="font-semibold">Research Your Market</h4>
                          <p className="text-gray-600">Identify your target audience and analyze your competition</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">2</span>
                        <div>
                          <h4 className="font-semibold">Create a Business Plan</h4>
                          <p className="text-gray-600">Set clear goals and outline your business strategy</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">3</span>
                        <div>
                          <h4 className="font-semibold">Set Up Your Pricing</h4>
                          <p className="text-gray-600">Calculate costs and determine your pricing strategy</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">4</span>
                        <div>
                          <h4 className="font-semibold">Create Sample Products</h4>
                          <p className="text-gray-600">Build your initial product portfolio</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">5</span>
                        <div>
                          <h4 className="font-semibold">Establish Online Presence</h4>
                          <p className="text-gray-600">Set up your Etsy shop, website, or social media accounts</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </section>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Chapter Summary</h3>
                  <p className="text-gray-700">
                    In this chapter, we've covered the basic equipment, software, and business planning needed to
                    start your 3D printing venture. In the next chapter, we'll dive into creating your first products
                    and optimizing your printing process for quality and efficiency.
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
