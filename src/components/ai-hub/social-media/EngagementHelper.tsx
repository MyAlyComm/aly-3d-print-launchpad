
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Share2, Copy, MessageSquare, ThumbsUp, MessageCircle } from "lucide-react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";

export function EngagementHelper() {
  const { toast } = useToast();
  const [templates, setTemplates] = useState({
    productInquiry: "Thank you for your interest! You can find more details about this product at [link]. Let me know if you have any specific questions!",
    positiveFeedback: "Thank you so much for your kind words! We're thrilled you're happy with your purchase. Don't forget to tag us in photos of your prints! 🙌",
    negativeCommentResponse: "I'm sorry to hear about your experience. Please send us a direct message with more details so we can help resolve this issue.",
    custom: ""
  });
  
  const [selectedComment, setSelectedComment] = useState("");
  const [responsePreview, setResponsePreview] = useState("");
  const [commentHistory, setCommentHistory] = useState([
    { id: 1, platform: "Instagram", user: "3d_print_fan", comment: "How much does this cost? And do you ship to Canada?", date: "2 hours ago" },
    { id: 2, platform: "Facebook", user: "Sarah Johnson", comment: "Just received my print and it's amazing! The quality is outstanding.", date: "Yesterday" },
    { id: 3, platform: "Instagram", user: "maker_space", comment: "The colors look different from what was advertised. Not happy with my purchase.", date: "3 days ago" },
  ]);

  const handleSaveTemplates = () => {
    toast({
      title: "Templates Saved",
      description: "Your response templates have been saved successfully.",
    });
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Response text has been copied to clipboard.",
    });
  };

  const handleSelectComment = (comment) => {
    setSelectedComment(comment);
    
    // Suggest a template based on the content of the comment
    if (comment.toLowerCase().includes("cost") || comment.toLowerCase().includes("price") || comment.toLowerCase().includes("how much")) {
      setResponsePreview(templates.productInquiry);
    } else if (comment.toLowerCase().includes("amazing") || comment.toLowerCase().includes("love") || comment.toLowerCase().includes("great")) {
      setResponsePreview(templates.positiveFeedback);
    } else if (comment.toLowerCase().includes("not happy") || comment.toLowerCase().includes("disappointed") || comment.toLowerCase().includes("issue")) {
      setResponsePreview(templates.negativeCommentResponse);
    } else {
      setResponsePreview("");
    }
  };

  const handleSendResponse = () => {
    if (!responsePreview) {
      toast({
        title: "Error",
        description: "Please write a response before sending.",
        variant: "destructive",
      });
      return;
    }
    
    if (!selectedComment) {
      toast({
        title: "Error",
        description: "Please select a comment to respond to.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would send the response to the social media platform
    toast({
      title: "Response Sent",
      description: "Your response has been sent successfully.",
    });
    
    // Remove the comment from the list to simulate it being handled
    setCommentHistory(commentHistory.filter(item => item.comment !== selectedComment));
    setSelectedComment("");
    setResponsePreview("");
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="pending">
        <TabsList className="mb-4">
          <TabsTrigger value="pending">Pending Comments</TabsTrigger>
          <TabsTrigger value="templates">Response Templates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Unresponded Comments</CardTitle>
              <CardDescription>Comments from your social media platforms that need a response</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {commentHistory.length > 0 ? (
                  commentHistory.map((item) => (
                    <Card key={item.id} className={`p-3 cursor-pointer hover:bg-slate-50 ${selectedComment === item.comment ? 'border-primary' : ''}`} onClick={() => handleSelectComment(item.comment)}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium flex items-center gap-1">
                            {item.user} 
                            <span className="text-xs text-muted-foreground">({item.platform})</span>
                          </p>
                          <p className="mt-1">{item.comment}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                    </Card>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-4">No pending comments. You're all caught up!</p>
                )}
              </div>
            </CardContent>
          </Card>
          
          {selectedComment && (
            <Card>
              <CardHeader>
                <CardTitle>Your Response</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  value={responsePreview} 
                  onChange={(e) => setResponsePreview(e.target.value)}
                  placeholder="Type your response here..."
                  className="min-h-32"
                />
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => handleCopy(responsePreview)}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                  <Button onClick={handleSendResponse}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send Response
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Response Templates</CardTitle>
              <CardDescription>Create and edit templates for common responses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Product Inquiry</Label>
                <Textarea
                  value={templates.productInquiry}
                  onChange={(e) => setTemplates({...templates, productInquiry: e.target.value})}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Positive Feedback</Label>
                <Textarea
                  value={templates.positiveFeedback}
                  onChange={(e) => setTemplates({...templates, positiveFeedback: e.target.value})}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Negative Comment Response</Label>
                <Textarea
                  value={templates.negativeCommentResponse}
                  onChange={(e) => setTemplates({...templates, negativeCommentResponse: e.target.value})}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Custom Template</Label>
                <Textarea
                  value={templates.custom}
                  onChange={(e) => setTemplates({...templates, custom: e.target.value})}
                  placeholder="Write a custom response template..."
                  className="mt-2"
                />
              </div>
              
              <Button onClick={handleSaveTemplates}>
                Save Templates
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Analytics</CardTitle>
              <CardDescription>Response statistics and engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm">Average Response Time</p>
                      <p className="text-3xl font-bold">2.4 hrs</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm">Response Rate</p>
                      <p className="text-3xl font-bold">98%</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm">Customer Satisfaction</p>
                      <p className="text-3xl font-bold">4.8/5</p>
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
