
import React from "react";

interface FAQHeroProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const FAQHero = ({ imageUrl, title, subtitle }: FAQHeroProps) => {
  return (
    <div className="mb-8">
      <div className="grid md:grid-cols-2 gap-6 items-center rounded-lg overflow-hidden bg-gradient-to-r from-orange-500/5 to-yellow-500/5">
        <div className="order-2 md:order-1 p-6 md:p-8">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              {subtitle}
            </p>
          </div>
        </div>
        
        <div className="h-[250px] md:h-[400px] order-1 md:order-2">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
