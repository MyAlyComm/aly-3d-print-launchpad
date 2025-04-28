
import React from 'react';

export const PsychographicProfile = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="font-bold text-gray-800 mb-3">Psychographic Profile</h3>
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Values</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
              Efficiency
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
              Aesthetics
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
              Productivity
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Interests</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              Technology
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              Home Office Design
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              Productivity
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
