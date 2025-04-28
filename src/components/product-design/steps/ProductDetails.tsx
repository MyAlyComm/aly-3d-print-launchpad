
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface ProductDetailsProps {
  onNext: () => void;
}

export const ProductDetails = ({ onNext }: ProductDetailsProps) => {
  const [productCategory, setProductCategory] = useState("");
  const [style, setStyle] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Define Your Product</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Product Category</label>
          <select 
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
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
                onClick={() => setStyle(styleOption)}
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
            {["Width", "Height", "Depth"].map((dimension) => (
              <div key={dimension}>
                <label className="text-sm text-gray-600">{dimension} (cm)</label>
                <Input type="number" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={onNext}>
            Next: Visualization
          </Button>
        </div>
      </div>
    </div>
  );
};
