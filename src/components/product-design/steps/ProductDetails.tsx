
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useProductDesign } from "../ProductDesignContext";
import { toast } from "sonner";
import { CategorySelect } from './form-sections/CategorySelect';
import { ProblemDescription } from './form-sections/ProblemDescription';
import { StyleSelector } from './form-sections/StyleSelector';
import { DimensionsInput } from './form-sections/DimensionsInput';
import { MaterialsSelect } from './form-sections/MaterialsSelect';

export const ProductDetails = ({ onNext }: { onNext: () => void }) => {
  const { productDetails, setProductDetails, generateProductContent, isGenerating: contextIsGenerating } = useProductDesign();
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
      const updatedDetails = {
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
      };
      
      setProductDetails(updatedDetails);
      
      await generateProductContent('3D Blueprint Runware');
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
        <CategorySelect category={category} onCategoryChange={handleCategoryChange} />
        <ProblemDescription problem={problem} onProblemChange={handleProblemChange} />
        <StyleSelector selectedStyle={style} onStyleChange={handleStyleChange} />
        <DimensionsInput
          width={width}
          height={height}
          depth={depth}
          onDimensionChange={handleDimensionChange}
        />
        <MaterialsSelect materials={materials} onMaterialChange={handleMaterialChange} />

        <div className="mt-8 flex justify-end">
          <Button 
            type="submit"
            className="flex items-center gap-2"
            disabled={isGenerating || contextIsGenerating}
          >
            {isGenerating || contextIsGenerating ? (
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
