import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { ResourcesCard } from "@/components/dashboard/ResourcesCard";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const FAQSections = [
  {
    id: "story",
    title: "MY STORY: From Zero to $20K in 60 Days",
    description: "How I started with just a $300 printer and built a global business",
    content: `I started with just a $300 printer and $200 worth of supplies. That's all it took to launch a business that would change my life.

"9 months ago I had never even touched a 3D printer. With just $500 in starting capital, I generated $6,300 in my first month and grew from 1 little printer to 8. By month two, I hit $20K in sales—all while studying philosophy at university full time."

- Now sold to 60+ countries with multiple viral products
- Billion-dollar brands seek my marketing and consulting help
- Zero previous experience or special connections`,
    image: "/lovable-uploads/1273d951-6c16-4a5d-a99a-d233f5e92918.png"
  },
  {
    id: "reality",
    title: "THE REALITY OF 3D PRINTING",
    description: "It's less about what you sell, more about how you sell it",
    content: `"Some people think 3D printing is just for cheap plastic toys. But the reality is that it's less about what you sell and more about how you sell it. What the industry has a shortage of is creativity combined with systems—and that's where I come in."

"I work 17 hours a day so that you don't have to. I've tested, failed, and refined so you can take the shortcuts."`,
    image: "/lovable-uploads/90ff8861-ff64-4a75-8a68-8afda542663d.png"
  },
  {
    id: "opportunity",
    title: "THE 3D PRINTING OPPORTUNITY",
    description: "Why now is the perfect time to start",
    content: `"I went from a 19-year-old who couldn't find a summer job to a global tech founder in just 8 months. Starting a profitable 3D printing business doesn't require a big budget, design skills, or content creation talent. What you need is just 5 or more hours a week, a computer, a smartphone, and internet access."

- The industry expanded 47% in 2024 alone
- Create products with 50-95% profit margins
- Turn $500 into $5K+ monthly with the right approach`,
    image: "/lovable-uploads/573b21db-fd6b-4fe9-ba36-ae007133ace1.png"
  },
  {
    id: "equipment",
    title: "Do you need expensive equipment?",
    description: "Start with any budget and grow from there",
    content: "You can start with any budget and grow from there. I started with just a $300 printer and $200 worth of supplies.",
    image: "/lovable-uploads/e4159516-8779-495b-b04c-115389589491.png"
  },
  {
    id: "skills",
    title: "Do you need design skills?",
    description: "90% of successful sellers didn't create their first designs",
    content: "90% of successful sellers didn't create their first designs. You don't need to be a designer to start a 3D printing business.",
    image: "/lovable-uploads/4999495f-757f-4f9d-a959-19490908a461.png"
  },
  {
    id: "software",
    title: "Which software do you use?",
    description: "Options for beginners through experts",
    content: "There are many software options available for beginners through experts. I recommend starting with Tinkercad.",
    image: "/lovable-uploads/649c7549-c9f8-4a01-8949-355ca597999d.png"
  },
  {
    id: "saturation",
    title: "Is the market saturated?",
    description: "Thousands of untapped niches still exist",
    content: "Thousands of untapped niches still exist. The market is far from saturated.",
    image: "/lovable-uploads/a99931e5-994c-4939-824c-4c0a8a94a9fe.png"
  },
  {
    id: "budget",
    title: "STARTING BUDGET OPTIONS",
    description: "Start where you are, grow from there",
    content: "Start where you are, grow from there. You can start with any budget.",
    image: "/lovable-uploads/38899999-4963-4945-8c5a-912515c5616d.png"
  },
  {
    id: "income",
    title: "REALISTIC INCOME POTENTIAL",
    description: "From side hustle to full-time business",
    content: "From side hustle to full-time business. The income potential is realistic.",
    image: "/lovable-uploads/95999999-9999-4999-8999-999999999999.png"
  },
  {
    id: "products",
    title: "BEST-SELLING PRODUCTS",
    description: "What actually sells and why",
    content: "What actually sells and why. I'll show you the best-selling products.",
    image: "/lovable-uploads/21d99999-1999-4999-8999-199999999999.png"
  }
];

const FAQDashboard = () => {
  const { user } = useAuth();
  
  return (
    <DashboardLayout 
      title={`3D Printing FAQ${user?.email ? ' - ' + user.email.split('@')[0] : ''}`}
    >
      <div className="bg-primary-50 py-6 mb-6 rounded-lg px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 break-words">
            The Complete 3D Printing Business FAQ
          </h1>
          <p className="text-center text-gray-600 break-words">
            All your questions about starting a profitable 3D printing business answered in one place.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 pb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <WelcomeCard />
              <ResourcesCard />
            </div>
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6 space-y-4">
                  {FAQSections.map((section) => (
                    <Collapsible key={section.id} className="space-y-2">
                      <Card className="bg-secondary/5">
                        <div className="p-4">
                          <div className="flex items-start gap-4">
                            <img 
                              src={section.image} 
                              alt={section.title}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                                <div>
                                  <h3 className="font-medium text-sm md:text-base break-words">{section.title}</h3>
                                  <p className="text-xs md:text-sm text-muted-foreground break-words">{section.description}</p>
                                </div>
                                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                              </CollapsibleTrigger>
                            </div>
                          </div>
                          <CollapsibleContent className="mt-4">
                            <div className="prose prose-sm max-w-none">
                              <div className="whitespace-pre-line text-sm text-gray-600">
                                {section.content}
                              </div>
                            </div>
                          </CollapsibleContent>
                        </div>
                      </Card>
                    </Collapsible>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FAQDashboard;
