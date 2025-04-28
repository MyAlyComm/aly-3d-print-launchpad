
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Save } from "lucide-react";

interface SaveButtonProps {
  onSave: () => void;
  className?: string;
}

export const SaveButton = ({ onSave, className = "" }: SaveButtonProps) => {
  return (
    <Button 
      onClick={onSave} 
      className={`bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 flex items-center gap-2 ${className}`}
    >
      <Save className="h-4 w-4" />
      Save Progress
    </Button>
  );
};
