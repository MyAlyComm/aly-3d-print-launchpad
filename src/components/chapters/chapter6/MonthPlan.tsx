
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useChapterForm } from "@/hooks/useChapterForm";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const MonthPlan = () => {
  const { formState, saveResponse, isLoading } = useChapterForm(6, "month-plan");
  const { updateProgress } = useChapterProgress();
  
  const [localFormState, setLocalFormState] = useState({
    checkboxes: {
      facebook: false,
      etsy: false,
      website: false,
      amazon: false,
      other: false
    },
    textInputs: {
      otherPlatform: "",
      primaryPlatform: "",
      expansionPlatform: "",
      advantages1: "",
      advantages2: "",
      advantages3: "",
      challenges: "",
      listingStrategy: "",
      pricingStrategy: "",
      productCount: "",
      salesTarget: "",
      optimizationTechniques: ""
    }
  });
  
  // Load saved data when available
  useEffect(() => {
    if (!isLoading && formState && formState["month-plan"]) {
      const savedData = formState["month-plan"];
      
      // Create a new checkboxes object with default values
      const updatedCheckboxes = {
        facebook: false,
        etsy: false,
        website: false,
        amazon: false,
        other: false,
        ...savedData.checkboxes // Merge with saved checkboxes
      };
      
      // Create a new textInputs object with default values
      const updatedTextInputs = {
        otherPlatform: "",
        primaryPlatform: "",
        expansionPlatform: "",
        advantages1: "",
        advantages2: "",
        advantages3: "",
        challenges: "",
        listingStrategy: "",
        pricingStrategy: "",
        productCount: "",
        salesTarget: "",
        optimizationTechniques: "",
        ...savedData.textInputs // Merge with saved text inputs
      };
      
      setLocalFormState({
        checkboxes: updatedCheckboxes,
        textInputs: updatedTextInputs
      });
    }
  }, [isLoading, formState]);

  const handleCheckboxChange = (id: string) => {
    setLocalFormState({
      ...localFormState,
      checkboxes: {
        ...localFormState.checkboxes,
        [id]: !localFormState.checkboxes[id as keyof typeof localFormState.checkboxes]
      }
    });
  };

  const handleTextChange = (id: string, value: string) => {
    setLocalFormState({
      ...localFormState,
      textInputs: {
        ...localFormState.textInputs,
        [id]: value
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save the form data using the hook's saveResponse function
    await saveResponse("month-plan", {
      checkboxes: localFormState.checkboxes,
      textInputs: localFormState.textInputs
    }, true);
    
    // Update the chapter progress
    await updateProgress.mutateAsync({
      chapterNumber: 6,
      sectionId: "month-plan",
      responseData: localFormState
    });
    
    toast.success("Progress saved successfully!");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Recommendation: Month 1 & Month 2 Strategy</h2>
      
      <p className="text-gray-700">
        Based on working with hundreds of 3D printing entrepreneurs, here's my straightforward recommendation for your first two months:
      </p>
      
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Month 1: Master Your First Platform</h3>
          <p className="text-gray-700 mb-2">
            Choose either Facebook Marketplace or Etsy as your primary platform and focus exclusively on mastering it:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Create 5-10 high-quality listings</li>
            <li>Optimize pricing, photos, and descriptions</li>
            <li>Learn the platform's algorithms and best practices</li>
            <li>Build initial reviews and customer feedback</li>
            <li>Establish your production and fulfillment workflow</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Month 2: Add Your Second Platform</h3>
          <p className="text-gray-700 mb-2">
            Once you've established consistent sales and processes on your first platform, expand to a second:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>If you started with Facebook, add Etsy</li>
            <li>If you started with Etsy, add Facebook or your own website</li>
            <li>Leverage the product knowledge and customer feedback from your first month</li>
            <li>Adapt your listings to fit the new platform's audience and requirements</li>
          </ul>
        </CardContent>
      </Card>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <p className="text-purple-900 font-medium">
          This two-month approach follows the core principle from Chapter 3's "3 Plus 1 Equals 40" system—focus creates mastery, and mastery creates results. By dedicating a full month to one platform, you'll develop deeper expertise and build momentum before dividing your attention.
        </p>
      </div>
      
      <h3 className="text-xl font-semibold mt-8">Platform Selection Strategy</h3>
      
      <p className="text-gray-700">
        For most beginners, I recommend this specific path:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold text-blue-700 mb-3">Month 1: Facebook Marketplace</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Fastest setup (30 minutes or less)</li>
              <li>Zero costs to start</li>
              <li>Mix of local pickup and shipping options</li>
              <li>Immediate market feedback</li>
              <li>Direct customer communication</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold text-green-700 mb-3">Month 2: Add Etsy</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Apply learnings from Facebook to create optimized listings</li>
              <li>Focus on your best-performing products first</li>
              <li>Begin building a more cohesive brand presence</li>
              <li>Access global audience of buyers seeking unique items</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <p className="text-gray-700 mt-4">
        This approach gives you the best of both worlds: immediate local sales and feedback from Facebook, followed by longer-term brand building and global reach through Etsy.
      </p>
      
      <h3 className="text-xl font-semibold mt-8">When to Follow a Different Path</h3>
      
      <p className="text-gray-700">
        While the Facebook → Etsy pathway works for most 3D printing entrepreneurs, there are exceptions:
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-2">Start with Etsy first if:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>You already have professional product photos ready</li>
              <li>Your products are lightweight and easy to ship globally</li>
              <li>You have unique designs not commonly found on marketplaces</li>
              <li>Your items have strong gift appeal</li>
              <li>You prefer not to meet customers face-to-face</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-2">Consider Amazon as your second platform if:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Your first month revealed strong demand for functional, standardized products</li>
              <li>You have capacity to produce in consistent volume</li>
              <li>You want to leverage FBA for fulfillment</li>
              <li>Your products would benefit from Prime eligibility</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-2">Consider your own website as your second platform if:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>You've started building a following on social media</li>
              <li>Your products form a cohesive brand identity</li>
              <li>You need features or customization not supported by marketplaces</li>
              <li>You want to start building direct customer relationships</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mt-8">
        <p className="text-gray-800 font-medium">
          The key is making a deliberate choice based on your specific situation, rather than trying to be everywhere at once.
        </p>
      </div>
      
      <Card className="mt-12 border-2 border-indigo-300">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Chapter 6 Self-Assessment: Your Platform Strategy</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="font-medium block">Based on my Product Trinity from Chapter 4, the platforms that best align with my products are:</label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="facebook" 
                    checked={localFormState.checkboxes.facebook}
                    onCheckedChange={() => handleCheckboxChange("facebook")}
                  />
                  <label htmlFor="facebook">Facebook Marketplace</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="etsy" 
                    checked={localFormState.checkboxes.etsy}
                    onCheckedChange={() => handleCheckboxChange("etsy")}
                  />
                  <label htmlFor="etsy">Etsy</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="website" 
                    checked={localFormState.checkboxes.website}
                    onCheckedChange={() => handleCheckboxChange("website")}
                  />
                  <label htmlFor="website">My Own Website</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="amazon" 
                    checked={localFormState.checkboxes.amazon}
                    onCheckedChange={() => handleCheckboxChange("amazon")}
                  />
                  <label htmlFor="amazon">Amazon</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="other" 
                    checked={localFormState.checkboxes.other}
                    onCheckedChange={() => handleCheckboxChange("other")}
                  />
                  <label htmlFor="other">Other:</label>
                  <Input 
                    className="max-w-xs" 
                    placeholder="Specify other platform" 
                    value={localFormState.textInputs.otherPlatform}
                    onChange={(e) => handleTextChange("otherPlatform", e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-medium block mb-2">My primary platform for Month 1 will be:</label>
                <Input 
                  placeholder="Enter your primary platform" 
                  value={localFormState.textInputs.primaryPlatform}
                  onChange={(e) => handleTextChange("primaryPlatform", e.target.value)}
                />
              </div>
              
              <div>
                <label className="font-medium block mb-2">My planned expansion platform for Month 2 will be:</label>
                <Input 
                  placeholder="Enter your expansion platform" 
                  value={localFormState.textInputs.expansionPlatform}
                  onChange={(e) => handleTextChange("expansionPlatform", e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="font-medium block mb-2">The 3 key advantages my primary platform offers for my specific products are:</label>
              <div className="space-y-2">
                <Input 
                  placeholder="Key advantage 1" 
                  className="mb-2"
                  value={localFormState.textInputs.advantages1}
                  onChange={(e) => handleTextChange("advantages1", e.target.value)}
                />
                <Input 
                  placeholder="Key advantage 2" 
                  className="mb-2"
                  value={localFormState.textInputs.advantages2}
                  onChange={(e) => handleTextChange("advantages2", e.target.value)}
                />
                <Input 
                  placeholder="Key advantage 3"
                  value={localFormState.textInputs.advantages3}
                  onChange={(e) => handleTextChange("advantages3", e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="font-medium block mb-2">The potential challenges I might face on my chosen platform are:</label>
              <Textarea 
                placeholder="Describe potential challenges and how you'll address them" 
                className="h-24"
                value={localFormState.textInputs.challenges}
                onChange={(e) => handleTextChange("challenges", e.target.value)}
              />
            </div>
            
            <div>
              <label className="font-medium block mb-2">My strategy for creating standout listings includes:</label>
              <Textarea 
                placeholder="Describe your listing creation strategy" 
                className="h-24"
                value={localFormState.textInputs.listingStrategy}
                onChange={(e) => handleTextChange("listingStrategy", e.target.value)}
              />
            </div>
            
            <div>
              <label className="font-medium block mb-2">My pricing strategy will be:</label>
              <Textarea 
                placeholder="Describe your pricing strategy" 
                className="h-24"
                value={localFormState.textInputs.pricingStrategy}
                onChange={(e) => handleTextChange("pricingStrategy", e.target.value)}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-medium block mb-2">My target for Month 1 is to list this many products:</label>
                <Input 
                  type="number" 
                  placeholder="Number of products" 
                  value={localFormState.textInputs.productCount}
                  onChange={(e) => handleTextChange("productCount", e.target.value)}
                />
              </div>
              
              <div>
                <label className="font-medium block mb-2">And achieve this many sales:</label>
                <Input 
                  type="number" 
                  placeholder="Number of sales" 
                  value={localFormState.textInputs.salesTarget}
                  onChange={(e) => handleTextChange("salesTarget", e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="font-medium block mb-2">The specific platform optimization techniques I'll implement first are:</label>
              <Textarea 
                placeholder="List your optimization techniques" 
                className="h-24"
                value={localFormState.textInputs.optimizationTechniques}
                onChange={(e) => handleTextChange("optimizationTechniques", e.target.value)}
              />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                Complete this assessment before moving to Chapter 7, where we'll explore setting up efficient production workflows to fulfill the orders you'll start receiving from your chosen platform.
              </p>
              <p className="text-gray-700 mt-2 italic">
                Remember: Your platform choice is not permanent. The goal of your first 60 days is to validate your products, gather customer feedback, and establish initial traction. You can and should adjust your platform strategy as you learn more about your market and product-platform fit.
              </p>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button type="submit" className="w-full md:w-auto">
                Save My Platform Strategy
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
