import React, { createContext, useContext, useState } from 'react';
import { RunwareService, GeneratedImage, GenerateImageParams } from '@/services/runwareService';

interface ProductDetails {
  category: string;
  problem: string;
  style: string;
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  materials: string[];
}

interface ProductVisualizationData {
  images: string[];
  mainImage: string;
  productName: string;
  productDescription: string;
  features: string[];
}

interface DemographicsData {
  primaryAudience: {
    title: string;
    ageRange: string;
    location: string;
    income: string;
    painPoints: string;
  };
  secondaryAudience: {
    title: string;
    ageRange: string;
    location: string;
    income: string;
    painPoints: string;
  };
  tertiaryAudience: {
    title: string;
    ageRange: string;
    location: string;
    income: string;
    painPoints: string;
  };
}

interface MarketingData {
  platforms: {
    name: string;
    match: string;
    percent: string;
    color: string;
  }[];
  valueProposition: string;
  keySellingPoints: string[];
  pricing: {
    standard: string;
    premium: string;
    bundle: string;
  };
}

interface ProductDesignContextType {
  productDetails: ProductDetails;
  productVisualization: ProductVisualizationData;
  demographics: DemographicsData;
  marketing: MarketingData;
  isGenerating: boolean;
  setProductDetails: (details: ProductDetails) => void;
  generateProductContent: (apiKey: string) => Promise<void>;
}

const defaultProductDetails: ProductDetails = {
  category: '',
  problem: '',
  style: '',
  dimensions: {
    width: '',
    height: '',
    depth: '',
  },
  materials: [],
};

const defaultVisualization: ProductVisualizationData = {
  images: [],
  mainImage: '',
  productName: '',
  productDescription: '',
  features: [],
};

const defaultDemographics: DemographicsData = {
  primaryAudience: {
    title: 'Professional Organizers',
    ageRange: '25-40',
    location: 'Urban centers, tech hubs',
    income: '$60,000 - $120,000',
    painPoints: 'Desk clutter, cable management, workspace efficiency',
  },
  secondaryAudience: {
    title: 'Home Office Workers',
    ageRange: '30-55',
    location: 'Suburban areas',
    income: '$45,000 - $90,000',
    painPoints: 'Home/work separation, limited space',
  },
  tertiaryAudience: {
    title: 'College Students',
    ageRange: '18-24',
    location: 'College towns, dorms',
    income: '$0 - $30,000',
    painPoints: 'Limited space, budget constraints',
  },
};

