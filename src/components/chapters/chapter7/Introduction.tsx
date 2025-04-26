
import { Card } from "@/components/ui/card";

export const Introduction = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">The Foundation of Consistency</h2>
      
      <p className="text-gray-700">
        While your products, platforms, and marketing strategies will evolve over time, 
        the operational systems you build now will determine how smoothly your business 
        runs at every stage of growth. In this chapter, we'll move from the creative excitement 
        of product development and platform selection to the foundational systems that will 
        support your business as it scales.
      </p>

      <Card className="p-6 bg-blue-50 border-blue-200">
        <p className="text-gray-800">
          When I scaled from one printer to eight in my first month, I quickly realized 
          that improvising my production workflow, inventory management, and order 
          fulfillment was no longer sustainable. What worked with one printer and a 
          handful of orders would completely break down with multiple printers and dozens 
          of orders.
        </p>
      </Card>
      
      <p className="text-gray-700">
        Being a student I didn't have the luxury of having a spare room, garage or office. 
        So when my new printers arrived my living room bookshelves were traded in for 
        heavy duty shelving from home depot. A few weeks later my sofa left too. And while 
        it may have been a sacrifice never being able to have friends over and having to 
        eat and study in my bedroom, the learning, growth and money I made along the way 
        was well worth it.
      </p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-gray-800">
          Rather than boring you to death with a list of standard operating procedures, 
          calendars and lists you're never going to stick to, I'll give you the most 
          important points of running a small print farm from home.
        </p>
      </div>
    </div>
  );
};
