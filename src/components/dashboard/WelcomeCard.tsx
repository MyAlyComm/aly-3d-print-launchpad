
import { Card, CardContent } from "@/components/ui/card";

export const WelcomeCard = () => {
  return (
    <Card className="border-primary/20">
      <CardContent className="pt-6">
        <div className="max-w-full">
          <h2 className="text-2xl font-bold mb-2">From Zero to $20K in 60 Days</h2>
          <p className="text-gray-600 leading-relaxed break-words">
            "9 months ago I had never even touched a 3D printer. With just $500 in starting capital, 
            I generated $6,300 in my first month and grew from 1 little printer to 8. By month two, 
            I hit $20K in sales—all while studying philosophy at university full time."
          </p>
          <p className="text-gray-600 mt-2">
            Follow this comprehensive FAQ and blueprint to start your own successful 3D printing business.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
