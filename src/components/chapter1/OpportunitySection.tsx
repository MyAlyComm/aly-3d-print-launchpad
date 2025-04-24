
import { Card, CardContent } from "@/components/ui/card";

export const OpportunitySection = () => {
  return (
    <section id="opportunity" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">The 3D Printing Opportunity</h2>
      <div className="mb-6">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
          alt="3D Printing Setup"
          className="rounded-lg w-full h-64 object-cover mb-4"
        />
        <p className="text-sm text-gray-500 italic">Modern 3D printing setup for small businesses</p>
      </div>
      
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6 border border-purple-100">
        <h3 className="text-xl font-semibold mb-2">My Story: From Zero to $20K in 60 Days</h3>
        <blockquote className="border-l-4 border-purple-400 pl-4 italic">
          "9 months ago I had never even touched a 3D printer. With just $500 in starting capital, 
          I generated $6,300 in my first month and grew from 1 little printer to 8. By month two, 
          I hit $20K in sales—all while studying philosophy at university full time."
        </blockquote>
        
        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Now sold to 60+ countries with multiple viral products
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Billion-dollar brands seek my marketing and consulting help
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Zero previous experience or special connections
          </li>
        </ul>
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to Chapter 1 of the 3D Printing Blueprint! In this chapter, we'll cover the essential 
        foundations you need to start your 3D printing business, even on a budget as low as $500.
      </p>
    </section>
  );
};
