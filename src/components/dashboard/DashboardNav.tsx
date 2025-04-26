import { useNavigate } from "react-router-dom";
import { Book, Layout, BookOpen, BookText } from "lucide-react";
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
        Introduction
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/chapter-1")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 1: Arbitrage Windows
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/chapter-2")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 2: Knowing Yourself
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/chapter-3")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 3: The 3+1=40 System
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
