
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { CalendarCheck, Lightbulb, Layers } from "lucide-react";

export const ImplementationPlan = () => {
  return (
    <ChapterSection title="Future-Proofing Implementation Plan">
      <div className="space-y-8">
        <p>
          Converting these strategies into action requires a systematic approach. 
          Here's my recommended implementation framework:
        </p>
        
        <div className="rounded-xl overflow-hidden border border-blue-200 bg-white">
          <div className="bg-blue-500 text-white p-4 flex items-center">
            <CalendarCheck className="h-6 w-6 mr-2" />
            <h3 className="font-bold text-xl">90-Day Horizon Scanning System</h3>
          </div>
          <div className="p-5">
            <p className="mb-4">
              Implement this quarterly cycle to stay ahead of industry changes:
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-blue-800">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-blue-800">Week 1: Information Gathering</h4>
                  <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                    <li>Review major 3D printing news sources</li>
                    <li>Study recent product launches from manufacturers</li>
                    <li>Analyze competitor evolution</li>
                    <li>Identify emerging customer trends</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-blue-800">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-blue-800">Week 2: Impact Assessment</h4>
                  <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                    <li>Evaluate how identified trends might impact your business</li>
                    <li>Assess potential opportunities and threats</li>
                    <li>Identify knowledge or capability gaps</li>
                    <li>Prioritize areas for further exploration</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-blue-800">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-blue-800">Week 3: Strategic Adjustment</h4>
                  <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                    <li>Update your three-horizon plan based on findings</li>
                    <li>Adjust resource allocation if needed</li>
                    <li>Identify specific experiments or adaptations to implement</li>
                    <li>Modify product development roadmap</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-blue-800">4</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-blue-800">Weeks 4-12: Implementation and Tracking</h4>
                  <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                    <li>Execute priority adaptations</li>
                    <li>Track results of previous adjustments</li>
                    <li>Document learnings in your knowledge system</li>
                    <li>Prepare for next scanning cycle</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-blue-700 italic mt-4">
              This systematic approach transforms future awareness from an occasional concern to an integral part of your business rhythm.
            </p>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden border border-purple-200 bg-white">
          <div className="bg-purple-500 text-white p-4 flex items-center">
            <Lightbulb className="h-6 w-6 mr-2" />
            <h3 className="font-bold text-xl">The 10/10/10 Innovation System</h3>
          </div>
          <div className="p-5">
            <p className="mb-4">
              Allocate resources for deliberate innovation and adaptation:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-2">10% of Time</h4>
                <ul className="list-disc ml-5 text-sm space-y-1">
                  <li>Schedule dedicated exploration time (e.g., Friday afternoons)</li>
                  <li>Create "no-meeting" windows for deep thinking</li>
                  <li>Build learning activities into your weekly schedule</li>
                  <li>Participate in communities outside your immediate field</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-2">10% of Budget</h4>
                <ul className="list-disc ml-5 text-sm space-y-1">
                  <li>Set aside funds for experimentation</li>
                  <li>Invest in learning resources and education</li>
                  <li>Purchase new materials or technologies to test</li>
                  <li>Allow for small failures as learning opportunities</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-2">10% of Production</h4>
                <ul className="list-disc ml-5 text-sm space-y-1">
                  <li>Allocate printer time for testing new techniques</li>
                  <li>Create experimental products alongside your core offerings</li>
                  <li>Prototype potential new products without immediate production plans</li>
                  <li>Test procedural improvements without risking core operations</li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-purple-700 italic mt-4">
              This approach normalizes innovation and creates space for adaptive development without jeopardizing current operations.
            </p>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden border border-green-200 bg-white">
          <div className="bg-green-500 text-white p-4 flex items-center">
            <Layers className="h-6 w-6 mr-2" />
            <h3 className="font-bold text-xl">The Annual Strategic Reset</h3>
          </div>
          <div className="p-5">
            <p className="mb-4">
              Once yearly, step back and fundamentally reassess your business:
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800">Component 1: Business Model Canvas Review</h4>
                <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
                  <li>Revisit each element of your business model</li>
                  <li>Identify components that may need fundamental change</li>
                  <li>Assess alignment with industry direction</li>
                  <li>Consider alternative models that might better serve your goals</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800">Component 2: Capability Gap Analysis</h4>
                <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
                  <li>List capabilities needed for future success</li>
                  <li>Assess your current strength in each area</li>
                  <li>Identify critical gaps requiring development</li>
                  <li>Create learning and acquisition plans for priority gaps</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800">Component 3: Five-Year Visioning</h4>
                <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
                  <li>Imagine your ideal business five years ahead</li>
                  <li>Work backward to identify key milestones</li>
                  <li>Compare with current trajectory</li>
                  <li>Identify shifts needed to align current path with desired future</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800">Component 4: Key Decision Documentation</h4>
                <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
                  <li>Record major strategic choices</li>
                  <li>Document rationale for decisions</li>
                  <li>Identify trigger points that would prompt reconsideration</li>
                  <li>Create accountability system for implementation</li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-green-700 italic mt-4">
              This annual process prevents business inertia and ensures periodic reassessment of fundamental assumptions.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-100">
          <h3 className="text-xl font-bold mb-4 text-indigo-900">Building a Personal Future-Proofing Practice</h3>
          <p className="mb-4">
            Future-proofing isn't just about business strategy—it requires personal development as an entrepreneur. Here are key practices I've found essential:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-indigo-800">Continuous Learning Discipline</h4>
              <p className="text-sm mt-1">Develop these specific habits:</p>
              <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                <li>Dedicated weekly learning time (minimum 2-3 hours)</li>
                <li>Regular rotation between technical, business, and creative learning</li>
                <li>Diverse information sources (podcasts, books, courses, communities)</li>
                <li>Documentation system for capturing and reviewing insights</li>
              </ul>
              <p className="text-sm text-indigo-600 italic mt-1">
                The most adaptable entrepreneurs I know have disciplined learning practices that extend beyond immediate business needs.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-indigo-800">Network Cultivation</h4>
              <p className="text-sm mt-1">Strategically develop relationships that provide early insight and opportunities:</p>
              <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                <li>Industry-specific communities (active participation, not just lurking)</li>
                <li>Cross-industry connections for perspective</li>
                <li>Relationships with suppliers and manufacturers</li>
                <li>Mentor/mentee relationships in both directions</li>
              </ul>
              <p className="text-sm text-indigo-600 italic mt-1">
                Many of my most valuable insights have come through my network, often months before the information becomes widely available.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-indigo-800">Psychological Resilience</h4>
              <p className="text-sm mt-1">Develop mental practices that support adaptation:</p>
              <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                <li>Regular reflection on past changes and adaptations</li>
                <li>Scenario planning for potential disruptions</li>
                <li>Comfort with uncertainty and ambiguity</li>
                <li>Celebration of learning from failures</li>
              </ul>
              <p className="text-sm text-indigo-600 italic mt-1">
                The entrepreneurs who navigate change most successfully aren't necessarily the most brilliant strategists—they're 
                often those with the psychological flexibility to adapt without excessive stress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ChapterSection>
  );
};
