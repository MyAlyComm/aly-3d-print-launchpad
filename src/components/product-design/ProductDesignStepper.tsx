
import { ProductDetails } from "./steps/ProductDetails";
import { ProductVisualization } from "./steps/ProductVisualization";
import { Demographics } from "./steps/Demographics";
import { MarketingStrategy } from "./steps/MarketingStrategy";
import { ProductDesignProvider } from "./ProductDesignContext";

interface ProductDesignStepperProps {
  currentStep: number;
  onNext: () => void;
  onPrev: () => void;
}

export const ProductDesignStepper = ({ currentStep, onNext, onPrev }: ProductDesignStepperProps) => {
  const steps = [
    { number: 1, title: "Product Details" },
    { number: 2, title: "Visualization" },
    { number: 3, title: "Demographics" },
    { number: 4, title: "Marketing" },
  ];

  return (
    <ProductDesignProvider>
      <div className="space-y-6">
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                  ${currentStep >= step.number ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {step.number}
                </div>
                <span className="text-sm mt-2">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-1 flex-1 mx-2 ${currentStep > step.number ? 'bg-primary' : 'bg-gray-200'}`} />
              )}
            </>
          ))}
        </div>

        {/* Step Content */}
        {currentStep === 1 && <ProductDetails onNext={onNext} />}
        {currentStep === 2 && <ProductVisualization onNext={onNext} onPrev={onPrev} />}
        {currentStep === 3 && <Demographics onNext={onNext} onPrev={onPrev} />}
        {currentStep === 4 && <MarketingStrategy onPrev={onPrev} />}
      </div>
    </ProductDesignProvider>
  );
};
