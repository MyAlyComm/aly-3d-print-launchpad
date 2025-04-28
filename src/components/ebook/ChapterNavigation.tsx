
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import confetti from 'canvas-confetti';
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { getBadgesForProgress } from "@/utils/gamification";
import { AchievementPopup } from "./AchievementPopup";
import type { Badge } from "@/utils/gamification";

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
  const { chapterProgresses } = useChapterProgress();
  const [newBadge, setNewBadge] = useState<Badge | null>(null);
  
  const handleComplete = () => {
    // Get badges before completion
    const badgesBefore = getBadgesForProgress(chapterProgresses || []);
    
    // Call the completion handler
    onComplete();
    
    // Get badges after completion
    const badgesAfter = getBadgesForProgress([...(chapterProgresses || []), { completed_at: new Date().toISOString() }]);
    
    // Find new badges
    const newBadges = badgesAfter.filter(
      badge => !badgesBefore.find(b => b.id === badge.id)
    );
    
    if (newBadges.length > 0) {
      // Trigger confetti for achievement
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // Show achievement popup for the first new badge
      setNewBadge(newBadges[0]);
      
      // If there are multiple new badges, show them in sequence
      if (newBadges.length > 1) {
        let delay = 5500;
        newBadges.slice(1).forEach((badge, index) => {
          setTimeout(() => {
            setNewBadge(badge);
          }, delay + (index * 5500));
        });
      }
    }

    toast("Chapter Complete!", {
      description: "Great work! Keep going to unlock more achievements.",
      icon: <Trophy className="h-4 w-4 text-primary" />,
    });
  };

  return (
    <>
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

      {newBadge && (
        <AchievementPopup 
          badge={newBadge} 
          onClose={() => setNewBadge(null)} 
        />
      )}
    </>
  );
};
