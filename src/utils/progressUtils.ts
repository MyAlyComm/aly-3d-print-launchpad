
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
    'journey': 'Your Journey',
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
  
  // If not found in questions, check if it's a checkbox or radio option
  const optionLabels: Record<string, string> = {
    // Assessment options for Chapter 2
    'budget-low': 'Low Budget (Under $500)',
    'budget-medium': 'Medium Budget ($500-$1500)',
    'budget-high': 'High Budget ($1500+)',
    'experience-none': 'No Experience',
    'experience-beginner': 'Beginner (Some 3D knowledge)',
    'experience-intermediate': 'Intermediate (Created prints before)',
    'experience-advanced': 'Advanced (Regular printing experience)',
    'time-minimal': 'Minimal (5-10 hours/week)',
    'time-moderate': 'Moderate (10-20 hours/week)',
    'time-substantial': 'Substantial (20+ hours/week)',
    'location-local': 'Local Markets',
    'location-regional': 'Regional Markets',
    'location-global': 'Global Markets',
    
    // Common checkbox IDs
    'read-intro': 'I have read the introduction',
    'understood-concepts': 'I understand the core concepts',
    'ready-to-implement': 'I am ready to implement these strategies',
    // Add more as needed
  };

  return optionLabels[questionId] || questionId;
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

// Helper function to parse JSON strings from responses
export const parseJsonResponse = (jsonString: string): any => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    console.error("Error parsing JSON string:", e);
    return null;
  }
};

// Helper function to format framework scores
export const formatFrameworkScore = (score: string | undefined): string => {
  if (!score || score === '') return 'Not provided';
  return `${score}/100`;
};

// Helper to get assessment selection label
export const getAssessmentSelectionLabel = (field: string, value: string): string => {
  if (field === 'budget') {
    return getQuestionText(`budget-${value}`);
  } else if (field === 'experience') {
    return getQuestionText(`experience-${value}`);
  } else if (field === 'timeAvailable') {
    return getQuestionText(`time-${value}`);
  } else if (field === 'locationType') {
    return getQuestionText(`location-${value}`);
  }
  return value;
};
