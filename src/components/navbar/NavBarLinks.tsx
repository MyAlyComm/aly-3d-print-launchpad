
import { useTeamBypass } from "@/hooks/useTeamBypass";

export interface NavLinkItem {
  href: string;
  label: string;
  isTeamAccess?: boolean;
  isPrimary?: boolean;
}

const defaultLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#blueprints", label: "Blueprints" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "/dashboard", label: "Dashboard", isTeamAccess: true, isPrimary: true },
  { href: "/account", label: "Account", isTeamAccess: true, isPrimary: true }
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
  const { isTeamBypassActive } = useTeamBypass();
  
  return (
    <div className={`${vertical ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'} ${className}`}>
      {links.map((link, index) => {
        // Skip team access links if team bypass is not active
        if (link.isTeamAccess && !isTeamBypassActive) {
          return null;
        }

        return (
          <a 
            key={`${link.href}-${index}`}
            href={link.href} 
            className={link.isPrimary ? "text-primary hover:text-primary/80 font-medium" : itemClassName}
            onClick={onClick}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
};
