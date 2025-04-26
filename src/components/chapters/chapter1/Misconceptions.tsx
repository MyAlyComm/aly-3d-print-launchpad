
import { Card, CardContent } from "@/components/ui/card";

export const Misconceptions = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Common Misconceptions: The Stained Glass Effect</h2>
      <p className="text-gray-700">
        Like the eras before it, our current phase has created a world of opportunity, but it's also spawned widespread misinformation and misconceptions. I call these the "Stained Glass Effect" – views that might contain fragments of truth but distort reality so severely that they blind people to the opportunities right in front of them.
      </p>
      
      <div className="grid gap-4">
        {[
          {
            myth: "It's too late to start a 3D printing business",
            reality: "While some verticals like toys on Etsy are indeed quite crowded, the people who are good at marketing and know how to get customers are still starting businesses and being successful in this space."
          },
          {
            myth: "You need technical expertise to succeed",
            reality: "Today's printers require about as much technical knowledge as setting up a coffee maker. Success depends far more on marketing and business skills than technical prowess."
          },
          {
            myth: "The profit margins aren't sustainable",
            reality: "While commodity products have seen margin compression, unique and solution-oriented items still command premium prices and robust margins exceeding 80%."
          },
          {
            myth: "You need dozens of printers to make real money",
            reality: "Smart product selection and pricing can generate substantial revenue even with a single printer, as I proved in my first weeks."
          },
          {
            myth: "It's just a hobby, not a real business",
            reality: "Tell that to the thousands of entrepreneurs who've built six and seven-figure businesses from their spare bedroom."
          },
          {
            myth: "The electricity cost is so high",
            reality: "A modern 3D printer uses about the same electricity as a laptop computer—around 50-150 watts. Even running 24/7, that's $10-30 per month."
          }
        ].map((item, index) => (
          <div key={index} className="bg-muted p-4 rounded-lg">
            <h4 className="font-bold text-red-600 mb-2">Myth: {item.myth}</h4>
            <p className="text-gray-700">Reality: {item.reality}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
