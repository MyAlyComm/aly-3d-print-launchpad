import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChapterImageSection } from "@/components/chapter1/ChapterImageSection";
import { TableOfContents } from "@/components/chapter1/TableOfContents";
import { OpportunitySection } from "@/components/chapter1/OpportunitySection";
import { BudgetSection } from "@/components/chapter1/BudgetSection";
import { ArbitrageSection } from "@/components/chapter1/ArbitrageSection";
import { MythsSection } from "@/components/chapter1/MythsSection";
import { SuccessFactorsSection } from "@/components/chapter1/SuccessFactorsSection";
import { EquipmentSection } from "@/components/chapter1/EquipmentSection";
import { SetupSection } from "@/components/chapter1/SetupSection";

const ChapterOne = () => {
  return (
    <DashboardLayout title="Chapter 1: Getting Started">
      <ScrollArea className="h-full pr-4">
        <div className="max-w-4xl mx-auto">
          <ChapterImageSection />
          <TableOfContents />
          
          {/* Main Content */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <OpportunitySection />
                <ArbitrageSection />
                <MythsSection />
                <SuccessFactorsSection />
                <BudgetSection />
                <EquipmentSection />
                <SetupSection />

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Chapter Summary</h3>
                  <p className="text-gray-700">
                    In this chapter, we've covered the fundamental concepts behind the 3D printing business opportunity,
                    debunked common myths, and outlined how to start with various budget levels. We've also covered the
                    basic equipment needed and initial setup procedures. In Chapter 2, we'll dive deeper into creating
                    your first products and optimizing your printing process for quality and efficiency.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollArea>
    </DashboardLayout>
  );
};

export default ChapterOne;
