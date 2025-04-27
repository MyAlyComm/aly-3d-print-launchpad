
import { PiggyBank, GitFork, Clock, Brain, Users, Map, LineChart } from "lucide-react";

export const KeyFactors = () => {
  const factors = [
    {
      icon: PiggyBank,
      title: "Budget Assessment",
      description: "Your available capital is the first concrete factor in determining your path."
    },
    {
      icon: GitFork,
      title: "3D Printing Experience",
      description: "Your existing level of experience impacts how quickly you can get started."
    },
    {
      icon: Clock,
      title: "Time Availability",
      description: "How much time you can realistically dedicate to your business."
    },
    {
      icon: Brain,
      title: "Your Strongest Skills",
      description: "Your existing skills are perhaps your greatest asset."
    },
    {
      icon: Users,
      title: "Creative Aptitude",
      description: "Your overall creative orientation and how you approach problems."
    },
    {
      icon: Map,
      title: "Geographic Location",
      description: "Your physical location affects everything from market access to shipping costs."
    },
    {
      icon: LineChart,
      title: "Growth Ambitions",
      description: "Your personal goals for the business will shape your entire approach."
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border border-blue-100">
      <h3 className="text-xl font-bold text-blue-800 mb-4">
        Seven Key Factors That Determine Your Optimal Path
      </h3>
      
      <div className="space-y-4">
        {factors.map((factor, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`bg-${factor.icon === PiggyBank ? 'blue' : factor.icon === GitFork ? 'purple' : factor.icon === Clock ? 'green' : factor.icon === Brain ? 'amber' : factor.icon === Users ? 'cyan' : factor.icon === Map ? 'indigo' : 'rose'}-100 p-2 rounded-full text-${factor.icon === PiggyBank ? 'blue' : factor.icon === GitFork ? 'purple' : factor.icon === Clock ? 'green' : factor.icon === Brain ? 'amber' : factor.icon === Users ? 'cyan' : factor.icon === Map ? 'indigo' : 'rose'}-600 mt-1 shrink-0`}>
              <factor.icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className={`font-semibold text-${factor.icon === PiggyBank ? 'blue' : factor.icon === GitFork ? 'purple' : factor.icon === Clock ? 'green' : factor.icon === Brain ? 'amber' : factor.icon === Users ? 'cyan' : factor.icon === Map ? 'indigo' : 'rose'}-900`}>
                {factor.title}
              </h4>
              <p className="text-gray-700 text-sm">{factor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
