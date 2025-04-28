
// Define the question interface
interface ChapterQuestion {
  id: string;
  section: string;
  question: string;
}

// Create questions for each chapter
export const chapterQuestions: Record<number, ChapterQuestion[]> = {
  // Introduction (Chapter 0)
  0: [
    { id: 'intro-goals', section: 'opportunity', question: 'What are your primary goals for starting a 3D printing business?' },
    { id: 'intro-challenges', section: 'journey', question: 'What challenges do you anticipate facing in your 3D printing journey?' },
    { id: 'intro-experience', section: 'book-structure', question: 'What is your current experience level with 3D printing?' }
  ],
  
  // Chapter 1
  1: [
    { id: 'arbitrage-understanding', section: 'arbitrage', question: 'How would you explain 3D printing arbitrage in your own words?' },
    { id: 'timeline-expectations', section: 'timeline', question: 'What is your realistic timeline for building your business?' },
    { id: 'myths-encountered', section: 'myths', question: 'Which misconceptions about 3D printing had you believed before?' }
  ],
  
  // Chapter 2
  2: [
    { id: 'axiogenetic-application', section: 'theorem', question: 'How will you apply the Axiogenetic Theorem to your business?' },
    { id: 'personal-strengths', section: 'revelation', question: 'What personal strengths will you leverage in your 3D printing business?' },
    { id: 'decision-path', section: 'decisionTree', question: 'Which decision path from the chapter best describes your situation?' }
  ],
  
  // Chapter 3
  3: [
    { id: 'core-products', section: 'core-system', question: 'What will be your three core products based on the 3+1 system?' },
    { id: 'plus-one', section: 'plus-one', question: 'What will be your "Plus One" innovation project?' },
    { id: 'monthly-implementation', section: 'monthly-cycles', question: 'How will you implement the monthly cycle system with your available time?' }
  ],
  
  // Chapter 4
  4: [
    { id: 'profit-framework', section: 'profits-framework', question: 'Which profit framework will you use for your product selection?' },
    { id: 'match-framework', section: 'match-framework', question: 'How will you apply the match framework to your market selection?' },
    { id: 'licensing-strategy', section: 'commercial-licensing', question: 'What is your strategy for commercial licensing?' }
  ],
  
  // Chapter 5
  5: [
    { id: 'printer-selection', section: 'printer-selection', question: 'Which 3D printer(s) will you purchase based on the chapter recommendations?' },
    { id: 'workspace-setup', section: 'workspace', question: 'Describe how you will set up your workspace following the guidelines' },
    { id: 'essential-accessories', section: 'accessories', question: 'List the essential accessories you plan to purchase' }
  ],
  
  // Chapter 6
  6: [
    { id: 'platform-selection', section: 'platform-comparison', question: 'Which platform(s) will you focus on for selling your products?' },
    { id: 'platform-strategy', section: 'platform-strategy', question: 'What is your strategy for standing out on your chosen platform(s)?' },
    { id: 'monthly-plan', section: 'month-plan', question: 'Outline your first month plan for platform growth' }
  ],
  
  // Chapter 7
  7: [
    { id: 'first-print', section: 'first-print', question: 'Describe your strategy for your first commercial print run' },
    { id: 'workflow-system', section: 'setup-system', question: 'How will you implement the workflow system described in the chapter?' },
    { id: 'listing-strategy', section: 'listings', question: 'What will be your listing strategy for your first products?' }
  ],
  
  // Chapter 8
  8: [
    { id: 'marketing-funnel', section: 'marketing-funnel', question: 'Describe the marketing funnel you will implement for your products' },
    { id: 'zero-cost-marketing', section: 'marketing-steps', question: 'Which zero-cost marketing approaches will you prioritize?' },
    { id: 'content-strategy', section: 'content-creation', question: 'What will be your content creation strategy?' }
  ],
  
  // Chapter 9
  9: [
    { id: 'scaling-mindset', section: 'scaling-mindset', question: 'How will you adopt the scaling mindset described in the chapter?' },
    { id: 'production-scaling', section: 'production-scaling', question: 'What is your plan for scaling production?' },
    { id: 'team-building', section: 'team-building', question: 'When and how do you plan to build a team?' }
  ],
  
  // Chapter 10
  10: [
    { id: 'future-value', section: 'future-value', question: 'How do you plan to future-proof your business?' },
    { id: 'competitive-moat', section: 'competitive-moat', question: 'What will be your competitive moat strategy?' },
    { id: 'future-trends', section: 'future-strategy', question: 'Which future trends do you plan to incorporate into your business?' }
  ],
  
  // Chapter 11
  11: [
    { id: 'final-assessment', section: 'final-assessment', question: 'What key insights have you gained from this blueprint?' },
    { id: 'implementation-plan', section: 'implementation-plan', question: 'What is your 90-day implementation plan?' },
    { id: 'conclusion', section: 'conclusion', question: 'How will you measure success in your 3D printing business?' }
  ]
};

export default chapterQuestions;
