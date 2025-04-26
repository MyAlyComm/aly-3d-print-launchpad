
import { useState } from "react";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const FinalAssessment = () => {
  const [responses, setResponses] = useState({
    quadrant: "",
    portfolioImprovement: "",
    strongestMoat: "",
    moatToDevelop: "",
    moatDevelopmentMethod: "",
    adaptabilityLevel: "",
    adaptabilityImprovement: "",
    horizon1: "",
    horizon2: "",
    horizon3: "",
    horizonImprovement: "",
    greatestOpportunity: "",
    greatestThreat: "",
    learningFocus: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setResponses({
      ...responses,
      [field]: value
    });
  };

  return (
    <ChapterSection title="Chapter 10 Self-Assessment: Your Future-Proofing Plan">
      <div className="space-y-8">
        <p>
          Complete this detailed self-assessment to develop your personal future-proofing strategy:
        </p>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Product Portfolio Assessment</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Based on the Future-Value Matrix, my current products fall primarily in:
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="quadrant1"
                    name="quadrant"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.quadrant === "quadrant1"}
                    onChange={() => handleInputChange("quadrant", "quadrant1")}
                  />
                  <label htmlFor="quadrant1" className="ml-2 text-sm text-gray-700">
                    Quadrant 1 (Current Value, Diminishing Future Value)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="quadrant2"
                    name="quadrant"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.quadrant === "quadrant2"}
                    onChange={() => handleInputChange("quadrant", "quadrant2")}
                  />
                  <label htmlFor="quadrant2" className="ml-2 text-sm text-gray-700">
                    Quadrant 2 (Current Value, Growing Future Value)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="quadrant3"
                    name="quadrant"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.quadrant === "quadrant3"}
                    onChange={() => handleInputChange("quadrant", "quadrant3")}
                  />
                  <label htmlFor="quadrant3" className="ml-2 text-sm text-gray-700">
                    Quadrant 3 (Limited Current Value, High Future Value)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="quadrant4"
                    name="quadrant"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.quadrant === "quadrant4"}
                    onChange={() => handleInputChange("quadrant", "quadrant4")}
                  />
                  <label htmlFor="quadrant4" className="ml-2 text-sm text-gray-700">
                    Quadrant 4 (Limited Current Value, Limited Future Value)
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                To improve my product portfolio's future resilience, I need to:
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                value={responses.portfolioImprovement}
                onChange={(e) => handleInputChange("portfolioImprovement", e.target.value)}
                placeholder="Describe your strategy here..."
              ></textarea>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Competitive Moat Assessment</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                My strongest competitive moat currently is:
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="process"
                    name="moat"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.strongestMoat === "process"}
                    onChange={() => handleInputChange("strongestMoat", "process")}
                  />
                  <label htmlFor="process" className="ml-2 text-sm text-gray-700">
                    Process Moat
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="brand"
                    name="moat"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.strongestMoat === "brand"}
                    onChange={() => handleInputChange("strongestMoat", "brand")}
                  />
                  <label htmlFor="brand" className="ml-2 text-sm text-gray-700">
                    Brand Moat
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="knowledge"
                    name="moat"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.strongestMoat === "knowledge"}
                    onChange={() => handleInputChange("strongestMoat", "knowledge")}
                  />
                  <label htmlFor="knowledge" className="ml-2 text-sm text-gray-700">
                    Knowledge Moat
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="network"
                    name="moat"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.strongestMoat === "network"}
                    onChange={() => handleInputChange("strongestMoat", "network")}
                  />
                  <label htmlFor="network" className="ml-2 text-sm text-gray-700">
                    Network Moat
                  </label>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  The moat I most need to develop is:
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={responses.moatToDevelop}
                  onChange={(e) => handleInputChange("moatToDevelop", e.target.value)}
                  placeholder="Type of moat"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  I will develop this moat by:
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={responses.moatDevelopmentMethod}
                  onChange={(e) => handleInputChange("moatDevelopmentMethod", e.target.value)}
                  placeholder="Development strategy"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Adaptability Assessment</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                On the Adaptability Spectrum, my business is currently:
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="brittle"
                    name="adaptability"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.adaptabilityLevel === "brittle"}
                    onChange={() => handleInputChange("adaptabilityLevel", "brittle")}
                  />
                  <label htmlFor="brittle" className="ml-2 text-sm text-gray-700">
                    Brittle
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="flexible"
                    name="adaptability"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.adaptabilityLevel === "flexible"}
                    onChange={() => handleInputChange("adaptabilityLevel", "flexible")}
                  />
                  <label htmlFor="flexible" className="ml-2 text-sm text-gray-700">
                    Flexible
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="adaptive"
                    name="adaptability"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.adaptabilityLevel === "adaptive"}
                    onChange={() => handleInputChange("adaptabilityLevel", "adaptive")}
                  />
                  <label htmlFor="adaptive" className="ml-2 text-sm text-gray-700">
                    Adaptive
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="transformative"
                    name="adaptability"
                    className="h-4 w-4 text-blue-600"
                    checked={responses.adaptabilityLevel === "transformative"}
                    onChange={() => handleInputChange("adaptabilityLevel", "transformative")}
                  />
                  <label htmlFor="transformative" className="ml-2 text-sm text-gray-700">
                    Transformative
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                To increase my adaptability, I will:
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                value={responses.adaptabilityImprovement}
                onChange={(e) => handleInputChange("adaptabilityImprovement", e.target.value)}
                placeholder="Describe your strategy here..."
              ></textarea>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Three Horizons Assessment</h3>
          
          <div className="space-y-6">
            <p className="text-gray-700">My current resource allocation across the Three Horizons is:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Horizon 1 (current optimization):
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={responses.horizon1}
                    onChange={(e) => handleInputChange("horizon1", e.target.value)}
                    placeholder="% of resources"
                  />
                  <span className="ml-2">%</span>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Horizon 2 (adjacent opportunities):
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={responses.horizon2}
                    onChange={(e) => handleInputChange("horizon2", e.target.value)}
                    placeholder="% of resources"
                  />
                  <span className="ml-2">%</span>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Horizon 3 (transformative possibilities):
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={responses.horizon3}
                    onChange={(e) => handleInputChange("horizon3", e.target.value)}
                    placeholder="% of resources"
                  />
                  <span className="ml-2">%</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                To better balance my Three Horizons, I will:
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                value={responses.horizonImprovement}
                onChange={(e) => handleInputChange("horizonImprovement", e.target.value)}
                placeholder="Describe your strategy here..."
              ></textarea>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Industry Shift Response Plan</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                The industry shift that presents the greatest opportunity for my business is:
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                value={responses.greatestOpportunity}
                onChange={(e) => handleInputChange("greatestOpportunity", e.target.value)}
                placeholder="Describe the opportunity here..."
              ></textarea>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                The industry shift that presents the greatest threat to my business is:
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                value={responses.greatestThreat}
                onChange={(e) => handleInputChange("greatestThreat", e.target.value)}
                placeholder="Describe the threat here..."
              ></textarea>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Personal Future-Proofing</h3>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              My personal learning focus for the next quarter will be:
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              value={responses.learningFocus}
              onChange={(e) => handleInputChange("learningFocus", e.target.value)}
              placeholder="Describe your learning focus here..."
            ></textarea>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100 p-6">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Final Thoughts: The Perpetual Beginner's Mindset</h3>
          
          <div className="space-y-4">
            <p>
              As we conclude this blueprint, I want to emphasize what I believe is the single most important 
              attribute for long-term success in the 3D printing industry: maintaining a perpetual beginner's mindset.
            </p>
            
            <p>
              The most dangerous moment in any entrepreneur's journey comes after achieving initial success, 
              when confidence can harden into certainty and curiosity can give way to complacency. The very traits 
              that helped you recognize this opportunity and take action—openness, adaptability, eagerness to learn—are 
              the same traits you'll need to preserve as your business grows.
            </p>
            
            <div className="bg-white rounded p-4 border border-purple-200">
              <p className="italic text-purple-800">
                "The true opportunity in 3D printing isn't just in the current arbitrage window—it's in your developing capacity 
                to recognize and capitalize on each new window as technology, markets, and customer needs evolve."
              </p>
            </div>
            
            <p>
              The entrepreneurs who thrive long-term aren't those with the perfect initial strategy; they're those 
              who continuously reinvent themselves and their businesses.
            </p>
            
            <p>
              As you implement the systems and strategies from this book, remember that they're starting points, not 
              final destinations. The specific techniques may change, but the fundamental principles of identifying value, 
              creating systems, and adapting to change will serve you throughout your entrepreneurial journey.
            </p>
            
            <p>
              Thank you for investing your time in this blueprint. I'm excited to see what you'll create, both for your 
              customers and for yourself. The future of manufacturing is unfolding before us, and you're now equipped 
              to play a meaningful role in shaping it.
            </p>
            
            <div className="flex items-center justify-center p-4">
              <CheckCircle className="text-green-500 h-6 w-6 mr-2" />
              <p className="font-bold text-green-700">Here's to your success in the dynamic world of 3D printing entrepreneurship!</p>
            </div>
          </div>
        </div>
      </div>
    </ChapterSection>
  );
};
