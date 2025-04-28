
import React, { useState, useRef } from "react";
import { AIHubLayout } from "@/components/ai-hub/AIHubLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Upload, Trash, Image, RefreshCw, ChevronRight, Check } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

const BackgroundRemover = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [processedImages, setProcessedImages] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("upload");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...selectedFiles]);
    
    // Create previews
    selectedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviews(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };
  
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };
  
  const clearAllFiles = () => {
    setFiles([]);
    setPreviews([]);
    setProcessedImages([]);
    setActiveTab("upload");
  };
  
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  
  const processImages = () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    setProgress(0);
    setActiveTab("processing");
    setProcessedImages([]);
    
    // Simulate AI processing with progress updates
    const totalImages = files.length;
    let processed = 0;
    
    const processNext = (index: number) => {
      if (index >= files.length) {
        setIsProcessing(false);
        setActiveTab("results");
        return;
      }
      
      // Simulate processing time between 1-2 seconds per image
      const processingTime = 1000 + Math.random() * 1000;
      
      setTimeout(() => {
        // In a real implementation, this would call an AI service to remove the background
        // For demo, we'll just use the original images as "processed" versions
        setProcessedImages(prev => [...prev, previews[index]]);
        processed++;
        
        // Update progress
        setProgress(Math.floor((processed / totalImages) * 100));
        
        // Process next image
        processNext(index + 1);
      }, processingTime);
    };
    
    processNext(0);
  };
  
  const downloadImage = (imageUrl: string, index: number) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `processed-image-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const downloadAllImages = () => {
    processedImages.forEach((imageUrl, index) => {
      downloadImage(imageUrl, index);
    });
  };

  return (
    <AIHubLayout title="Background Remover">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="mb-4">
          <TabsTrigger value="upload">1. Upload Images</TabsTrigger>
          <TabsTrigger value="processing" disabled={previews.length === 0 || isProcessing === false}>2. Processing</TabsTrigger>
          <TabsTrigger value="results" disabled={processedImages.length === 0}>3. Processed Images</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Images</CardTitle>
                  <CardDescription>
                    Upload product images with backgrounds you'd like to remove
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* File Input */}
                  <div>
                    <Input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <div 
                      onClick={triggerFileInput}
                      className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <h3 className="font-medium text-lg mb-1">Upload your images</h3>
                      <p className="text-gray-500 mb-2">Drag and drop, or click to select files</p>
                      <p className="text-xs text-gray-400">Supports JPG, PNG, WEBP (max 10MB each)</p>
                    </div>
                  </div>
                  
                  {/* Preview Section */}
                  {previews.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Selected Images ({previews.length})</h3>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={clearAllFiles}
                        >
                          <Trash className="h-4 w-4 mr-2" />
                          Clear All
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {previews.map((preview, index) => (
                          <div key={index} className="relative group">
                            <img 
                              src={preview} 
                              alt={`Preview ${index+1}`}
                              className="rounded-md w-full h-40 object-cover"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => removeFile(index)}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={clearAllFiles} disabled={previews.length === 0}>
                    Clear
                  </Button>
                  <Button 
                    onClick={processImages}
                    disabled={previews.length === 0}
                  >
                    Remove Backgrounds
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle>Background Remover</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Our AI-powered background remover helps you create professional product 
                    images with transparent backgrounds - perfect for your online store 
                    listings.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold flex items-center">
                        <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">1</span>
                        Upload product photos
                      </h3>
                      <p className="text-sm text-gray-600">
                        Upload one or multiple product images.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold flex items-center">
                        <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">2</span>
                        Process images
                      </h3>
                      <p className="text-sm text-gray-600">
                        Our AI will remove the backgrounds automatically.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold flex items-center">
                        <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">3</span>
                        Download or use directly
                      </h3>
                      <p className="text-sm text-gray-600">
                        Save your transparent images or use them directly in other tools.
                      </p>
                    </div>
                  </div>

                  <Alert className="bg-amber-50 border-amber-200">
                    <AlertTitle className="text-amber-800">Pro Tip</AlertTitle>
                    <AlertDescription className="text-amber-700">
                      For best results, ensure your product stands out clearly from the background with good lighting.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="processing">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Processing Images</CardTitle>
              <CardDescription>
                Our AI is removing backgrounds from {files.length} image{files.length > 1 ? "s" : ""}...
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 py-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <div>Progress</div>
                  <div>{progress}% ({processedImages.length}/{files.length})</div>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {previews.map((preview, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={preview} 
                      alt={`Preview ${index+1}`}
                      className={`rounded-md w-full h-20 object-cover ${processedImages[index] ? 'opacity-50' : ''}`}
                    />
                    {processedImages[index] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-md">
                        <Check className="text-white h-6 w-6" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="results">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Processed Images</h2>
                <p className="text-gray-600">
                  {files.length} image{files.length > 1 ? "s" : ""} with backgrounds removed
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={clearAllFiles}>
                  <RefreshCw className="h-4 w-4 mr-2" /> Process New Images
                </Button>
                <Button onClick={downloadAllImages}>
                  <Download className="h-4 w-4 mr-2" /> Download All
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedImages.map((image, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Image {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-2 flex justify-center">
                    <img 
                      src={image} 
                      alt={`Processed ${index+1}`}
                      className="rounded-md max-h-60 object-contain"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => downloadImage(image, index)}>
                      <Download className="h-4 w-4 mr-2" /> Download
                    </Button>
                    <Button className="flex-1">
                      <Image className="h-4 w-4 mr-2" /> Use in Project
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Your images are ready! Here are some ways to use them:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Create Listings</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      Use these transparent images for your product listings across all platforms.
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full">
                        Listing Creator <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Generate Lifestyle Images</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      Place your product in lifestyle contexts using our AI generator.
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full">
                        Lifestyle Generator <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Create Social Posts</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      Use these images to create engaging social media posts.
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full">
                        Social Media Tool <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </AIHubLayout>
  );
};

export default BackgroundRemover;
