
import React from 'react';

export const GeographicDistribution = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="font-bold text-gray-800 mb-3">Geographic Distribution</h3>
      <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-3">
        <p className="text-gray-500">Geographic heat map placeholder</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="block text-gray-500">Top Markets</span>
          <ul className="list-disc pl-5">
            <li>San Francisco Bay Area</li>
            <li>New York Metro</li>
            <li>Seattle</li>
            <li>Austin</li>
          </ul>
        </div>
        <div>
          <span className="block text-gray-500">Emerging Markets</span>
          <ul className="list-disc pl-5">
            <li>Denver</li>
            <li>Portland</li>
            <li>Nashville</li>
            <li>Raleigh-Durham</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
