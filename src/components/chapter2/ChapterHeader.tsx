
import React from 'react';

export const ChapterHeader = () => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-6">Chapter 2: Knowing Yourself, Knowing Your Tools</h1>
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Person working on 3D printing designs"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 italic text-center">Understanding your path in the 3D printing business landscape</p>
      </div>
      <p className="text-lg text-gray-700">
        As my 3D printing business began to grow, I found myself overwhelmed by the sheer volume of decisions I needed to make each day. Which products should I focus on? Where should I sell them? How should I divide my limited time?
      </p>
    </div>
  );
};
