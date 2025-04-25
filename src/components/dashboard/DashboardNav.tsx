
import { useNavigate } from "react-router-dom";
import { Book, Layout, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardNav = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="flex-1 space-y-2">
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard")}
      >
        <Layout className="mr-2 h-4 w-4" />
        Dashboard
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/new-chapter")}
      >
        <Book className="mr-2 h-4 w-4" />
        New Ebook Chapter
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/resources")}
      >
        <BookOpen className="mr-2 h-4 w-4" />
        Resources
      </Button>
    </nav>
  );
};
