
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

export const getBadgesForProgress = (progress: any[]): Badge[] => {
  const badges: Badge[] = [];
  
  // First milestone - Starting the journey
  if (progress.some(p => p.completed_at)) {
    badges.push({
      id: 'entrepreneur-start',
      title: '3D Pioneer',
      description: 'Started your entrepreneurial journey',
      icon: 'Rocket',
      color: 'text-primary'
    });
  }

  // Fast learner badge
  const quickLearner = progress.some(p => {
    if (!p.completed_at) return false;
    const completionDate = new Date(p.completed_at);
    return (completionDate.getTime() - new Date().getTime()) < 24 * 60 * 60 * 1000;
  });

  if (quickLearner) {
    badges.push({
      id: 'rapid-prototyper',
      title: 'Rapid Prototyper',
      description: 'Mastering content at impressive speed',
      icon: 'Medal',
      color: 'text-secondary'
    });
  }

  // Core system mastery (complete chapters 1-3)
  const earlyChaptersComplete = progress.filter(p => 
    p.completed_at && p.chapter_number <= 3
  ).length >= 3;

  if (earlyChaptersComplete) {
    badges.push({
      id: 'foundation-builder',
      title: 'Foundation Builder',
      description: 'Mastered the core business concepts',
      icon: 'Trophy',
      color: 'text-accent'
    });
  }

  // Product mastery (chapters 4-6)
  const productChaptersComplete = progress.filter(p => 
    p.completed_at && (p.chapter_number >= 4 && p.chapter_number <= 6)
  ).length >= 3;

  if (productChaptersComplete) {
    badges.push({
      id: 'product-master',
      title: 'Product Strategist',
      description: 'Mastered product selection and setup',
      icon: 'Star',
      color: 'text-amber-500'
    });
  }

  // Business scaling (chapters 7-9)
  const scalingChaptersComplete = progress.filter(p => 
    p.completed_at && (p.chapter_number >= 7 && p.chapter_number <= 9)
  ).length >= 3;

  if (scalingChaptersComplete) {
    badges.push({
      id: 'business-scaler',
      title: 'Business Architect',
      description: 'Mastered scaling and systems',
      icon: 'Star',
      color: 'text-green-500'
    });
  }

  // Complete journey (all chapters)
  const allChaptersComplete = progress.filter(p => p.completed_at).length >= 12;

  if (allChaptersComplete) {
    badges.push({
      id: 'blueprint-master',
      title: 'Blueprint Master',
      description: 'Completed the entire business blueprint',
      icon: 'Trophy',
      color: 'text-blue-500'
    });
  }

  // Active participant - responds to worksheets
  const hasResponses = progress.some(p => p.response_data && Object.keys(p.response_data).length > 0);
  if (hasResponses) {
    badges.push({
      id: 'action-taker',
      title: 'Action Taker',
      description: 'Actively engaging with business exercises',
      icon: 'Flag',
      color: 'text-purple-500'
    });
  }

  return badges;
};

