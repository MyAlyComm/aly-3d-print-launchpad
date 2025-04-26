
const companies = [
  "Prusa Research",
  "Creality",
  "Elegoo",
  "Bambu Lab",
  "Anycubic",
  "Makerbot",
  "Formlabs",
  "Ultimaker",
];

const TrustedCompanies = () => {
  return (
    <div className="bg-gray-50/50 py-8 overflow-hidden">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Trusted By Leading 3D Printing Companies</h3>
      </div>
      <div className="relative">
        <div className="flex space-x-16 animate-[scroll_40s_linear_infinite]">
          {/* First set of companies */}
          {companies.map((company, idx) => (
            <span
              key={`${company}-1`}
              className="text-gray-500 text-lg font-medium whitespace-nowrap"
            >
              {company}
            </span>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {companies.map((company, idx) => (
            <span
              key={`${company}-2`}
              className="text-gray-500 text-lg font-medium whitespace-nowrap"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
