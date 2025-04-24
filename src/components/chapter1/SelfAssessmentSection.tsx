
import React from 'react';
import { Card } from "@/components/ui/card";

export const SelfAssessmentSection = () => {
  return (
    <section id="self-assessment" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Chapter 1 Self-Assessment: Your Arbitrage Advantage</h2>
      
      <Card className="p-6">
        <p className="mb-4">Before moving forward, take a moment to identify your own arbitrage advantages in the 3D printing space:</p>
        
        <ol className="list-decimal pl-5 space-y-4">
          <li>What existing skills do you have that most people in the 3D printing industry lack? (Marketing, design, sales, etc.)</li>
          <li>What misconceptions about 3D printing did you previously hold? How has your understanding changed?</li>
          <li>Which phase of the industry's evolution do you find most interesting, and why?</li>
          <li>What specific niche or application of 3D printing excites you the most?</li>
          <li>Based on the industry forecast, which upcoming trend do you feel best positioned to capitalize on?</li>
        </ol>
      </Card>
    </section>
  );
};
