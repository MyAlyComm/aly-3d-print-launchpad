
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export const BlueprintTestimonials = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  
  useEffect(() => {
    const showCards = () => {
      const cards = Array.from({ length: testimonials.length }, (_, i) => i);
      setVisibleCards(cards);
    };
    
    const timer = setTimeout(showCards, 500);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Michael R.",
      role: "3D Printing Business Owner",
      content: "Within 2 months of following this blueprint, I went from 1 printer to 5 and tripled my monthly revenue. The PROFITS framework alone was worth the investment.",
      stars: 5
    },
    {
      name: "Jessica T.",
      role: "Etsy Shop Owner",
      content: "I was skeptical at first, but this blueprint gave me the exact roadmap I needed. Now I'm making $3,000/month with just two printers working part-time.",
      stars: 5
    },
    {
      name: "David K.",
      role: "Former Hobbyist",
      content: "The product research system in this blueprint helped me find my first winning product in just one week. I've now sold over 500 units of that single design.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg">
            Join hundreds of entrepreneurs who've transformed their 3D printing hobby into a profitable business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                visibleCards.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-left relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 transform rotate-180 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 relative z-10">"{testimonial.content}"</p>
                <div className="relative z-10">
                  <p className="font-semibold group-hover:text-primary transition-colors duration-300">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
