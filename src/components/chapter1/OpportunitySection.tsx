
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useChapterForm } from "@/hooks/useChapterForm";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useIsMobile } from "@/hooks/use-mobile";

const formSchema = z.object({
  inspiration: z.string().min(1, "Please share what inspired you"),
  goals: z.string().min(1, "Please share your goals")
});

export const OpportunitySection = ({ onSubmit }: { onSubmit?: () => void }) => {
  const { formState, saveResponse } = useChapterForm(1, 'opportunity');
  const sectionKey = 'opportunity-reflection';
  const textInputs = formState[sectionKey]?.textInputs || {};
  const isMobile = useIsMobile();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inspiration: textInputs['inspiration'] || "",
      goals: textInputs['goals'] || ""
    }
  });
  
  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    saveResponse(sectionKey, {
      textInputs: { 
        inspiration: values.inspiration,
        goals: values.goals
      }
    }, true);
    
    if (onSubmit) onSubmit();
  };

  return (
    <section id="opportunity" className="mb-12 space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">The 3D Printing Opportunity</h2>
      <div className="mb-6">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
          alt="3D Printing Setup"
          className="rounded-lg w-full h-48 sm:h-64 object-cover mb-4"
        />
        <p className="text-sm text-gray-500 italic">Modern 3D printing setup for small businesses</p>
      </div>
      
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 sm:p-6 rounded-lg mb-6 border border-purple-100">
        <h3 className="text-xl font-semibold mb-2">My Story: From Zero to $20K in 60 Days</h3>
        <blockquote className="border-l-4 border-purple-400 pl-4 italic">
          "9 months ago I had never even touched a 3D printer. With just $500 in starting capital, 
          I generated $6,300 in my first month and grew from 1 little printer to 8. By month two, 
          I hit $20K in sales—all while studying philosophy at university full time."
        </blockquote>
        
        <ul className="mt-4 space-y-2">
          <li className="flex items-start sm:items-center gap-2">
            <span className="w-2 h-2 mt-2 sm:mt-0 bg-purple-500 rounded-full"></span>
            <span>Now sold to 60+ countries with multiple viral products</span>
          </li>
          <li className="flex items-start sm:items-center gap-2">
            <span className="w-2 h-2 mt-2 sm:mt-0 bg-purple-500 rounded-full"></span>
            <span>Billion-dollar brands seek my marketing and consulting help</span>
          </li>
          <li className="flex items-start sm:items-center gap-2">
            <span className="w-2 h-2 mt-2 sm:mt-0 bg-purple-500 rounded-full"></span>
            <span>Zero previous experience or special connections</span>
          </li>
        </ul>
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to Chapter 1 of the 3D Printing Blueprint! In this chapter, we'll cover the essential 
        foundations you need to start your 3D printing business, even on a budget as low as $500.
      </p>
      
      <Card className="mt-8">
        <CardContent className={`${isMobile ? 'pt-4 p-4' : 'pt-6 p-6'}`}>
          <h3 className="text-xl font-semibold mb-4">Reflect on Your Journey</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="inspiration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What about this opportunity inspires you the most?</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field}
                        placeholder="Share what excites you about 3D printing..."
                        className="min-h-[100px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your specific goals for your 3D printing business?</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field}
                        placeholder="Describe your business goals..."
                        className="min-h-[100px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end mt-4">
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                >
                  Save & Continue
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
