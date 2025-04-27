
import React from "react";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import confetti from 'canvas-confetti';
import { toast } from "sonner";
import { motion } from "framer-motion";

interface ChapterNavigationProps {
  currentSection: number;
  totalSections: number;
  onNext: () => void;
  onPrev: () => void;
  onComplete: () => void;
}

export const ChapterNavigation = ({ 
  currentSection, 
  totalSections, 
  onNext, 
  onPrev, 
  onComplete 
}: ChapterNavigationProps) => {
  const handleComplete = () => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Show completion toast
    toast("Chapter Complete!", {
      description: "Great work! You've unlocked new achievements.",
      icon: <Trophy className="h-4 w-4 text-primary" />,
    });

    onComplete();
  };

  return (
    <motion.div 
      className="flex justify-between items-center mt-8 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="outline"
        onClick={onPrev}
        disabled={currentSection === 0}
      >
        Previous
      </Button>

      {currentSection === totalSections - 1 ? (
        <Button 
          onClick={handleComplete}
          className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white"
        >
          Complete Chapter
        </Button>
      ) : (
        <Button onClick={onNext}>
          Next
        </Button>
      )}
    </motion.div>
  );
};
