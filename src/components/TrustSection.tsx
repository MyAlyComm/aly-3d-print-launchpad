
const trustPoints = [
  {
    title: "24.5K+ Instagram Followers",
    description: "Join a growing community of 3D printing enthusiasts and entrepreneurs.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  },
  {
    title: "1,200+ Skool Community Members",
    description: "Access to an active community of successful 3D printing entrepreneurs.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  },
  {
    title: "Brand Partnership with Elevate.store",
    description: "Officially endorsed by leading industry platforms and stores.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  },
  {
    title: "100+ Success Stories",
    description: "Helped over 100 creators sell their first print and start profitable businesses.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  },
];

const partnerLogos = [
  { name: "Etsy", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Etsy_logo.svg" },
  { name: "MakerWorld", logo: "https://placehold.co/200x80/e2e8f0/64748b?text=MakerWorld" },
  { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
];

const TrustSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Why Trust Aly?
          </h2>
          <p className="text-xl text-gray-600">
            With a proven track record of helping creators succeed, you're in good hands
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover-up">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center text-xl font-bold text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                30-Day Money-Back Guarantee
              </div>
              <p className="text-gray-600 max-w-lg">
                Not satisfied with your purchase? I offer a full 30-day money-back guarantee on all paid blueprints. No questions asked.
              </p>
            </div>
            <div className="shrink-0 flex items-center justify-center w-32 h-32 bg-green-50 rounded-full">
              <div className="text-center">
                <div className="text-green-500 font-bold">100%</div>
                <div className="text-sm text-green-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-4">Trusted by creators on</h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
          {partnerLogos.map((partner, idx) => (
            <div key={idx} className="h-12">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-full object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
