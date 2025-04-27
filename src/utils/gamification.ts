
import { ChapterProgress } from "@/hooks/useChapterProgress";

export type Badge = {
  id: string;
  title: string;
  description: string;
  icon: 'star' | 'trophy' | 'medal' | 'rocket' | 'flag';
  color: string;
};

export const calculatePoints = (chapterNumber: number, sectionsCompleted: number): number => {
  // Base points for any section completion
  const basePoints = 10;
  // Bonus points for completing later chapters
  const chapterBonus = chapterNumber * 5;
  
  return basePoints + chapterBonus;
};

export const getBadgesForProgress = (progress: ChapterProgress[]): Badge[] => {
  const badges: Badge[] = [];
  
  // First chapter badge
  if (progress.some(p => p.completed_at)) {
    badges.push({
      id: 'first-chapter',
      title: 'Journey Begins',
      description: 'Completed your first chapter',
      icon: 'rocket',
      color: 'text-primary'
    });
  }

  // Quick learner badge (complete chapter within 24h of starting)
  const quickLearner = progress.some(p => {
    if (!p.completed_at) return false;
    const completionDate = new Date(p.completed_at);
    return (completionDate.getTime() - new Date().getTime()) < 24 * 60 * 60 * 1000;
  });

  if (quickLearner) {
    badges.push({
      id: 'quick-learner',
      title: 'Quick Learner',
      description: 'Completed a chapter in under 24 hours',
      icon: 'flag',
      color: 'text-secondary'
    });
  }

  // Achievement badge (complete 3 chapters)
  const completedChapters = progress.filter(p => p.completed_at).length;
  if (completedChapters >= 3) {
    badges.push({
      id: 'achiever',
      title: 'Rising Star',
      description: 'Completed three full chapters',
      icon: 'star',
      color: 'text-accent'
    });
  }

  return badges;
};
