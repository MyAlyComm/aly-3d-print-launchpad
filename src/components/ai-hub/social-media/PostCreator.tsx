
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function PostCreator() {
  const { toast } = useToast();
  const [content, setContent] = React.useState("");
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<string[]>([]);

  const platforms = [
    { name: "Facebook", icon: Facebook, color: "bg-blue-600" },
    { name: "Instagram", icon: Instagram, color: "bg-pink-600" },
    { name: "Twitter", icon: Twitter, color: "bg-blue-400" },
    { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700" },
  ];

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) {
      toast({
        title: "Error",
        description: "Please enter some content for your post",
        variant: "destructive",
      });
      return;
    }
    if (selectedPlatforms.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one platform",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success",
      description: "Your post has been scheduled",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="platforms">Select Platforms</Label>
              <div className="flex gap-2 mt-2">
                {platforms.map((platform) => (
                  <Button
                    key={platform.name}
                    type="button"
                    variant={selectedPlatforms.includes(platform.name) ? "default" : "outline"}
                    className="flex items-center gap-2"
                    onClick={() => handlePlatformToggle(platform.name)}
                  >
                    <platform.icon className="h-4 w-4" />
                    {platform.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="content">Post Content</Label>
              <Textarea
                id="content"
                placeholder="Write your post content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="h-32"
              />
            </div>
            
            <div>
              <Label htmlFor="media">Upload Media (Optional)</Label>
              <Input
                id="media"
                type="file"
                className="mt-1"
                accept="image/*,video/*"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Schedule Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
