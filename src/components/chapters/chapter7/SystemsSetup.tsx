
import { Card } from "@/components/ui/card";
import { ChapterSection } from "@/components/ui/chapter-layout/ChapterSection";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useChapterForm } from "@/hooks/useChapterForm";
import { useState } from "react";
import { toast } from "sonner";

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

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h2 className="text-2xl font-bold">Systems Setup Assessment</h2>
      
      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4">Production Space Setup</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="printing_area" 
              checked={localForm.checkboxes.printing_area}
              onCheckedChange={() => handleCheckboxChange("printing_area")}
            />
            <label htmlFor="printing_area">Dedicated printing area</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="post_processing" 
              checked={localForm.checkboxes.post_processing}
              onCheckedChange={() => handleCheckboxChange("post_processing")}
            />
            <label htmlFor="post_processing">Post-processing workspace</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="materials_storage" 
              checked={localForm.checkboxes.materials_storage}
              onCheckedChange={() => handleCheckboxChange("materials_storage")}
            />
            <label htmlFor="materials_storage">Materials storage</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="shipping_station" 
              checked={localForm.checkboxes.shipping_station}
              onCheckedChange={() => handleCheckboxChange("shipping_station")}
            />
            <label htmlFor="shipping_station">Packing/shipping station</label>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4">Documented Procedures</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="file_preparation" 
              checked={localForm.checkboxes.file_preparation}
              onCheckedChange={() => handleCheckboxChange("file_preparation")}
            />
            <label htmlFor="file_preparation">File preparation and slicing</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="print_monitoring" 
              checked={localForm.checkboxes.print_monitoring}
              onCheckedChange={() => handleCheckboxChange("print_monitoring")}
            />
            <label htmlFor="print_monitoring">Print setup and monitoring</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="finishing" 
              checked={localForm.checkboxes.finishing}
              onCheckedChange={() => handleCheckboxChange("finishing")}
            />
            <label htmlFor="finishing">Post-processing and finishing</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="shipping" 
              checked={localForm.checkboxes.shipping}
              onCheckedChange={() => handleCheckboxChange("shipping")}
            />
            <label htmlFor="shipping">Packaging and shipping</label>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h3 className="font-bold text-lg">Areas for Improvement</h3>
        
        <div>
          <label className="block mb-2">First improvement needed:</label>
          <Textarea
            value={localForm.improvements.first}
            onChange={(e) => handleTextChange("first", e.target.value)}
            placeholder="Describe the first improvement you need to make..."
            className="mb-4"
          />
        </div>
        
        <div>
          <label className="block mb-2">Second improvement needed:</label>
          <Textarea
            value={localForm.improvements.second}
            onChange={(e) => handleTextChange("second", e.target.value)}
            placeholder="Describe the second improvement you need to make..."
            className="mb-4"
          />
        </div>
        
        <div>
          <label className="block mb-2">Third improvement needed:</label>
          <Textarea
            value={localForm.improvements.third}
            onChange={(e) => handleTextChange("third", e.target.value)}
            placeholder="Describe the third improvement you need to make..."
            className="mb-4"
          />
        </div>
        
        <div>
          <label className="block mb-2">Implementation plan:</label>
          <Textarea
            value={localForm.improvements.plan}
            onChange={(e) => handleTextChange("plan", e.target.value)}
            placeholder="Describe your plan for implementing these improvements..."
            className="h-32"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Button type="submit" className="w-full md:w-auto">
          Save My Systems Setup Assessment
        </Button>
      </div>
    </form>
  );
};
