
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Linkedin, Image, Calendar, Sparkles, CheckCircle, ThumbsUp, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";

export function PostCreator() {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["Instagram"]);
  const [scheduledDate, setScheduledDate] = useState<Date | undefined>(undefined);
  const [scheduledTime, setScheduledTime] = useState<string>("12:00");
  const [isScheduling, setIsScheduling] = useState(false);
  const [suggestedContent, setSuggestedContent] = useState<string[]>([
    "Just finished printing this amazing 3D model! What do you think? #3dprinting #maker",
    "New design fresh off the printer! This took 8 hours to print but was totally worth it. #3dart #3dprinting",
    "Behind the scenes look at our workshop. This is where the magic happens! #3dprintingbusiness #makerspace"
  ]);
  const [contentCharCount, setContentCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const platforms = [
    { name: "Instagram", icon: Instagram, color: "bg-gradient-to-r from-purple-500 to-pink-500", characterLimit: 2200 },
    { name: "Facebook", icon: Facebook, color: "bg-blue-600", characterLimit: 63206 },
    { name: "Twitter", icon: Twitter, color: "bg-blue-400", characterLimit: 280 },
    { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700", characterLimit: 3000 },
  ];

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setMediaPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
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
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        
        // Reset form
        if (!isScheduling) {
          setContent("");
          setMediaPreview(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        }
      }, 3000);
      
      const action = isScheduling ? "scheduled" : "published";
      const timeInfo = isScheduling ? ` for ${format(scheduledDate!, 'PP')} at ${scheduledTime}` : "";
      
      toast({
        title: "Success",
        description: `Your post has been ${action}${timeInfo}`,
      });
    }, 1500);
  };

  const applySuggestedContent = (content: string) => {
    setContent(content);
    setContentCharCount(content.length);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setContentCharCount(e.target.value.length);
  };

  const getCurrentPlatformCharLimit = () => {
    if (selectedPlatforms.length === 0) return Infinity;
    
    // Find the platform with the lowest character limit
    return Math.min(
      ...selectedPlatforms.map(platformName => {
        const platform = platforms.find(p => p.name === platformName);
        return platform ? platform.characterLimit : Infinity;
      })
    );
  };

  const characterLimitExceeded = contentCharCount > getCurrentPlatformCharLimit();
  const charactersRemaining = getCurrentPlatformCharLimit() - contentCharCount;

  return (
    <div className="space-y-6">
      <Tabs defaultValue="create">
        <TabsList className="mb-4">
          <TabsTrigger value="create">Create Post</TabsTrigger>
          <TabsTrigger value="ideas">Post Ideas</TabsTrigger>
          <TabsTrigger value="analytics">Post Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Create Social Media Post</CardTitle>
              <CardDescription>
                Craft your content for multiple platforms and preview how it will look
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="platforms">Select Platforms</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {platforms.map((platform) => (
                      <Button
                        key={platform.name}
                        type="button"
                        variant={selectedPlatforms.includes(platform.name) ? "default" : "outline"}
                        className={`flex items-center gap-2 ${selectedPlatforms.includes(platform.name) ? platform.color : ""}`}
                        onClick={() => handlePlatformToggle(platform.name)}
                      >
                        <platform.icon className="h-4 w-4" />
                        {platform.name}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="content" className="flex justify-between">
                        <span>Post Content</span>
                        <span className={`text-xs ${characterLimitExceeded ? 'text-red-500 font-bold' : 'text-muted-foreground'}`}>
                          {contentCharCount} / {getCurrentPlatformCharLimit()}
                        </span>
                      </Label>
                      <Textarea
                        id="content"
                        placeholder="Write your post content here..."
                        value={content}
                        onChange={handleContentChange}
                        className="h-32 mt-1"
                      />
                      {characterLimitExceeded && (
                        <p className="text-xs text-red-500 mt-1">
                          Character limit exceeded by {Math.abs(charactersRemaining)} characters
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="media">Upload Media</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <Input
                          id="media"
                          ref={fileInputRef}
                          type="file"
                          className="flex-1"
                          accept="image/*,video/*"
                          onChange={handleMediaUpload}
                        />
                        {mediaPreview && (
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setMediaPreview(null);
                              if (fileInputRef.current) {
                                fileInputRef.current.value = "";
                              }
                            }}
                          >
                            Clear
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="schedule" className="flex items-center gap-2 cursor-pointer">
                          <input
                            id="schedule"
                            type="checkbox"
                            className="rounded"
                            checked={isScheduling}
                            onChange={(e) => setIsScheduling(e.target.checked)}
                          />
                          Schedule for later
                        </Label>
                      </div>
                      
                      {isScheduling && (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div>
                            <Label>Date</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-full justify-start text-left font-normal mt-1"
                                >
                                  <Calendar className="mr-2 h-4 w-4" />
                                  {scheduledDate ? format(scheduledDate, 'PPP') : <span>Pick a date</span>}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <CalendarComponent
                                  mode="single"
                                  selected={scheduledDate}
                                  onSelect={setScheduledDate}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div>
                            <Label htmlFor="time">Time</Label>
                            <Input
                              id="time"
                              type="time"
                              value={scheduledTime}
                              onChange={(e) => setScheduledTime(e.target.value)}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label>Post Preview</Label>
                    {selectedPlatforms.length > 0 ? (
                      <div className="border rounded-md p-4 mt-1 h-[300px] overflow-y-auto bg-white">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 font-bold">3D</span>
                          </div>
                          <div>
                            <p className="font-semibold text-sm">Your 3D Print Business</p>
                            <p className="text-xs text-gray-500">Just now</p>
                          </div>
                        </div>
                        
                        <div className="mb-3 whitespace-pre-line">{content}</div>
                        
                        {mediaPreview && (
                          <div className="rounded-md overflow-hidden border">
                            <img src={mediaPreview} alt="Preview" className="w-full h-auto" />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="border rounded-md p-4 mt-1 h-[300px] flex items-center justify-center text-center text-muted-foreground">
                        Select a platform to see the preview
                      </div>
                    )}
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting || contentCharCount === 0 || characterLimitExceeded || (isScheduling && !scheduledDate)}
                >
                  {isSubmitting ? (
                    "Processing..."
                  ) : showSuccess ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      {isScheduling ? "Scheduled Successfully" : "Posted Successfully"}
                    </>
                  ) : (
                    <>
                      {isScheduling ? (
                        <>
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule Post
                        </>
                      ) : (
                        <>
                          {selectedPlatforms.length === 1 && (
                            platforms.find(p => p.name === selectedPlatforms[0])?.icon({
                              className: "mr-2 h-4 w-4"
                            })
                          )}
                          Post Now
                        </>
                      )}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ideas">
          <Card>
            <CardHeader>
              <CardTitle>Content Ideas</CardTitle>
              <CardDescription>
                Need inspiration? Use these templates to create engaging posts for your 3D printing business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">Product Showcase</h3>
                      <Button variant="ghost" size="sm" onClick={() => applySuggestedContent(suggestedContent[0])}>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Use This
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{suggestedContent[0]}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">New Design Announcement</h3>
                      <Button variant="ghost" size="sm" onClick={() => applySuggestedContent(suggestedContent[1])}>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Use This
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{suggestedContent[1]}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">Behind the Scenes</h3>
                      <Button variant="ghost" size="sm" onClick={() => applySuggestedContent(suggestedContent[2])}>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Use This
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{suggestedContent[2]}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">Custom Idea</h3>
                      <Button variant="ghost" size="sm" onClick={() => {
                        const customIdea = `Looking for a custom ${['figurine', 'game piece', 'desk organizer', 'phone stand', 'keychain'][Math.floor(Math.random() * 5)]}? We can 3D print it for you! DM us for details. #custom3dprints #3dprintingservice`;
                        applySuggestedContent(customIdea);
                      }}>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Click "Generate" to create a custom post idea
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Post Performance</CardTitle>
              <CardDescription>
                Track how your social media content is performing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-muted-foreground text-xs">Reach</p>
                      <p className="text-2xl font-bold mt-1">1,258</p>
                      <p className="text-xs text-green-600 mt-1">↑ 12%</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-muted-foreground text-xs">Engagement</p>
                      <p className="text-2xl font-bold mt-1">286</p>
                      <p className="text-xs text-green-600 mt-1">↑ 8%</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-muted-foreground text-xs">Conversion</p>
                      <p className="text-2xl font-bold mt-1">3.4%</p>
                      <p className="text-xs text-green-600 mt-1">↑ 1.2%</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-muted-foreground text-xs">Best Platform</p>
                      <p className="text-2xl font-bold mt-1">Instagram</p>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <p className="font-medium">New Dragon Figurine Launch</p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-sm text-muted-foreground">Posted 2 days ago</p>
                          <div className="flex gap-4 text-sm">
                            <span className="flex items-center gap-1"><ThumbsUp className="h-3 w-3" /> 45</span>
                            <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> 12</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-b pb-4">
                        <p className="font-medium">Behind-the-scenes Printing Process</p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-sm text-muted-foreground">Posted 5 days ago</p>
                          <div className="flex gap-4 text-sm">
                            <span className="flex items-center gap-1"><ThumbsUp className="h-3 w-3" /> 78</span>
                            <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> 24</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="font-medium">Custom Order Showcase</p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-sm text-muted-foreground">Posted 1 week ago</p>
                          <div className="flex gap-4 text-sm">
                            <span className="flex items-center gap-1"><ThumbsUp className="h-3 w-3" /> 102</span>
                            <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> 36</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
