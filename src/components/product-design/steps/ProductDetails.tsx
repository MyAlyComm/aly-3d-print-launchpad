import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProductDesign } from "../ProductDesignContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const ProductDetails = ({ onNext }: { onNext: () => void }) => {
  const { productDetails, setProductDetails, generateProductContent, isGenerating } = useProductDesign();
  const [category, setCategory] = useState(productDetails.category);
  const [problem, setProblem] = useState(productDetails.problem);
  const [style, setStyle] = useState(productDetails.style);
  const [width, setWidth] = useState(productDetails.dimensions.width);
  const [height, setHeight] = useState(productDetails.dimensions.height);
  const [depth, setDepth] = useState(productDetails.dimensions.depth);
  const [materials, setMaterials] = useState(productDetails.materials);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleProblemChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProblem(e.target.value);
  };

  const handleStyleChange = (style: string) => {
    setStyle(style);
  };

  const handleDimensionChange = (dimension: 'width' | 'height' | 'depth', value: string) => {
    if (dimension === 'width') setWidth(value);
    if (dimension === 'height') setHeight(value);
    if (dimension === 'depth') setDepth(value);
  };

  const handleMaterialChange = (material: string, checked: boolean) => {
    let updatedMaterials = [...materials];
    if (checked) {
      updatedMaterials.push(material);
    } else {
      updatedMaterials = updatedMaterials.filter(m => m !== material);
    }
    setMaterials(updatedMaterials);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!category || !style) {
      toast.error("Please select a product category and style");
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-product', {
        body: { 
          productDetails: {
            category,
            style,
            problem,
            materials,
            dimensions: {
              width,
              height,
              depth
            }
          }
        }
      });

      if (error) throw error;

      setProductDetails({
        ...productDetails,
        category,
        style,
        problem,
        materials,
        dimensions: {
          width,
          height,
          depth
        }
      });
      
      await generateProductContent(data);
      toast.success("Product design generated successfully!");
      onNext();
    } catch (error) {
      console.error('Error generating product:', error);
      toast.error("Failed to generate product design. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Define Your Product</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Product Category</label>
          <select 
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={category}
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
            value={problem}
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
                  style === styleOption ? 'border-primary bg-primary/5' : 'border-gray-200'
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
                  value={dimension.key === 'width' ? width : dimension.key === 'height' ? height : depth}
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
                  checked={materials.includes(material)}
                  onChange={(e) => handleMaterialChange(material, e.target.checked)}
                />
                <span>{material}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button 
            type="submit"
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
      </form>
    </div>
  );
};
