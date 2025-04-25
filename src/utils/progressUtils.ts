
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
    // Chapter 1
    "arbitrage": "Market Arbitrage",
    "timeline": "Success Timeline",
    "myths": "Common Myths",
    "future": "Future Opportunities",
    "self-assessment": "Self Assessment",
    "skills-assessment": "Skills Assessment",
    
    // Chapter 2
    "theorem": "Core Theorem",
    "awakening": "The Awakening",
    "revelation": "The Revelation",
    "decisionTree": "Decision Making Framework",
    "worksheet": "Interactive Worksheet",
    
    // Chapter 3
    "advanced-techniques": "Advanced Techniques",
    "scaling-production": "Scaling Production",
    "multi-material": "Multi-Material Printing",
    "finishing": "Advanced Finishing",
    
    // Chapter 4
    "business-plan": "Business Planning",
    "legal-framework": "Legal Framework",
    "startup-costs": "Startup Costs",
    
    // Chapter 5
    "marketing-strategy": "Marketing Strategy",
    "online-presence": "Online Presence",
    "product-photos": "Product Photography",
    
    // Chapter 6
    "batch-production": "Batch Production",
    "workflow-optimization": "Workflow Optimization",
    "printer-farm": "Printer Farm Setup",
    
    // Chapter 7-13 sections
    "customer-service": "Customer Service",
    "client-communication": "Client Communication",
    "design-principles": "Design Principles",
    "cad-advanced": "Advanced CAD Techniques",
    "material-properties": "Material Properties",
    "material-selection": "Material Selection Guide",
    "industry-analysis": "Industry Analysis",
    "niche-finding": "Niche Finding",
    "brand-identity": "Brand Identity",
    "brand-storytelling": "Brand Storytelling",
    "financial-planning": "Financial Planning",
    "pricing-strategy": "Pricing Strategy",
    "future-tech": "Future Technologies",
    "innovation-strategy": "Innovation Strategy"
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
    'learning-goals': 'What are your primary learning goals for this course?',
    'business-vision': 'Describe your vision for your 3D printing business in one year',
    'main-obstacles': 'What do you see as your main obstacles to success?',
    'tool-familiarity': 'Rate your familiarity with 3D design tools (1-10)',
    'market-interests': 'Which markets are you most interested in serving?',
    
    // Additional questions for chapters 3-13
    'production-challenges': 'What production challenges are you currently facing?',
    'material-preferences': 'Which materials are you most interested in working with?',
    'business-structure': 'What business structure are you considering for your venture?',
    'target-audience': 'Who is your primary target audience?',
    'marketing-channels': 'Which marketing channels do you plan to focus on?',
    'scaling-challenges': 'What aspects of scaling production concern you most?',
    'customer-feedback': 'How do you plan to collect and implement customer feedback?',
    'design-software': 'Which design software do you primarily use?',
    'material-challenges': 'What material-related challenges are you experiencing?',
    'industry-focus': 'Which industry vertical do you plan to focus on?',
    'brand-values': 'What are the core values of your brand?',
    'financial-goals': 'What are your financial goals for the first year?',
    'tech-interests': 'Which emerging technologies interest you most?'
  };
  
  return questions[questionId] || questionId;
};
