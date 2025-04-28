
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SparkleIcon, Star, Zap } from "lucide-react";
import type { WorkflowItem } from "./types";

const popularWorkflows: WorkflowItem[] = [
  { 
    id: 1, 
    name: "Product Idea Generator", 
    description: "Generate novel product ideas tailored to your equipment and skills", 
    category: "Product Development",
    icon: <SparkleIcon className="h-5 w-5 text-blue-500" />,
    path: "/ai-hub/product-development/idea-generator"
  },
  { 
    id: 2, 
    name: "Listing Description Creator", 
    description: "Create SEO-optimized descriptions that convert browsers to buyers", 
    category: "Product Listing",
    icon: <Star className="h-5 w-5 text-amber-500" />,
    path: "/ai-hub/listing-creator/description"
  },
  { 
    id: 3, 
    name: "Background Remover", 
    description: "Instantly remove backgrounds from product photos", 
    category: "Visual Marketing",
    icon: <Zap className="h-5 w-5 text-purple-500" />,
    path: "/ai-hub/visual-marketing/background-remover"
  },
];

export const PopularWorkflows = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Popular AI Workflows</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularWorkflows.map((workflow) => (
          <Card key={workflow.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl flex items-center gap-2">
                  {workflow.icon}
                  {workflow.name}
                </CardTitle>
                <Badge variant="secondary">{workflow.category}</Badge>
              </div>
              <CardDescription className="mt-1">{workflow.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                onClick={() => navigate(workflow.path)}
                className="w-full"
              >
                Launch Tool
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
