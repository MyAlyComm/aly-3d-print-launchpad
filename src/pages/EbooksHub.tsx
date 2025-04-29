
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
import { BookOpen, ArrowRight, Clock, Bookmark, User, FileText } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const EbooksHub = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const availableEbooks = [
    {
      id: "3d-mini",
      title: "Quick Start Guide",
      description: "Get started with 3D printing business essentials in under an hour",
      chaptersCount: 1,
      estimatedTime: "45 mins",
      lastRead: null,
      progress: 0,
      coverImage: "/lovable-uploads/cf54e8e5-7d73-4081-8494-a864ec2169e8.png"
    },
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
      id: "3d-faq",
      title: "3D Printing FAQ",
      description: "From Zero to $20K in 60 Days - All your questions answered",
      chaptersCount: 10,
      estimatedTime: "4-5 hours",
      lastRead: "Introduction: My Story",
      progress: 10,
      coverImage: "/lovable-uploads/cd69d117-8edf-4d26-8dca-118a8eefc2ca.png"
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
    <DashboardLayout 
      title="My Ebooks" 
      isDashboardPage={true}
    >
      <div className="py-8">
        <header className="mb-8">
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
                  {!ebook.disabled && ebook.progress > 0 && (
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
                  {ebook.disabled ? 'Coming Soon' : 'Start Reading'}
                  {!ebook.disabled && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center sm:hidden">
          <Button
            variant="outline"
            onClick={() => navigate("/account")}
            className="w-full max-w-xs"
          >
            <User className="mr-2 h-4 w-4" />
            Manage My Account
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EbooksHub;
