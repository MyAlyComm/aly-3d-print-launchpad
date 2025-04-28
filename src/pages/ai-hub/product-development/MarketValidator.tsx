
import React, { useState } from "react";
import { AIHubLayout } from "@/components/ai-hub/AIHubLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader, BarChart } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function MarketValidator() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [productName, setProductName] = useState("");

  const handleAnalyze = () => {
    if (!productName) return;
    
    setIsAnalyzing(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  return (
    <AIHubLayout title="Market Validator">
      <div className="container mx-auto py-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Market Validation Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="productName">Product Name or Concept</Label>
              <Input
                id="productName"
                placeholder="Enter your product name or concept"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <Button 
              onClick={handleAnalyze} 
              disabled={isAnalyzing || !productName}
              className="w-full"
            >
              {isAnalyzing ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing Market
                </>
              ) : (
                <>
                  <BarChart className="mr-2 h-4 w-4" />
                  Analyze Market Potential
                </>
              )}
            </Button>
            {isAnalyzing && (
              <div className="space-y-2">
                <Progress value={progress} />
                <p className="text-sm text-gray-500 text-center">
                  Analyzing market data...
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AIHubLayout>
  );
}
