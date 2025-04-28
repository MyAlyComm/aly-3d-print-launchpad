
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ProductDesignStepper } from "@/components/product-design/ProductDesignStepper";
import { useState } from "react";

const ProductDesignEngine = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(Math.max(1, step - 1));
  };

  return (
    <DashboardLayout title="Product Design Engine">
      <div className="max-w-5xl mx-auto py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">3D Product Design Engine</h1>
          <p className="text-gray-600 mt-1">
            Design your next profitable 3D printed product with AI assistance.
            Follow the steps below to create a complete product plan.
          </p>
        </div>
        <ProductDesignStepper 
          currentStep={step}
          onNext={nextStep}
          onPrev={prevStep}
        />
      </div>
    </DashboardLayout>
  );
};

export default ProductDesignEngine;
