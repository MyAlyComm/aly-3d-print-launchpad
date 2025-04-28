
export interface ProductDetails {
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

export interface ProductVisualizationData {
  images: string[];
  mainImage: string;
  productName: string;
  productDescription: string;
  features: string[];
}

export interface DemographicsData {
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

export interface MarketingData {
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

export interface ProductDesignContextType {
  productDetails: ProductDetails;
  productVisualization: ProductVisualizationData;
  demographics: DemographicsData;
  marketing: MarketingData;
  isGenerating: boolean;
  setProductDetails: (details: ProductDetails) => void;
  generateProductContent: (apiKey: string) => Promise<void>;
}
