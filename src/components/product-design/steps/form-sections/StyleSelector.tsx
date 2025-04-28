
import React from 'react';

interface StyleSelectorProps {
  selectedStyle: string;
  onStyleChange: (style: string) => void;
}

export const StyleSelector = ({ selectedStyle, onStyleChange }: StyleSelectorProps) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">Design Style</label>
      <div className="grid grid-cols-3 gap-4">
        {["minimalist", "modern", "organic"].map((style) => (
          <div 
            key={style}
            className={`border rounded-md p-4 text-center cursor-pointer ${
              selectedStyle === style ? 'border-primary bg-primary/5' : 'border-gray-200'
            }`}
            onClick={() => onStyleChange(style)}
          >
            <div className="bg-gray-100 h-24 mb-2 rounded flex items-center justify-center">
              <span className="text-4xl">
                {style === "minimalist" ? "◯" : style === "modern" ? "⬡" : "∿"}
              </span>
            </div>
            <span className="capitalize">{style}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
