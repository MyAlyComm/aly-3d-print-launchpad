
import React from 'react';
import { Card } from "@/components/ui/card";

export const WorksheetSection = () => {
  return (
    <section id="worksheet" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">The 3D Printing Business Path Worksheet</h2>
      
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          alt="Person planning on a laptop"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 italic text-center">Taking time to assess your unique situation before starting your journey</p>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <p className="mb-4">Complete this detailed self-assessment to identify your optimal path:</p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Budget Assessment</h3>
              <div className="space-y-2 ml-4">
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>$0 (Focus on partnerships and dropshipping)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>$500-$1,000 (Single printer startup)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>$1,000-$2,000 (Quality printer or multiple budget units)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>$2,000-$5,000 (Multi-printer operation)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>$5,000+ (Professional setup)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">3D Printing Experience</h3>
              <div className="space-y-2 ml-4">
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>None (Never used a 3D printer)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Beginner (Basic familiarity but limited hands-on experience)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Intermediate (Comfortable with standard operations and troubleshooting)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Advanced (Extensive experience with multiple machines/materials)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Time Availability</h3>
              <div className="space-y-2 ml-4">
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>1-5 hours (Minimal commitment)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>5-15 hours (Part-time focus)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>15-30 hours (Significant part-time)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>30+ hours (Full-time dedication)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Strongest Skills</h3>
              <p className="mb-2 ml-4 text-sm italic">Check all that apply, circle your primary strength:</p>
              <div className="space-y-2 ml-4">
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Design (Creating, modifying, visualizing)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Marketing (Promotion, content creation, customer acquisition)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Technical (Engineering, troubleshooting, optimization)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Business/Sales (Operations, management, selling)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Creative Aptitude</h3>
              <div className="space-y-2 ml-4">
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Visionary (Seeing new opportunities and concepts)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Improver (Enhancing and refining existing ideas)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Executor (Implementing and following through)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Analytical (Optimizing and systematizing)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Geographic Location</h3>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 ml-4">My location type is:</h4>
                <div className="space-y-2 ml-4">
                  <div className="flex items-start">
                    <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                    <p>Major City (Large metropolitan area)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                    <p>Mid-Size City (Smaller city with good infrastructure)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                    <p>Suburban (Residential area near a city)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                    <p>Rural/Remote (Small town or countryside)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 ml-4">My region/continent is:</h4>
                <div className="space-y-2 ml-4">
                  <div className="flex items-start">
                    <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                    <p>North America (US & Canada)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                    <p>Europe</p>
                  </div>
                  <div className="flex items-start">
                    <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                    <p>Asia</p>
                  </div>
                  <div className="flex items-start">
                    <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                    <p>Australia & New Zealand</p>
                  </div>
                  <div className="flex items-start">
                    <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                    <p>Latin America</p>
                  </div>
                  <div className="flex items-start">
                    <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                    <p>Africa</p>
                  </div>
                  <div className="flex items-start">
                    <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                    <p>Middle East</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 ml-4">
                <p className="font-medium">Country: _______________________________</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Growth Ambitions</h3>
              <div className="space-y-2 ml-4">
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Hobby Income (Creative outlet that generates some money)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Side Income (Supplemental income alongside my main job)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Income Replacement (Eventually replacing my full-time income)</p>
                </div>
                <div className="flex items-start">
                  <div className="border border-gray-300 w-5 h-5 mt-1 mr-2"></div>
                  <p>Scalable Business (Building a growth-focused venture)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Summary and Next Steps</h3>
              <div className="space-y-4 ml-4">
                <div>
                  <p className="font-medium mb-2">Based on my self-assessment, my primary advantages are:</p>
                  <div className="border border-gray-300 rounded-md p-4 min-h-[80px]"></div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">My potential challenges will be:</p>
                  <div className="border border-gray-300 rounded-md p-4 min-h-[80px]"></div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">The markets that might be best for me to explore:</p>
                  <div className="border border-gray-300 rounded-md p-4 min-h-[80px]"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <p>Complete this worksheet before moving to the next chapter. In Chapter 3, we'll explore the "3 Plus 1 Equals 40" system—a powerful framework that can be adapted to any path identified by this decision tree to maximize your results while minimizing wasted effort.</p>
          </div>
        </div>
      </Card>
    </section>
  );
};
