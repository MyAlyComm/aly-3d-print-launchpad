
import { Card, CardContent } from "@/components/ui/card";

export const WelcomeCard = () => {
  return (
    <Card className="border-primary/20">
      <CardContent className="pt-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">Welcome to Your 3D Printing Blueprint</h2>
          <p className="text-gray-600 leading-relaxed">
            This comprehensive guide will take you from a $500 investment to $5K+ monthly revenue
            in 60 days with a systematic approach to building your 3D printing business.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
