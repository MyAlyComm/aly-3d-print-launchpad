
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { ResourcesCard } from "@/components/dashboard/ResourcesCard";
import { useAuth } from "@/hooks/useAuth";
import { FAQSection } from "@/components/dashboard/FAQSection";
import { FAQHero } from "@/components/dashboard/FAQHero";
import { MiniBlueprintSections } from "@/data/miniBlueprintData";
import { FAQPageCTA } from "@/components/dashboard/FAQPageCTA";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const MiniBlueprint = () => {
  const { user } = useAuth();
  
  const navigationSections = [
    { id: "story", label: "My Story" },
    { id: "arbitrage", label: "Arbitrage Window" },
    { id: "why-now", label: "Why Now" },
    { id: "misconceptions", label: "Breaking Misconceptions" },
    { id: "success-formula", label: "Success Formula" },
    { id: "key-factors", label: "Key Factors" },
    { id: "budget-levels", label: "Budget Levels" },
    { id: "leverage-strengths", label: "Leverage Strengths" },
    { id: "time-location", label: "Time & Location Strategy" }
  ];

  return (
    <DashboardLayout 
      title={`3D Printing Mini Blueprint${user?.email ? ' - ' + user.email.split('@')[0] : ''}`}
    >
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2">
            {navigationSections.map((section) => (
              <Button 
                key={section.id} 
                variant="outline" 
                size="sm" 
                className="hover:bg-primary/10"
                onClick={() => {
                  const element = document.getElementById(section.id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Link className="mr-2 h-4 w-4" />
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <FAQHero 
        imageUrl="/lovable-uploads/cf54e8e5-7d73-4081-8494-a864ec2169e8.png"
        title="The 3D Printing Mini Blueprint"
        subtitle="Discover the Arbitrage Window That's Creating New Entrepreneurs"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 pb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <WelcomeCard variant="blueprint" />
              <ResourcesCard />
            </div>
            <div className="md:col-span-2">
              <FAQSection sections={MiniBlueprintSections} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 mb-16">
        <FAQPageCTA />
      </div>
    </DashboardLayout>
  );
};

export default MiniBlueprint;
