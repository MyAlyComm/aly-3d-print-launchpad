
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
import { BookOpen, ArrowRight } from "lucide-react";

const EbooksHub = () => {
  const navigate = useNavigate();

  const availableEbooks = [
    {
      id: "3d-blueprint",
      title: "3D Printing Blueprint",
      description: "The complete guide to starting a profitable 3D printing business",
      chaptersCount: 11,
      coverImage: "/lovable-uploads/b1236689-73b3-4e92-9e4d-b466a948bcb1.png"
    },
    {
      id: "coming-soon",
      title: "Coming Soon",
      description: "More ebooks will be available soon",
      chaptersCount: 0,
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
            <Card key={ebook.id} className={`overflow-hidden ${ebook.disabled ? 'opacity-70' : 'hover:shadow-lg transition-shadow'}`}>
              {ebook.coverImage && (
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={ebook.coverImage} 
                    alt={ebook.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{ebook.title}</CardTitle>
                <CardDescription>{ebook.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{ebook.chaptersCount} {ebook.chaptersCount === 1 ? 'Chapter' : 'Chapters'}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => navigate(`/dashboard/${ebook.id}`)}
                  disabled={ebook.disabled}
                  className="w-full"
                >
                  {ebook.disabled ? 'Coming Soon' : 'Open Ebook'}
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
