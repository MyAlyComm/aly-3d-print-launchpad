
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MiniProgress } from "@/components/progress/MiniProgress";

const ChapterThree = () => {
  return (
    <DashboardLayout title="Chapter 3: Advanced Techniques">
      <ScrollArea className="h-full pr-4">
        <div className="max-w-3xl mx-auto">
          <MiniProgress currentChapter={3} />
          <Card>
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                <h2>Advanced 3D Printing Techniques</h2>
                <p>
                  In this chapter, we'll explore advanced techniques to take your 3D printing business 
                  to the next level. These strategies will help you scale your operations, improve quality,
                  and increase your profit margins.
                </p>
                
                <h3>Scaling Your Production</h3>
                <p>
                  As your business grows, you'll need to scale your production capacity:
                </p>
                <ul>
                  <li>Optimizing print time without sacrificing quality</li>
                  <li>Batch printing strategies for efficiency</li>
                  <li>When and how to add additional printers</li>
                  <li>Creating a production schedule to maximize printer utilization</li>
                </ul>
                
                <h3>Advanced Finishing Techniques</h3>
                <p>
                  These finishing methods can transform your prints into premium products:
                </p>
                <ul>
                  <li>Vapor smoothing for ultra-smooth surfaces</li>
                  <li>Airbrushing for professional finishes</li>
                  <li>Metal plating and metallization</li>
                  <li>Resin coating for durability and shine</li>
                </ul>
                
                <h3>Multi-Material and Multi-Color Printing</h3>
                <p>
                  Create more complex and valuable products:
                </p>
                <ul>
                  <li>Setting up multi-material printing</li>
                  <li>Techniques for color changes during printing</li>
                  <li>Post-processing multi-material prints</li>
                  <li>Pricing strategies for complex prints</li>
                </ul>
                
                <h3>Building Your Brand</h3>
                <p>
                  Create a distinctive brand identity for your 3D printing business:
                </p>
                <ul>
                  <li>Professional photography of your products</li>
                  <li>Packaging and presentation</li>
                  <li>Customer service excellence</li>
                  <li>Building a community around your brand</li>
                </ul>
                
                <h3>Expanding Sales Channels</h3>
                <p>
                  Move beyond your initial marketplace to increase sales:
                </p>
                <ul>
                  <li>Creating your own e-commerce website</li>
                  <li>Expanding to multiple marketplaces (Etsy, eBay, Amazon Handmade)</li>
                  <li>Approaching local retailers for wholesale opportunities</li>
                  <li>Craft fairs and local events</li>
                </ul>
                
                <h3>Advanced Business Strategies</h3>
                <p>
                  Take your business operations to the next level:
                </p>
                <ul>
                  <li>Inventory management systems</li>
                  <li>Hiring help: when and how</li>
                  <li>Accounting and tax considerations</li>
                  <li>Automating repetitive tasks</li>
                </ul>
                
                <h3>Chapter Summary</h3>
                <p>
                  This chapter has covered advanced techniques for scaling your 3D printing business, 
                  improving product quality, and expanding your market reach. By implementing these strategies, 
                  you'll be well-positioned to grow from a side hustle to a full-time business.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </DashboardLayout>
  );
};

export default ChapterThree;
