
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { RunwareService } from '@/services/runwareService';
import { toast } from 'sonner';

export const AIImageGenerator = () => {
  const [apiKey, setApiKey] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [runwareService, setRunwareService] = useState<RunwareService | null>(null);

  const generateImages = async () => {
    if (!apiKey) {
      toast.error("Please enter your Runware API key");
      return;
    }

    if (!runwareService) {
      const service = new RunwareService(apiKey);
      setRunwareService(service);
    }

    setIsGenerating(true);

    const prompts = [
      "A modern 3D printer in action, close-up shot with intricate details being printed, professional lighting, high quality",
      "A successful entrepreneur working with multiple 3D printers in a clean, modern workshop setting",
      "Different 3D printed products displayed professionally, showing variety and quality",
      "A person examining a finished 3D printed product with precision tools, quality control process",
      "An organized 3D printing workspace with multiple printers running simultaneously, business scaling concept"
    ];

    try {
      for (const prompt of prompts) {
        const service = runwareService || new RunwareService(apiKey);
        const result = await service.generateImage({
          positivePrompt: prompt,
          model: "runware:100@1",
        });
        
        // Here you would typically save or display the image
        console.log("Generated image:", result);
        toast.success("Image generated successfully!");
      }
    } catch (error) {
      console.error("Error generating images:", error);
      toast.error("Failed to generate images. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
            Runware API Key
          </label>
          <Input
            id="apiKey"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Runware API key"
            className="w-full"
          />
        </div>
        <Button
          onClick={generateImages}
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? "Generating Images..." : "Generate AI Images"}
        </Button>
        <p className="text-sm text-gray-500">
          Get your API key from <a href="https://runware.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Runware.ai</a>
        </p>
      </div>
    </Card>
  );
};
