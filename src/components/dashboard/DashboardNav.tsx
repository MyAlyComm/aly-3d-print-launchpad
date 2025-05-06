
import { useNavigate } from "react-router-dom";
import { Book, Layout, BookOpen, BookText, ClipboardList, Box, Package, SparkleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const DashboardNav = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="flex-1 space-y-2">
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint")}
      >
        <Layout className="mr-2 h-4 w-4" />
        Dashboard
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/new-chapter")}
      >
        <Book className="mr-2 h-4 w-4" />
        Introduction
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/chapter-1")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 1: Arbitrage Windows
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/chapter-2")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 2: Knowing Yourself
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/chapter-3")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 3: The 3+1=40 System
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/chapter-4")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 4: The Product Trinity
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/chapter-5")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 5: Production Tools
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/chapter-6")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 6: Selling Platforms
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/chapter-7")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 7: Setting Up For Success
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/chapter-8")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 8: Zero-Cost Marketing That Works
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/chapter-9")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 9: Scaling Beyond $5K
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/chapter-10")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 10: Future-Proofing Your Business
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/chapter-11")}
      >
        <BookText className="mr-2 h-4 w-4" />
        Chapter 11: The Journey Ahead
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/resources")}
      >
        <BookOpen className="mr-2 h-4 w-4" />
        Resources
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start text-primary"
        onClick={() => navigate("/dashboard")}
      >
        <BookOpen className="mr-2 h-4 w-4" />
        All Ebooks
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/submissions")}
      >
        <ClipboardList className="mr-2 h-4 w-4" />
        My Submissions
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/product-design")}
      >
        <Box className="mr-2 h-4 w-4" />
        Product Design Engine
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start"
        onClick={() => navigate("/dashboard/3d-blueprint/filament-guide")}
      >
        <Package className="mr-2 h-4 w-4" />
        Filament Guide
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start bg-primary/5 hover:bg-primary/10"
        onClick={() => navigate("/ai-hub")}
      >
        <SparkleIcon className="mr-2 h-4 w-4 text-primary" />
        <div className="flex items-center">
          AI Business Hub
          <Badge className="ml-2 bg-green-500 text-white text-xs">New</Badge>
        </div>
      </Button>
    </nav>
  );
};
