
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { FilamentManufacturers } from "@/components/filament-guide/FilamentManufacturers";

const FilamentGuide = () => {
  return (
    <DashboardLayout title="Filament Guide">
      <div className="max-w-7xl mx-auto py-6 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">3D Printing Filament Guide</h1>
          <p className="text-gray-600 text-lg">
            A curated list of trusted filament manufacturers and their specialties
          </p>
        </div>
        <FilamentManufacturers />
      </div>
    </DashboardLayout>
  );
};

export default FilamentGuide;
