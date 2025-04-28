
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { FilamentManufacturers } from "@/components/filament-guide/FilamentManufacturers";
import { Card, CardContent } from "@/components/ui/card";

const FilamentGuide = () => {
  return (
    <DashboardLayout title="Filament Guide">
      <div className="max-w-7xl mx-auto py-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            3D Printing Filament Guide
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated list of trusted filament manufacturers and their specialties. 
            Choose the right material for your next project from our carefully selected recommendations.
          </p>
        </div>

        <Card className="border-t-4 border-t-primary shadow-lg">
          <CardContent className="pt-6">
            <div className="mb-6 grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-2">Quality Assured</h3>
                <p className="text-sm text-green-600">All listed manufacturers have been vetted for consistency and reliability</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">Global Coverage</h3>
                <p className="text-sm text-blue-600">Manufacturers from multiple regions to ensure availability worldwide</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">High-Speed Ready</h3>
                <p className="text-sm text-purple-600">Most filaments are tested and compatible with high-speed printing</p>
              </div>
            </div>
            <FilamentManufacturers />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FilamentGuide;
