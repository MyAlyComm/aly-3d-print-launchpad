
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProductDesign } from "../ProductDesignContext";
import { AIImageGenerator } from "@/components/AIImageGenerator";
import { toast } from "sonner";

interface ProductDetailsProps {
  onNext: () => void;
}

export const ProductDetails = ({ onNext }: ProductDetailsProps) => {
  const { productDetails, setProductDetails, generateProductContent, isGenerating } = useProductDesign();
  const [apiKey, setApiKey] = useState("");
  const [showApiInput, setShowApiInput] = useState(false);
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductDetails({
      ...productDetails,
      category: e.target.value
    });
  };
  
  const handleProblemChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProductDetails({
      ...productDetails,
      problem: e.target.value
    });
  };
  
  const handleStyleChange = (style: string) => {
    setProductDetails({
      ...productDetails,
      style
    });
  };
  
  const handleDimensionChange = (dimension: 'width' | 'height' | 'depth', value: string) => {
    setProductDetails({
      ...productDetails,
      dimensions: {
        ...productDetails.dimensions,
        [dimension]: value
      }
    });
  };
  
  const handleMaterialChange = (material: string, checked: boolean) => {
    let updatedMaterials = [...productDetails.materials];
    if (checked) {
      updatedMaterials.push(material);
    } else {
      updatedMaterials = updatedMaterials.filter(m => m !== material);
    }
    
    setProductDetails({
      ...productDetails,
      materials: updatedMaterials
    });
  };

  const handleSubmit = async () => {
    if (!productDetails.category) {
      toast.error("Please select a product category");
      return;
    }
    
    if (!productDetails.style) {
      toast.error("Please select a design style");
      return;
    }

    try {
      if (!apiKey) {
        setShowApiInput(true);
        return;
      }
      
      await generateProductContent(apiKey);
      onNext();
    } catch (error) {
      console.error("Error generating product:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Define Your Product</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Product Category</label>
          <select 
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={productDetails.category}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            <option value="homeDecor">Home Decor</option>
            <option value="organization">Organization & Storage</option>
            <option value="gaming">Gaming Accessories</option>
            <option value="gadgets">Tech Gadgets</option>
            <option value="kitchenware">Kitchenware</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">What problem does your product solve?</label>
          <textarea 
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            rows={3}
            placeholder="Describe the problem your product solves..."
            value={productDetails.problem}
            onChange={handleProblemChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Design Style</label>
          <div className="grid grid-cols-3 gap-4">
            {["minimalist", "modern", "organic"].map((styleOption) => (
              <div 
                key={styleOption}
                className={`border rounded-md p-4 text-center cursor-pointer ${
                  productDetails.style === styleOption ? 'border-primary bg-primary/5' : 'border-gray-200'
                }`}
                onClick={() => handleStyleChange(styleOption)}
              >
                <div className="bg-gray-100 h-24 mb-2 rounded flex items-center justify-center">
                  <span className="text-4xl">
                    {styleOption === "minimalist" ? "◯" : styleOption === "modern" ? "⬡" : "∿"}
                  </span>
                </div>
                <span className="capitalize">{styleOption}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Dimensions</label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "Width", key: "width" as const }, 
              { name: "Height", key: "height" as const }, 
              { name: "Depth", key: "depth" as const }
            ].map((dimension) => (
              <div key={dimension.name}>
                <label className="text-sm text-gray-600">{dimension.name} (cm)</label>
                <Input 
                  type="number" 
                  value={productDetails.dimensions[dimension.key]}
                  onChange={(e) => handleDimensionChange(dimension.key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Material Preferences</label>
          <div className="grid grid-cols-4 gap-3">
            {["PLA", "PETG", "TPU", "ABS"].map((material) => (
              <label key={material} className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  className="form-checkbox h-4 w-4 text-primary"
                  checked={productDetails.materials.includes(material)}
                  onChange={(e) => handleMaterialChange(material, e.target.checked)}
                />
                <span>{material}</span>
              </label>
            ))}
          </div>
        </div>

        {showApiInput && (
          <div className="border border-primary/20 bg-primary/5 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Enter Runware API Key</h3>
            <p className="text-sm mb-2">We need an API key to generate AI-powered product designs.</p>
            <Input
              type="password"
              placeholder="Enter your Runware API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="mb-2"
            />
            <p className="text-xs text-gray-500">
              Get your API key from <a href="https://runware.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Runware.ai</a>
            </p>
          </div>
        )}

        <div className="mt-8 flex justify-end">
          <Button 
            onClick={handleSubmit}
            className="flex items-center gap-2"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              <>Next: Visualization</>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
