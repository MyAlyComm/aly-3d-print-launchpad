import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "react-router-dom";

interface WelcomeCardProps {
  variant?: "blueprint" | "faq";
}

export const WelcomeCard = ({ variant }: WelcomeCardProps) => {
  const location = useLocation();
  const isFAQ = variant === "faq" || location.pathname.includes("3d-faq");

  return (
    <div>
      {isFAQ && (
        <div className="mb-4">
          <img 
            src="/lovable-uploads/573b21db-fd6b-4fe9-ba36-ae007133ace1.png" 
            alt="3D Printing Business Overview" 
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      )}
      <Card className="border-primary/20">
        <CardContent className="pt-6">
          <div className="max-w-full">
            <h2 className="text-2xl font-bold mb-2 break-words">{isFAQ ? "3D Printing Business FAQ" : "From Zero to $20K in 60 Days"}</h2>
            {isFAQ ? (
              <p className="text-gray-600 leading-relaxed break-words">
                "I started with just a $300 printer and $200 worth of supplies. That's all it took to launch a business that would change my life. Now I've sold to 60+ countries with multiple viral products."
              </p>
            ) : (
              <p className="text-gray-600 leading-relaxed break-words">
                "9 months ago I had never even touched a 3D printer. With just $500 in starting capital, 
                I generated $6,300 in my first month and grew from 1 little printer to 8. By month two, 
                I hit $20K in sales—all while studying philosophy at university full time."
              </p>
            )}
            <p className="text-gray-600 mt-2 break-words">
              {isFAQ 
                ? "All your questions about starting a profitable 3D printing business answered in one place."
                : "Follow this comprehensive FAQ and blueprint to start your own successful 3D printing business."}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
