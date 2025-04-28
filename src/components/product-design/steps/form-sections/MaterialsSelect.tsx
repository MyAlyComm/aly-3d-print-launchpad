
import React from 'react';

interface MaterialsSelectProps {
  materials: string[];
  onMaterialChange: (material: string, checked: boolean) => void;
}

export const MaterialsSelect = ({ materials, onMaterialChange }: MaterialsSelectProps) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">Material Preferences</label>
      <div className="grid grid-cols-4 gap-3">
        {["PLA", "PETG", "TPU", "ABS"].map((material) => (
          <label key={material} className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="form-checkbox h-4 w-4 text-primary"
              checked={materials.includes(material)}
              onChange={(e) => onMaterialChange(material, e.target.checked)}
            />
            <span>{material}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
