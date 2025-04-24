
import React from 'react';

export const SetupSection = () => {
  return (
    <section id="setup" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Printer Setup and Calibration</h2>
      
      <div className="space-y-6">
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
          <h3 className="text-xl font-semibold mb-4">Initial Setup Steps</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li className="text-gray-700">Unbox and assemble your printer carefully</li>
            <li className="text-gray-700">Level the build plate using paper method</li>
            <li className="text-gray-700">Load filament and perform test print</li>
            <li className="text-gray-700">Calibrate e-steps and flow rate</li>
            <li className="text-gray-700">Fine-tune temperature settings</li>
          </ol>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-xl font-semibold mb-4">Quality Checks</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">✓ Bed adhesion test</li>
            <li className="text-gray-700">✓ Layer alignment verification</li>
            <li className="text-gray-700">✓ Stringing test</li>
            <li className="text-gray-700">✓ Temperature tower test</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
