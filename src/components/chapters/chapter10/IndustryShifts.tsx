import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { ChapterGrid } from "@/components/ui/chapter-layout/ChapterGrid";
import { InfoCard } from "@/components/ui/chapter-layout/InfoCard";
import { Bot, FlaskConical, Factory, TrendingUp } from "lucide-react";

export const IndustryShifts = () => {
  return (
    <ChapterSection title="The Coming Industry Shifts">
      <div className="space-y-6">
        <p>
          Based on my deep involvement with industry leaders, manufacturers, and thousands of entrepreneurs, 
          here are the key transformations I see on the horizon that will reshape the 3D printing business landscape:
        </p>
        
        <div className="p-5 border border-gray-200 rounded-lg relative">
          <div className="absolute -top-4 left-4 bg-white px-2 font-semibold flex items-center text-primary">
            <Bot className="mr-2 h-4 w-4" />
            <span>1. Widespread AI Integration</span>
          </div>
          <div className="space-y-4 mt-2">
            <p>
              As I mentioned briefly in Chapter 8, AI is dramatically changing product design and marketing. Here's what to expect:
            </p>
            <div>
              <h4 className="font-bold text-gray-800">Design Automation</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Text-to-3D model generation becoming mainstream</li>
                <li>AI optimization of designs for printability and strength</li>
                <li>Personalization engines that modify designs based on customer preferences</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Marketing Evolution</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>AI-generated product photos and videos indistinguishable from human-created content</li>
                <li>Hyper-personalized marketing messages based on customer behavior</li>
                <li>Automated listing optimization across multiple platforms</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 italic">
              These advancements will significantly lower barriers to entry, making it easier for newcomers to launch products. 
              For established businesses, this means differentiation will need to come from factors beyond just having unique designs.
            </p>
          </div>
        </div>
        
        <div className="p-5 border border-gray-200 rounded-lg relative">
          <div className="absolute -top-4 left-4 bg-white px-2 font-semibold flex items-center text-primary">
            <FlaskConical className="mr-2 h-4 w-4" />
            <span>2. Material Revolution</span>
          </div>
          <div className="space-y-4 mt-2">
            <p>
              The filaments available today will seem primitive compared to what's coming:
            </p>
            <div>
              <h4 className="font-bold text-gray-800">Functional Materials</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>More advanced composite filaments with specific properties (conductivity, flexibility, etc.)</li>
                <li>Bio-based materials with improved sustainability profiles</li>
                <li>Smart materials that respond to environmental conditions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Finishing Innovations</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Simplified post-processing techniques for professional finishes</li>
                <li>New coating technologies for enhanced durability</li>
                <li>Improved colorization methods beyond traditional painting</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 italic">
              These new materials will enable entirely new product categories and applications that aren't feasible today. 
              Businesses with material expertise and application knowledge will have significant advantages.
            </p>
          </div>
        </div>
        
        <div className="p-5 border border-gray-200 rounded-lg relative">
          <div className="absolute -top-4 left-4 bg-white px-2 font-semibold flex items-center text-primary">
            <Factory className="mr-2 h-4 w-4" />
            <span>3. Production Ecosystem Transformation</span>
          </div>
          <div className="space-y-4 mt-2">
            <p>
              The way products move from design to customer is evolving:
            </p>
            <div>
              <h4 className="font-bold text-gray-800">Distributed Manufacturing</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Networks of local print farms handling regional production</li>
                <li>On-demand printing at retail locations</li>
                <li>Home delivery of prints within hours, not days</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Hybridization of Methods</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Seamless integration of 3D printing with traditional manufacturing</li>
                <li>Automated systems combining multiple production techniques</li>
                <li>New finishing methods bridging the gap between printed and mass-produced aesthetics</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 italic">
              This shift will create both threats to traditional print-at-home businesses and opportunities 
              for those who position themselves within these new networks.
            </p>
          </div>
        </div>
        
        <div className="p-5 border border-gray-200 rounded-lg relative">
          <div className="absolute -top-4 left-4 bg-white px-2 font-semibold flex items-center text-primary">
            <TrendingUp className="mr-2 h-4 w-4" />
            <span>4. Market Maturation</span>
          </div>
          <div className="space-y-4 mt-2">
            <p>
              As markets mature, customer expectations and business dynamics change:
            </p>
            <div>
              <h4 className="font-bold text-gray-800">Consumer Sophistication</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Increasing knowledge about 3D printing capabilities and limitations</li>
                <li>Higher expectations for quality, sustainability, and originality</li>
                <li>Willingness to pay premiums for genuine innovation, not just novelty</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Competitive Consolidation</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Larger, better-funded players entering previously niche markets</li>
                <li>Acquisition of successful small businesses by larger companies</li>
                <li>Partnership networks replacing some independent operators</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 italic">
              This maturation will make it harder to succeed with basic, undifferentiated products but will create 
              premium opportunities for businesses with strong positioning.
            </p>
          </div>
        </div>
      </div>
    </ChapterSection>
  );
};
