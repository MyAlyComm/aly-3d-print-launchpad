
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export const SystemWorksheet = () => {
  const { toast } = useToast();
  const [responses, setResponses] = useState({
    safeBet: "",
    strengthAligner: "",
    valueMaximizer: "",
    plusOne: "",
    metrics: "",
    monthlyCycle: "",
    marketing: "",
    challenges: "",
    strategies: "",
    revenueGoal: ""
  });
  
  const handleChange = (field: string, value: string) => {
    setResponses(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleSave = () => {
    // In a real implementation, this would save to a database
    localStorage.setItem('chapter3Worksheet', JSON.stringify(responses));
    
    toast({
      title: "Progress Saved",
      description: "Your responses have been saved successfully.",
      duration: 3000,
    });
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Chapter 3 Self-Assessment: Your 3 Plus 1 Plan</h2>
      
      <p>
        Based on your Decision Tree path from Chapter 2, now it's time to create your personalized 3 Plus 1 plan:
      </p>
      
      <div className="space-y-6 mt-8">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <label className="block">
                <span className="font-medium">My "Safe Bet" core product will be:</span>
                <Textarea 
                  className="mt-1" 
                  placeholder="Enter your safe bet product here..."
                  value={responses.safeBet}
                  onChange={(e) => handleChange('safeBet', e.target.value)}
                />
              </label>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <label className="block">
                <span className="font-medium">My "Strength Aligner" core product based on my skills from Chapter 2 will be:</span>
                <Textarea 
                  className="mt-1" 
                  placeholder="Enter your strength aligner product here..."
                  value={responses.strengthAligner}
                  onChange={(e) => handleChange('strengthAligner', e.target.value)}
                />
              </label>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <label className="block">
                <span className="font-medium">My "Value Maximizer" core product with high perceived value will be:</span>
                <Textarea 
                  className="mt-1" 
                  placeholder="Enter your value maximizer product here..."
                  value={responses.valueMaximizer}
                  onChange={(e) => handleChange('valueMaximizer', e.target.value)}
                />
              </label>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <label className="block">
                <span className="font-medium">My first "Plus 1" innovation project will be:</span>
                <Textarea 
                  className="mt-1" 
                  placeholder="Enter your plus one innovation project here..."
                  value={responses.plusOne}
                  onChange={(e) => handleChange('plusOne', e.target.value)}
                />
              </label>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <label className="block">
                <span className="font-medium">The specific metrics I'll track for each product are:</span>
                <Textarea 
                  className="mt-1" 
                  placeholder="List the metrics you'll track..."
                  value={responses.metrics}
                  onChange={(e) => handleChange('metrics', e.target.value)}
                />
              </label>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <label className="block">
                <span className="font-medium">My monthly cycle implementation with my available time will look like:</span>
                <Textarea 
                  className="mt-1"
                  placeholder="Week 1: 
Weeks 2-3: 
Week 4: 
Monthly Review:"
                  value={responses.monthlyCycle}
                  onChange={(e) => handleChange('monthlyCycle', e.target.value)}
                  rows={6}
                />
              </label>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <label className="block">
                <span className="font-medium">My primary zero-cost marketing approaches will be:</span>
                <Textarea 
                  className="mt-1" 
                  placeholder="List your marketing approaches..."
                  value={responses.marketing}
                  onChange={(e) => handleChange('marketing', e.target.value)}
                />
              </label>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <label className="block">
                <span className="font-medium">The expected challenges I might face with this system are:</span>
                <Textarea 
                  className="mt-1" 
                  placeholder="List potential challenges..."
                  value={responses.challenges}
                  onChange={(e) => handleChange('challenges', e.target.value)}
                />
              </label>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <label className="block">
                <span className="font-medium">My strategies to overcome these challenges:</span>
                <Textarea 
                  className="mt-1" 
                  placeholder="List your strategies..."
                  value={responses.strategies}
                  onChange={(e) => handleChange('strategies', e.target.value)}
                />
              </label>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <label className="block">
                <span className="font-medium">My 60-day revenue goal using this system is:</span>
                <Textarea 
                  className="mt-1" 
                  placeholder="Enter your revenue goal..."
                  value={responses.revenueGoal}
                  onChange={(e) => handleChange('revenueGoal', e.target.value)}
                />
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-end mt-8">
        <Button onClick={handleSave} className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
          Save Progress
        </Button>
      </div>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>
          Complete this self-assessment before moving to the next chapter. In Chapter 4, we'll dive deeper into 
          finding your first three winning products, with specific selection frameworks based on your Decision 
          Tree path and detailed case studies across different niches and markets.
        </p>
      </div>
    </div>
  );
};
