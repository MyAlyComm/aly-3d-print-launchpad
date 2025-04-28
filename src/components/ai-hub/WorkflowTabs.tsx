import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronRight } from "lucide-react";
import type { WorkflowItem, CategoryWorkflows } from "./types";

const recentWorkflows: WorkflowItem[] = [
  { id: 1, name: "Product Title Generator", category: "Product Listing", lastUsed: "2 days ago", path: "/ai-hub/listing-creator/title" },
  { id: 2, name: "Background Remover", category: "Visual Marketing", lastUsed: "5 days ago", path: "/ai-hub/visual-marketing/background-remover" },
  { id: 3, name: "Market Validator", category: "Product Development", lastUsed: "1 week ago", path: "/ai-hub/product-development/market-validator" },
];

const allWorkflows: CategoryWorkflows = {
  "Product Development": [
    { name: "Product Idea Generator", path: "/ai-hub/product-development/idea-generator", isNew: true },
    { name: "Market Validation Tool", path: "/ai-hub/product-development/market-validator" },
    { name: "Product Specification Builder", path: "/ai-hub/product-development/spec-builder" },
    { name: "3D Model Generation Assistant", path: "/ai-hub/product-development/model-generator" },
    { name: "Design Feedback Analyzer", path: "/ai-hub/product-development/feedback-analyzer" },
  ],
  "Product Listing": [
    { name: "Title Generator", path: "/ai-hub/listing-creator/title" },
    { name: "Description Writer", path: "/ai-hub/listing-creator/description", isNew: true },
    { name: "Tag & Keyword Research", path: "/ai-hub/listing-creator/keywords" },
    { name: "Pricing Calculator", path: "/ai-hub/listing-creator/pricing" },
    { name: "Variation Suggestions", path: "/ai-hub/listing-creator/variations" },
  ],
  "Visual Marketing": [
    { name: "Product Image Enhancer", path: "/ai-hub/visual-marketing/image-enhancer" },
    { name: "Background Remover", path: "/ai-hub/visual-marketing/background-remover" },
    { name: "Lifestyle Image Generator", path: "/ai-hub/visual-marketing/lifestyle-generator", isNew: true },
    { name: "Platform Image Resizer", path: "/ai-hub/visual-marketing/image-resizer" },
    { name: "Social Media Graphics", path: "/ai-hub/visual-marketing/social-graphics" },
  ],
  "Customer Engagement": [
    { name: "Response Template Generator", path: "/ai-hub/customer-engagement/response-templates" },
    { name: "Review Response Assistant", path: "/ai-hub/customer-engagement/review-responses" },
    { name: "Follow-up Message Creator", path: "/ai-hub/customer-engagement/follow-up" },
    { name: "FAQ Builder", path: "/ai-hub/customer-engagement/faq-builder" },
    { name: "Customer Feedback Analyzer", path: "/ai-hub/customer-engagement/feedback-analyzer" },
  ],
  "Social Media": [
    { name: "Content Calendar Generator", path: "/ai-hub/social-media/content-calendar" },
    { name: "Platform Post Creator", path: "/ai-hub/social-media/post-creator" },
    { name: "Hashtag Research Tool", path: "/ai-hub/social-media/hashtag-research" },
    { name: "Engagement Response Helper", path: "/ai-hub/social-media/engagement-helper" },
    { name: "Performance Predictor", path: "/ai-hub/social-media/performance-predictor" },
  ]
};

export const WorkflowTabs = () => {
  const navigate = useNavigate();
  const [recentWorkflowsList] = useState(recentWorkflows);

  return (
    <Tabs defaultValue="recent" className="mt-6">
      <TabsList className="mb-4">
        <TabsTrigger value="recent">Recently Used</TabsTrigger>
        <TabsTrigger value="all">All Workflows</TabsTrigger>
      </TabsList>

      <TabsContent value="recent" className="space-y-4">
        {recentWorkflowsList.length > 0 ? (
          <div className="space-y-2">
            {recentWorkflowsList.map((workflow) => (
              <div 
                key={workflow.id}
                className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(workflow.path)}
              >
                <div>
                  <h3 className="font-medium">{workflow.name}</h3>
                  <p className="text-sm text-gray-500">{workflow.category}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{workflow.lastUsed}</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>You haven't used any workflows yet.</p>
          </div>
        )}
      </TabsContent>

      <TabsContent value="all">
        <div className="space-y-8">
          {Object.entries(allWorkflows).map(([category, tools]) => (
            <div key={category}>
              <h3 className="text-xl font-bold mb-3">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <div 
                    key={tool.name}
                    className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer flex justify-between items-center"
                    onClick={() => navigate(tool.path)}
                  >
                    <div className="flex items-center">
                      <span>{tool.name}</span>
                      {tool.isNew && (
                        <Badge className="ml-2 bg-green-500 text-white">New</Badge>
                      )}
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
