
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight, SparkleIcon, Star, Clock, Zap, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";

const AIHub = () => {
  const navigate = useNavigate();
  const [recentWorkflows, setRecentWorkflows] = useState([
    { id: 1, name: "Product Title Generator", category: "Product Listing", lastUsed: "2 days ago" },
    { id: 2, name: "Background Remover", category: "Visual Marketing", lastUsed: "5 days ago" },
    { id: 3, name: "Market Validator", category: "Product Development", lastUsed: "1 week ago" },
  ]);

  const popularWorkflows = [
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

  const allWorkflows = {
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

  useEffect(() => {
    // SEO Optimizations
    document.title = "3D Print Business AI Hub | Integrated AI Tools for 3D Print Businesses";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'All-in-one AI tools for 3D printing business owners. Generate product ideas, create listings, design marketing visuals, and more without leaving the platform.');
    }
  }, []);

  return (
    <DashboardLayout title="3D Print Business AI Hub">
      <div className="max-w-7xl mx-auto py-6 space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-gradient-to-r from-primary-light/30 to-secondary/10 rounded-xl shadow-sm"
        >
          <h1 className="text-3xl font-bold mb-3">Your AI-Powered 3D Print Business Assistant</h1>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl">
            Access all the AI tools you need to create, market, and scale your 3D printing business, 
            without leaving the platform. Save time and boost revenue with integrated workflows designed specifically for 3D print entrepreneurs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={() => navigate('/ai-hub/product-development/idea-generator')}
              className="bg-primary hover:bg-primary/90"
            >
              Generate Product Ideas <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={() => navigate('/ai-hub/my-projects')}
              variant="outline"
            >
              View My Projects <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* New Feature Alert */}
        <Alert className="bg-blue-50 border-blue-200">
          <AlertCircle className="h-4 w-4 text-blue-500" />
          <AlertTitle>New AI features available!</AlertTitle>
          <AlertDescription>
            We've just launched Lifestyle Image Generation, Product Idea Generator, and improved Description Writer. Try them today!
          </AlertDescription>
        </Alert>

        {/* Popular Workflows */}
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

        {/* Recent & All Workflows Tabs */}
        <Tabs defaultValue="recent" className="mt-6">
          <TabsList className="mb-4">
            <TabsTrigger value="recent">Recently Used</TabsTrigger>
            <TabsTrigger value="all">All Workflows</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-4">
            {recentWorkflows.length > 0 ? (
              <div className="space-y-2">
                {recentWorkflows.map((workflow) => (
                  <div 
                    key={workflow.id}
                    className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/ai-hub/${workflow.category.toLowerCase().replace(' ', '-')}`)}
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
      </div>
    </DashboardLayout>
  );
};

export default AIHub;
