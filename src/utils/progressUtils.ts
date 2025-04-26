export const formatDate = (dateString: string | null | undefined) => {
  if (!dateString) return "Not yet completed";
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Date error";
  }
};

export const getSectionName = (sectionId: string) => {
  const sectionNames: Record<string, string> = {
    // Introduction sections
    'opportunity': 'The Opportunity',
    'how-to-use': 'How To Use This Book',
    'book-structure': 'Book Structure',
    'chapters-overview': 'Chapters Overview',
    'story': 'My Story & Journey',
    'journey': 'From $500 to $20K',
    'business': 'Building a Real Business',
    'conclusion': 'Conclusion',

    // Chapter 1
    'arbitrage': 'Understanding Arbitrage Windows',
    'timeline': 'Evolution Timeline',
    'myths': 'Common Myths',
    'future': 'Future Opportunities',

    // Chapter 2
    'theorem': 'The Axiogenetic Theorem',
    'awakening': 'The Awakening',
    'revelation': 'The Revelation',
    'decisionTree': 'Decision Tree Framework',

    // Chapter 3
    'core-system': 'The Core System',
    'three-products': 'Three Core Products',
    'plus-one': 'Plus One Innovation',
    'monthly-cycles': 'Monthly Revenue Cycles',

    // Chapter 4
    'profits-framework': 'The P.R.O.F.I.T.S Framework',
    'match-framework': 'The MATCH Framework',
    'commercial-licensing': 'Understanding Commercial Licenses',
    'product-trinity': 'Your Product Trinity',

    // Chapter 5
    'requirements': 'Understanding Requirements',
    'printer-selection': 'Selecting Your Printer',
    'accessories': 'Essential Accessories',
    'workspace': 'Setting Up Your Workspace',

    // Chapter 6
    'platform-comparison': 'Platform Analysis',
    'platform-strategy': 'Platform Selection Strategy',
    'month-plan': 'First Two Months Plan',

    // Chapter 7
    'foundation': 'Foundation of Success',
    'setup-system': '5-Step Setup System',
    'first-print': 'Your First Print',
    'listings': 'Creating Listings',

    // Chapter 8
    'marketing-funnel': 'Zero-Cost Marketing Funnel',
    'marketing-steps': '10-Step System',
    'troubleshooting': 'Common Issues & Solutions',
    'content-creation': 'Content Strategy',

    // Chapter 9
    'scaling-mindset': 'The Scaling Mindset',
    'production-scaling': 'Scaling Production',
    'market-expansion': 'Market Expansion',
    'team-building': 'Building Your Team',

    // Chapter 10
    'future-value': 'Future Value Matrix',
    'competitive-moat': 'Building Your Moat',
    'future-strategy': 'Future-Proofing Strategy',

    // Common sections
    'worksheet': 'Chapter Worksheet',
  };
  
  return sectionNames[sectionId] || sectionId;
};

export const getQuestionText = (questionId: string): string => {
  const questions: Record<string, string> = {
    // Chapter 1 questions
    'existing-skills': 'What existing skills do you have that most people in the 3D printing industry lack?',
    'misconceptions': 'What misconceptions about 3D printing did you previously hold?',
    'interesting-phase': 'Which phase of the industry\'s evolution do you find most interesting?',
    'specific-niche': 'What specific niche or application of 3D printing excites you the most?',
    'upcoming-trend': 'Based on the industry forecast, which upcoming trend do you feel best positioned to capitalize on?',
    
    // Chapter 2 questions
    'budget-tier': 'What is your budget tier for starting your 3D printing business? (Tier 1-3)',
    'experience-level': 'What is your current 3D printing experience level?',
    'creative-strengths': 'What are your main creative strengths?',
    'content-creation': 'How comfortable are you with content creation?',
    'geographic-advantage': 'What geographic advantage do you have for your business?',
    'time-availability': 'How much weekly time can you dedicate to your business?',
    'primary-path': 'What is your primary path based on these factors?',
    'ideal-printer': 'What are the ideal printer(s) for your path?',
    
    // Chapter 3 questions
    'safe-bet-product': 'What is your "Safe Bet" core product?',
    'strength-aligner-product': 'What is your "Strength Aligner" core product?',
    'value-maximizer-product': 'What is your "Value Maximizer" core product?',
    'plus-one-innovation': 'What is your first "Plus 1" innovation project?',
    'metrics-to-track': 'What specific metrics will you track for each product?',
    'monthly-cycle': 'What is your monthly cycle implementation schedule?',
    'marketing-approaches': 'What are your primary zero-cost marketing approaches?',
    'expected-challenges': 'What challenges do you expect and how will you overcome them?',
    'revenue-goal': 'What is your 60-day revenue goal?',
    
    // Chapter 4 questions
    'profits-score-1': 'PROFITS Score calculation for potential product 1:',
    'profits-score-2': 'PROFITS Score calculation for potential product 2:',
    'profits-score-3': 'PROFITS Score calculation for potential product 3:',
    'match-score-1': 'MATCH Score calculation for potential product 1:',
    'match-score-2': 'MATCH Score calculation for potential product 2:',
    'match-score-3': 'MATCH Score calculation for potential product 3:',
    'safe-bet': 'Which product will be your "Safe Bet"? (highest overall score)',
    'profit-maximizer': 'Which product will be your "Profit Maximizer"? (highest PROFITS score)',
    'strength-showcase': 'Which product will be your "Strength Showcase"? (highest MATCH score)',
    
    // Chapter 5 questions
    'printer-selection': 'Which printer have you selected for your Product Trinity?',
    'materials-ordered': 'Which materials have you ordered for your initial products?',
    'workspace-setup': 'How have you set up your workspace with safety considerations?',
    'accessories-acquired': 'Which essential accessories have you acquired?',
    'quality-check-process': 'What is your quality check process?',
    'print-settings-tested': 'Have you tested print settings with your product files?',
    
    // Additional chapters (6-13)
    'primary-platform': 'What is your primary platform selection for Month 1?',
    'secondary-platform': 'What is your secondary platform selection for Month 2?',
    'platform-optimization': 'What are your platform-specific optimization notes?',
    'production-workflow': 'How would you document your production workflow?',
    'marketing-plan-week1': 'What are your Week 1 Foundation Building tasks?',
    'marketing-plan-week2': 'What are your Week 2 Content Creation Kickoff tasks?',
    'production-bottleneck': 'What is your primary production bottleneck?',
    'first-hire': 'What would be your first hire position?',
    'scaling-strategy': 'What scaling strategy have you selected?',
    'future-value-assessment': 'How would you assess your product portfolio using the Future-Value Matrix?',
    'competitive-moat': 'What is your competitive moat strength analysis?',
    'business-systems-list': 'What business systems do you need to develop?',
    'partnership-opportunities': 'What strategic partnership opportunities have you identified?',
    'product-innovation-ideas': 'What product innovation ideas are you considering?',
    'next-steps-plan': 'What are your next three steps after completing this course?'
  };
  
  return questions[questionId] || questionId;
};
