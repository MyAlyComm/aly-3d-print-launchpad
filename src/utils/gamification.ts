
import { ChapterProgress } from "@/hooks/useChapterProgress";

export type Badge = {
  id: string;
  title: string;
  description: string;
  icon: 'Star' | 'Trophy' | 'Medal' | 'Rocket' | 'Flag';
  color: string;
};

export const calculatePoints = (chapterNumber: number, sectionsCompleted: number): number => {
  // Base points for any section completion
  const basePoints = 10;
  // Bonus points for completing later chapters
  const chapterBonus = chapterNumber * 5;
  
  return basePoints + chapterBonus;
};

// Update the function to handle different response_data types
export const getBadgesForProgress = (progress: any[]): Badge[] => {
  const badges: Badge[] = [];
  
  // First chapter badge
  if (progress.some(p => p.completed_at)) {
    badges.push({
      id: 'first-chapter',
      title: 'Journey Begins',
      description: 'Completed your first chapter',
      icon: 'Rocket',
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
      icon: 'Flag',
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
      icon: 'Star',
      color: 'text-accent'
    });
  }

  // New badges
  if (completedChapters >= 5) {
    badges.push({
      id: '3d-master',
      title: '3D Printing Master',
      description: 'Completed five full chapters',
      icon: 'Trophy',
      color: 'text-amber-500'
    });
  }

  // Speed badge
  const fastLearner = progress.filter(p => {
    if (!p.completed_at) return false;
    const completionDate = new Date(p.completed_at);
    const now = new Date();
    // Completed within the past week
    return (now.getTime() - completionDate.getTime()) < 7 * 24 * 60 * 60 * 1000;
  }).length >= 3;

  if (fastLearner) {
    badges.push({
      id: 'speed-demon',
      title: 'Speed Demon',
      description: 'Completed 3 chapters in less than a week',
      icon: 'Medal',
      color: 'text-blue-500'
    });
  }

  // First response badge
  const hasResponses = progress.some(p => p.response_data && Object.keys(p.response_data).length > 0);
  if (hasResponses) {
    badges.push({
      id: 'active-participant',
      title: 'Active Participant',
      description: 'Submitted your first worksheet response',
      icon: 'Star',
      color: 'text-green-500'
    });
  }

  return badges;
};
