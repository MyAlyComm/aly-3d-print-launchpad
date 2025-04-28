import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarPlus, Edit, Trash2, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Type definitions
type Platform = "Instagram" | "Facebook" | "Twitter" | "LinkedIn";
type PostStatus = "draft" | "scheduled" | "published";

interface ScheduledPost {
  id: string;
  title: string;
  content: string;
  date: Date;
  time: string;
  platform: Platform[];
  status: PostStatus;
}

// Generate some mock data for the calendar
const generateMockPosts = (): ScheduledPost[] => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);
  
  return [
    {
      id: "1",
      title: "New Product Launch",
      content: "Excited to announce our new Dragon figurine! Perfect for any fantasy collection. #3dprinting #fantasy",
      date: today,
      time: "10:00",
      platform: ["Instagram", "Facebook"],
      status: "scheduled"
    },
    {
      id: "2",
      title: "Workshop Announcement",
      content: "Join our 3D printing workshop this Saturday! Learn how to design your own models.",
      date: tomorrow,
      time: "15:30",
      platform: ["Twitter", "LinkedIn"],
      status: "scheduled"
    },
    {
      id: "3",
      title: "Behind the scenes",
      content: "A peek into our printing process. From design to final product!",
      date: nextWeek,
      time: "12:00",
      platform: ["Instagram"],
      status: "draft"
    }
  ];
};

