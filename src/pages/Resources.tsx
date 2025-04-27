
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

const Resources = () => {
  // Mock function for downloading resources
  const handleDownload = (resourceName: string) => {
    console.log(`Downloading: ${resourceName}`);
    alert(`In a real implementation, this would download ${resourceName}`);
  };

  return (
    <DashboardLayout title="Resources & Downloads">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>STL Files</CardTitle>
            <CardDescription>3D Printable Models</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 border-b pb-4">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border">
                  <img 
                    src="/lovable-uploads/64a71d5f-bcf5-4645-b04a-d3926af805b6.png"
                    alt="Phone Stand" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">Phone Stand 5-in-1</h3>
                  <p className="text-sm text-gray-500">Versatile phone stand design</p>
                  <Button 
                    onClick={() => handleDownload("phone-stand-5in1.zip")}
                    className="mt-2"
                  >
                    Download
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-b pb-4">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border">
                  <img 
                    src="/lovable-uploads/e2aae954-787a-4ee9-8049-b54a740fbb08.png"
                    alt="Cat Masks" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">Cat Masks Collection</h3>
                  <p className="text-sm text-gray-500">Set of 5 printable cat masks</p>
                  <Button 
                    onClick={() => handleDownload("cat-masks-collection.zip")}
                    className="mt-2"
                  >
                    Download
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-b pb-4">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border">
                  <img 
                    src="/lovable-uploads/fe8adce5-b909-4430-a057-0e0da07b26cf.png"
                    alt="Keychains" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">Keychain Templates</h3>
                  <p className="text-sm text-gray-500">10 customizable keychain designs</p>
                  <Button 
                    onClick={() => handleDownload("keychain-templates.zip")}
                    className="mt-2"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Business Resources</CardTitle>
            <CardDescription>Templates and Guides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 border-b pb-4">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border bg-gray-50 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/573b21db-fd6b-4fe9-ba36-ae007133ace1.png"
                    alt="Pricing Calculator" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">Pricing Calculator</h3>
                  <p className="text-sm text-gray-500">Excel spreadsheet to calculate product pricing</p>
                  <Button 
                    onClick={() => handleDownload("pricing-calculator.xlsx")}
                    className="mt-2"
                  >
                    Download
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-b pb-4">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border bg-gray-50 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/0f08439b-373a-474c-971a-ae51de7a6701.png"
                    alt="Etsy Guide" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">Etsy Shop Setup Guide</h3>
                  <p className="text-sm text-gray-500">Step-by-step PDF guide</p>
                  <Button 
                    onClick={() => handleDownload("etsy-setup-guide.pdf")}
                    className="mt-2"
                  >
                    Download
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-b pb-4">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border bg-gray-50 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/907a1f7c-21b9-423f-b210-51baa4e27c3c.png"
                    alt="Photography Guide" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">Product Photography Tips</h3>
                  <p className="text-sm text-gray-500">Guide to photographing your prints</p>
                  <Button 
                    onClick={() => handleDownload("product-photography.pdf")}
                    className="mt-2"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Video Tutorials</CardTitle>
            <CardDescription>Step-by-step video guides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 border-b pb-4">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border bg-gray-50">
                  <img 
                    src="/lovable-uploads/19e3fb35-7a5c-4b4a-9d7e-46bee87b38c7.png"
                    alt="Printer Calibration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">Printer Calibration Masterclass</h3>
                  <p className="text-sm text-gray-500">45-minute detailed video tutorial</p>
                  <Button 
                    onClick={() => window.open("#", "_blank")}
                    className="mt-2"
                  >
                    Watch
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-b pb-4">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border bg-gray-50">
                  <img 
                    src="/lovable-uploads/1273d951-6c16-4a5d-a99a-d233f5e92918.png"
                    alt="Post-Processing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">Post-Processing Techniques</h3>
                  <p className="text-sm text-gray-500">Series of 5 videos on finishing techniques</p>
                  <Button 
                    onClick={() => window.open("#", "_blank")}
                    className="mt-2"
                  >
                    Watch
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border bg-gray-50">
                  <img 
                    src="/lovable-uploads/c6bb8abe-6465-4ec3-b3a3-199bc39b343e.png"
                    alt="Photography Setup" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">Product Photography Setup</h3>
                  <p className="text-sm text-gray-500">Creating a DIY lightbox and setup</p>
                  <Button 
                    onClick={() => window.open("#", "_blank")}
                    className="mt-2"
                  >
                    Watch
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Resources;
