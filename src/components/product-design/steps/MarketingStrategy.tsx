
import { Button } from "@/components/ui/button";

interface MarketingStrategyProps {
  onPrev: () => void;
}

export const MarketingStrategy = ({ onPrev }: MarketingStrategyProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Marketing Strategy</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Platform Recommendations */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-gray-800 mb-4">Recommended Platforms</h3>
          
          <div className="space-y-4">
            {[
              { name: "Etsy", match: "High Match", percent: "90%", color: "green" },
              { name: "Your Own Website", match: "High Match", percent: "85%", color: "green" },
              { name: "Amazon Handmade", match: "Medium Match", percent: "65%", color: "yellow" },
              { name: "eBay", match: "Low Match", percent: "40%", color: "red" }
            ].map((platform, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-12 h-12 bg-${platform.color}-100 rounded-md flex items-center justify-center text-${platform.color}-600 mr-4`}>
                  <span className="font-bold">{platform.name.charAt(0)}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{platform.name}</span>
                    <span className={`text-${platform.color}-600 font-medium`}>{platform.match}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-${platform.color}-600 h-2 rounded-full`} 
                      style={{width: platform.percent}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Content Strategy */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-gray-800 mb-4">Content Strategy</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-3">
              <h4 className="font-medium">Primary Content Type: Visual Problem-Solution</h4>
              <p className="text-sm text-gray-600 mt-1">Show before/after content demonstrating how your product solves workspace issues</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Content Mix</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                  <div className="w-12 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Product Features (40%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-9 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Workspace Tips (30%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-2 bg-green-600 rounded-full mr-2"></div>
                  <span>User Stories (20%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-2 bg-yellow-600 rounded-full mr-2"></div>
                  <span>Behind the Scenes (10%)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Key Hashtags</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">#DeskOrganization</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">#WorkspaceSetup</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">#HomeOffice</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">#3DPrinted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-bold text-gray-800 mb-4">Suggested Marketing Messages</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Primary Value Proposition</h4>
            <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
              <p className="text-gray-800">"Transform your cluttered workspace into a minimalist productivity zone with our modular desk organizer - designed by creators for creators."</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Key Selling Points</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Customizable modules that adapt to your workflow</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Integrated cable management to eliminate desk tangling</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Space-saving design that maximizes limited desk areas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
        <h3 className="font-bold text-gray-800 mb-3">Pricing Strategy</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-md p-3 border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Standard Pricing</h4>
            <p className="text-2xl font-bold text-primary mb-1">$29.99</p>
            <p className="text-sm text-gray-600">Recommended retail price</p>
          </div>
          
          <div className="bg-white rounded-md p-3 border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Premium Option</h4>
            <p className="text-2xl font-bold text-primary mb-1">$39.99</p>
            <p className="text-sm text-gray-600">Enhanced version</p>
          </div>
          
          <div className="bg-white rounded-md p-3 border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Bundle Pricing</h4>
            <p className="text-2xl font-bold text-primary mb-1">$49.99</p>
            <p className="text-sm text-gray-600">Complete set with accessories</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Button 
          variant="outline"
          onClick={onPrev}
        >
          Back
        </Button>
        <Button variant="default">
          Download Complete Report
        </Button>
      </div>
    </div>
  );
};
