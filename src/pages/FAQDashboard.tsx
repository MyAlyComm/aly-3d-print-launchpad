
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { ResourcesCard } from "@/components/dashboard/ResourcesCard";
import { DashboardHero } from "@/components/dashboard/DashboardHero";
import { useAuth } from "@/hooks/useAuth";
import { QuickNavCards } from "@/components/dashboard/QuickNavCards";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { chapters } from "@/components/dashboard/chapters/types";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FAQSections = [
  {
    id: "story",
    title: "MY STORY: From Zero to $20K in 60 Days",
    description: "How I started with just a $300 printer and built a global business"
  },
  {
    id: "reality",
    title: "THE REALITY OF 3D PRINTING",
    description: "It's less about what you sell, more about how you sell it"
  },
  {
    id: "opportunity",
    title: "THE 3D PRINTING OPPORTUNITY",
    description: "Why now is the perfect time to start"
  },
  {
    id: "equipment",
    title: "Do you need expensive equipment?",
    description: "Start with any budget and grow from there"
  },
  {
    id: "skills",
    title: "Do you need design skills?",
    description: "90% of successful sellers didn't create their first designs"
  },
  {
    id: "software",
    title: "Which software do you use?",
    description: "Options for beginners through experts"
  },
  {
    id: "saturation",
    title: "Is the market saturated?",
    description: "Thousands of untapped niches still exist"
  },
  {
    id: "budget",
    title: "STARTING BUDGET OPTIONS",
    description: "Start where you are, grow from there"
  },
  {
    id: "income",
    title: "REALISTIC INCOME POTENTIAL",
    description: "From side hustle to full-time business"
  },
  {
    id: "products",
    title: "BEST-SELLING PRODUCTS",
    description: "What actually sells and why"
  }
];

const FAQDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  return (
    <DashboardLayout 
      title={`3D Printing FAQ${user?.email ? ' - ' + user.email.split('@')[0] : ''}`}
    >
      <div className="bg-primary-50 py-6 mb-6 rounded-lg px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
            The Complete 3D Printing Business FAQ
          </h1>
          <p className="text-center text-gray-600 break-words">
            All your questions about starting a profitable 3D printing business answered in one place.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 pb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <WelcomeCard />
              <ResourcesCard />
            </div>
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>FAQ Sections</CardTitle>
                  <CardDescription>
                    Everything you need to know about starting a profitable 3D printing business
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {FAQSections.map((section, index) => (
                    <Card key={section.id} className="bg-secondary/5 hover:bg-secondary/10 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <h3 className="font-medium text-sm md:text-base break-words">{section.title}</h3>
                            <p className="text-xs md:text-sm text-muted-foreground break-words">{section.description}</p>
                          </div>
                          <Button size="sm" variant="ghost" className="ml-2">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <div className="mt-4 text-center">
                    <Button 
                      onClick={() => navigate(-1)}
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Back to All Ebooks
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FAQDashboard;
