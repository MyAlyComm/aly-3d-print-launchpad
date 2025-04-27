
import { Button } from "@/components/ui/button";
import { Tag, TrendingUp, Package } from "lucide-react";

export const SwankyHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Tag className="w-4 h-4" />
              <span className="font-medium">Perfect for Organization Products</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Scale Your <span className="text-primary">SwankyView Shop</span> to New Heights
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              You've already proven the market with your successful Etsy shop. Now, learn how to 
              optimize your production, expand your product line, and multiply your revenue with 
              our proven 3D printing business blueprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg group">
                <TrendingUp className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Scale Your Shop
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                <Package className="w-5 h-5 mr-2" />
                View Success Stories
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-primary">200+</p>
                <p className="text-sm text-gray-600">Products Listed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">4.9★</p>
                <p className="text-sm text-gray-600">Shop Rating</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl" />
            <img 
              src="/lovable-uploads/72adc6d5-64f9-4a52-b3cd-09e2ef9b3882.png" 
              alt="3D Printed Organization Solutions" 
              className="rounded-xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