export function ContentCalendar() {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [posts, setPosts] = useState<ScheduledPost[]>(generateMockPosts());
  const [selectedPost, setSelectedPost] = useState<ScheduledPost | null>(null);
  const [isNewPostDialogOpen, setIsNewPostDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [newPost, setNewPost] = useState<Omit<ScheduledPost, 'id'>>({
    title: "",
    content: "",
    date: new Date(),
    time: "",
    platform: ["Instagram"],
    status: "draft"
  });

  const platformIcons = {
    Instagram: <Instagram className="h-4 w-4" />,
    Facebook: <Facebook className="h-4 w-4" />,
    Twitter: <Twitter className="h-4 w-4" />,
    LinkedIn: <Linkedin className="h-4 w-4" />
  };

  const getPostsForSelectedDate = () => {
    if (!date) return [];
    return posts.filter(post => 
      post.date.getDate() === date.getDate() &&
      post.date.getMonth() === date.getMonth() &&
      post.date.getFullYear() === date.getFullYear()
    );
  };

  const handleAddPost = () => {
    if (!newPost.title || !newPost.content || !newPost.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    const updatedPost = {
      ...newPost,
      id: Date.now().toString(),
      date: date || new Date()
    };
    
    setPosts([...posts, updatedPost as ScheduledPost]);
    setIsNewPostDialogOpen(false);
    toast({
      title: "Post Scheduled",
      description: `Your post "${updatedPost.title}" has been scheduled.`
    });
    
    // Reset the form
    setNewPost({
      title: "",
      content: "",
      date: new Date(),
      time: "",
      platform: ["Instagram"],
      status: "draft"
    });
  };

  const handleUpdatePost = () => {
    if (!selectedPost) return;
    
    const updatedPosts = posts.map(post => 
      post.id === selectedPost.id ? selectedPost : post
    );
    
    setPosts(updatedPosts);
    setIsEditDialogOpen(false);
    toast({
      title: "Post Updated",
      description: `Your post "${selectedPost.title}" has been updated.`
    });
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
    toast({
      title: "Post Deleted",
      description: "The post has been removed from your calendar."
    });
  };

  const getDaysWithPosts = () => {
    const daysWithPosts = posts.map(post => {
      const date = new Date(post.date);
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    });
    
    return daysWithPosts;
  };

  // Determine if a day has posts for styling in the calendar
  const modifiersStyles = {
    hasPost: {
      backgroundColor: "#f0fdfa",
      borderRadius: "0%",
      color: "#0d9488"
    }
  };

  const modifiers = {
    hasPost: getDaysWithPosts()
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Content Schedule</span>
              <Dialog open={isNewPostDialogOpen} onOpenChange={setIsNewPostDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <CalendarPlus className="mr-2 h-4 w-4" />
                    New Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Schedule New Post</DialogTitle>
                    <DialogDescription>
                      Create and schedule a new post for your social media.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="title">Post Title</Label>
                      <Input
                        id="title"
                        value={newPost.title}
                        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                        placeholder="Enter a title for your post"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="content">Post Content</Label>
                      <Textarea
                        id="content"
                        value={newPost.content}
                        onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                        placeholder="What would you like to share?"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        type="time"
                        value={newPost.time}
                        onChange={(e) => setNewPost({...newPost, time: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="platform">Platform</Label>
                      <Select
                        value={newPost.platform[0]}
                        onValueChange={(value) => setNewPost({...newPost, platform: [value as Platform]})}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Instagram">Instagram</SelectItem>
                          <SelectItem value="Facebook">Facebook</SelectItem>
                          <SelectItem value="Twitter">Twitter</SelectItem>
                          <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select
                        value={newPost.status}
                        onValueChange={(value) => setNewPost({...newPost, status: value as PostStatus})}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsNewPostDialogOpen(false)}>Cancel</Button>
                    <Button onClick={handleAddPost}>Schedule Post</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border p-3"
              modifiers={modifiers}
              modifiersStyles={modifiersStyles as any}
              footer={
                <p className="text-center text-xs text-muted-foreground mt-2">
                  {posts.length} posts scheduled this month
                </p>
              }
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {date ? (
                `Posts for ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
              ) : (
                "Scheduled Posts"
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {getPostsForSelectedDate().length > 0 ? (
                getPostsForSelectedDate().map((post) => (
                  <Card key={post.id} className="p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold">{post.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-muted-foreground">{post.time}</span>
                          <div className="flex gap-1">
                            {post.platform.map(platform => (
                              <span key={platform} className="text-xs bg-slate-100 p-1 rounded-md flex items-center">
                                {platformIcons[platform]}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" onClick={() => { setSelectedPost(post); setIsEditDialogOpen(true); }}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeletePost(post.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="mt-2 text-sm">{post.content}</p>
                    <div className="mt-2">
                      <Badge className={post.status === 'draft' ? 'bg-slate-200 text-slate-700' : 'bg-green-100 text-green-800'}>
                        {post.status === 'draft' ? 'Draft' : 'Scheduled'}
                      </Badge>
                    </div>
                  </Card>
                ))
              ) : (
                <p className="text-sm text-muted-foreground py-4 text-center">
                  No posts scheduled for this date. Click "New Post" to create one.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Edit Post Dialog */}
      <Dialog open={isEditDialogOpen && selectedPost !== null} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Post</DialogTitle>
            <DialogDescription>
              Make changes to your scheduled post.
            </DialogDescription>
          </DialogHeader>
          {selectedPost && (
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="edit-title">Post Title</Label>
                <Input
                  id="edit-title"
                  value={selectedPost.title}
                  onChange={(e) => setSelectedPost({...selectedPost, title: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="edit-content">Post Content</Label>
                <Textarea
                  id="edit-content"
                  value={selectedPost.content}
                  onChange={(e) => setSelectedPost({...selectedPost, content: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="edit-time">Time</Label>
                <Input
                  id="edit-time"
                  type="time"
                  value={selectedPost.time}
                  onChange={(e) => setSelectedPost({...selectedPost, time: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="edit-platform">Platform</Label>
                <Select
                  value={selectedPost.platform[0]}
                  onValueChange={(value) => setSelectedPost({...selectedPost, platform: [value as Platform]})}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                    <SelectItem value="Twitter">Twitter</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit-status">Status</Label>
                <Select
                  value={selectedPost.status}
                  onValueChange={(value) => setSelectedPost({...selectedPost, status: value as PostStatus})}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleUpdatePost}>Update Post</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
