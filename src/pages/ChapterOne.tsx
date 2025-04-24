
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChapterOne = () => {
  return (
    <DashboardLayout title="Chapter 1: Getting Started">
      <ScrollArea className="h-full pr-4">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                <h2>Introduction to 3D Printing Business</h2>
                <p>
                  Welcome to Chapter 1 of the 3D Printing Blueprint! In this chapter, we'll cover the essential 
                  foundations you need to start your 3D printing business, even on a budget as low as $500.
                </p>
                
                <h3>Why 3D Printing is a Great Business Opportunity</h3>
                <p>
                  3D printing has revolutionized manufacturing by making it accessible to individuals and small 
                  businesses. The barriers to entry are lower than ever before, and the market for custom 3D 
                  printed products continues to grow.
                </p>
                
                <h3>Required Equipment</h3>
                <p>
                  To get started, you'll need a reliable 3D printer. For beginners, I recommend the Ender 3 
                  or similar models that offer great value for the price. You'll also need:
                </p>
                <ul>
                  <li>A computer for slicing and design</li>
                  <li>Basic filament (PLA is most beginner-friendly)</li>
                  <li>Basic tools for maintenance and post-processing</li>
                  <li>Optional: A dedicated workspace</li>
                </ul>
                
                <h3>Printer Setup and Calibration</h3>
                <p>
                  Proper setup and calibration are crucial for successful prints. Follow these steps:
                </p>
                <ol>
                  <li>Assemble your printer carefully, following the manufacturer's instructions</li>
                  <li>Level the bed - this is critical for good first layer adhesion</li>
                  <li>Calibrate your extruder to ensure accurate filament flow</li>
                  <li>Run a test print to verify everything is working properly</li>
                </ol>
                
                <h3>Software Tools</h3>
                <p>
                  You'll need software for both design and slicing. For beginners, I recommend:
                </p>
                <ul>
                  <li><strong>Slicers:</strong> Cura (free), PrusaSlicer (free), or Simplify3D (paid)</li>
                  <li><strong>Design:</strong> Tinkercad (free, browser-based), Fusion 360 (free for hobbyists), or Blender (free, open-source)</li>
                </ul>
                
                <h3>Finding Your Niche</h3>
                <p>
                  The most successful 3D printing businesses focus on a specific niche. Consider these options:
                </p>
                <ul>
                  <li>Customized gifts and personalized items</li>
                  <li>Cosplay and prop making</li>
                  <li>Functional household items</li>
                  <li>Educational models</li>
                  <li>Prototyping for local businesses</li>
                </ul>
                
                <h3>Your First Business Steps</h3>
                <p>
                  Before you start printing products to sell, take these important steps:
                </p>
                <ol>
                  <li>Research your target market and competition</li>
                  <li>Set up a simple business plan</li>
                  <li>Determine your pricing strategy (materials + time + electricity + profit margin)</li>
                  <li>Create samples of your products</li>
                  <li>Set up an online presence (Etsy, Instagram, or your own website)</li>
                </ol>
                
                <h3>Chapter Summary</h3>
                <p>
                  In this chapter, we've covered the basic equipment, software, and business planning needed to
                  start your 3D printing venture. In the next chapter, we'll dive into creating your first products
                  and optimizing your printing process for quality and efficiency.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </DashboardLayout>
  );
};

export default ChapterOne;
