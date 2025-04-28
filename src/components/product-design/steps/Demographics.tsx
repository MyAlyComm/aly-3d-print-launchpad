
import { Button } from "@/components/ui/button";
import { useProductDesign } from "../ProductDesignContext";

interface DemographicsProps {
  onNext: () => void;
  onPrev: () => void;
}

export const Demographics = ({ onNext, onPrev }: DemographicsProps) => {
  const { demographics, productDetails } = useProductDesign();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Target Customer Demographics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Primary Persona */}
        <div className="border border-primary/20 rounded-lg overflow-hidden">
          <div className="bg-primary text-white p-3">
            <h3 className="font-bold">Primary Audience</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">{demographics.primaryAudience.title}</h4>
                <p className="text-sm text-gray-600">Tech-savvy professionals aged {demographics.primaryAudience.ageRange}</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-gray-500">Location</span>
                <span className="font-medium">{demographics.primaryAudience.location}</span>
              </div>
              <div>
                <span className="block text-gray-500">Income Level</span>
                <span className="font-medium">{demographics.primaryAudience.income}</span>
              </div>
              <div>
                <span className="block text-gray-500">Pain Points</span>
                <span className="font-medium">{demographics.primaryAudience.painPoints}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Secondary Persona */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-3">
            <h3 className="font-bold">Secondary Audience</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">{demographics.secondaryAudience.title}</h4>
                <p className="text-sm text-gray-600">Remote workers aged {demographics.secondaryAudience.ageRange}</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-gray-500">Location</span>
                <span className="font-medium">{demographics.secondaryAudience.location}</span>
              </div>
              <div>
                <span className="block text-gray-500">Income Level</span>
                <span className="font-medium">{demographics.secondaryAudience.income}</span>
              </div>
              <div>
                <span className="block text-gray-500">Pain Points</span>
                <span className="font-medium">{demographics.secondaryAudience.painPoints}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tertiary Persona */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-green-600 text-white p-3">
            <h3 className="font-bold">Tertiary Audience</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">{demographics.tertiaryAudience.title}</h4>
                <p className="text-sm text-gray-600">Students aged {demographics.tertiaryAudience.ageRange}</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-gray-500">Location</span>
                <span className="font-medium">{demographics.tertiaryAudience.location}</span>
              </div>
              <div>
                <span className="block text-gray-500">Income Level</span>
                <span className="font-medium">{demographics.tertiaryAudience.income}</span>
              </div>
              <div>
                <span className="block text-gray-500">Pain Points</span>
                <span className="font-medium">{demographics.tertiaryAudience.painPoints}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Geographic Distribution */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-gray-800 mb-3">Geographic Distribution</h3>
          <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-3">
            <p className="text-gray-500">Geographic heat map placeholder</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-gray-500">Top Markets</span>
              <ul className="list-disc pl-5">
                <li>San Francisco Bay Area</li>
                <li>New York Metro</li>
                <li>Seattle</li>
                <li>Austin</li>
              </ul>
            </div>
            <div>
              <span className="block text-gray-500">Emerging Markets</span>
              <ul className="list-disc pl-5">
                <li>Denver</li>
                <li>Portland</li>
                <li>Nashville</li>
                <li>Raleigh-Durham</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Psychographic Profile */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-gray-800 mb-3">Psychographic Profile</h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Values</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Efficiency
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Aesthetics
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Productivity
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Interests</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Technology
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Home Office Design
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Productivity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Button 
          variant="outline"
          onClick={onPrev}
        >
          Back
        </Button>
        <Button onClick={onNext}>
          Next: Marketing Strategy
        </Button>
      </div>
    </div>
  );
};
