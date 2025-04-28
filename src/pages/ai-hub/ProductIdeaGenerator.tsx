
import React, { useState } from "react";
import { AIHubLayout } from "@/components/ai-hub/AIHubLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star, Download, ChevronRight, ChevronDown, Loader } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

interface ProductIdea {
  id: number;
  title: string;
  description: string;
  marketDemand: number;
  competition: number;
  complexity: number;
  profitPotential: number;
  favorited: boolean;
}

const ProductIdeaGenerator = () => {
  const [formData, setFormData] = useState({
    skills: "",
    equipment: "",
    interests: "",
    targetMarket: "general",
    priceTier: "mid",
    seasonality: "all-year",
    complexity: 50,
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ideas, setIdeas] = useState<ProductIdea[]>([]);
  const [activeTab, setActiveTab] = useState("form");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData(prev => ({ ...prev, complexity: value[0] }));
  };

  const generateIdeas = () => {
    setIsGenerating(true);
    setProgress(0);
    setActiveTab("generating");
    
    // Simulate AI processing with progress updates
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setActiveTab("results");
          return 100;
        }
        return prev + 10;
      });
    }, 300);
    
    // In a real implementation, this would be an API call to an AI service
    setTimeout(() => {
      const mockIdeas: ProductIdea[] = [
        {
          id: 1,
          title: "Customizable Desk Organizer with Modular Components",
          description: "A desk organizer with swappable, magnetic modules that can be customized based on user needs. Includes pen holders, cable organizers, and small storage compartments.",
          marketDemand: 85,
          competition: 60,
          complexity: 40,
          profitPotential: 75,
          favorited: false
        },
        {
          id: 2,
          title: "Plant Watering Monitor with Decorative Cover",
          description: "A soil moisture sensor with a decorative 3D printed cover that fits various pot sizes. Can be themed for different holidays or aesthetic preferences.",
          marketDemand: 78,
          competition: 45,
          complexity: 55,
          profitPotential: 70,
          favorited: false
        },
        {
          id: 3,
          title: "Ergonomic Gaming Controller Attachments",
          description: "Custom attachments for gaming controllers that improve grip and button access, tailored for different hand sizes and game types.",
          marketDemand: 90,
          competition: 65,
          complexity: 35,
          profitPotential: 80,
          favorited: false
        },
        {
          id: 4,
          title: "Customizable Kitchen Drawer Organizers",
          description: "Modular drawer organizers that can be printed to exact measurements of any kitchen drawer, with customizable compartment sizes.",
          marketDemand: 82,
          competition: 55,
          complexity: 30,
          profitPotential: 78,
          favorited: false
        },
        {
          id: 5,
          title: "Pet Feeding Station with Built-in Scale",
          description: "A feeding station for pets that includes a built-in compartment for a digital scale, helping pet owners monitor food intake.",
          marketDemand: 75,
          competition: 40,
          complexity: 60,
          profitPotential: 72,
          favorited: false
        },
        {
          id: 6,
          title: "Cable Management System with Themed Clips",
          description: "A comprehensive cable management solution with character-themed clips and organizers that add personality to desk setups.",
          marketDemand: 88,
          competition: 60,
          complexity: 25,
          profitPotential: 85,
          favorited: false
        },
        {
          id: 7,
          title: "Smartphone Photography Kit",
          description: "A set of attachments for smartphones to enhance photography capabilities, including stands, lens mounts, and light modifiers.",
          marketDemand: 92,
          competition: 70,
          complexity: 45,
          profitPotential: 78,
          favorited: false
        },
        {
          id: 8,
          title: "Wall-Mounted Headphone Stand with Cable Organizer",
          description: "A sleek wall-mounted holder for headphones that includes integrated cable management to keep desks clear.",
          marketDemand: 80,
          competition: 65,
          complexity: 30,
          profitPotential: 70,
          favorited: false
        },
        {
          id: 9,
          title: "Customizable Board Game Organizing Inserts",
          description: "Custom inserts for popular board games that organize pieces and speed up setup time, with versions for different game editions.",
          marketDemand: 85,
          competition: 50,
          complexity: 40,
          profitPotential: 75,
          favorited: false
        },
        {
          id: 10,
          title: "Multi-device Charging Station with Personalization",
          description: "A charging station that accommodates multiple devices (phones, tablets, watches) with customizable nameplates for family members.",
          marketDemand: 95,
          competition: 75,
          complexity: 50,
          profitPotential: 85,
          favorited: false
        }
      ];
      
      setIdeas(mockIdeas);
      clearInterval(interval);
      setIsGenerating(false);
      setActiveTab("results");
      setProgress(100);
    }, 3000);
  };

  const toggleFavorite = (id: number) => {
    setIdeas(ideas.map(idea => 
      idea.id === id ? { ...idea, favorited: !idea.favorited } : idea
    ));
  };

  const resetForm = () => {
    setFormData({
      skills: "",
      equipment: "",
      interests: "",
      targetMarket: "general",
      priceTier: "mid",
      seasonality: "all-year",
      complexity: 50,
    });
    setIdeas([]);
    setActiveTab("form");
  };

  return (
    <AIHubLayout title="Product Idea Generator">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="mb-4">
          <TabsTrigger value="form">1. Input Details</TabsTrigger>
          <TabsTrigger value="generating" disabled={!isGenerating}>2. Generating Ideas</TabsTrigger>
          <TabsTrigger value="results" disabled={ideas.length === 0}>3. Product Ideas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="form">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Your 3D Printing Profile</CardTitle>
                  <CardDescription>
                    Tell us about your skills, equipment, and interests so we can generate relevant product ideas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="equipment">What 3D printing equipment do you have?</Label>
                    <Textarea 
                      id="equipment" 
                      name="equipment"
                      value={formData.equipment}
                      onChange={handleInputChange}
                      placeholder="e.g., Prusa i3 MK3S+, Anycubic Photon Mono X, Ultimaker S5..."
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="skills">What are your 3D design/printing skills?</Label>
                    <Textarea 
                      id="skills" 
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      placeholder="e.g., Fusion 360 modeling, painting miniatures, creating mechanical designs..."
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interests">What subjects or themes interest you?</Label>
                    <Textarea 
                      id="interests" 
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      placeholder="e.g., fantasy characters, home organization, garden accessories..."
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="targetMarket">Target Market</Label>
                      <Select 
                        value={formData.targetMarket} 
                        onValueChange={(value) => handleSelectChange("targetMarket", value)}
                      >
                        <SelectTrigger id="targetMarket">
                          <SelectValue placeholder="Select market" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Consumers</SelectItem>
                          <SelectItem value="gamers">Gamers</SelectItem>
                          <SelectItem value="homeowners">Home Owners</SelectItem>
                          <SelectItem value="office">Office Workers</SelectItem>
                          <SelectItem value="parents">Parents & Children</SelectItem>
                          <SelectItem value="hobbyists">Hobbyists</SelectItem>
                          <SelectItem value="pets">Pet Owners</SelectItem>
                          <SelectItem value="gardeners">Gardeners</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="priceTier">Price Tier</Label>
                      <Select 
                        value={formData.priceTier} 
                        onValueChange={(value) => handleSelectChange("priceTier", value)}
                      >
                        <SelectTrigger id="priceTier">
                          <SelectValue placeholder="Select price tier" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Budget ($5-$15)</SelectItem>
                          <SelectItem value="mid">Mid-range ($15-$35)</SelectItem>
                          <SelectItem value="premium">Premium ($35-$75)</SelectItem>
                          <SelectItem value="luxury">Luxury ($75+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="seasonality">Seasonality</Label>
                      <Select 
                        value={formData.seasonality} 
                        onValueChange={(value) => handleSelectChange("seasonality", value)}
                      >
                        <SelectTrigger id="seasonality">
                          <SelectValue placeholder="Select seasonality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-year">All Year</SelectItem>
                          <SelectItem value="christmas">Christmas</SelectItem>
                          <SelectItem value="halloween">Halloween</SelectItem>
                          <SelectItem value="summer">Summer</SelectItem>
                          <SelectItem value="winter">Winter</SelectItem>
                          <SelectItem value="spring">Spring</SelectItem>
                          <SelectItem value="fall">Fall</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="complexity">Design Complexity</Label>
                      <span className="text-sm text-gray-500">
                        {formData.complexity < 30 ? "Simple" : 
                         formData.complexity < 70 ? "Moderate" : "Complex"}
                      </span>
                    </div>
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      value={[formData.complexity]}
                      onValueChange={handleSliderChange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Simple & Quick</span>
                      <span>Moderate</span>
                      <span>Complex & Detailed</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={resetForm}>Reset</Button>
                  <Button onClick={generateIdeas}>Generate Ideas</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center">
                      <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">1</span>
                      Fill in your details
                    </h3>
                    <p className="text-sm text-gray-600">
                      Tell us about your equipment, skills, and interests. The more detail you provide, the more personalized your ideas will be.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center">
                      <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">2</span>
                      AI generates ideas
                    </h3>
                    <p className="text-sm text-gray-600">
                      Our AI analyzes market trends, your capabilities, and customer demand to generate viable product ideas.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center">
                      <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">3</span>
                      Review and save ideas
                    </h3>
                    <p className="text-sm text-gray-600">
                      Browse through generated ideas, save your favorites, and get market insights to help you choose winners.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between" onClick={() => window.open('https://www.youtube.com/watch?v=example', '_blank')}>
                    Watch 60-second tutorial
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="generating">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Generating Product Ideas</CardTitle>
              <CardDescription>
                Our AI is analyzing market data and your profile...
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 py-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <div>Progress</div>
                  <div>{progress}%</div>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Analyzing your equipment capabilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Evaluating skill requirements</span>
                </div>
                <div className="flex items-center gap-2">
                  {progress > 50 ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Loader className="h-5 w-5 text-primary animate-spin" />
                  )}
                  <span>Researching market demand</span>
                </div>
                <div className="flex items-center gap-2">
                  {progress > 75 ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Loader className="h-5 w-5 text-primary animate-spin" />
                  )}
                  <span>Generating product concepts</span>
                </div>
                <div className="flex items-center gap-2">
                  {progress === 100 ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Loader className="h-5 w-5 text-primary animate-spin" />
                  )}
                  <span>Calculating profit potential</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="results">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Generated Product Ideas</h2>
                <p className="text-gray-600">
                  Based on your profile, here are 10 product ideas with market analysis.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={resetForm}>
                  New Generation
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" /> Export to CSV
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {ideas.map(idea => (
                <Card key={idea.id} className={`hover:shadow-md transition-all ${idea.favorited ? 'border-primary/50 shadow-sm' : ''}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{idea.title}</CardTitle>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => toggleFavorite(idea.id)}
                        className={idea.favorited ? 'text-amber-500' : 'text-gray-400'}
                      >
                        <Star className="h-5 w-5 fill-current" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{idea.description}</p>
                    
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Market Demand</span>
                          <span className="font-medium">{idea.marketDemand}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-green-500 h-1.5 rounded-full"
                            style={{ width: `${idea.marketDemand}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Competition</span>
                          <span className="font-medium">{idea.competition}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${idea.competition > 75 ? 'bg-red-500' : idea.competition > 45 ? 'bg-amber-500' : 'bg-green-500'}`}
                            style={{ width: `${idea.competition}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Complexity</span>
                          <span className="font-medium">{idea.complexity}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-500 h-1.5 rounded-full"
                            style={{ width: `${idea.complexity}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Profit Potential</span>
                          <span className="font-medium">{idea.profitPotential}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-purple-500 h-1.5 rounded-full"
                            style={{ width: `${idea.profitPotential}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" size="sm" className="w-full">
                      Develop This Idea <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </AIHubLayout>
  );
};

export default ProductIdeaGenerator;
