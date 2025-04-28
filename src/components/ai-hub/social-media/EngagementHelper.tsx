
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function EngagementHelper() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Comment Response Templates</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <Label>Product Inquiry</Label>
            <Textarea
              defaultValue="Thank you for your interest! You can find more details about this product at [link]. Let me know if you have any specific questions!"
              className="mt-2"
            />
          </div>
          
          <div>
            <Label>Positive Feedback</Label>
            <Textarea
              defaultValue="Thank you so much for your kind words! We're thrilled you're happy with your purchase. Don't forget to tag us in photos of your prints! 🙌"
              className="mt-2"
            />
          </div>
          
          <div>
            <Label>Custom Response</Label>
            <Textarea
              placeholder="Write a custom response..."
              className="mt-2"
            />
          </div>
          
          <Button>Save Templates</Button>
        </CardContent>
      </Card>
    </div>
  );
}
