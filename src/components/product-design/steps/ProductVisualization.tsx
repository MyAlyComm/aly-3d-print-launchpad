
import { Button } from "@/components/ui/button";

interface ProductVisualizationProps {
  onNext: () => void;
  onPrev: () => void;
}

export const ProductVisualization = ({ onNext, onPrev }: ProductVisualizationProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Visualization</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-100 rounded-md h-80 flex items-center justify-center mb-4">
            <p className="text-gray-500">Preview image will appear here</p>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Array(4).fill(null).map((_, index) => (
              <div 
                key={index}
                className="bg-gray-100 rounded-md aspect-square flex items-center justify-center cursor-pointer"
              >
                <span className="text-gray-500 text-xs">View {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-3">Product Details</h3>
          <p className="text-gray-600 mb-4">
            Your product details will appear here based on the information provided in the previous step.
          </p>
          
          <div className="mb-4">
            <h4 className="font-medium text-gray-700 mb-2">Customization Options</h4>
            
            <div className="flex space-x-1 mb-3">
              <button className="w-8 h-8 rounded-full bg-blue-500"></button>
              <button className="w-8 h-8 rounded-full bg-green-500"></button>
              <button className="w-8 h-8 rounded-full bg-red-500"></button>
              <button className="w-8 h-8 rounded-full bg-purple-500"></button>
              <button className="w-8 h-8 rounded-full bg-gray-500"></button>
            </div>
            
            <div className="flex space-x-3">
              <button className="border border-gray-300 rounded-md px-3 py-1 text-sm">Basic</button>
              <button className="border border-primary bg-primary/5 text-primary rounded-md px-3 py-1 text-sm">Standard</button>
              <button className="border border-gray-300 rounded-md px-3 py-1 text-sm">Premium</button>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium text-gray-700 mb-2">Production Details</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="block text-gray-500">Print Time</span>
                <span className="font-medium">6-8 hours</span>
              </div>
              <div>
                <span className="block text-gray-500">Material Used</span>
                <span className="font-medium">250g PLA</span>
              </div>
              <div>
                <span className="block text-gray-500">Suggested Retail</span>
                <span className="font-medium">$29.99 - $39.99</span>
              </div>
              <div>
                <span className="block text-gray-500">Profit Margin</span>
                <span className="font-medium">72%</span>
              </div>
            </div>
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
        <Button onClick={onNext}>
          Next: Demographics
        </Button>
      </div>
    </div>
  );
};
