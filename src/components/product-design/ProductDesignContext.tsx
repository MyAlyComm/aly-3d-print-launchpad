
import React, { createContext, useContext, useState } from 'react';
import { RunwareService } from '@/services/runwareService';
import { toast } from 'sonner';
import {
  ProductDetails,
  ProductDesignContextType,
} from './types/productDesignTypes';
import {
  defaultProductDetails,
  defaultVisualization,
  defaultDemographics,
  defaultMarketing,
} from './utils/defaultValues';
import {
  generateProductName,
  generateDescription,
  generateProductFeatures,
  generateProductPrompt,
} from './utils/productGenerationUtils';

export const ProductDesignContext = createContext<ProductDesignContextType>({
  productDetails: defaultProductDetails,
  productVisualization: defaultVisualization,
  demographics: defaultDemographics,
  marketing: defaultMarketing,
  isGenerating: false,
  setProductDetails: () => {},
  generateProductContent: async () => {},
});

export const useProductDesign = () => useContext(ProductDesignContext);

export const ProductDesignProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [productDetails, setProductDetails] = useState<ProductDetails>(defaultProductDetails);
  const [productVisualization, setProductVisualization] = useState(defaultVisualization);
  const [demographics] = useState(defaultDemographics);
  const [marketing] = useState(defaultMarketing);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateProductContent = async (apiKey: string) => {
    if (!productDetails.category || !productDetails.style) {
      toast.error("Please complete the product details first");
      return;
    }
    
    setIsGenerating(true);
    try {
      console.log("Starting product generation...");
      
      // Generate product name and description
      const productName = generateProductName(productDetails.category, productDetails.style);
      const productDescription = generateDescription(productDetails.category, productDetails.problem, productDetails.style);
      const features = generateProductFeatures(productDetails.category, productDetails.problem);
      
      // Generate image using Runware API
      const runwareService = new RunwareService(apiKey);
      const prompt = generateProductPrompt(productDetails);
      
      console.log("Generating images with prompt:", prompt);
      
      // Get multiple variations
      const imagePromises = [];
      for (let i = 0; i < 3; i++) {
        imagePromises.push(
          runwareService.generateImage({ 
            positivePrompt: prompt,
            seed: Math.floor(Math.random() * 1000000) // Different seed for each variation
          })
        );
      }
      
      console.log("Image promises created, waiting for results...");
      const generatedImages = await Promise.all(imagePromises);
      console.log("Images generated:", generatedImages);
      
      const imageUrls = generatedImages.map(img => img.imageURL);
      console.log("Image URLs:", imageUrls);
      
      setProductVisualization({
        images: imageUrls,
        mainImage: imageUrls[0] || '',
        productName,
        productDescription,
        features,
      });
      
      console.log("Product visualization set successfully");
      
    } catch (error) {
      console.error("Error generating product content:", error);
      toast.error("Failed to generate product content. Please check your API key and try again.");
      throw error;
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <ProductDesignContext.Provider
      value={{
        productDetails,
        productVisualization,
        demographics,
        marketing,
        isGenerating,
        setProductDetails,
        generateProductContent,
      }}
    >
      {children}
    </ProductDesignContext.Provider>
  );
};
