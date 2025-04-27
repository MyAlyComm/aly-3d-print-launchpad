
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { ResourcesCard } from "@/components/dashboard/ResourcesCard";
import { useAuth } from "@/hooks/useAuth";
import { FAQSection } from "@/components/dashboard/FAQSection";
import { FAQHero } from "@/components/dashboard/FAQHero";
import { MiniBlueprintSections } from "@/data/miniBlueprintData";
import FAQPageCTA from "@/components/dashboard/FAQPageCTA";

const MiniBlueprint = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout 
      title={`3D Printing Mini Blueprint${user?.email ? ' - ' + user.email.split('@')[0] : ''}`}
    >
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
