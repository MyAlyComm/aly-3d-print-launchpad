
import TestimonialCard from "./TestimonialCard";

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

const TestimonialsSection = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold mb-6">What My Community Is Saying</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default TestimonialsSection;
