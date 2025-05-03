import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export interface NavLinkItem {
  href: string;
  label: string;
  isPrimary?: boolean;
}

const defaultLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/inside-blueprint", label: "Inside Blueprint" },
  { href: "/dashboard", label: "Dashboard", isPrimary: true }
];

interface NavBarLinksProps {
  className?: string;
  itemClassName?: string;
  vertical?: boolean;
  onClick?: () => void;
  links?: NavLinkItem[];
}

export const NavBarLinks = ({ 
  className = "",
  itemClassName = "text-gray-700 hover:text-primary font-medium",
  vertical = false,
  onClick,
  links = defaultLinks
}: NavBarLinksProps) => {
  const location = useLocation();
  
  return (
    <div className={`${vertical ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'} ${className}`}>
      {links.map((link, index) => {
        // For anchor links (like #blueprints), keep using regular <a> tags
        const isAnchorLink = link.href.startsWith('#');
        const isActivePage = location.pathname === link.href;
        
        const linkClassName = `${link.isPrimary ? "text-primary hover:text-primary/80 font-medium" : itemClassName} ${
          isActivePage && !isAnchorLink ? "underline decoration-2 underline-offset-4" : ""
        }`;
        
        return isAnchorLink ? (
          <a 
            key={`${link.href}-${index}`}
            href={link.href} 
            className={linkClassName}
            onClick={onClick}
          >
            {link.label}
          </a>
        ) : (
          <Link 
            key={`${link.href}-${index}`}
            to={link.href} 
            className={linkClassName}
            onClick={onClick}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};