const defaultMarketing: MarketingData = {
  platforms: [
    { name: "Etsy", match: "High Match", percent: "90%", color: "green" },
    { name: "Your Own Website", match: "High Match", percent: "85%", color: "green" },
    { name: "Amazon Handmade", match: "Medium Match", percent: "65%", color: "yellow" },
    { name: "eBay", match: "Low Match", percent: "40%", color: "red" }
  ],
  valueProposition: "Transform your cluttered workspace into a minimalist productivity zone with our modular desk organizer - designed by creators for creators.",
  keySellingPoints: [
    "Customizable modules that adapt to your workflow",
    "Integrated cable management to eliminate desk tangling",
    "Space-saving design that maximizes limited desk areas"
  ],
  pricing: {
    standard: "$29.99",
    premium: "$39.99",
    bundle: "$49.99"
  }
};

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
  const [productVisualization, setProductVisualization] = useState<ProductVisualizationData>(defaultVisualization);
  const [demographics, setDemographics] = useState<DemographicsData>(defaultDemographics);
  const [marketing, setMarketing] = useState<MarketingData>(defaultMarketing);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateProductName = (category: string, style: string): string => {
    const stylePrefix = {
      'minimalist': 'Sleek',
      'modern': 'Contemporary',
      'organic': 'Natural',
    }[style] || 'Innovative';
    
    const categoryMap: Record<string, string> = {
      'homeDecor': 'Home Décor',
      'organization': 'Organizer',
      'gaming': 'Gaming Accessory',
      'gadgets': 'Tech Solution',
      'kitchenware': 'Kitchen Helper',
    };
    
    return `${stylePrefix} ${categoryMap[category] || 'Product'}`;
  };
  
  const generateDescription = (category: string, problem: string, style: string): string => {
    if (!category || !problem) {
      return "A modern solution designed to improve your daily life.";
    }
    
    const styleDesc = {
      'minimalist': 'sleek, minimalist',
      'modern': 'contemporary, modern',
      'organic': 'organic, natural',
    }[style] || 'innovative';
    
    return `A ${styleDesc} ${category.toLowerCase()} solution designed to ${problem.toLowerCase()}. Combines form and function to enhance your space.`;
  };

  const generateProductFeatures = (category: string, problem: string): string[] => {
    const baseFeatures = [
      "Ergonomic design for comfort and ease of use",
      "Premium quality materials for durability",
      "Thoughtful construction with attention to detail"
    ];
    
    let categoryFeatures: string[] = [];
    
    switch(category) {
      case 'homeDecor':
        categoryFeatures = ["Enhances room aesthetics", "Versatile placement options", "Complements various interior styles"];
        break;
      case 'organization':
        categoryFeatures = ["Optimizes space efficiency", "Compartmentalized storage", "Adaptable to different items"];
        break;
      case 'gaming':
        categoryFeatures = ["Enhances gaming experience", "Reduces setup time", "Compatible with popular gaming systems"];
        break;
      case 'gadgets':
        categoryFeatures = ["Smart design for tech integration", "Cable management solutions", "Adaptable to various devices"];
        break;
      case 'kitchenware':
        categoryFeatures = ["Food-safe materials", "Easy to clean surfaces", "Space-saving design for kitchen counters"];
        break;
    }
    
    return [...categoryFeatures, ...baseFeatures].slice(0, 4);
  };

  const generateProductPrompt = (details: ProductDetails): string => {
    const styleDesc = {
      'minimalist': 'minimalist, clean lines, simple',
      'modern': 'modern, sleek, contemporary',
      'organic': 'organic shapes, flowing lines, natural',
    }[details.style] || 'stylish';
    
    const categoryDesc: Record<string, string> = {
      'homeDecor': 'home decoration item',
      'organization': 'desk or home organizer',
      'gaming': 'gaming accessory',
      'gadgets': 'tech gadget or accessory',
      'kitchenware': 'kitchen tool or accessory',
    };
    
    return `A ${styleDesc} 3D printed ${categoryDesc[details.category] || 'product'} that helps ${details.problem || 'solve everyday problems'}. Product visualization, high quality render, professional product photography, white background, studio lighting, detailed, trending on artstation`;
  };

  const generateProductContent = async (apiKey: string) => {
    if (!productDetails.category || !productDetails.style) {
      alert("Please complete the product details first");
      return;
    }
    
    setIsGenerating(true);
    try {
      // Generate product name and description
      const productName = generateProductName(productDetails.category, productDetails.style);
      const productDescription = generateDescription(productDetails.category, productDetails.problem, productDetails.style);
      const features = generateProductFeatures(productDetails.category, productDetails.problem);
      
      // Generate image using Runware API
      const runwareService = new RunwareService(apiKey);
      const prompt = generateProductPrompt(productDetails);
      
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
      
      const generatedImages = await Promise.all(imagePromises);
      const imageUrls = generatedImages.map(img => img.imageURL);
      
      setProductVisualization({
        images: imageUrls,
        mainImage: imageUrls[0] || '',
        productName,
        productDescription,
        features,
      });
      
      // We'll keep the default demographics and marketing data for now
      // In a real implementation, you'd want to adjust these based on the product details too
      
    } catch (error) {
      console.error("Error generating product content:", error);
      alert("Failed to generate product content. Please check your API key and try again.");
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
