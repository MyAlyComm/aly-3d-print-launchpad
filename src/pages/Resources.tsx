
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-medium">Phone Stand 5-in-1</h3>
                  <p className="text-sm text-gray-500">Versatile phone stand design</p>
                </div>
                <Button onClick={() => handleDownload("phone-stand-5in1.zip")}>Download</Button>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-medium">Cat Masks Collection</h3>
                  <p className="text-sm text-gray-500">Set of 5 printable cat masks</p>
                </div>
                <Button onClick={() => handleDownload("cat-masks-collection.zip")}>Download</Button>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-medium">Keychain Templates</h3>
                  <p className="text-sm text-gray-500">10 customizable keychain designs</p>
                </div>
                <Button onClick={() => handleDownload("keychain-templates.zip")}>Download</Button>
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
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-medium">Pricing Calculator</h3>
                  <p className="text-sm text-gray-500">Excel spreadsheet to calculate product pricing</p>
                </div>
                <Button onClick={() => handleDownload("pricing-calculator.xlsx")}>Download</Button>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-medium">Etsy Shop Setup Guide</h3>
                  <p className="text-sm text-gray-500">Step-by-step PDF guide</p>
                </div>
                <Button onClick={() => handleDownload("etsy-setup-guide.pdf")}>Download</Button>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-medium">Product Photography Tips</h3>
                  <p className="text-sm text-gray-500">Guide to photographing your prints</p>
                </div>
                <Button onClick={() => handleDownload("product-photography.pdf")}>Download</Button>
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
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-medium">Printer Calibration Masterclass</h3>
                  <p className="text-sm text-gray-500">45-minute detailed video tutorial</p>
                </div>
                <Button onClick={() => window.open("#", "_blank")}>Watch</Button>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-medium">Post-Processing Techniques</h3>
                  <p className="text-sm text-gray-500">Series of 5 videos on finishing techniques</p>
                </div>
                <Button onClick={() => window.open("#", "_blank")}>Watch</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Product Photography Setup</h3>
                  <p className="text-sm text-gray-500">Creating a DIY lightbox and setup</p>
                </div>
                <Button onClick={() => window.open("#", "_blank")}>Watch</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Resources;
