
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ProductDesignStepper } from "@/components/product-design/ProductDesignStepper";
import { useState } from "react";

const ProductDesignEngine = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <DashboardLayout title="Product Design Engine">
      <div className="max-w-5xl mx-auto py-6">
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
