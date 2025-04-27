
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Download, Eye } from "lucide-react";

export const SampleChapterPreview = () => {
  const [isHovered, setIsHovered] = useState(false);

  const sampleChapterContent = [
    {
      title: "Arbitrage Windows",
      description: "Discover the golden periods of opportunity in emerging technologies",
      previewText: "In business, the biggest profits don't come from being better. They come from being early..."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              View Sample Chapter
            </h2>
            <p className="text-gray-600 text-lg">
              Get a glimpse of the insights and strategies inside the 3D Printing Blueprint
            </p>
          </div>

          <Card 
            className={`group relative overflow-hidden transition-all duration-500 transform ${
              isHovered ? 'scale-[1.02] shadow-xl' : 'scale-100'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Book className="w-10 h-10 text-primary" />
                  <h3 className="text-2xl font-semibold text-primary">
                    {sampleChapterContent[0].title}
                  </h3>
                </div>
                <p className="text-gray-700 font-medium">
                  {sampleChapterContent[0].description}
                </p>
                <p className="text-gray-600 italic">
                  "{sampleChapterContent[0].previewText}"
                </p>
                <div className="flex gap-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="group flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    <Eye className="w-5 h-5 group-hover:animate-pulse" />
                    Preview Chapter
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 transition-opacity duration-700 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} 
                />
                <img 
                  src="/lovable-uploads/72adc6d5-64f9-4a52-b3cd-09e2ef9b3882.png" 
                  alt="Sample Chapter Preview" 
                  className="rounded-lg shadow-md transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
