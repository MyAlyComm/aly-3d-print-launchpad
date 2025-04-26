
import { Card, CardContent } from "@/components/ui/card";

const DetailedStorySection = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">My Journey in Detail</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Why I Created This */}
          <Card className="hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur"></div>
                  <img 
                    src="/lovable-uploads/20fb5ec7-9362-4ced-aa5c-42d3a7c41f92.png"
                    alt="Blueprint creation process" 
                    className="relative rounded-xl w-full aspect-square object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">Why I Created This Blueprint</h3>
                  <p className="text-gray-600">
                    I designed this blueprint because it's what I needed when I was starting out. And it's the culmination of everything I've learned about starting and growing a 3D printing business. It's the step-by-step guide that I wish I had before...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* My Journey */}
          <Card className="hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur"></div>
                  <img 
                    src="/lovable-uploads/1935bd17-362f-4c25-bc16-bb5b81522fc8.png"
                    alt="5 in 1 phone stand product" 
                    className="relative rounded-xl w-full aspect-square object-cover bg-white"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">My Journey</h3>
                  <p className="text-gray-600">
                    My journey started in August 2024 with a single $300 printer, selling keychains to friends. What began as a side hustle to help pay for college transformed into a thriving business generating over $20K monthly. Who knew my Philosophy and Art History degree would become such a valuable asset in this industry? This unique perspective helped me design viral products and expand globally.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* My Mission */}
          <Card className="hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur"></div>
                  <img 
                    src="/lovable-uploads/b1236689-73b3-4e92-9e4d-b466a948bcb1.png"
                    alt="Mission and vision" 
                    className="relative rounded-xl w-full aspect-square object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">My Mission</h3>
                  <p className="text-gray-600">
                    Now, it's my turn to help others discover the freedom that 3D printing creates. I'm sharing everything I've learned about building a profitable business in this industry. My mission is simple: help creative people like you turn your ideas into income.
                  </p>
                  <p className="font-medium mt-2 text-primary-dark">
                    If I could start with $500 and build this, imagine what you could create with the right blueprint!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailedStorySection;
