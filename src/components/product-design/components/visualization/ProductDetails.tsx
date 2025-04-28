
import React from 'react';
import { ProductVisualizationData, ProductDetails as ProductDetailsType } from '../../types/productDesignTypes';

interface ProductDetailsProps {
  visualization: ProductVisualizationData;
  productDetails: ProductDetailsType;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ visualization, productDetails }) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-3">{visualization.productName || "Product Name"}</h3>
      <p className="text-gray-600 mb-4">{visualization.productDescription || "Product description will appear here after generation."}</p>
      
      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-2">Key Features</h4>
        {visualization.features && visualization.features.length > 0 ? (
          <ul className="list-disc pl-5 text-gray-600">
            {visualization.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Features will be listed here.</p>
        )}
      </div>
      
      <CustomizationOptions />
      <ProductionDetails productDetails={productDetails} />
    </div>
  );
};

const CustomizationOptions: React.FC = () => {
  return (
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
  );
};

interface ProductionDetailsProps {
  productDetails: ProductDetailsType;
}

const ProductionDetails: React.FC<ProductionDetailsProps> = ({ productDetails }) => {
  return (
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
  );
};
