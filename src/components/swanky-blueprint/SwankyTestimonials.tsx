
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const SwankyTestimonials = () => {
  const testimonials = [
    {
      name: "Alex Morgan",
      shop: "OrganizeMySpace",
      image: "/lovable-uploads/b1236689-73b3-4e92-9e4d-b466a948bcb1.png",
      text: "As a seller of organization products similar to SwankyView, this blueprint was exactly what I needed. My production efficiency increased by 35% and my sales have doubled in just 3 months.",
      rating: 5
    },
    {
      name: "Jamie Wilson",
      shop: "PrettyOrganizers",
      image: "/lovable-uploads/17ca882e-ce0b-4cb3-a187-4c3d63689167.png",
      text: "The product expansion strategies in this blueprint helped me go from 10 listings to over 50 organization products that actually sell. My Etsy shop is now my full-time income!",
      rating: 5
    },
    {
      name: "Taylor Reed",
      shop: "HomeHarmonizers",
      image: "/lovable-uploads/573b21db-fd6b-4fe9-ba36-ae007133ace1.png",
      text: "I was stuck at $2K/month selling organization products. After implementing the scaling techniques from this blueprint, I'm now consistently making $8K+ monthly.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories from Sellers Like You</h2>
          <p className="text-gray-600 text-lg">
            These Etsy sellers of organization products saw amazing results after following our blueprint.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.shop}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 italic flex-1">"{testimonial.text}"</p>
                
                <div className="mt-4 text-sm text-primary font-medium group-hover:underline cursor-pointer">
                  Read full story
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
