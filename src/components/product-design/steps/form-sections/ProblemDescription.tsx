
import React from 'react';

interface ProblemDescriptionProps {
  problem: string;
  onProblemChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ProblemDescription = ({ problem, onProblemChange }: ProblemDescriptionProps) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">What problem does your product solve?</label>
      <textarea 
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        rows={3}
        placeholder="Describe the problem your product solves..."
        value={problem}
        onChange={onProblemChange}
      />
    </div>
  );
};
