
import React from "react";
import { AIHubLayout } from "@/components/ai-hub/AIHubLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentCalendar } from "@/components/ai-hub/social-media/ContentCalendar";
import { PostCreator } from "@/components/ai-hub/social-media/PostCreator";
import { HashtagResearch } from "@/components/ai-hub/social-media/HashtagResearch";
import { EngagementHelper } from "@/components/ai-hub/social-media/EngagementHelper";

export default function SocialMediaHub() {
  return (
    <AIHubLayout title="Social Media Management">
      <div className="container mx-auto py-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Social Media Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="calendar">
              <TabsList className="mb-4">
                <TabsTrigger value="calendar">Content Calendar</TabsTrigger>
                <TabsTrigger value="post">Post Creator</TabsTrigger>
                <TabsTrigger value="hashtags">Hashtag Research</TabsTrigger>
                <TabsTrigger value="engagement">Engagement Helper</TabsTrigger>
              </TabsList>
              
              <TabsContent value="calendar">
                <ContentCalendar />
              </TabsContent>
              
              <TabsContent value="post">
                <PostCreator />
              </TabsContent>
              
              <TabsContent value="hashtags">
                <HashtagResearch />
              </TabsContent>
              
              <TabsContent value="engagement">
                <EngagementHelper />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AIHubLayout>
  );
}
