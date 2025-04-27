
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { CreditCard, Calendar, Check } from "lucide-react";

interface UserSubscriptionsProps {
  user: User;
}

export const UserSubscriptions = ({ user }: UserSubscriptionsProps) => {
  const [activeSubscription, setActiveSubscription] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const checkSubscription = () => {
      // In a production app, this would fetch subscription data from Supabase or Stripe
      // For now, we'll just set loading to false
      setIsLoading(false);
    };
    
    checkSubscription();
  }, [user.id]);
  
  const handleManageSubscription = () => {
    // In a real implementation, this would redirect to a Stripe customer portal
    toast.info("This would redirect to subscription management");
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Your Subscriptions</h2>
        <p className="text-gray-500">Manage your subscriptions and payment methods</p>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : activeSubscription ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Active Subscription</CardTitle>
            <CardDescription>Your current subscription plan</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium leading-none">
                  {activeSubscription.name}
                </p>
                <p className="text-sm text-gray-500">
                  {activeSubscription.price}/month
                </p>
              </div>
            </div>
            
            <div className="grid gap-2">
              <div className="flex items-center">
                <CreditCard className="mr-2 h-4 w-4 text-gray-500" />
                <span className="text-sm">
                  Payment method: **** **** **** {activeSubscription.lastFour}
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                <span className="text-sm">
                  Next billing date: {activeSubscription.nextBillingDate}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={handleManageSubscription}
            >
              Manage Subscription
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>No Active Subscription</CardTitle>
            <CardDescription>
              You don't have any active subscriptions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Subscribe to one of our plans to access premium content and features.
            </p>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              onClick={() => navigate("/")}
            >
              View Plans
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};
