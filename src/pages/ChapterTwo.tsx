
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChapterTwo = () => {
  return (
    <DashboardLayout title="Chapter 2: First Prints">
      <ScrollArea className="h-full pr-4">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                <h2>Creating Your First Products</h2>
                <p>
                  Now that you've set up your equipment and software, it's time to create your first products for sale.
                  This chapter will guide you through selecting profitable product ideas and optimizing your prints.
                </p>
                
                <h3>Selecting Profitable Products</h3>
                <p>
                  When choosing what to print, consider these factors:
                </p>
                <ul>
                  <li>Print time (shorter prints mean faster turnover)</li>
                  <li>Material cost (lower material usage increases profit margins)</li>
                  <li>Market demand (research what people are actually buying)</li>
                  <li>Complexity (unique designs that can't be easily found elsewhere)</li>
                </ul>
                
                <h3>Optimizing Print Settings</h3>
                <p>
                  Proper slicer settings can dramatically improve your print quality and efficiency:
                </p>
                <ul>
                  <li>Layer height: 0.2mm is a good balance between quality and speed</li>
                  <li>Infill: 15-20% for most items; higher for functional parts</li>
                  <li>Print speed: Start slower (40-50mm/s) and increase as you gain confidence</li>
                  <li>Supports: Minimize these to reduce post-processing time</li>
                </ul>
                
                <h3>Material Selection</h3>
                <p>
                  Different filaments have different properties and costs:
                </p>
                <ul>
                  <li>PLA: Easy to print, good for most decorative items</li>
                  <li>PETG: Stronger than PLA, good for functional parts</li>
                  <li>TPU: Flexible, great for phone cases and similar items</li>
                  <li>Specialty filaments: Wood, metal-filled, etc. for premium products</li>
                </ul>
                
                <h3>Post-Processing Techniques</h3>
                <p>
                  Elevate your prints from "homemade" to "professional" with these techniques:
                </p>
                <ol>
                  <li>Sanding: Start with coarse grit and work your way to finer grits</li>
                  <li>Acetone smoothing: For ABS filament only</li>
                  <li>Priming and painting: Use plastic-appropriate primers</li>
                  <li>Clear coating: Protect prints and give them a professional finish</li>
                </ol>
                
                <h3>Quality Control</h3>
                <p>
                  Implement quality control processes to ensure customer satisfaction:
                </p>
                <ul>
                  <li>Inspect each print thoroughly before shipping</li>
                  <li>Test functional parts to ensure they work as intended</li>
                  <li>Document common issues and solutions</li>
                  <li>Maintain consistency in your production</li>
                </ul>
                
                <h3>Chapter Summary</h3>
                <p>
                  In this chapter, we've covered creating profitable products, optimizing print settings, and ensuring quality.
                  In the next chapter, we'll explore advanced techniques to scale your business and increase your revenue.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </DashboardLayout>
  );
};

export default ChapterTwo;
