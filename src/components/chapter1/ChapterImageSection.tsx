
import { Card, CardContent } from "@/components/ui/card";
import { AIImageGenerator } from "@/components/AIImageGenerator";

export const ChapterImageSection = () => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-4">Generate AI Images for Chapter</h2>
        <AIImageGenerator />
      </CardContent>
    </Card>
  );
};
