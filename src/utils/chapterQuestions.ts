
export interface ChapterQuestion {
  id: string;
  question: string;
  section: string;
}

export const chapterQuestions: Record<number, ChapterQuestion[]> = {
  0: [
    { id: 'opportunity', section: 'opportunity', question: 'What opportunities do you see in the 3D printing market?' },
    { id: 'how-to-use', section: 'how-to-use', question: 'How do you plan to use this blueprint?' },
    { id: 'book-structure', section: 'book-structure', question: 'What aspects of the book structure interest you most?' },
    { id: 'story', section: 'story', question: 'What resonates with you about this journey?' }
  ],
  1: [
    { id: 'skills', section: 'assessment', question: 'What existing skills do you have that most people in the 3D printing industry lack?' },
    { id: 'misconceptions', section: 'assessment', question: 'What misconceptions about 3D printing did you previously hold?' },
    { id: 'phase', section: 'assessment', question: 'Which phase of the industry's evolution do you find most interesting?' },
    { id: 'niche', section: 'assessment', question: 'What specific niche or application of 3D printing excites you the most?' }
  ],
  2: [
    { id: 'budget', section: 'worksheet', question: 'What is your initial budget range?' },
    { id: 'experience', section: 'worksheet', question: 'What is your current experience level with 3D printing?' },
    { id: 'timeAvailable', section: 'worksheet', question: 'How much time can you dedicate to your business?' },
    { id: 'skills', section: 'worksheet', question: 'What relevant skills do you possess?' }
  ],
  3: [
    { id: 'core-system', section: 'worksheet', question: 'How do you plan to implement the 3+1 system?' },
    { id: 'focus-areas', section: 'worksheet', question: 'What are your three main focus areas?' },
    { id: 'timeline', section: 'worksheet', question: 'What is your implementation timeline?' }
  ]
};
