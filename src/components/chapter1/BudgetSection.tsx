import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const BudgetSection = () => {
  return (
    <section id="budget" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Starting Budget Considerations</h2>
      
      <Tabs defaultValue="budget-1" className="w-full">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="budget-1">$0</TabsTrigger>
          <TabsTrigger value="budget-2">$500-$1,000</TabsTrigger>
          <TabsTrigger value="budget-3">$1,000-$2,000</TabsTrigger>
          <TabsTrigger value="budget-4">$2,000-$5,000</TabsTrigger>
          <TabsTrigger value="budget-5">$5,000+</TabsTrigger>
        </TabsList>
        
        <TabsContent value="budget-1" className="p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">$0 Budget</h3>
          <p className="mb-4">Broker between clients and existing services, focus on partnerships</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Connect customers with printing services</li>
            <li>Offer design services for clients who need 3D models</li>
            <li>Build partnerships with existing printer owners</li>
            <li>Focus on knowledge and connections rather than equipment</li>
          </ul>
        </TabsContent>
        
        <TabsContent value="budget-2" className="p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">$500-$1,000 Budget</h3>
          <p className="mb-4">Single printer startup with high-margin products (where I started)</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Purchase one quality entry-level printer like the Ender 3</li>
            <li>Focus on high-margin, low-material products</li>
            <li>Start with 1-2 types of filament</li>
            <li>Reinvest profits quickly to expand capacity</li>
          </ul>
        </TabsContent>
        
        <TabsContent value="budget-3" className="p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">$1,000-$2,000 Budget</h3>
          <p className="mb-4">Quality printer or multiple budget units, more testing capacity</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Option to get one mid-tier printer or two budget printers</li>
            <li>Expand filament variety for product diversification</li>
            <li>Add basic post-processing equipment</li>
            <li>Budget for product testing and development</li>
          </ul>
        </TabsContent>
        
        <TabsContent value="budget-4" className="p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">$2,000-$5,000 Budget</h3>
          <p className="mb-4">Multi-printer operation with diverse product lines</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Set up 3-6 printers for parallel production</li>
            <li>Invest in workflow optimization tools</li>
            <li>Add specialized printers for specific applications</li>
            <li>Develop multiple product lines simultaneously</li>
          </ul>
        </TabsContent>
        
        <TabsContent value="budget-5" className="p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">$5,000+ Budget</h3>
          <p className="mb-4">Professional setup with automation potential</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Create a printer farm with 10+ units</li>
            <li>Implement automation and monitoring systems</li>
            <li>Dedicate space for a professional workshop</li>
            <li>Invest in advanced post-processing equipment</li>
            <li>Hire help for scaling operations faster</li>
          </ul>
        </TabsContent>
      </Tabs>
    </section>
  );
};
