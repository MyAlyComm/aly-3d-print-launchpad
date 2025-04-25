
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RevelationSectionProps {
  onSubmit: () => void;
}

export const RevelationSection: React.FC<RevelationSectionProps> = ({ onSubmit }) => {
  return (
    <section id="revelation" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">The Revelation</h2>
      
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
          alt="Light bulb moment - the revelation"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 italic text-center">The moment when patterns become clear and solutions emerge</p>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <p>But the more content I created, the more clearly I saw why so many people fail, plateau, and get stuck or lost.</p>
          <p>It's because the breadth of information to succeed is vast. Printer settings, shipping strategies, product-market fit, social media, customer funnels, product design, branding, advertising. The list goes on.</p>
          <p>As I segmented each group, I began to understand that what's needed in the industry isn't more information.</p>
          <p>It's more value in less time.</p>
          <p>And thus, the 3D Printing Blueprint was born.</p>
          <p>While it's not going to apply to every single situation—the core principles, systems, and AI tools within this book lay down an easy-to-follow, time-saving strategy that avoids months of research and gets you from zero to profit in 60 days or less.</p>
          <p>All you need is a computer, a smartphone, and a place to plug in your printer.</p>
          <p>But to make a plan for tomorrow, you must first look inward to understand who you are, today.</p>
          <p>The biggest mistake I see new entrepreneurs make isn't choosing the wrong printer or selecting the wrong products. It's failing to align their business with their natural strengths, interests, and circumstances.</p>
          <p>When I first started, I almost fell into this trap myself. I was ready to copy exactly what I saw other successful 3D printing businesses doing—without considering whether those models played to my strengths or fit my situation.</p>
          
          <div className="flex justify-end mt-4">
            <Button onClick={onSubmit} className="bg-primary hover:bg-primary/90">
              Continue
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};
