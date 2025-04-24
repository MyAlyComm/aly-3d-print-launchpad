
import React from 'react';

export const EquipmentSection = () => {
  return (
    <section id="equipment" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Required Equipment</h2>
      
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Essential Equipment</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                3D Printer (Recommended: Ender 3 or similar)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                Basic tools kit
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                Filament (PLA to start)
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Optional Equipment</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                Enclosure for temperature control
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                Additional build plates
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                Post-processing tools
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
