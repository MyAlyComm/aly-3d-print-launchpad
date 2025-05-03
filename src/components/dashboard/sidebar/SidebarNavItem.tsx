
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import {
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";

interface SidebarNavItemProps {
  icon: LucideIcon;
  title: string;
  path: string;
  isActive?: boolean;
  tooltip?: string;
  className?: string;
  onClick?: () => void;
}

export const SidebarNavItem = ({
  icon: Icon,
  title,
  path,
  isActive: forcedIsActive,
  tooltip,
  className = "",
  onClick
}: SidebarNavItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = forcedIsActive !== undefined 
    ? forcedIsActive 
    : location.pathname === path || location.pathname.startsWith(path + '/');

  const handleClick = () => {
    navigate(path);
    if (onClick) onClick();
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        asChild 
        isActive={isActive}
        tooltip={tooltip || title}
        className={className}
      >
        <button onClick={handleClick}>
          <Icon className="h-4 w-4" />
          <span>{title}</span>
        </button>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
