
import React from "react";

interface FAQHeroProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const FAQHero = ({ imageUrl, title, subtitle }: FAQHeroProps) => {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 mix-blend-multiply" />
      <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
