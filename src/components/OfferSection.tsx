import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import LeadMagnetForm from "./LeadMagnetForm";
import { Check, Award } from "lucide-react";

const blueprints = [
  {
    id: 1,
    title: "Free 3D Printing Quick-Start Guide",
    price: "FREE",
    popular: false,
    isFree: true,
    description: "Your first step to 3D printing success",
    features: [
      "Essential printer settings for beginners",
      "5 profitable product ideas",
      "Basic Etsy setup tutorial",
      "Material selection guide",
    ]
  },
  {
    id: 2,
    title: "Beginner's STL Guide",
    price: "$27",
    popular: false,
    isFree: false,
    description: "Start your 3D printing journey with confidence",
    features: [
      "10 premium STL files",
      "Step-by-step setup instructions",
      "Print optimization techniques",
      "Basic marketing strategies",
    ]
  },
  {
    id: 3,
    title: "Ultimate 3D Printing eBook",
    price: "$47",
    popular: true,
    isFree: false,
    description: "The complete roadmap to 3D printing profits",
    features: [
      "Comprehensive business setup guide",
      "Marketing strategy blueprint",
      "Pricing calculator & templates",
      "Advanced optimization techniques",
      "Access to private community",
    ]
  },
  {
    id: 4,
    title: "Pro STL Bundle",
    price: "$97",
    popular: false,
    isFree: false,
    description: "Premium designs ready to print and sell",
    features: [
      "30 trending premium STL files",
      "Commercial license included",
      "Monthly new design updates",
      "Print settings for each model",
      "Product photography guide",
    ]
  },
];

const testimonials = [
  {
    name: "Sarah T.",
    content: "Aly's guide helped me sell my first print in just one week! I couldn't believe how simple she made everything.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Marcus K.",
    content: "The STL bundle paid for itself after just 3 sales on Etsy. The commercial license is a game-changer!",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
  {
    name: "Leila M.",
    content: "I was hesitant to start a 3D printing business, but Aly's blueprint gave me the confidence I needed. Now I'm making $1200/month!",
    avatar: "https://i.pravatar.cc/150?img=47",
  }
];

const OfferSection = () => {
  const [open, setOpen] = useState(false);

  const handleCheckout = (blueprintId: number) => {
    console.log(`Checkout initiated for blueprint ${blueprintId}`);
    alert(`Stripe checkout would be initiated here for blueprint ${blueprintId}`);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            What's Inside the 3D Printing Blueprint?
          </h2>
          <p className="text-xl text-gray-600">
            Choose the blueprint that fits your goals and budget. Each resource is designed to help you start and grow your 3D printing business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {blueprints.map((blueprint) => (
            <div 
              key={blueprint.id}
              className={`blueprint-card ${blueprint.popular ? 'blueprint-card-popular' : ''}`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">{blueprint.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{blueprint.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{blueprint.price}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {blueprint.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {blueprint.isFree ? (
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-secondary hover:bg-secondary-dark">
                      Get Free Guide
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <LeadMagnetForm setDialogOpen={setOpen} />
                  </DialogContent>
                </Dialog>
              ) : (
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark"
                  onClick={() => handleCheckout(blueprint.id)}
                >
                  Get Started
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">What My Community Is Saying</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card hover-up">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        {/* New Commercial Licenses Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Get Free Lifetime Commercial Licenses!
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Unlock commercial rights for my top-selling 3D models, including the popular 5-in-1 Phone Stand, Cat Masks, and more!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  5-in-1 Phone Stand Tripod
                </h3>
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://cdn.makerworld.com/uploads/model/2024/01/0e4e8d66-9a5a-4a08-9740-5ab86eed69c2/thumbnail_large.png" 
                    alt="5-in-1 Phone Stand" 
                    className="rounded-lg shadow-md max-h-64 object-cover"
                  />
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Full commercial rights included
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Optimized for POV shots and close-ups
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Multi-functional design
                  </li>
                </ul>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-secondary hover:bg-secondary-dark">
                      Claim Free Commercial License
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <LeadMagnetForm setDialogOpen={setOpen} />
                  </DialogContent>
                </Dialog>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Bonus Models Collection
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Cat Masks
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Decorative Keychains
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Additional Trending 3D Models
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  Limited time offer - Commercial licenses for multiple models!
                </p>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-accent hover:bg-accent-dark">
                      Get Bonus Models License
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <LeadMagnetForm setDialogOpen={setOpen} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                *Commercial license allows selling prints on platforms like Etsy, MakerWorld, and more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
