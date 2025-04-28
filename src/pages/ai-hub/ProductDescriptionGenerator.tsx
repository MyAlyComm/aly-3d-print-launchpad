import React, { useState } from "react";
import { AIHubLayout } from "@/components/ai-hub/AIHubLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, Edit, Download, RefreshCw, Loader, BookText, Zap, Heart, ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormData {
  productName: string;
  mainFeature1: string;
  mainFeature2: string;
  mainFeature3: string;
  mainFeature4: string;
  mainFeature5: string;
  targetCustomer: string;
  materials: string;
  uniqueSellingPoints: string;
  pricePoint: string;
  platform: string;
}

const initialFormData: FormData = {
  productName: "",
  mainFeature1: "",
  mainFeature2: "",
  mainFeature3: "",
  mainFeature4: "",
  mainFeature5: "",
  targetCustomer: "",
  materials: "",
  uniqueSellingPoints: "",
  pricePoint: "",
  platform: "etsy",
};

interface GeneratedDescription {
  id: number;
  type: string;
  content: string;
  wordCount: number;
  readabilityScore: number;
  seoScore: number;
  copied: boolean;
}

const ProductDescriptionGenerator = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("form");
  const [descriptions, setDescriptions] = useState<GeneratedDescription[]>([]);
  const [currentDescriptionType, setCurrentDescriptionType] = useState<string>("feature-focused");
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const resetForm = () => {
    setFormData(initialFormData);
    setDescriptions([]);
    setActiveTab("form");
  };
  
  const generateDescriptions = () => {
    if (formData.productName.trim() === "") {
      alert("Please enter a product name");
      return;
    }
    
    setIsGenerating(true);
    setProgress(0);
    setActiveTab("generating");
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    
    setTimeout(() => {
      const generatedDescriptions: GeneratedDescription[] = [
        {
          id: 1,
          type: "feature-focused",
          content: `Introducing the ${formData.productName}, a meticulously crafted 3D-printed solution that brings innovation to your everyday life. This premium product is made from high-quality ${formData.materials}, ensuring durability and longevity.\n\nKey Features:\n• ${formData.mainFeature1}\n• ${formData.mainFeature2}\n• ${formData.mainFeature3 || "Precision-engineered for optimal performance"}\n• ${formData.mainFeature4 || "Designed with user comfort in mind"}\n• ${formData.mainFeature5 || "Eco-friendly materials and sustainable production"}\n\n${formData.uniqueSellingPoints}\n\nPerfect for ${formData.targetCustomer}, this versatile product makes an exceptional addition to any home or workspace. Each item is carefully printed to ensure consistent quality and performance.\n\nOrder today and experience the difference that thoughtful design and quality manufacturing can make!`,
          wordCount: 105,
          readabilityScore: 85,
          seoScore: 90,
          copied: false
        },
        {
          id: 2,
          type: "benefit-focused",
          content: `Transform your everyday experience with the ${formData.productName}. Designed specifically for ${formData.targetCustomer}, this innovative 3D-printed solution addresses common frustrations and enhances your daily routine.\n\nWhen you choose our ${formData.productName}, you'll enjoy:\n\n• ${formData.mainFeature1} - saving you precious time and effort\n• ${formData.mainFeature2} - providing peace of mind and reliability\n• Freedom from common problems associated with conventional alternatives\n• The satisfaction of supporting sustainable manufacturing practices\n\nCrafted from premium ${formData.materials}, this product doesn't just perform exceptionally—it lasts. ${formData.uniqueSellingPoints}\n\nJoin thousands of satisfied customers who have already discovered how the ${formData.productName} can improve their daily lives. At just ${formData.pricePoint}, it's an investment in convenience and quality that pays dividends every day.\n\nYour satisfaction is our priority—order now and see the difference for yourself!`,
          wordCount: 122,
          readabilityScore: 92,
          seoScore: 85,
          copied: false
        },
        {
          id: 3,
          type: "story-based",
          content: `Every great solution starts with a problem. For us, it was noticing how ${formData.targetCustomer} struggled with conventional options that just weren't cutting it. That's when the idea for the ${formData.productName} was born.\n\nInspired by real-world needs, we designed a product that not only looks beautiful but truly works. Each ${formData.productName} starts as a digital design that's brought to life through the precision of 3D printing using premium ${formData.materials}.\n\nWhat makes our creation special?\n\n• It's thoughtfully designed with ${formData.mainFeature1}\n• You'll appreciate the ${formData.mainFeature2} that makes everyday use a joy\n• Unlike mass-produced alternatives, each piece receives individual attention\n\n${formData.uniqueSellingPoints}\n\nOur customers tell us they can't imagine going back to conventional options after experiencing the ${formData.productName}. It's not just a product—it's a solution created by people who understand your needs.\n\nJoin our community of satisfied users who've discovered a better way. Your ${formData.productName} is waiting to become part of your story.`,
          wordCount: 156,
          readabilityScore: 88,
          seoScore: 75,
          copied: false
        }
      ];
      
      setDescriptions(generatedDescriptions);
      setIsGenerating(false);
      setActiveTab("results");
      clearInterval(interval);
      setProgress(100);
    }, 3000);
  };
  
  const copyToClipboard = (id: number) => {
    const description = descriptions.find(d => d.id === id);
    if (description) {
      navigator.clipboard.writeText(description.content);
      setDescriptions(descriptions.map(d => 
        d.id === id ? { ...d, copied: true } : d
      ));
      
      setTimeout(() => {
        setDescriptions(descriptions.map(d => 
          d.id === id ? { ...d, copied: false } : d
        ));
      }, 2000);
    }
  };
  
  const regenerateDescription = (type: string) => {
    setCurrentDescriptionType(type);
    setIsGenerating(true);
    setActiveTab("generating");
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    
    setTimeout(() => {
      const existingDescriptionIndex = descriptions.findIndex(d => d.type === type);
      
      if (existingDescriptionIndex >= 0) {
        const newContent = `[Regenerated] ${descriptions[existingDescriptionIndex].content}`;
        const updatedDescriptions = [...descriptions];
        updatedDescriptions[existingDescriptionIndex] = {
          ...descriptions[existingDescriptionIndex],
          content: newContent,
          wordCount: descriptions[existingDescriptionIndex].wordCount + 5,
        };
        setDescriptions(updatedDescriptions);
      }
      
      setIsGenerating(false);
      setActiveTab("results");
      clearInterval(interval);
      setProgress(100);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 75) return "text-amber-600";
    return "text-red-600";
  };
  
  return (
    <AIHubLayout title="Product Description Generator">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="mb-4">
          <TabsTrigger value="form">1. Product Details</TabsTrigger>
          <TabsTrigger value="generating" disabled={!isGenerating}>2. Generating</TabsTrigger>
          <TabsTrigger value="results" disabled={descriptions.length === 0}>3. Descriptions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="form">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                  <CardDescription>
                    Enter details about your product to generate optimized descriptions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="productName">Product Name*</Label>
                      <Input
                        id="productName"
                        name="productName"
                        placeholder="e.g., Customizable Desk Organizer"
                        value={formData.productName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="materials">Materials Used</Label>
                        <Input
                          id="materials"
                          name="materials"
                          placeholder="e.g., PLA, PETG, Resin"
                          value={formData.materials}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="pricePoint">Price Point</Label>
                        <Input
                          id="pricePoint"
                          name="pricePoint"
                          placeholder="e.g., $24.99"
                          value={formData.pricePoint}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="targetCustomer">Target Customer</Label>
                      <Input
                        id="targetCustomer"
                        name="targetCustomer"
                        placeholder="e.g., home office workers, crafters, gamers"
                        value={formData.targetCustomer}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Main Product Features (at least 2)</Label>
                      
                      <div>
                        <Input
                          name="mainFeature1"
                          placeholder="Feature 1: e.g., Modular design with customizable compartments"
                          value={formData.mainFeature1}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <Input
                          name="mainFeature2"
                          placeholder="Feature 2: e.g., Magnetic attachments for secure connections"
                          value={formData.mainFeature2}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <Input
                          name="mainFeature3"
                          placeholder="Feature 3: e.g., Stackable design to save desk space"
                          value={formData.mainFeature3}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <Input
                          name="mainFeature4"
                          placeholder="Feature 4: e.g., Non-slip base prevents sliding"
                          value={formData.mainFeature4}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <Input
                          name="mainFeature5"
                          placeholder="Feature 5: e.g., Available in 6 different colors"
                          value={formData.mainFeature5}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="uniqueSellingPoints">Unique Selling Points</Label>
                      <Textarea
                        id="uniqueSellingPoints"
                        name="uniqueSellingPoints"
                        placeholder="What makes your product special? e.g., Each piece is made to order with customizable options for a personalized solution."
                        value={formData.uniqueSellingPoints}
                        onChange={handleInputChange}
                        className="min-h-[80px]"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="platform">Target Platform</Label>
                      <Select 
                        value={formData.platform} 
                        onValueChange={(value) => handleSelectChange("platform", value)}
                      >
                        <SelectTrigger id="platform">
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="etsy">Etsy</SelectItem>
                          <SelectItem value="shopify">Shopify</SelectItem>
                          <SelectItem value="amazon">Amazon</SelectItem>
                          <SelectItem value="ebay">eBay</SelectItem>
                          <SelectItem value="website">Personal Website</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={resetForm}>Reset Form</Button>
                  <Button onClick={generateDescriptions}>Generate Descriptions</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle>Description Generator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    This tool creates three different styles of product descriptions 
                    optimized for e-commerce platforms:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold flex items-center">
                        <BookText className="h-4 w-4 mr-2 text-blue-500" />
                        Feature-Focused
                      </h3>
                      <p className="text-sm text-gray-600">
                        Highlights the technical aspects and specifications of your product.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-amber-500" />
                        Benefit-Focused
                      </h3>
                      <p className="text-sm text-gray-600">
                        Emphasizes how your product solves problems and improves the customer's life.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold flex items-center">
                        <Heart className="h-4 w-4 mr-2 text-pink-500" />
                        Story-Based
                      </h3>
                      <p className="text-sm text-gray-600">
                        Creates an emotional connection by telling the story behind your product.
                      </p>
                    </div>
                  </div>
                  
                  <Alert className="bg-blue-50 border-blue-200">
                    <AlertDescription className="text-blue-800 text-sm">
                      <strong>Pro Tip:</strong> Fill out as many fields as possible for the most accurate and compelling descriptions.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
              
              <Card className="mt-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{formData.platform === 'etsy' ? 'Etsy' : formData.platform === 'shopify' ? 'Shopify' : formData.platform === 'amazon' ? 'Amazon' : formData.platform === 'ebay' ? 'eBay' : 'Website'} Platform Tips</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  {formData.platform === 'etsy' && (
                    <>
                      <p>• Etsy allows up to 13 tags for SEO</p>
                      <p>• Recommended description length: 500-1000 words</p>
                      <p>• Use sections with clear headings</p>
                      <p>• Include production time and shipping details</p>
                    </>
                  )}
                  
                  {formData.platform === 'amazon' && (
                    <>
                      <p>• Use HTML formatting for better readability</p>
                      <p>• Focus on solving customer problems</p>
                      <p>• Include dimensions and specifications</p>
                      <p>• Bullet points are highly effective</p>
                    </>
                  )}
                  
                  {formData.platform === 'shopify' && (
                    <>
                      <p>• Optimize for on-site search</p>
                      <p>• Use product tabs for organization</p>
                      <p>• Include care instructions and guarantees</p>
                      <p>• Add social proof and reviews</p>
                    </>
                  )}
                  
                  {formData.platform === 'ebay' && (
                    <>
                      <p>• Item specifics are crucial</p>
                      <p>• Use HTML for better formatting</p>
                      <p>• Include shipping and return policies</p>
                      <p>• Be clear about condition and materials</p>
                    </>
                  )}
                  
                  {formData.platform === 'website' && (
                    <>
                      <p>• Optimize for SEO with keywords</p>
                      <p>• Use high-quality product images</p>
                      <p>• Include CTAs throughout description</p>
                      <p>• Consider FAQ section for common questions</p>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="generating">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>
                {currentDescriptionType === "feature-focused" ? "Generating Feature-Focused Description" : 
                 currentDescriptionType === "benefit-focused" ? "Generating Benefit-Focused Description" :
                 currentDescriptionType === "story-based" ? "Generating Story-Based Description" :
                 "Generating Descriptions"}
              </CardTitle>
              <CardDescription>
                Our AI is creating compelling product descriptions based on your details...
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
                  <span>Analyzing product details</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Identifying key selling points</span>
                </div>
                <div className="flex items-center gap-2">
                  {progress > 50 ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Loader className="h-5 w-5 text-primary animate-spin" />
                  )}
                  <span>Crafting compelling language</span>
                </div>
                <div className="flex items-center gap-2">
                  {progress > 75 ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Loader className="h-5 w-5 text-primary animate-spin" />
                  )}
                  <span>Optimizing for {formData.platform} platform</span>
                </div>
                <div className="flex items-center gap-2">
                  {progress === 100 ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Loader className="h-5 w-5 text-primary animate-spin" />
                  )}
                  <span>Finalizing descriptions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="results">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Generated Descriptions</h2>
                <p className="text-gray-600">
                  Choose from three different styles or regenerate any version
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={resetForm}>
                  <RefreshCw className="h-4 w-4 mr-2" /> New Generation
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="feature-focused" className="space-y-6">
              <TabsList>
                <TabsTrigger value="feature-focused">Feature-Focused</TabsTrigger>
                <TabsTrigger value="benefit-focused">Benefit-Focused</TabsTrigger>
                <TabsTrigger value="story-based">Story-Based</TabsTrigger>
              </TabsList>
              
              {descriptions.map((description) => (
                <TabsContent key={description.id} value={description.type} className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="flex items-center">
                            {description.type === "feature-focused" ? (
                              <BookText className="h-5 w-5 mr-2 text-blue-500" />
                            ) : description.type === "benefit-focused" ? (
                              <Zap className="h-5 w-5 mr-2 text-amber-500" />
                            ) : (
                              <Heart className="h-5 w-5 mr-2 text-pink-500" />
                            )}
                            {description.type === "feature-focused" ? "Feature-Focused Description" : 
                             description.type === "benefit-focused" ? "Benefit-Focused Description" : 
                             "Story-Based Description"}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            Optimized for {formData.platform.charAt(0).toUpperCase() + formData.platform.slice(1)} • {description.wordCount} words
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => regenerateDescription(description.type)}
                          >
                            <RefreshCw className="h-4 w-4 mr-1" />
                            Regenerate
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => copyToClipboard(description.id)}
                          >
                            {description.copied ? (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" />
                                Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="p-4 border rounded-md bg-gray-50">
                        <pre className="whitespace-pre-wrap font-sans text-sm">
                          {description.content}
                        </pre>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="flex flex-col items-center p-2 border rounded-md">
                          <span className="text-sm text-gray-600">Readability</span>
                          <span className={`text-xl font-bold ${getScoreColor(description.readabilityScore)}`}>
                            {description.readabilityScore}/100
                          </span>
                        </div>
                        <div className="flex flex-col items-center p-2 border rounded-md">
                          <span className="text-sm text-gray-600">SEO Score</span>
                          <span className={`text-xl font-bold ${getScoreColor(description.seoScore)}`}>
                            {description.seoScore}/100
                          </span>
                        </div>
                        <div className="flex flex-col items-center p-2 border rounded-md">
                          <span className="text-sm text-gray-600">Word Count</span>
                          <span className="text-xl font-bold text-gray-700">
                            {description.wordCount}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-1" /> Save as Template
                      </Button>
                      <Button size="sm" className="flex-1">
                        Use This Version
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Platform Preview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-md p-4">
                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                            <ImageIcon className="h-8 w-8 text-gray-400" />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-bold">{formData.productName}</h3>
                            <Badge>{formData.pricePoint || "$24.99"}</Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium">Description</h4>
                          <p className="text-sm line-clamp-4">{description.content}</p>
                          <Button variant="link" className="p-0 h-auto text-sm">Read more</Button>
                        </div>
                      </div>
                      
                      {formData.platform === "etsy" && (
                        <Alert className="bg-amber-50 border-amber-200">
                          <AlertDescription className="text-amber-800 text-sm">
                            <strong>Etsy Tip:</strong> Consider adding a short production timeline and shipping information to this description for better customer experience.
                          </AlertDescription>
                        </Alert>
                      )}
                      
                      {formData.platform === "amazon" && (
                        <Alert className="bg-amber-50 border-amber-200">
                          <AlertDescription className="text-amber-800 text-sm">
                            <strong>Amazon Tip:</strong> Consider breaking your bullet points into 5-7 key features for better readability in Amazon's interface.
                          </AlertDescription>
                        </Alert>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </TabsContent>
      </Tabs>
    </AIHubLayout>
  );
};

export default ProductDescriptionGenerator;
