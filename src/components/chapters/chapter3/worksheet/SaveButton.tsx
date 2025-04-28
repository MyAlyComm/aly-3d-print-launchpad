
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface SaveButtonProps {
  onSave: () => void;
}

export const SaveButton = ({ onSave }: SaveButtonProps) => {
  return (
    <Button 
      onClick={onSave} 
      className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
    >
      Save Progress
    </Button>
  );
};
