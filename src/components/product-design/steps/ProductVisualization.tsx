
import { Button } from "@/components/ui/button";
import { useProductDesign } from "../ProductDesignContext";
import { useState } from "react";

interface ProductVisualizationProps {
  onNext: () => void;
  onPrev: () => void;
}

export const ProductVisualization = ({ onNext, onPrev }: ProductVisualizationProps) => {
  const { productVisualization, productDetails, isGenerating } = useProductDesign();
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Visualization</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-100 rounded-md h-80 flex items-center justify-center mb-4 overflow-hidden">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center">
                <svg className="animate-spin h-8 w-8 text-primary mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-gray-500">Generating preview...</p>
              </div>
            ) : productVisualization.images && productVisualization.images.length > 0 ? (
              <img 
                src={productVisualization.images[selectedImage]} 
                alt="Product visualization" 
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <p className="text-gray-500">No preview available. Please go back and generate a product design.</p>
            )}
          </div>
          {!isGenerating && productVisualization.images && productVisualization.images.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              {productVisualization.images.map((imageUrl, index) => (
                <div 
                  key={index}
                  className={`bg-gray-100 rounded-md aspect-square flex items-center justify-center cursor-pointer overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={imageUrl} 
                    alt={`View ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-3">{productVisualization.productName || "Product Name"}</h3>
          <p className="text-gray-600 mb-4">{productVisualization.productDescription || "Product description will appear here after generation."}</p>
          
          <div className="mb-4">
            <h4 className="font-medium text-gray-700 mb-2">Key Features</h4>
            {productVisualization.features && productVisualization.features.length > 0 ? (
              <ul className="list-disc pl-5 text-gray-600">
                {productVisualization.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Features will be listed here.</p>
            )}
          </div>
          
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
                <span className="font-medium">
                  {productDetails.dimensions.width && productDetails.dimensions.height && productDetails.dimensions.depth
                    ? `${Math.max(2, Math.ceil((parseInt(productDetails.dimensions.width) * parseInt(productDetails.dimensions.height) * parseInt(productDetails.dimensions.depth)) / 7000))} hours`
                    : '6-8 hours'
                  }
                </span>
              </div>
              <div>
                <span className="block text-gray-500">Material Used</span>
                <span className="font-medium">
                  {productDetails.dimensions.width && productDetails.dimensions.height && productDetails.dimensions.depth
                    ? `${Math.max(50, Math.ceil((parseInt(productDetails.dimensions.width) * parseInt(productDetails.dimensions.height) * parseInt(productDetails.dimensions.depth)) / 250))}g ${productDetails.materials[0] || 'PLA'}`
                    : '250g PLA'
                  }
                </span>
              </div>
              <div>
                <span className="block text-gray-500">Suggested Retail</span>
                <span className="font-medium">
                  ${Math.max(19, Math.ceil((parseInt(productDetails.dimensions.width || '10') * parseInt(productDetails.dimensions.height || '10') * parseInt(productDetails.dimensions.depth || '10')) / 500) * 10)}.99 - 
                  ${Math.max(29, Math.ceil((parseInt(productDetails.dimensions.width || '10') * parseInt(productDetails.dimensions.height || '10') * parseInt(productDetails.dimensions.depth || '10')) / 400) * 10)}.99
                </span>
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
