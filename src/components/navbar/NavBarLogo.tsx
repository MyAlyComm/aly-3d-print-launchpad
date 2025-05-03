
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface NavBarLogoProps {
  handleTitleClick: (e: React.MouseEvent) => void;
}

export const NavBarLogo = ({ handleTitleClick }: NavBarLogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <Link to="/" onClick={handleTitleClick}>
        <FileText className="h-6 w-6 text-primary cursor-pointer" />
      </Link>
      <Link 
        to="/" 
        onClick={handleTitleClick} 
        className="text-xl font-bold logo-gradient"
      >
        3DBlueprint.io
      </Link>
    </div>
  );
};
