
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";

export const StrategicPositioning = () => {
  return (
    <ChapterSection title="Strategic Positioning for Future Success">
      <div className="space-y-6">
        <p>
          Given these coming shifts, how should you position your business to thrive in the future landscape? 
          Here are four strategic frameworks I've developed:
        </p>
        
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100 p-6">
          <h3 className="text-xl font-bold mb-4 text-purple-900">The Future-Value Matrix</h3>
          <p className="mb-4">
            This framework helps you evaluate potential business directions based on their current and future value:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <h4 className="font-bold text-purple-800">Quadrant 1: Current Value, Diminishing Future Value</h4>
              <p className="text-sm mt-2">
                <span className="font-semibold">Products:</span> Simple decorative items, basic organizers, standard accessories
              </p>
              <p className="text-sm mt-1">
                <span className="font-semibold">Strategies:</span> Cash cows to fund other initiatives, planned obsolescence
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
              <h4 className="font-bold text-blue-800">Quadrant 2: Current Value, Growing Future Value</h4>
              <p className="text-sm mt-2">
                <span className="font-semibold">Products:</span> Premium customized solutions, proprietary systems, branded ecosystems
              </p>
              <p className="text-sm mt-1">
                <span className="font-semibold">Strategies:</span> Core business focus, continuous innovation, brand building
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-200">
              <h4 className="font-bold text-indigo-800">Quadrant 3: Limited Current Value, High Future Value</h4>
              <p className="text-sm mt-2">
                <span className="font-semibold">Products:</span> Emerging applications, experimental products, cutting-edge materials
              </p>
              <p className="text-sm mt-1">
                <span className="font-semibold">Strategies:</span> R&D investment, controlled testing, strategic partnerships
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-800">Quadrant 4: Limited Current Value, Limited Future Value</h4>
              <p className="text-sm mt-2">
                <span className="font-semibold">Products:</span> Fad items, undifferentiated commodities, soon-to-be-obsolete designs
              </p>
              <p className="text-sm mt-1">
                <span className="font-semibold">Strategies:</span> Avoid entirely or harvest quickly
              </p>
            </div>
          </div>
          
          <p className="text-sm text-purple-800 italic">
            The most resilient businesses maintain a portfolio with strength in Quadrants 1 and 2, 
            while strategically exploring Quadrant 3 opportunities.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-100 p-6 mt-8">
          <h3 className="text-xl font-bold mb-4 text-blue-900">The Competitive Moat Framework</h3>
          <p className="mb-4">
            As competition increases, building defensible advantages becomes critical. Here are the four types of moats that can protect your business:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-blue-800">Process Moats</h4>
              <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                <li>Proprietary production techniques</li>
                <li>Unique finishing methods</li>
                <li>Superior quality control systems</li>
                <li>Efficient operational workflows</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-blue-800">Brand Moats</h4>
              <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                <li>Strong emotional connections with customers</li>
                <li>Recognized design aesthetic</li>
                <li>Reputation for excellence</li>
                <li>Community of loyal followers</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-blue-800">Knowledge Moats</h4>
              <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                <li>Specialized material expertise</li>
                <li>Deep understanding of specific applications</li>
                <li>Technical know-how beyond competitors</li>
                <li>Proprietary data on customer preferences</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-blue-800">Network Moats</h4>
              <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                <li>Strategic partnerships with suppliers</li>
                <li>Relationships with complementary businesses</li>
                <li>Distribution channels inaccessible to competitors</li>
                <li>Community platforms with network effects</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-blue-800 italic mt-4">
            The strongest businesses deliberately build multiple moats using a combination of these approaches.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg border border-teal-100 p-6 mt-8">
          <h3 className="text-xl font-bold mb-4 text-teal-900">The Adaptability Spectrum</h3>
          <p className="mb-4">
            Businesses vary in their ability to adapt to changing conditions. This framework helps you assess and improve your adaptability:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-100 text-teal-800">
                  <th className="py-2 px-4 text-left rounded-tl-lg">Adaptability Level</th>
                  <th className="py-2 px-4 text-left">Characteristics</th>
                  <th className="py-2 px-4 text-left rounded-tr-lg">Future-Readiness</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium">Brittle</td>
                  <td className="py-3 px-4">Fixed product lines, rigid processes, high fixed costs</td>
                  <td className="py-3 px-4">Highly vulnerable to disruption</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Flexible</td>
                  <td className="py-3 px-4">Modular systems, cross-trained team, variable cost structure</td>
                  <td className="py-3 px-4">Can navigate predictable changes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Adaptive</td>
                  <td className="py-3 px-4">Rapid prototyping culture, diverse revenue streams, continuous learning</td>
                  <td className="py-3 px-4">Can respond to unexpected shifts</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Transformative</td>
                  <td className="py-3 px-4">Innovation at core of business, scenario planning, proactive experimentation</td>
                  <td className="py-3 px-4">Can take advantage of disruption</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-teal-800 italic mt-4">
            My recommendation is to aim for at least the Adaptive level, which requires:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
            <li>Regular industry trend monitoring</li>
            <li>Quarterly strategic reassessment</li>
            <li>Maintaining 20-30% of resources for experimentation</li>
            <li>Building systems that can scale up or down quickly</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg border border-green-100 p-6 mt-8">
          <h3 className="text-xl font-bold mb-4 text-green-900">The Three Horizons Model</h3>
          <p className="mb-4">
            This strategic planning framework, adapted specifically for 3D printing businesses, 
            helps balance current operations with future opportunities:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
              <h4 className="font-bold text-green-800">Horizon 1 (Now to 12 months)</h4>
              <p className="text-sm mt-1"><span className="font-medium">Focus:</span> Optimizing current product lines and operations</p>
              <p className="text-sm mt-1"><span className="font-medium">Metrics:</span> Revenue, profit margins, customer satisfaction</p>
              <p className="text-sm mt-1"><span className="font-medium">Allocation:</span> 70% of resources</p>
              <p className="text-sm mt-1"><span className="font-medium">Activities:</span> Incremental improvements, efficiency gains, marketing optimization</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-800">Horizon 2 (1-2 years)</h4>
              <p className="text-sm mt-1"><span className="font-medium">Focus:</span> Expanding into adjacent markets or technologies</p>
              <p className="text-sm mt-1"><span className="font-medium">Metrics:</span> New customer acquisition, market share growth, new product success</p>
              <p className="text-sm mt-1"><span className="font-medium">Allocation:</span> 20% of resources</p>
              <p className="text-sm mt-1"><span className="font-medium">Activities:</span> New product development, channel expansion, capability building</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-800">Horizon 3 (2-5 years)</h4>
              <p className="text-sm mt-1"><span className="font-medium">Focus:</span> Exploring transformative opportunities</p>
              <p className="text-sm mt-1"><span className="font-medium">Metrics:</span> Learning objectives, option value creation, strategic positioning</p>
              <p className="text-sm mt-1"><span className="font-medium">Allocation:</span> 10% of resources</p>
              <p className="text-sm mt-1"><span className="font-medium">Activities:</span> Experiments, strategic partnerships, technology monitoring</p>
            </div>
          </div>
          
          <p className="text-sm text-green-800 italic mt-4">
            The key is maintaining appropriate balance—too much focus on Horizon 1 leaves you vulnerable to disruption, 
            while too much emphasis on Horizons 2 and 3 can starve your current business of needed resources.
          </p>
        </div>
      </div>
    </ChapterSection>
  );
};
