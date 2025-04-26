
const blueprintFeatures = [
  "Marketing Strategies",
  "Printer Buying Guide",
  "How to Find Profitable Products",
  "AI Product Design",
  "Custom Product Creation",
  "Marketplace Optimization",
  "Pricing Strategies",
  "Customer Service Guide",
];

const TrustedCompanies = () => {
  return (
    <div className="w-full bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 py-12 overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Complete System Including
        </h3>
      </div>
      <div className="relative group">
        <div className="flex space-x-16 animate-[scroll_20s_linear_infinite] group-hover:[animation-play-state:paused]">
          {/* First set of features */}
          {blueprintFeatures.map((feature, idx) => (
            <span
              key={`${feature}-1`}
              className="text-gray-700 text-lg font-medium whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:via-secondary hover:to-accent transition-all duration-300 transform hover:scale-110"
            >
              {feature}
            </span>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {blueprintFeatures.map((feature, idx) => (
            <span
              key={`${feature}-2`}
              className="text-gray-700 text-lg font-medium whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:via-secondary hover:to-accent transition-all duration-300 transform hover:scale-110"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
