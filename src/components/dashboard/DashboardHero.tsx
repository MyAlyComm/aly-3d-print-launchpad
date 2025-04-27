
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";

export const DashboardHero = () => {
  const { user } = useAuth();
  const firstName = user?.email ? user.email.split('@')[0] : 'there';

  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b">
      <div className="max-w-7xl mx-auto px-4 py-8">
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
  );
};
