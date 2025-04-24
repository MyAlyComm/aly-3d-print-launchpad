
import React from 'react';

export const MythsSection = () => {
  return (
    <section id="myths" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Breaking Through Misconceptions</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-red-50 rounded-lg border border-red-100">
          <h3 className="text-xl font-semibold mb-4 text-red-800">Common Myths</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              "3D printing is too complicated for beginners"
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              "The market is already saturated"
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              "You need expensive industrial printers"
            </li>
          </ul>
        </div>

        <div className="p-6 bg-green-50 rounded-lg border border-green-100">
          <h3 className="text-xl font-semibold mb-4 text-green-800">Reality</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Modern printers are user-friendly with great communities
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Numerous untapped niches still exist
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Entry-level printers can produce professional results
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
