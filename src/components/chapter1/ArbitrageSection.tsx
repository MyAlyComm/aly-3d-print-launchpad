
import React from 'react';

export const ArbitrageSection = ({ onSubmit }: { onSubmit?: () => void }) => {
  return (
    <section id="arbitrage" className="mb-6 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">The Arbitrage Window Explained</h2>
      
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Arbitrage in 3D printing occurs when you can identify items that can be produced at a significantly 
          lower cost than their market selling price. This creates a profitable opportunity window.
        </p>

        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-100">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Key Arbitrage Opportunities</h3>
          <ul className="space-y-2 md:space-y-3">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-2 sm:mt-0 bg-blue-500 rounded-full"></span>
              <span>Custom and personalized products with high margins</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-2 sm:mt-0 bg-blue-500 rounded-full"></span>
              <span>Niche market items with limited competition</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-2 sm:mt-0 bg-blue-500 rounded-full"></span>
              <span>Replacement parts for discontinued products</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-2 sm:mt-0 bg-blue-500 rounded-full"></span>
              <span>Specialized tools and equipment components</span>
            </li>
          </ul>
        </div>
        
        {onSubmit && (
          <div className="flex justify-end mt-6">
            <button 
              onClick={onSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Complete Section
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
