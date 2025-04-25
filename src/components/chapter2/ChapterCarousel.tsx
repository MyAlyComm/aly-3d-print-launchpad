
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
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { useChapterForm } from "@/hooks/useChapterForm";
import { useQueryClient } from '@tanstack/react-query';
import { useIsMobile } from "@/hooks/use-mobile";

// Import chapter sections
import { TheoremSection } from './TheoremSection';
import { AwakeningSection } from './AwakeningSection';
import { RevelationSection } from './RevelationSection';
import { DecisionTreeSection } from './DecisionTreeSection';
import { WorksheetSection } from './WorksheetSection';

export const ChapterCarousel = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { formState, saveResponse } = useChapterForm(2, 'chapter-progress');
  const isMobile = useIsMobile();

  const sections = [
    { 
      id: 'theorem', 
      component: TheoremSection, 
      title: 'The Axiogenetic Theorem',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    },
    { 
      id: 'awakening', 
      component: AwakeningSection, 
      title: 'The Awakening',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    },
    { 
      id: 'revelation', 
      component: RevelationSection, 
      title: 'The Revelation',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1'
    },
    { 
      id: 'framework', 
      component: DecisionTreeSection, 
      title: 'The Decision Tree Framework',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    { 
      id: 'worksheet', 
      component: WorksheetSection, 
      title: 'The 3D Printing Business Path Worksheet',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    }
  ];

  const handleSlideChange = (api: any) => {
    const newIndex = api.selectedScrollSnap();
    setCurrentSlide(newIndex);
    
    const sectionId = sections[newIndex]?.id;
    if (sectionId) {
      saveResponse('viewed-sections', {
        checkboxes: { [sectionId]: true }
      }, false);
    }
  };

  const handleComplete = async () => {
    await saveResponse('chapter-completion', { 
      checkboxes: { 'completed': true }
    }, true);
    
    queryClient.invalidateQueries({ queryKey: ["chapter-progress"] });
    
    toast({
      title: "Chapter 2 Completed! 🎉",
      description: "Great work! Your progress has been saved.",
    });
    
    navigate("/dashboard");
  };

  const handleSubmitSection = (sectionId: string) => {
    saveResponse('submitted-sections', {
      checkboxes: { [sectionId]: true }
    }, true);
    
    toast({
      title: "Section completed!",
      description: "Your progress has been saved. Continue to the next section.",
    });
  };

  const isLastSlide = currentSlide === sections.length - 1;
  const progress = ((currentSlide + 1) / sections.length) * 100;

  return (
    <div className="space-y-4 p-3 sm:p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          Step {currentSlide + 1} of {sections.length}: 
          <span className="font-medium text-foreground ml-1">
            {sections[currentSlide]?.title}
          </span>
        </div>
        <div className="text-sm text-muted-foreground">
          {Math.round(progress)}% Complete
        </div>
      </div>
      
      <Progress value={progress} className="h-2" />
      
      {isMobile && (
        <div className="relative h-44 mb-4 rounded-lg overflow-hidden">
          <img
            src={sections[currentSlide]?.image}
            alt={sections[currentSlide]?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
          {sections.map((section) => {
            const SectionComponent = section.component;
            return (
              <CarouselItem key={section.id} className="min-w-full">
                <SectionComponent 
                  onSubmit={() => handleSubmitSection(section.id)} 
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        <div className="flex items-center justify-between mt-6">
          <CarouselPrevious className={`relative ${isMobile ? 'h-8 w-8' : ''}`} />
          <div className="text-center text-sm text-muted-foreground">
            {currentSlide + 1} / {sections.length}
          </div>
          <CarouselNext className={`relative ${isMobile ? 'h-8 w-8' : ''}`} />
        </div>
      </Carousel>

      {isLastSlide && (
        <div className="mt-6 flex justify-center">
          <Button 
            onClick={handleComplete}
            className="group bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
            size={isMobile ? "default" : "lg"}
          >
            Complete Chapter 2
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      )}
    </div>
  );
};
