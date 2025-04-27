
import { BarChart3, BookOpen, CheckCircle, Clock, Award, Star, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export const DashboardPreview = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate loading state for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
              <BarChart3 className="w-4 h-4" />
              <span className="font-medium">Interactive Experience</span>
            </div>
            <h2 className="text-3xl font-bold">
              Not Just an Ebook - Your Personal Business Dashboard
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              I created these business systems after months of trial and error, market research and collaborating with hundreds of industry players. But I want to do more than simply teach you, I want to empower you. That's why I coded this entire website and interactive dashboard myself from the ground up. It's the information I wish I had, in a way that's easy to understand.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <img 
              src="/lovable-uploads/511b02f5-662b-4442-ada4-7d79753c2d2d.jpg"
              alt="Aly working on the blueprint dashboard"
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className={`bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200/50 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Achievement Badges Row */}
            <div className="mb-8 p-4 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                Your Achievements
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { title: "First Chapter", icon: <Star className="w-3 h-3" />, color: "bg-primary/20 text-primary" },
                  { title: "Speed Demon", icon: <Clock className="w-3 h-3" />, color: "bg-secondary/20 text-secondary" },
                  { title: "Active Participant", icon: <CheckCircle className="w-3 h-3" />, color: "bg-green-500/20 text-green-500" },
                  { title: "3D Printing Master", icon: <Trophy className="w-3 h-3" />, color: "bg-amber-500/20 text-amber-500" },
                  { title: "Rising Star", icon: <Award className="w-3 h-3" />, color: "bg-accent/20 text-accent" }
                ].map((badge, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full ${badge.color} text-xs font-medium transition-all duration-300 animate-fade-in`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    {badge.icon}
                    <span>{badge.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Progress Overview */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">Your Progress</h3>
                  <Progress value={35} className="h-2" />
                  <p className="text-sm text-gray-500">5 of 12 chapters completed</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <BookOpen className="w-5 h-5" />, label: "12 Chapters", value: "Complete Guide" },
                    { icon: <CheckCircle className="w-5 h-5" />, label: "Progress Tracking", value: "Stay Motivated" },
                    { icon: <Clock className="w-5 h-5" />, label: "24/7 Access", value: "Learn at Your Pace" },
                  ].map((item, i) => (
                    <Card 
                      key={i} 
                      className={`col-span-1 transition-all duration-500 transform hover:scale-105 hover:shadow-md ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{item.value}</p>
                            <p className="text-xs text-gray-500">{item.label}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Right Column - Chapter Preview */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Chapters</h3>
                <div className="space-y-3">
                  {[
                    { title: "The Product Trinity", progress: 100, completed: true, image: "/lovable-uploads/80580729-6d4e-4bd0-a66c-dff6d0d890e1.png" },
                    { title: "Setting Up for Success", progress: 60, completed: false, image: "/lovable-uploads/907a1f7c-21b9-423f-b210-51baa4e27c3c.png" },
                    { title: "Zero-Cost Marketing", progress: 0, completed: false, image: "/lovable-uploads/fcd13ba4-e265-4001-804e-b98d30cf751b.png" },
                  ].map((chapter, i) => (
                    <div 
                      key={i} 
                      className={`flex gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={chapter.image} 
                          alt={chapter.title} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-gray-900">{chapter.title}</h4>
                          {chapter.completed ? (
                            <Badge variant="secondary" className="text-green-600 text-xs flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" /> Complete
                            </Badge>
                          ) : (
                            <span className="text-gray-500 text-sm">{chapter.progress}%</span>
                          )}
                        </div>
                        <Progress value={chapter.progress} className="h-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
