
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useChapterForm } from "@/hooks/useChapterForm";
import { useState } from "react";
import { toast } from "sonner";
import { CheckboxSection } from "./sections/CheckboxSection";
import { ImprovementSection } from "./sections/ImprovementSection";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";

export const SystemsSetup = () => {
  const { formState, saveResponse } = useChapterForm(7, "systems-setup");
  const [localForm, setLocalForm] = useState({
    checkboxes: {
      // Production Space
      printing_area: false,
      post_processing: false,
      materials_storage: false,
      shipping_station: false,
      
      // Documented Procedures
      file_preparation: false,
      print_monitoring: false,
      finishing: false,
      shipping: false,
      
      // Quality Control
      pre_production: false,
      post_production: false,
      pre_shipping: false,
      feedback: false,
      
      // Inventory Management
      raw_materials: false,
      work_in_progress: false,
      finished_products: false,
      shipping_materials: false,
      
      // Workspace Organization
      workflow: false,
      frequency: false,
      ergonomic: false,
      expansion: false
    },
    improvements: {
      first: "",
      second: "",
      third: "",
      plan: ""
    }
  });

  const handleCheckboxChange = (id: string) => {
    setLocalForm(prev => ({
      ...prev,
      checkboxes: {
        ...prev.checkboxes,
        [id]: !prev.checkboxes[id as keyof typeof prev.checkboxes]
      }
    }));
  };

  const handleTextChange = (field: string, value: string) => {
    setLocalForm(prev => ({
      ...prev,
      improvements: {
        ...prev.improvements,
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveResponse("systems-setup", localForm);
    toast.success("Progress saved successfully!");
  };

  const productionSpaceItems = [
    { id: "printing_area", label: "Dedicated printing area", checked: localForm.checkboxes.printing_area },
    { id: "post_processing", label: "Post-processing workspace", checked: localForm.checkboxes.post_processing },
    { id: "materials_storage", label: "Materials storage", checked: localForm.checkboxes.materials_storage },
    { id: "shipping_station", label: "Packing/shipping station", checked: localForm.checkboxes.shipping_station }
  ];

  const proceduresItems = [
    { id: "file_preparation", label: "File preparation and slicing", checked: localForm.checkboxes.file_preparation },
    { id: "print_monitoring", label: "Print setup and monitoring", checked: localForm.checkboxes.print_monitoring },
    { id: "finishing", label: "Post-processing and finishing", checked: localForm.checkboxes.finishing },
    { id: "shipping", label: "Packaging and shipping", checked: localForm.checkboxes.shipping }
  ];

  const qualityControlItems = [
    { id: "pre_production", label: "Pre-production checks", checked: localForm.checkboxes.pre_production },
    { id: "post_production", label: "Post-production inspection", checked: localForm.checkboxes.post_production },
    { id: "pre_shipping", label: "Pre-shipping verification", checked: localForm.checkboxes.pre_shipping },
    { id: "feedback", label: "Customer feedback collection", checked: localForm.checkboxes.feedback }
  ];

  const inventoryItems = [
    { id: "raw_materials", label: "Raw materials (filament, supplies)", checked: localForm.checkboxes.raw_materials },
    { id: "work_in_progress", label: "Work-in-progress items", checked: localForm.checkboxes.work_in_progress },
    { id: "finished_products", label: "Finished products", checked: localForm.checkboxes.finished_products },
    { id: "shipping_materials", label: "Shipping materials", checked: localForm.checkboxes.shipping_materials }
  ];

  const workspaceItems = [
    { id: "workflow", label: "Production workflow", checked: localForm.checkboxes.workflow },
    { id: "frequency", label: "Frequency of use", checked: localForm.checkboxes.frequency },
    { id: "ergonomic", label: "Ergonomic considerations", checked: localForm.checkboxes.ergonomic },
    { id: "expansion", label: "Future expansion needs", checked: localForm.checkboxes.expansion }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <ChapterSection title="Chapter 7 Self-Assessment: Your Systems Setup">
        <p className="text-gray-700 mb-6">
          Complete this detailed self-assessment to evaluate your operational readiness:
        </p>
        
        <div className="space-y-8">
          <Card className="p-6">
            <CheckboxSection 
              title="My production space is set up with:"
              items={productionSpaceItems}
              onCheckboxChange={handleCheckboxChange}
            />
          </Card>

          <Card className="p-6">
            <CheckboxSection 
              title="I have documented procedures for:"
              items={proceduresItems}
              onCheckboxChange={handleCheckboxChange}
            />
          </Card>
          
          <Card className="p-6">
            <CheckboxSection 
              title="My quality control system includes:"
              items={qualityControlItems}
              onCheckboxChange={handleCheckboxChange}
            />
          </Card>
          
          <Card className="p-6">
            <CheckboxSection 
              title="My inventory management system tracks:"
              items={inventoryItems}
              onCheckboxChange={handleCheckboxChange}
            />
          </Card>
          
          <Card className="p-6">
            <CheckboxSection 
              title="My workspace is organized according to:"
              items={workspaceItems}
              onCheckboxChange={handleCheckboxChange}
            />
          </Card>

          <Card className="p-6">
            <ImprovementSection 
              values={localForm.improvements}
              onTextChange={handleTextChange}
            />
          </Card>
          
          <div className="pt-4">
            <p className="text-sm text-gray-600 mb-8">
              Complete this self-assessment before moving to the next chapter. In Chapter 8, we'll explore zero-cost marketing strategies that will help you attract customers to your newly optimized production system.
            </p>
            
            <div className="flex justify-center">
              <Button type="submit" className="w-full md:w-auto">
                Save My Systems Setup Assessment
              </Button>
            </div>
          </div>
        </div>
      </ChapterSection>
    </form>
  );
};
