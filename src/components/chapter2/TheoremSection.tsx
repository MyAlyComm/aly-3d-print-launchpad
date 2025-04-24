
import React from 'react';
import { Card } from "@/components/ui/card";

export const TheoremSection = () => {
  return (
    <section id="theorem" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">The Axiogenetic Theorem</h2>
      
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
          alt="Innovation and Time concept"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 italic text-center">The intersection of Time and Innovation creating Value</p>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <p>The answer I was searching for was not a solution. It was a question in and of itself.</p>
          <p>When all of the problems of today have for the most part been solved, what remains?</p>
          <p>The answer was an equation. I call it the Axiogenetic Theorem. A universal truth that extends far beyond the realm of 3D printing, and it revolves around 2 constants:</p>
          <p className="font-semibold text-lg">Time, and the Rate of Human Innovation.</p>
          <p>These two products of each other represent one half of an equation, where the other is Value, or the value created. Because time and innovation are outside the control of any one person, we cannot create more value without saving time or being more innovative.</p>
          <p>And thus, I set out to build tools, systems, and a team—to create an AI company that will solve the biggest problems in 3D printing, and the problems of tomorrow, today.</p>
          <p>But as with all good things, this too shall take time. And time waits for no man. And the people need help today.</p>
        </div>
      </Card>
    </section>
  );
};
