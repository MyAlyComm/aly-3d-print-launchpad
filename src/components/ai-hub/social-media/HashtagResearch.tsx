
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export function HashtagResearch() {
  const [keyword, setKeyword] = React.useState("");
  const [suggestedHashtags, setSuggestedHashtags] = React.useState<string[]>([
    "#3dprinting", "#3dprinted", "#maker", "#3ddesign",
    "#3dart", "#additivemanufacturing", "#3dmodel", "#prototype"
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to get hashtag suggestions
    console.log("Searching for hashtags related to:", keyword);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <Label htmlFor="keyword">Search Keyword</Label>
              <div className="flex gap-2">
                <Input
                  id="keyword"
                  placeholder="Enter a keyword..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Button type="submit">Search</Button>
              </div>
            </div>
          </form>

          <div className="mt-6">
            <Label>Suggested Hashtags</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {suggestedHashtags.map((hashtag) => (
                <Badge key={hashtag} variant="outline" className="text-sm">
                  {hashtag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
