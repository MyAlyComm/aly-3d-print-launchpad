
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useChapterForm } from "@/hooks/useChapterForm";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  reflection: z.string().optional()
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
      reflection: formState[sectionKey]?.textInputs?.reflection || ""
    }
  });
  
  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    saveResponse(sectionKey, {
      textInputs: values
    }, true);
    
    if (onSubmit) onSubmit();
  };

  return (
    <section id="opportunity" className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Introduction: The Opportunity</h2>
      
      <div className="prose max-w-prose mx-auto">
        <p className="mb-4">3D printing used to be for tinkering engineers. Now it's for anyone.</p>
        
        <p className="mb-4">What was once a clunky mess of wires and hardware is now as sleek as an iPhone. When some people think of 3D printing, they think of cheap plastic toys and keychains. But the reality is that around the world, tens of thousands of entrepreneurs are making millions of dollars selling problem-solving products. And all you need to join them is a computer, a smartphone, and a place to plug in your printer.</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold mb-4">How to Use This Book</h3>
        
        <p className="mb-4">This book is designed to be both a practical guide and an action plan. Each chapter builds on the previous one, creating a complete roadmap from zero to your first $5,000 in revenue.</p>
        
        <p className="mb-4">To get the most out of this blueprint:</p>
        
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Complete the worksheets at the end of each chapter before moving to the next</li>
          <li>Take action quickly rather than seeking perfection</li>
          <li>Focus on one platform before expanding to others</li>
          <li>Follow the product selection framework exactly as outlined</li>
          <li>Trust the process even when it feels uncomfortable</li>
        </ul>
        
        <p>What sets this book apart is that it's not theoretical—it's based on real results from hundreds of entrepreneurs I've mentored who have successfully built 3D printing businesses from scratch.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="reflection"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Reflection</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What opportunities do you see in 3D printing? What excites you most about this potential business?"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          {onSubmit && (
            <div className="flex justify-end">
              <Button type="submit">Continue</Button>
            </div>
          )}
        </form>
      </Form>
    </section>
  );
};
