
import React from "react";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { getBadgesForProgress } from "@/utils/gamification";
import { Badge } from "@/utils/gamification";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export const ProgressRewards = () => {
  const { chapterProgresses } = useChapterProgress();
  // Safe cast to expected type - we know the structure is compatible
  const badges = getBadgesForProgress(chapterProgresses || []);

  return (
    <div className="mb-6">
      {badges.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">Your Achievements</h4>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge: Badge) => {
              const Icon = Icons[badge.icon as keyof typeof Icons];
              return (
                <motion.div
                  key={badge.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full"
                >
                  <Icon className={`h-4 w-4 ${badge.color}`} />
                  <span className="text-sm font-medium">{badge.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
