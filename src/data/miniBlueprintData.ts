import { BookOpen, Target, Lightbulb, Brain, Compass, Clock, Award, BookText, Package } from "lucide-react";
import type { FAQSectionType } from "@/components/dashboard/FAQSection";

export const MiniBlueprintSections: FAQSectionType[] = [
  {
    id: "story",
    title: "MY STORY: FROM ZERO TO $20K IN 60 DAYS",
    description: "How I built a global business from scratch",
    content: `"9 months ago I had never even touched a 3D printer. With just $500 in starting capital, I generated $6,300 in my first month and grew from 1 little printer to 8. By month two, I hit $20K in sales—all while studying philosophy at university full time."

• Now sold to 60+ countries with multiple viral products
• Billion-dollar brands seek my marketing and consulting help
• Zero previous experience or special connections`,
    image: "/lovable-uploads/82a916c1-2d7b-40fe-b51f-22cc7f474c56.png",
    icon: BookOpen,
    gradient: "from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100"
  },
  {
    id: "arbitrage",
    title: "THE ARBITRAGE WINDOW EXPLAINED",
    description: "Understanding the unique opportunity",
    content: `What is an Arbitrage Window?
An arbitrage window opens when:
1. A technology becomes accessible to average people
2. But knowledge about how to leverage it remains limited
3. And the market hasn't yet been flooded with competitors

This creates a brief period—sometimes months, sometimes a few years—where extraordinary profits are possible for those who recognize the opportunity and act.`,
    image: "/lovable-uploads/90ff8861-ff64-4a75-8a68-8afda542663d.png",
    icon: Target,
    gradient: "from-orange-50 to-yellow-50 hover:from-orange-100 hover:to-yellow-100"
  },
  {
    id: "why-now",
    title: "WHY NOW IS THE PERFECT TIME",
    description: "The 3D Printing Arbitrage Window is Wide Open",
    content: `• Technology Accessibility: Sub-$500 printers produce professional results
• Knowledge Gap: Business strategies aren't widely understood
• Market Readiness: Consumers value and understand 3D printed products
• Limited Competition: Profitable niches remain undiscovered

The industry expanded by 47% in 2024 alone, with an estimated 8.3 million units shipping by year-end.`,
    image: "/lovable-uploads/573b21db-fd6b-4fe9-ba36-ae007133ace1.png",
    icon: Lightbulb,
    gradient: "from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100"
  },
  {
    id: "misconceptions",
    title: "THE STAINED GLASS EFFECT",
    description: "Breaking Through Misconceptions",
    content: `Common myths creating opportunity for you:

• "It's too technical" (Reality: Modern printers are as easy as coffee makers)
• "The market is saturated" (Reality: Most sellers compete in only a handful of categories)
• "You need dozens of printers" (Reality: I made $5,000+ with just one)
• "It's just a hobby" (Reality: Thousands have built six and seven-figure businesses)
• "The profit margins aren't sustainable" (Reality: Products routinely achieve 80%+ margins)

Every time someone believes these myths, your opportunity grows.`,
    image: "/lovable-uploads/4999495f-757f-4f9d-a959-19490908a461.png",
    icon: Brain,
    gradient: "from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100"
  },
  {
    id: "success-formula",
    title: "IT'S LESS ABOUT WHAT YOU SELL",
    description: "The Real Success Formula",
    content: `The entrepreneurs who succeed focus on:

• Solving specific problems for specific people
• Creating systems rather than one-off products
• Building marketing that connects with real customers
• Consistent implementation rather than perfect products

"It's less about what you sell—and more about how you sell it."`,
    image: "/lovable-uploads/649c7549-c9f8-4a01-8949-355ca597999d.png",
    icon: Compass,
    gradient: "from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100"
  },
  {
    id: "key-factors",
    title: "THE 7 KEY FACTORS THAT DETERMINE YOUR PATH",
    description: "Understanding Your Unique Advantage",
    content: `Your optimal approach depends on:

1. Budget Assessment: What financial resources you have available
2. 3D Printing Experience: Your current technical comfort level
3. Time Availability: How many hours you can dedicate weekly
4. Strongest Skills: Your natural capabilities and expertise
5. Creative Aptitude: Your approach to problem-solving
6. Geographic Location: Where you're based and your market access
7. Growth Ambitions: Your goals for the business

There's no one-size-fits-all approach—your unique combination creates your advantage.`,
    image: "/lovable-uploads/a99931e5-994c-4939-824c-4c0a8a94a9fe.png",
    icon: Clock,
    gradient: "from-cyan-50 to-sky-50 hover:from-cyan-100 hover:to-sky-100"
  },
  {
    id: "budget-levels",
    title: "START WHERE YOU ARE: BUDGET LEVELS",
    description: "Every Budget Has a Viable Path",
    content: `$0 Budget: Broker between clients and existing services, focus on partnerships
$500-$1,000: Single printer startup with high-margin products (where I started)
$1,000-$2,000: Quality printer or multiple budget units, more testing capacity
$2,000-$5,000: Multi-printer operation with diverse product lines
$5,000+: Professional setup with automation potential

Start with what you have, reinvest profits, and scale strategically.`,
    image: "/lovable-uploads/38899999-4963-4945-8c5a-912515c5616d.png",
    icon: Award,
    gradient: "from-lime-50 to-green-50 hover:from-lime-100 hover:to-green-100"
  },
  {
    id: "leverage-strengths",
    title: "LEVERAGE YOUR STRENGTHS",
    description: "Your Skills Determine Your Strategy",
    content: `Design-Focused: Create unique, high-value models with distinctive aesthetics
Marketing-Focused: Excel at promotion with compelling stories, even for standard products
Technical-Focused: Offer precision-dependent products and engineered solutions
Business-Focused: Scale operations and build systems for growth

Your strongest skill should guide your product and platform selection.`,
    image: "/lovable-uploads/95999999-9999-4999-8999-999999999999.png",
    icon: BookText,
    gradient: "from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100"
  },
  {
    id: "time-location",
    title: "TIME & LOCATION STRATEGY",
    description: "Work With Your Constraints, Not Against Them",
    content: `Time Availability Strategy:
• 5-10 hours/week: Focus on longer prints that work while you're away
• 10-20 hours/week: Balance between hands-on and automated production
• 20+ hours/week: Faster scaling across multiple products and platforms

Location Impact:
• Urban: Focus on local markets, premium pricing, consider space limitations
• Suburban: Balanced approach between local and shipping
• Rural: Leverage lower costs, focus on lightweight products for shipping

Your constraints aren't limitations—they're guideposts for the right approach.`,
    image: "/lovable-uploads/21d99999-1999-4999-8999-199999999999.png",
    icon: Package,
    gradient: "from-fuchsia-50 to-pink-50 hover:from-fuchsia-100 hover:to-pink-100"
  }
];
