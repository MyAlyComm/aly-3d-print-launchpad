
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { BookOpen, ArrowRight, Clock, Bookmark } from "lucide-react";

const EbooksHub = () => {
  const navigate = useNavigate();

  const availableEbooks = [
    {
      id: "3d-blueprint",
      title: "3D Printing Blueprint",
      description: "The complete guide to starting a profitable 3D printing business",
      chaptersCount: 11,
      estimatedTime: "6-8 hours",
      lastRead: "Chapter 3: The 3+1=40 System",
      progress: 27,
      coverImage: "/lovable-uploads/b1236689-73b3-4e92-9e4d-b466a948bcb1.png"
    },
    {
      id: "coming-soon",
      title: "Coming Soon",
      description: "More ebooks will be available soon",
      chaptersCount: 0,
      estimatedTime: "TBA",
      coverImage: "/lovable-uploads/80580729-6d4e-4bd0-a66c-dff6d0d890e1.png",
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight">My Ebooks</h1>
          <p className="text-gray-500 mt-2">Access all your purchased ebooks and resources</p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableEbooks.map((ebook) => (
            <Card 
              key={ebook.id} 
              className={`overflow-hidden group ${
                ebook.disabled ? 'opacity-70' : 'hover:shadow-lg transition-shadow'
              }`}
            >
              {ebook.coverImage && (
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={ebook.coverImage} 
                    alt={ebook.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  {!ebook.disabled && ebook.progress && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${ebook.progress}%` }}
                      />
                    </div>
                  )}
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {ebook.title}
                </CardTitle>
                <CardDescription>{ebook.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{ebook.chaptersCount} {ebook.chaptersCount === 1 ? 'Chapter' : 'Chapters'}</span>
                </div>
                {!ebook.disabled && (
                  <>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Estimated time: {ebook.estimatedTime}</span>
                    </div>
                    {ebook.lastRead && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Bookmark className="h-4 w-4 mr-1" />
                        <span>Last read: {ebook.lastRead}</span>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => navigate(`/dashboard/${ebook.id}`)}
                  disabled={ebook.disabled}
                  className="w-full"
                >
                  {ebook.disabled ? 'Coming Soon' : 'Continue Reading'}
                  {!ebook.disabled && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EbooksHub;
