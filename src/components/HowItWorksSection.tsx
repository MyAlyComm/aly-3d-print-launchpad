
import { Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Download the Free Guide",
    description: "Start with our free guide to learn the fundamentals of setting up a profitable 3D printing business.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
    </svg>
  },
  {
    number: 2,
    title: "Choose Your Blueprint",
    description: "Select the blueprint package that aligns with your goals, from beginner guides to premium STL bundles.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  },
  {
    number: 3,
    title: "Launch Your Business",
    description: "Apply the strategies in your blueprint to start creating, selling, and scaling your 3D printing business.",
    icon: <Rocket className="h-6 w-6" />
  }
];

const HowItWorksSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Start Profiting in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600">
            Follow this easy process to go from complete beginner to running your own profitable 3D printing business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="step-item">
              <div className="step-number">{step.number}</div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              <div className="mt-8 flex justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 md:p-12 mt-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Turn Your 3D Printer Into a Profit Machine?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of creators who have transformed their hobby into a thriving business with my proven blueprint.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-bold text-lg">
              Start For Free
            </button>
            <button className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-md font-bold text-lg">
              Get The Full Blueprint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
