
import { ProductDetails, ProductVisualizationData, DemographicsData, MarketingData } from '../types/productDesignTypes';

export const defaultProductDetails: ProductDetails = {
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

export const defaultVisualization: ProductVisualizationData = {
  images: [],
  mainImage: '',
  productName: '',
  productDescription: '',
  features: [],
};

export const defaultDemographics: DemographicsData = {
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

export const defaultMarketing: MarketingData = {
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
