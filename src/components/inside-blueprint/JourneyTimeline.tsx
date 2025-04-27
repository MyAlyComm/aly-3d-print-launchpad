
import { Card, CardContent } from "@/components/ui/card";

export const JourneyTimeline = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Journey to Success</h2>
          <p className="text-gray-600 text-lg">
            From a single printer to a thriving business—here's how it happened
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/20" />
          
          <div className="space-y-12">
            <TimelineItem 
              year="2021"
              title="The Beginning"
              description="Started with one Ender 3 printer and a $500 budget. Made my first sale within two weeks."
              position="left"
            />
            
            <TimelineItem 
              year="2022"
              title="Breaking Through"
              description="Scaled to 5 printers and hit consistent $5,000 monthly revenue. Developed the PROFITS framework."
              position="right"
            />
            
            <TimelineItem 
              year="2023"
              title="Scaling Up"
              description="Reached $10,000/month with automated systems. Started teaching others the blueprint."
              position="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ year, title, description, position }: { 
  year: string;
  title: string;
  description: string;
  position: "left" | "right";
}) => {
  return (
    <div className={`flex ${position === 'right' ? 'flex-row-reverse' : ''} items-center gap-8`}>
      <div className="flex-1">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6 space-y-2">
            <span className="text-primary font-bold">{year}</span>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </CardContent>
        </Card>
      </div>
      <div className="w-4 h-4 rounded-full bg-primary relative z-10" />
      <div className="flex-1" />
    </div>
  );
};
