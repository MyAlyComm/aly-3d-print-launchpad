
import React from 'react';

interface AudienceProps {
  title: string;
  type: 'primary' | 'secondary' | 'tertiary';
  audience: {
    title: string;
    ageRange: string;
    location: string;
    income: string;
    painPoints: string;
  };
}

const getColorByType = (type: 'primary' | 'secondary' | 'tertiary') => {
  switch (type) {
    case 'primary':
      return {
        border: 'border-primary/20',
        bg: 'bg-primary',
        icon: 'bg-primary/10 text-primary',
      };
    case 'secondary':
      return {
        border: 'border-gray-200',
        bg: 'bg-blue-600',
        icon: 'bg-blue-100 text-blue-600',
      };
    case 'tertiary':
      return {
        border: 'border-gray-200',
        bg: 'bg-green-600',
        icon: 'bg-green-100 text-green-600',
      };
  };
};

export const AudienceCard = ({ title, type, audience }: AudienceProps) => {
  const colors = getColorByType(type);
  
  return (
    <div className={`border ${colors.border} rounded-lg overflow-hidden`}>
      <div className={`${colors.bg} text-white p-3`}>
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className={`w-16 h-16 rounded-full ${colors.icon} flex items-center justify-center mr-4`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold">{audience.title}</h4>
            <p className="text-sm text-gray-600">Tech-savvy professionals aged {audience.ageRange}</p>
          </div>
        </div>
        
        <div className="space-y-3 text-sm">
          <div>
            <span className="block text-gray-500">Location</span>
            <span className="font-medium">{audience.location}</span>
          </div>
          <div>
            <span className="block text-gray-500">Income Level</span>
            <span className="font-medium">{audience.income}</span>
          </div>
          <div>
            <span className="block text-gray-500">Pain Points</span>
            <span className="font-medium">{audience.painPoints}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
