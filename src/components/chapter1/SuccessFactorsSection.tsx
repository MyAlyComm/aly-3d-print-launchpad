
import React from 'react';

export const SuccessFactorsSection = () => {
  return (
    <section id="success-factors" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Key Success Factors</h2>
      
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Market Research",
            description: "Identify profitable niches and validate demand before production"
          },
          {
            title: "Quality Control",
            description: "Maintain consistent product quality and customer satisfaction"
          },
          {
            title: "Optimization",
            description: "Continuously improve print settings and production efficiency"
          }
        ].map((factor, index) => (
          <div key={index} className="p-6 bg-purple-50 rounded-lg border border-purple-100">
            <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
            <p className="text-gray-700">{factor.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
