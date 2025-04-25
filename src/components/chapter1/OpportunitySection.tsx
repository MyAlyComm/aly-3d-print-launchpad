
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useChapterForm } from "@/hooks/useChapterForm";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  inspiration: z.string().min(1, "Please share what inspired you"),
  goals: z.string().min(1, "Please share your goals")
});

interface OpportunitySectionProps {
  onSubmit?: () => void;
}

export const OpportunitySection: React.FC<OpportunitySectionProps> = ({ onSubmit }) => {
  const { formState, saveResponse } = useChapterForm(1, 'opportunity');
  const sectionKey = 'opportunity-reflection';
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inspiration: formState[sectionKey]?.textInputs?.inspiration || "",
      goals: formState[sectionKey]?.textInputs?.goals || ""
    }
  });
  
  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    saveResponse(sectionKey, {
      textInputs: values
    }, true);
    
    if (onSubmit) onSubmit();
  };

  return (
    <section id="opportunity" className="mb-12 space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">The 3D Printing Opportunity</h2>
    </section>
  );
};
