
import { Button } from "@/components/ui/button";
import { useProductDesign } from "../ProductDesignContext";
import { useState } from "react";
import { ImagePreview } from "../components/visualization/ImagePreview";
import { ProductDetails } from "../components/visualization/ProductDetails";

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
        <ImagePreview 
          images={productVisualization.images}
          selectedImage={selectedImage}
          isGenerating={isGenerating}
          onImageSelect={setSelectedImage}
          onGoBack={onPrev}
        />
        
        <ProductDetails 
          visualization={productVisualization}
          productDetails={productDetails}
        />
      </div>
      
      <div className="mt-8 flex justify-between">
        <Button 
          variant="outline"
          onClick={onPrev}
        >
          Back
        </Button>
        <Button onClick={onNext} disabled={!productVisualization.images || productVisualization.images.length === 0}>
          Next: Demographics
        </Button>
      </div>
    </div>
  );
};
