
import { FileText } from "lucide-react";
import { useTeamBypass } from "@/hooks/useTeamBypass";

interface NavBarLogoProps {
  handleTitleClick: (e: React.MouseEvent) => void;
  handleLogoDoubleClick: () => void;
}

export const NavBarLogo = ({ 
  handleTitleClick, 
  handleLogoDoubleClick 
}: NavBarLogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <FileText 
        className="h-6 w-6 text-primary cursor-pointer" 
        onDoubleClick={handleLogoDoubleClick}
      />
      <a 
        href="/" 
        onClick={handleTitleClick} 
        onDoubleClick={handleLogoDoubleClick}
        className="text-xl font-bold logo-gradient"
      >
        3DBlueprint.io
      </a>
    </div>
  );
};
