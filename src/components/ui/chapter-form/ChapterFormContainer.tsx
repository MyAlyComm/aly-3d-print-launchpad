
import React, { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useChapterForm } from "@/hooks/useChapterForm";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface ChapterFormContainerProps {
  chapterNumber: number;
  sectionId: string;
  title: string;
  description?: string;
  children: ReactNode;
  onComplete?: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ChapterFormContainer({
  chapterNumber,
  sectionId,
  title,
  description,
  children,
  onComplete
}: ChapterFormContainerProps) {
  const { formState, saveResponse, isLoading } = useChapterForm(chapterNumber, sectionId);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleComplete = () => {
    // Mark the form as completed
    saveResponse(sectionId, { 
      checkboxes: { completed: true } 
    }, true);
    
    toast({
      title: `Chapter ${chapterNumber} Section Completed!`,
      description: "Your progress has been saved."
    });
    
    if (onComplete) {
      onComplete();
    } else {
      navigate("/dashboard/3d-blueprint");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center p-6">
        <div className="animate-pulse text-primary">Loading your previous answers...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-primary/90 mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          className="text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}

      <motion.div 
        className="space-y-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>

      <div className="flex justify-end pt-6">
        <Button 
          onClick={handleComplete}
          size="lg"
          className="px-8"
        >
          Complete Section
        </Button>
      </div>
    </div>
  );
}
