
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LeadMagnetForm from "./LeadMagnetForm";
import { ReactNode } from "react";

interface LeadMagnetDialogProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

const LeadMagnetDialog = ({ children, className, title = "Get Your Free 3D Printing Guide", description = "Enter your details below for instant access", buttonText = "Free Guide" }: LeadMagnetDialogProps) => {
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
        <LeadMagnetForm 
          setDialogOpen={undefined}
          title={title}
          description={description}
          buttonText={buttonText}
        />
      </DialogContent>
    </Dialog>
  );
};

export default LeadMagnetDialog;
