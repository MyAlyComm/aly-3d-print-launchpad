// Define the question interface
interface ChapterQuestion {
  id: string;
  section: string;
  question: string;
}

// Import chapterQuestions from the chapterQuestions.ts file
import { chapterQuestions } from "@/utils/chapterQuestions";

export const getSectionName = (sectionId: string): string => {
  const sectionNames: Record<string, string> = {
    // Introduction sections
    'opportunity': 'Opportunity',
    'how-to-use': 'How to Use',
    'book-structure': 'Book Structure',
    'chapters-overview': 'Chapters Overview',
    'story': 'My Story',
    'journey': Your Journey',
    'business': 'Your Business',
    'conclusion': 'Conclusion',
    
    // Chapter sections
    'worksheet': 'Worksheet',
    'arbitrage': 'Arbitrage Concept',
    'timeline': 'Business Timeline',
    'myths': 'Common Myths',
    'future': 'Future Outlook',
    'theorem': 'Axiogenetic Theorem',
    'awakening': 'Personal Awakening',
    'revelation': 'The Revelation',
    'decisionTree': 'Decision Tree',
    'core-system': 'Core System',
    'three-products': 'Three Products',
    'plus-one': 'Plus One Innovation',
    'monthly-cycles': 'Monthly Cycles',
    'profits-framework': 'Profits Framework',
    'match-framework': 'Match Framework',
    'commercial-licensing': 'Commercial Licensing',
    'product-trinity': 'Product Trinity',
    'requirements': 'Requirements',
    'printer-selection': 'Printer Selection',
    'accessories': 'Accessories',
    'workspace': 'Workspace Setup',
    'platform-comparison': 'Platform Comparison',
    'platform-strategy': 'Platform Strategy',
    'month-plan': 'Month Plan',
    'foundation': 'Foundation',
    'setup-system': 'Setup System',
    'first-print': 'First Print',
    'listings': 'Product Listings',
    'marketing-funnel': 'Marketing Funnel',
    'marketing-steps': 'Marketing Steps',
    'troubleshooting': 'Troubleshooting',
    'content-creation': 'Content Creation',
    'scaling-mindset': 'Scaling Mindset',
    'production-scaling': 'Production Scaling',
    'market-expansion': 'Market Expansion',
    'team-building': 'Team Building',
    'future-value': 'Future Value',
    'competitive-moat': 'Competitive Moat',
    'future-strategy': 'Future Strategy',
    'final-assessment': 'Final Assessment',
    'implementation-plan': 'Implementation Plan'
  };

  return sectionNames[sectionId] || sectionId;
};

export const getQuestionText = (questionId: string): string => {
  // Loop through all chapters and find the question
  for (const [_, questions] of Object.entries(chapterQuestions)) {
    const question = questions.find(q => q.id === questionId);
    if (question) {
      return question.question;
    }
  }
  
  // If not found in questions, check if it's a checkbox
  const checkboxLabels: Record<string, string> = {
    // Add common checkbox IDs here
    'read-intro': 'I have read the introduction',
    'understood-concepts': 'I understand the core concepts',
    'ready-to-implement': 'I am ready to implement these strategies',
    // Add more as needed
  };

  return checkboxLabels[questionId] || questionId;
};

export const formatDate = (dateString: string | null): string => {
  if (!dateString) return 'Not submitted';
  
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }
};
