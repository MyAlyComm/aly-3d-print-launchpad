
import React from "react";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { getBadgesForProgress } from "@/utils/gamification";
import { Badge } from "@/utils/gamification";
import { Star, Trophy, Medal, Rocket, Flag } from "lucide-react";
import { motion } from "framer-motion";

export const ProgressRewards = () => {
  const { chapterProgresses } = useChapterProgress();
  // Updated to cast any[] to avoid TypeScript errors with response_data
  const badges = getBadgesForProgress(chapterProgresses as any[] || []);

  // Helper function to get the correct icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Star': return <Star className="h-4 w-4" />;
      case 'Trophy': return <Trophy className="h-4 w-4" />;
      case 'Medal': return <Medal className="h-4 w-4" />;
      case 'Rocket': return <Rocket className="h-4 w-4" />;
      case 'Flag': return <Flag className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  return (
    <div className="mb-6">
      {badges.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">Your Achievements</h4>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge: Badge) => (
              <motion.div
                key={badge.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full"
              >
                <span className={badge.color}>
                  {getIconComponent(badge.icon)}
                </span>
                <span className="text-sm font-medium">{badge.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
