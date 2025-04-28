
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Search, Copy, ThumbsUp, ThumbsDown, Hash } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock hashtag data
const hashtagData = {
  "3dprinting": {
    popular: ["#3dprinting", "#3dprinted", "#3dprint", "#maker", "#3dmodel"],
    niche: ["#3dprintingcommunity", "#3dprintingservice", "#3dprintingindustry", "#3dmodeldesign"],
    trending: ["#3dprintedart", "#functionalprint", "#additivemanufacturing", "#3dprintlife"]
  },
  "figurine": {
    popular: ["#figurine", "#minifigure", "#collectible", "#toycollector", "#figuremodel"],
    niche: ["#customfigurine", "#3dprintedfigure", "#charactermodels", "#miniaturefigures"],
    trending: ["#deskdecor", "#gamingart", "#3dprintfigurines", "#animemodel"]
  },
  "vase": {
    popular: ["#vase", "#homedecor", "#interiordesign", "#flowerarrangement", "#decoration"],
    niche: ["#3dprintedvase", "#customvase", "#vasedesign", "#moderndecor"],
    trending: ["#printedpottery", "#plantersandpots", "#geometricvase", "#floraldesign"]
  },
  "prop": {
    popular: ["#cosplayprop", "#prop", "#cosplay", "#costume", "#replica"],
    niche: ["#3dprintedprop", "#costumeprop", "#propsmaker", "#cosplayaccessory"],
    trending: ["#movieprop", "#comiccon", "#halloweenprop", "#cosplaylife"]
  }
};

export function HashtagResearch() {
  const { toast } = useToast();
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [savedHashtags, setSavedHashtags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("popular");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network latency
    setTimeout(() => {
      // Simple matching algorithm
      const matchingKeywords = Object.keys(hashtagData).filter(key => 
        key.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(key)
      );
      
      if (matchingKeywords.length > 0) {
        // Return the first match
        setSearchResults(hashtagData[matchingKeywords[0]]);
      } else if (keyword.toLowerCase() === "print" || keyword.toLowerCase() === "printing") {
        // Special case for print/printing
        setSearchResults(hashtagData["3dprinting"]);
      } else {
        // Default to 3dprinting if no match
        setSearchResults({
          popular: ["#" + keyword, "#3dprinting", "#maker", "#3dprint", "#design"],
          niche: ["#" + keyword + "design", "#custom" + keyword, "#3dprinted" + keyword],
          trending: ["#3dprinted", "#customdesign", "#3dprintingcommunity"]
        });
      }
      
      setIsLoading(false);
    }, 800);
  };

  const addToSaved = (hashtag: string) => {
    if (!savedHashtags.includes(hashtag)) {
      setSavedHashtags([...savedHashtags, hashtag]);
      toast({
        title: "Hashtag Saved",
        description: `${hashtag} has been added to your collection.`
      });
    }
  };

  const removeFromSaved = (hashtag: string) => {
    setSavedHashtags(savedHashtags.filter(tag => tag !== hashtag));
    toast({
      title: "Hashtag Removed",
      description: `${hashtag} has been removed from your collection.`
    });
  };

  const copyAllHashtags = () => {
    const hashtagsText = savedHashtags.join(" ");
    navigator.clipboard.writeText(hashtagsText);
    toast({
      title: "Copied to Clipboard",
      description: `${savedHashtags.length} hashtags copied to clipboard.`
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Hashtag Research</CardTitle>
          <CardDescription>Find the best hashtags for your 3D printing content</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <Label htmlFor="keyword">Search for a 3D printing related keyword</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  id="keyword"
                  placeholder="Enter a keyword (e.g., figurine, vase, prop)..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Searching..." : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>

          {searchResults && (
            <div className="mt-6">
              <Tabs defaultValue="popular" value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="mb-4">
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="niche">Niche</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                </TabsList>
                
                <TabsContent value="popular">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {searchResults.popular.map((hashtag) => (
                      <Badge key={hashtag} variant="outline" className="text-sm py-1 px-3 cursor-pointer hover:bg-slate-50" onClick={() => addToSaved(hashtag)}>
                        {hashtag} <Hash className="ml-1 h-3 w-3" />
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="niche">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {searchResults.niche.map((hashtag) => (
                      <Badge key={hashtag} variant="outline" className="text-sm py-1 px-3 cursor-pointer hover:bg-slate-50" onClick={() => addToSaved(hashtag)}>
                        {hashtag} <Hash className="ml-1 h-3 w-3" />
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="trending">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {searchResults.trending.map((hashtag) => (
                      <Badge key={hashtag} variant="outline" className="text-sm py-1 px-3 cursor-pointer hover:bg-slate-50" onClick={() => addToSaved(hashtag)}>
                        {hashtag} <Hash className="ml-1 h-3 w-3" />
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <p className="text-xs text-muted-foreground mt-2">Click on a hashtag to add it to your collection</p>
            </div>
          )}
          
          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between items-center">
              <Label>Your Hashtag Collection</Label>
              {savedHashtags.length > 0 && (
                <Button variant="outline" size="sm" onClick={copyAllHashtags}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy All
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {savedHashtags.length > 0 ? (
                savedHashtags.map((hashtag) => (
                  <Badge key={hashtag} className="text-sm py-1 px-3">
                    {hashtag}
                    <button 
                      className="ml-1 opacity-70 hover:opacity-100" 
                      onClick={() => removeFromSaved(hashtag)}
                    >
                      ×
                    </button>
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No hashtags saved yet. Search and click on hashtags to add them here.</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
