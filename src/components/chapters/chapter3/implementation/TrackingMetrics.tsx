
export const TrackingMetrics = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Tracking and Metrics</h3>
      <p>To manage your 3 Plus 1 system effectively, you'll track specific metrics for each product:</p>
      
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-primary/5 p-4 rounded-lg">
          <h4 className="font-semibold">For Your Core Three Products:</h4>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Unit sales (weekly and monthly)</li>
            <li>Revenue generated</li>
            <li>Profit margin</li>
            <li>Production time per unit</li>
            <li>Customer review ratings</li>
            <li>Return/issue rate</li>
            <li>Marketing performance by channel</li>
            <li>Inventory levels</li>
          </ul>
        </div>
        
        <div className="bg-primary/5 p-4 rounded-lg">
          <h4 className="font-semibold">For Your Plus 1:</h4>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Development milestones completed</li>
            <li>Prototype iterations</li>
            <li>Test results</li>
            <li>Initial customer feedback</li>
            <li>Production time estimates</li>
            <li>Material costs</li>
            <li>Market research findings</li>
          </ul>
        </div>
      </div>
      
      <p className="mt-4">
        These metrics give you the data needed to make objective decisions about which products to keep, 
        improve, or replace in your lineup.
      </p>
    </div>
  );
};
