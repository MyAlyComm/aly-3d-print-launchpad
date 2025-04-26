
import React from 'react';
import { Card } from "@/components/ui/card";
import { ShieldX } from "lucide-react";

export const MythsSection = () => {
  const myths = [
    {
      title: "It's too late to start a 3D printing business.",
      description: "While some verticals like toys on Etsy are indeed quite crowded, people who are good at marketing and know how to get customers are still starting successful businesses. There's a world of opportunity far beyond Etsy."
    },
    {
      title: "You need technical expertise to succeed.",
      description: "Today's printers require about as much technical knowledge as setting up a coffee maker. Success depends far more on marketing and business skills than technical prowess."
    },
    {
      title: "The profit margins aren't sustainable.",
      description: "While commodity products have seen margin compression, unique and solution-oriented items still command premium prices and robust margins exceeding 80%."
    },
    {
      title: "You need dozens of printers to make real money.",
      description: "Smart product selection and pricing can generate substantial revenue even with a single printer, as I proved in my first weeks."
    },
    {
      title: "It's just a hobby, not a real business.",
      description: "Tell that to the thousands of entrepreneurs who've built six and seven-figure businesses from their spare bedroom."
    },
    {
      title: "The electricity cost is so high.",
      description: "A modern 3D printer uses about the same electricity as a laptop computer—around 50-150 watts. Even running 24/7, that's $10-30 per month, while your products can sell for hundreds or thousands."
    },
    {
      title: "It's just a fad.",
      description: "3D printing isn't just about plastic trinkets—it's the forefront of a manufacturing revolution with widespread applications in robotics, biomedical fields, construction, food production, and custom consumer goods."
    },
    {
      title: "I don't know how to design products.",
      description: "You can license existing designs with commercial rights, hire designers for custom work, or master AI-assisted design tools. I built my first $20K months without creating a single design from scratch myself."
    }
  ];

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <ShieldX className="h-6 w-6 text-primary" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Breaking Through Misconceptions</h2>
      </div>

      <Card className="p-6">
        <p className="text-gray-700 mb-6">
          I call these the "Stained Glass Effect" – views that might contain fragments of truth but 
          distort reality so severely that they blind people to the opportunities right in front of them.
        </p>

        <div className="grid gap-6">
          {myths.map((myth, index) => (
            <Card key={index} className="p-4 bg-gradient-to-r from-red-50/50 to-transparent">
              <h3 className="font-semibold text-gray-800 mb-2">{myth.title}</h3>
              <p className="text-gray-700">{myth.description}</p>
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
};
