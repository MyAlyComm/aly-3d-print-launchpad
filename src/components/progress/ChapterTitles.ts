
export const getChapterTitle = (chapterNumber: number) => {
  const titles = {
    0: "Introduction: The Opportunity",
    1: "Arbitrage Windows",
    2: "Knowing Yourself, Knowing Your Tools",
    3: "The 3 Plus 1 Equals 40 System",
    4: "The Product Trinity",
    5: "Choosing Your Production Tools",
    6: "Setting Up for Success",
    7: "Zero-Cost Marketing That Works",
    8: "Scaling Beyond $5K",
    9: "Strategic Partnerships",
    10: "Future-Proofing Your Business",
    11: "The Journey Ahead"
  };
  return titles[chapterNumber as keyof typeof titles] || `Chapter ${chapterNumber}`;
};
