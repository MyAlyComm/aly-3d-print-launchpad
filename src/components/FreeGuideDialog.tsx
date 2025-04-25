
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LeadMagnetForm from "./LeadMagnetForm";
import { ReactNode } from "react";

interface FreeGuideDialogProps {
  children?: ReactNode;
  className?: string;
}

const FreeGuideDialog = ({ children, className }: FreeGuideDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button className={`bg-secondary hover:bg-secondary-dark text-white ${className}`}>
            Free Guide
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <LeadMagnetForm setDialogOpen={undefined} />
      </DialogContent>
    </Dialog>
  );
};

export default FreeGuideDialog;
