
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AIHubLayout } from "@/components/ai-hub/AIHubLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentCalendar } from "@/components/ai-hub/social-media/ContentCalendar";
import { PostCreator } from "@/components/ai-hub/social-media/PostCreator";
import { HashtagResearch } from "@/components/ai-hub/social-media/HashtagResearch";
import { EngagementHelper } from "@/components/ai-hub/social-media/EngagementHelper";
import { CalendarRange, MessagesSquare, Hash, MessageSquare } from "lucide-react";

export default function SocialMediaHub() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine active tab from URL
  const getTabFromPath = () => {
    const path = location.pathname;
    
    if (path.endsWith('/content-calendar')) return 'calendar';
    if (path.endsWith('/post-creator')) return 'post';
    if (path.endsWith('/hashtag-research')) return 'hashtags';
    if (path.endsWith('/engagement-helper')) return 'engagement';
    
    // Default to first tab if path doesn't match any tabs
    return 'calendar';
  };
  
  const handleTabChange = (value: string) => {
    // Update the URL based on the selected tab
    switch (value) {
      case 'calendar':
        navigate('/ai-hub/social-media/content-calendar');
        break;
      case 'post':
        navigate('/ai-hub/social-media/post-creator');
        break;
      case 'hashtags':
        navigate('/ai-hub/social-media/hashtag-research');
        break;
      case 'engagement':
        navigate('/ai-hub/social-media/engagement-helper');
        break;
      default:
        navigate('/ai-hub/social-media');
    }
  };
  
  return (
    <AIHubLayout title="Social Media Management">
      <div className="container mx-auto py-6 space-y-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl">Social Media Tools</CardTitle>
            <CardDescription>
              Create, schedule, and manage your social media content for your 3D printing business
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={getTabFromPath()} onValueChange={handleTabChange}>
              <TabsList className="mb-6 w-full justify-start">
                <TabsTrigger value="calendar" className="flex gap-2">
                  <CalendarRange className="h-4 w-4" />
                  <span className="hidden sm:inline">Content Calendar</span>
                  <span className="sm:hidden">Calendar</span>
                </TabsTrigger>
                <TabsTrigger value="post" className="flex gap-2">
                  <MessagesSquare className="h-4 w-4" />
                  <span className="hidden sm:inline">Post Creator</span>
                  <span className="sm:hidden">Posts</span>
                </TabsTrigger>
                <TabsTrigger value="hashtags" className="flex gap-2">
                  <Hash className="h-4 w-4" />
                  <span className="hidden sm:inline">Hashtag Research</span>
                  <span className="sm:hidden">Hashtags</span>
                </TabsTrigger>
                <TabsTrigger value="engagement" className="flex gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span className="hidden sm:inline">Engagement Helper</span>
                  <span className="sm:hidden">Engagement</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="calendar" className="mt-0">
                <ContentCalendar />
              </TabsContent>
              
              <TabsContent value="post" className="mt-0">
                <PostCreator />
              </TabsContent>
              
              <TabsContent value="hashtags" className="mt-0">
                <HashtagResearch />
              </TabsContent>
              
              <TabsContent value="engagement" className="mt-0">
                <EngagementHelper />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AIHubLayout>
  );
}
