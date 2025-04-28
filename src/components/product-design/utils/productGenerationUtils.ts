import { ProductDetails } from '../types/productDesignTypes';

export const generateProductName = (category: string, style: string): string => {
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

export const generateDescription = (category: string, problem: string, style: string): string => {
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

export const generateProductFeatures = (category: string, problem: string): string[] => {
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

export const generateProductPrompt = (details: ProductDetails): string => {
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
