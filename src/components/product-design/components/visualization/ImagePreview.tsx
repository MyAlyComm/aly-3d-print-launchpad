
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ImagePreviewProps {
  images: string[];
  selectedImage: number;
  isGenerating: boolean;
  onImageSelect: (index: number) => void;
  onGoBack?: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ 
  images, 
  selectedImage, 
  isGenerating,
  onImageSelect,
  onGoBack
}) => {
  return (
    <div>
      <div className="bg-gray-100 rounded-md h-80 flex items-center justify-center mb-4 overflow-hidden">
        {isGenerating ? (
          <div className="flex flex-col items-center justify-center">
            <svg className="animate-spin h-8 w-8 text-primary mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-500">Generating preview...</p>
          </div>
        ) : images && images.length > 0 ? (
          <img 
            src={images[selectedImage]} 
            alt="Product visualization" 
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-4">
            <p className="text-gray-500 mb-4">No preview available. Please go back and generate a product design.</p>
            {onGoBack && (
              <Button onClick={onGoBack} variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Go to Product Details
              </Button>
            )}
          </div>
        )}
      </div>
      {!isGenerating && images && images.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((imageUrl, index) => (
            <div 
              key={index}
              className={`bg-gray-100 rounded-md aspect-square flex items-center justify-center cursor-pointer overflow-hidden ${
                selectedImage === index ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => onImageSelect(index)}
            >
              <img 
                src={imageUrl} 
                alt={`View ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
