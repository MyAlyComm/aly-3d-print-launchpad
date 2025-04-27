
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";

export const SwankyCallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-primary to-accent text-white">
              <h2 className="text-3xl font-bold mb-6">Transform Your SwankyView Shop</h2>
              <p className="mb-8">
                Get access to our proven blueprint designed specifically for 3D printed organization and home decor products.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 mt-1 mr-3 text-secondary" />
                  <p>Production optimization for organization products</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 mt-1 mr-3 text-secondary" />
                  <p>Product line expansion strategies for home decor</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 mt-1 mr-3 text-secondary" />
                  <p>Customer retention and repeat buyer tactics</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 mt-1 mr-3 text-secondary" />
                  <p>Scaling production without sacrificing quality</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 mt-1 mr-3 text-secondary" />
                  <p>Marketing strategies for organization products</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className="text-sm uppercase font-bold text-primary mb-1">Limited Time Offer</div>
                <h3 className="text-2xl font-bold mb-2">Special SwankyView Discount</h3>
                <p className="text-gray-600">
                  As an established Etsy seller with proven success in organization products, 
                  you qualify for our special pricing.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center">
                  <span className="text-3xl font-bold">$97</span>
                  <span className="ml-2 line-through text-gray-500">$197</span>
                  <span className="ml-2 bg-secondary/20 text-secondary px-2 py-1 rounded-md text-sm font-medium">50% OFF</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">One-time payment, lifetime access</p>
              </div>
              
              <Button size="lg" className="w-full text-lg mb-4 group">
                Get Instant Access
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-center text-gray-500">
                30-day money-back guarantee. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
