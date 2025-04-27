
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const DashboardHero = () => {
  const { user } = useAuth();
  const firstName = user?.email ? user.email.split('@')[0] : 'there';

  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage 
              src="/lovable-uploads/907a1f7c-21b9-423f-b210-51baa4e27c3c.png" 
              alt="Aly's profile picture" 
            />
            <AvatarFallback>{firstName.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <Badge variant="secondary" className="w-fit">3D Printing Blueprint</Badge>
            <h1 className="text-2xl font-bold">
              Welcome back, {firstName}
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Continue your journey to building a successful 3D printing business. 
              Track your progress and access all the resources you need right here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
