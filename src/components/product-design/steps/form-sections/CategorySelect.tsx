
import React from 'react';

interface CategorySelectProps {
  category: string;
  onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CategorySelect = ({ category, onCategoryChange }: CategorySelectProps) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">Product Category</label>
      <select 
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        value={category}
        onChange={onCategoryChange}
      >
        <option value="">Select a category</option>
        <option value="homeDecor">Home Decor</option>
        <option value="organization">Organization & Storage</option>
        <option value="gaming">Gaming Accessories</option>
        <option value="gadgets">Tech Gadgets</option>
        <option value="kitchenware">Kitchenware</option>
      </select>
    </div>
  );
};
