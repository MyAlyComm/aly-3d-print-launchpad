
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
    "arbitrage": "Market Arbitrage",
    "timeline": "Success Timeline",
    "myths": "Common Myths",
    "future": "Future Opportunities",
    "self-assessment": "Self Assessment",
    "skills-assessment": "Skills Assessment",
    "theorem": "Core Theorem",
    "awakening": "The Awakening",
    "revelation": "The Revelation",
    "decisionTree": "Decision Making Framework",
    "worksheet": "Interactive Worksheet"
  };
  
  return sectionNames[sectionId] || sectionId;
};

export const getQuestionText = (questionId: string): string => {
  const questions: Record<string, string> = {
    'existing-skills': 'What existing skills do you have that most people in the 3D printing industry lack?',
    'misconceptions': 'What misconceptions about 3D printing did you previously hold?',
    'interesting-phase': 'Which phase of the industry\'s evolution do you find most interesting?',
    'specific-niche': 'What specific niche or application of 3D printing excites you the most?',
    'upcoming-trend': 'Based on the industry forecast, which upcoming trend do you feel best positioned to capitalize on?'
  };
  
  return questions[questionId] || questionId;
};
