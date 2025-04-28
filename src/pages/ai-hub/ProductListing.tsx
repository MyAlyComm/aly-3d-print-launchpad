
import React from "react";
import { AIHubLayout } from "@/components/ai-hub/AIHubLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductListing() {
  return (
    <AIHubLayout title="Product Listing">
      <div className="container mx-auto py-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Product Listing Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="description">
              <TabsList className="mb-4">
                <TabsTrigger value="title">Title Generator</TabsTrigger>
                <TabsTrigger value="description">Description Writer</TabsTrigger>
                <TabsTrigger value="keywords">Keywords Research</TabsTrigger>
                <TabsTrigger value="pricing">Pricing Calculator</TabsTrigger>
              </TabsList>
              
              <TabsContent value="title" className="space-y-4">
                <h2 className="text-xl font-semibold">Title Generator</h2>
                <p>Create attention-grabbing titles for your 3D printed products.</p>
              </TabsContent>
              
              <TabsContent value="description" className="space-y-4">
                <h2 className="text-xl font-semibold">Description Writer</h2>
                <p>Generate SEO-optimized product descriptions that convert visitors into buyers.</p>
              </TabsContent>
              
              <TabsContent value="keywords" className="space-y-4">
                <h2 className="text-xl font-semibold">Keywords Research</h2>
                <p>Find the best keywords to improve your product visibility in search results.</p>
              </TabsContent>
              
              <TabsContent value="pricing" className="space-y-4">
                <h2 className="text-xl font-semibold">Pricing Calculator</h2>
                <p>Calculate optimal pricing for your products based on materials, time, and market demand.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AIHubLayout>
  );
}
