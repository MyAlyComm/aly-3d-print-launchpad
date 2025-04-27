
import { Card, CardContent } from "@/components/ui/card";

export const WelcomeCard = () => {
  return (
    <Card className="border-primary/20">
      <CardContent className="pt-6">
        <div className="max-w-full">
          <h2 className="text-2xl font-bold mb-2">Welcome to Your 3D Printing Blueprint</h2>
          <p className="text-gray-600 leading-relaxed break-words">
            From $500 to $5K+ monthly revenue in 60 days - this comprehensive guide will take you through 
            the exact system that helped hundreds of entrepreneurs build successful 3D printing businesses.
          </p>
          <p className="text-gray-600 mt-2">
            Complete each chapter and its worksheets to build a solid foundation for your journey.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
