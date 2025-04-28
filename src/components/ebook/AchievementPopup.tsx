
import { Badge } from "@/utils/gamification";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AchievementPopupProps {
  badge: Badge;
  onClose: () => void;
}

export const AchievementPopup = ({ badge, onClose }: AchievementPopupProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center space-y-4 p-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`p-4 rounded-full ${badge.color} bg-opacity-20`}
          >
            <Trophy className={`w-8 h-8 ${badge.color}`} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold mb-2">{badge.title}</h3>
            <p className="text-gray-600">{badge.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-500"
          >
            Keep going to unlock more achievements!
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
