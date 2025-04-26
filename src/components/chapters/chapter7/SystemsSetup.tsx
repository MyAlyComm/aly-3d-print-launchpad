
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useChapterForm } from "@/hooks/useChapterForm";
import { useState } from "react";
import { toast } from "sonner";
import { CheckboxSection } from "./sections/CheckboxSection";
import { ImprovementSection } from "./sections/ImprovementSection";

export const SystemsSetup = () => {
  const { formState, saveResponse } = useChapterForm(7, "systems-setup");
  const [localForm, setLocalForm] = useState({
    checkboxes: {
      printing_area: false,
      post_processing: false,
      materials_storage: false,
      shipping_station: false,
      file_preparation: false,
      print_monitoring: false,
      finishing: false,
      shipping: false,
      pre_production: false,
      post_production: false,
      pre_shipping: false,
      feedback: false,
      raw_materials: false,
      work_in_progress: false,
      finished_products: false,
      shipping_materials: false,
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

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h2 className="text-2xl font-bold">Systems Setup Assessment</h2>
      
      <Card className="p-6">
        <CheckboxSection 
          title="Production Space Setup"
          items={productionSpaceItems}
          onCheckboxChange={handleCheckboxChange}
        />
      </Card>

      <Card className="p-6">
        <CheckboxSection 
          title="Documented Procedures"
          items={proceduresItems}
          onCheckboxChange={handleCheckboxChange}
        />
      </Card>

      <ImprovementSection 
        values={localForm.improvements}
        onTextChange={handleTextChange}
      />

      <div className="flex justify-center">
        <Button type="submit" className="w-full md:w-auto">
          Save My Systems Setup Assessment
        </Button>
      </div>
    </form>
  );
};
