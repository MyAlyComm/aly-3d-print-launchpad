
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowRight } from "lucide-react";
import { PhotoCarousel } from "@/components/photo-carousel/PhotoCarousel";

const JourneySection = () => {
  const journeyStages = [
    {
      mainImage: "/lovable-uploads/511b02f5-662b-4442-ada4-7d79753c2d2d.jpg",
      hoverImage: "/lovable-uploads/e22aad99-d58b-4d21-a68e-546900704654.png",
      month: "Month 1",
      icon: <AlertCircle className="w-5 h-5 text-primary" />,
      description: "I started my business with a $300 printer and $200 of supplies. With the profits from selling keychains to friends and expanding to cat masks and planters, I was able to buy 8 more 3D printers in my first month.",
      bgColor: "bg-gradient-to-br from-primary/10 to-primary/5",
      emoji: "🚀"
    },
    {
      mainImage: "/lovable-uploads/0f08439b-373a-474c-971a-ae51de7a6701.png",
      hoverImage: "/lovable-uploads/af13abbf-023d-45a1-b3cc-a142e9def472.png",
      month: "Month 2",
      icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
      description: "While going to University full time, I dedicated all my spare time to learning, researching, and planning and grew my business to over 10K/month: selling on my website and amazon.",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-500/5",
      emoji: "📈"
    },
    {
      mainImage: "/lovable-uploads/04fa3465-1dd4-4878-bde7-ee7d0398b515.png",
      hoverImage: "/placeholder.svg",
      month: "Month 3",
      icon: <ArrowRight className="w-5 h-5 text-purple-500" />,
      description: "I scaled up my operations and the sofa in my living room was traded in for industrial shelving and over 30 printers to increase production capacity.",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-purple-500/5",
      emoji: "🏭"
    },
    {
      mainImage: "/lovable-uploads/1dadb0e8-cc5d-4b6f-955b-cb6f463eab22.png",
      hoverImage: "/placeholder.svg",
      month: "Month 4",
      icon: <ArrowRight className="w-5 h-5 text-green-500" />,
      description: "Fulfilling bulk orders and running a successful business with efficient systems in place.",
      bgColor: "bg-gradient-to-br from-green-500/10 to-green-500/5",
      emoji: "📦"
    },
    {
      mainImage: "/lovable-uploads/5146c83e-374b-41f6-b521-c13fb2db3347.jpg",
      hoverImage: "/placeholder.svg",
      month: "Month 5",
      icon: <ArrowRight className="w-5 h-5 text-primary" />,
      description: "I designed a 5 in 1 phone stand which went viral and has since been downloaded and purchased thousands of times in just a few months. I also started more complex custom work for clients and began building my AI company.",
      bgColor: "bg-gradient-to-br from-primary/10 to-primary/5",
      emoji: "🔥"
    },
    {
      mainImage: "/lovable-uploads/1273d951-6c16-4a5d-a99a-d233f5e92918.png",
      hoverImage: "/placeholder.svg",
      month: "Month 6",
      icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
      description: "I obsessed over the history of 3D printing, determined to map the key variables in the industry and create complex algorithms to predict future outcomes. I shifted my focus towards helping others grow their business and learn from my knowledge bases.",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-500/5",
      emoji: "🔍"
    },
    {
      mainImage: "/lovable-uploads/b74ec2ed-9df1-4e07-9f9e-9beed5099f9f.jpg",
      hoverImage: "/placeholder.svg",
      month: "Month 7",
      icon: <ArrowRight className="w-5 h-5 text-purple-500" />,
      description: "I finished my thesis: The Axiogenetic Theorem. A mathematical model to assign and predict true value outcomes as functions of the products of the rate of Innovation and Time expended.",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-purple-500/5",
      emoji: "📊"
    },
    {
      mainImage: "/lovable-uploads/e3c4d94e-63ee-4200-8ca7-63cd8f397489.png",
      hoverImage: "/lovable-uploads/3706ae1a-1ab8-4fcf-ba59-df8598bd5b80.png",
      month: "Month 8",
      icon: <ArrowRight className="w-5 h-5 text-green-500" />,
      description: "Expanding globally and establishing partnerships with international distributors.",
      bgColor: "bg-gradient-to-br from-green-500/10 to-green-500/5",
      emoji: "🌍"
    },
    {
      mainImage: "/lovable-uploads/fe8adce5-b909-4430-a057-0e0da07b26cf.png",
      hoverImage: "/lovable-uploads/573b21db-fd6b-4fe9-ba36-ae007133ace1.png",
      month: "Month 9",
      icon: <ArrowRight className="w-5 h-5 text-purple-500" />,
      description: "Launched proprietary AI models to optimize 3D printing processes and predict market trends, significantly improving production efficiency and market response time.",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-purple-500/5",
      emoji: "🤖"
    },
    {
      mainImage: "/lovable-uploads/photo-1470813740244-df37b8c1edcb",
      hoverImage: "/lovable-uploads/photo-1500375592092-40eb2168fd21",
      month: "Month 10",
      icon: <ArrowRight className="w-5 h-5 text-green-500" />,
      description: "Developed advanced automation systems and expanded our AI capabilities to revolutionize the 3D printing industry, setting new standards for efficiency and innovation.",
      bgColor: "bg-gradient-to-br from-green-500/10 to-green-500/5",
      emoji: "⚙️"
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur border-primary/10 shadow-lg">
      <CardContent className="pt-6">
        <PhotoCarousel photos={journeyStages} />
      </CardContent>
    </Card>
  );
};

export default JourneySection;
