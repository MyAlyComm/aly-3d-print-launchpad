
import React from 'react';
import { Card } from "@/components/ui/card";

export const AwakeningSection = () => {
  return (
    <section id="awakening" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">The Awakening</h2>
      
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Content creation and community building"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 italic text-center">Building a community through social media and content creation</p>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <p>Fast forward to February, my ideas began to crystallize and I embarked on a new chapter, creating products and content for social media. I knew that the industry was hungry for new ideas, new products, and information.</p>
          <p>But I underestimated just how much help they needed.</p>
          <p>When my first reel went viral—I started getting 5 or 10 messages a day asking for help, then 20, then 100. Pretty soon I realized there was no possible way I could keep up helping people one at a time.</p>
          <p>So I opened a free Skool community to try and centralize my thoughts. I started building systems and pathways tailored to the unique situations of global entrepreneurs. I realized that to give truly valuable advice I needed to know a lot about each person—their skills, their geography, their dreams, and ambitions.</p>
          <p>I created worksheets, AI prompts, and content calendars to help them create sustainable, profitable businesses.</p>
        </div>
      </Card>
    </section>
  );
};
