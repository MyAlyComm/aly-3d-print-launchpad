
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { useChapterForm } from "@/hooks/useChapterForm";
import { useQueryClient } from '@tanstack/react-query';
import { useIsMobile } from "@/hooks/use-mobile";

// Chapter sections
import { ArbitrageSection } from './ArbitrageSection';
import { TimelineSection } from './TimelineSection';
import { MythsSection } from './MythsSection';
import { FutureSection } from './FutureSection';
import { SelfAssessmentSection } from './SelfAssessmentSection';
import { OpportunitySection } from './OpportunitySection';
import { BudgetSection } from './BudgetSection';

export const ChapterCarousel = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { formState, saveResponse } = useChapterForm(1, 'chapter-progress');
  const isMobile = useIsMobile();

  const sections = [
    { 
      id: 'opportunity', 
      component: OpportunitySection, 
      title: 'The 3D Printing Opportunity',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    { 
      id: 'arbitrage', 
      component: ArbitrageSection, 
      title: 'Arbitrage Windows',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
    { 
      id: 'budget', 
      component: BudgetSection, 
      title: 'Budget Planning',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    },
    { 
      id: 'timeline', 
      component: TimelineSection, 
      title: 'Industry Timeline',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    },
    { 
      id: 'myths', 
      component: MythsSection, 
      title: 'Breaking Through Misconceptions',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
    },
    { 
      id: 'future', 
      component: FutureSection, 
      title: 'The Future of 3D Printing',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1'
    },
    { 
      id: 'assessment', 
      component: SelfAssessmentSection, 
      title: 'Self Assessment',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
    }
  ];

  const handleSlideChange = (api: any) => {
    const newIndex = api.selectedScrollSnap();
    setCurrentSlide(newIndex);
    
    // Mark this section as viewed in our progress
    const sectionId = sections[newIndex]?.id;
    if (sectionId) {
      saveResponse('viewed-sections', {
        checkboxes: { [sectionId]: true }
      }, false);
    }
  };

  const handleComplete = async () => {
    // Save final progress
    await saveResponse('chapter-completion', { 
      checkboxes: { 'completed': true }
    }, true);
    
    // Invalidate queries to refresh progress data
    queryClient.invalidateQueries({ queryKey: ["chapter-progress"] });
    
    toast({
      title: "Chapter 1 Completed! 🎉",
      description: "Your progress has been saved. Continue to the next chapter or review your notes.",
    });
    
    // Navigate back to dashboard
    navigate("/dashboard");
  };

  const handleSubmitSection = (sectionId: string) => {
    saveResponse('submitted-sections', {
      checkboxes: { [sectionId]: true }
    }, true);
    
    toast({
      title: "Section completed!",
      description: "Your responses have been saved. Continue to the next section.",
    });
  };

  const isLastSlide = currentSlide === sections.length - 1;
  const progress = ((currentSlide + 1) / sections.length) * 100;

  return (
    <div className="relative space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2 md:gap-4">
        <div className="text-sm text-muted-foreground">
          Step {currentSlide + 1} of {sections.length}: 
          <span className="font-medium text-foreground ml-1">
            {sections[currentSlide]?.title}
          </span>
        </div>
        <div className="text-sm text-muted-foreground">
          {Math.round(((currentSlide + 1) / sections.length) * 100)}% Complete
        </div>
      </div>
      
      <Progress value={((currentSlide + 1) / sections.length) * 100} className="h-2 mb-4" />
      
      {isMobile && (
        <div className="mb-4">
          <img
            src={sections[currentSlide]?.image}
            alt={sections[currentSlide]?.title}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      )}
      
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
        }}
        onSelect={handleSlideChange}
      >
        <CarouselContent>
          {sections.map((section, index) => {
            const SectionComponent = section.component;
            return (
              <CarouselItem key={section.id}>
                <div className="p-2 md:p-6">
                  <SectionComponent 
                    onSubmit={() => handleSubmitSection(section.id)} 
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        <div className="flex items-center justify-between mt-4">
          <CarouselPrevious className={`relative ${isMobile ? 'h-8 w-8' : ''}`} />
          <div className="text-center text-sm text-muted-foreground">
            {currentSlide + 1} / {sections.length}
          </div>
          <CarouselNext className={`relative ${isMobile ? 'h-8 w-8' : ''}`} />
        </div>
      </Carousel>

      {isLastSlide && (
        <div className="mt-6 md:mt-8 flex justify-center">
          <Button 
            onClick={handleComplete} 
            className="group bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white" 
            size={isMobile ? "default" : "lg"}
          >
            Complete Chapter 1
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      )}
    </div>
  );
};

