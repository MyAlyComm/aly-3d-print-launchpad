
import React from 'react';
import { Input } from "@/components/ui/input";

interface DimensionsInputProps {
  width: string;
  height: string;
  depth: string;
  onDimensionChange: (dimension: 'width' | 'height' | 'depth', value: string) => void;
}

export const DimensionsInput = ({ width, height, depth, onDimensionChange }: DimensionsInputProps) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">Dimensions</label>
      <div className="grid grid-cols-3 gap-4">
        {[
          { name: "Width", key: "width" as const }, 
          { name: "Height", key: "height" as const }, 
          { name: "Depth", key: "depth" as const }
        ].map((dimension) => (
          <div key={dimension.name}>
            <label className="text-sm text-gray-600">{dimension.name} (cm)</label>
            <Input 
              type="number" 
              value={dimension.key === 'width' ? width : dimension.key === 'height' ? height : depth}
              onChange={(e) => onDimensionChange(dimension.key, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
