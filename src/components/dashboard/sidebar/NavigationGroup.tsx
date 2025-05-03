
import React from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import { SidebarNavItem } from "./SidebarNavItem";

interface NavigationItem {
  title: string;
  path: string;
  icon: LucideIcon;
  isActive?: boolean;
  tooltip?: string;
  className?: string;
}

interface NavigationGroupProps {
  label?: string;
  items: NavigationItem[];
  onItemClick?: () => void;
  className?: string;
}

export const NavigationGroup = ({ label, items, onItemClick, className }: NavigationGroupProps) => {
  if (items.length === 0) return null;
  
  return (
    <SidebarGroup className={className}>
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarNavItem
              key={item.path}
              icon={item.icon}
              title={item.title}
              path={item.path}
              isActive={item.isActive}
              tooltip={item.tooltip}
              className={item.className}
              onClick={onItemClick}
            />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
