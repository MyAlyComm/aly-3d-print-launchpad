
import { useTeamBypass } from "@/hooks/useTeamBypass";

interface NavBarLinksProps {
  className?: string;
}

export const NavBarLinks = ({ className = "" }: NavBarLinksProps) => {
  const { isTeamBypassActive } = useTeamBypass();
  
  return (
    <div className={`flex items-center ${className}`}>
      <a href="/" className="text-gray-700 hover:text-primary font-medium">
        Home
      </a>
      <a href="/about" className="text-gray-700 hover:text-primary font-medium">
        About
      </a>
      <a href="#blueprints" className="text-gray-700 hover:text-primary font-medium">
        Blueprints
      </a>
      <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium">
        Testimonials
      </a>
      {isTeamBypassActive && (
        <>
          <a href="/dashboard" className="text-primary hover:text-primary/80 font-medium">
            Dashboard
          </a>
          <a href="/account" className="text-primary hover:text-primary/80 font-medium">
            Account
          </a>
        </>
      )}
    </div>
  );
};
