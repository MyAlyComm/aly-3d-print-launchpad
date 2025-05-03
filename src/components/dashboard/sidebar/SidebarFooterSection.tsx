
import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";

export const SidebarFooterSection = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
      navigate("/");
    }
  };

  return (
    <SidebarFooter className="border-t border-gray-200 p-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton 
            asChild 
            isActive={location.pathname === "/account"}
            tooltip="Account"
          >
            <button onClick={() => navigate("/account")}>
              <User className="h-4 w-4" />
              <span>My Account</span>
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton 
            asChild 
            tooltip="Sign Out"
          >
            <button onClick={handleSignOut} className="text-red-500 hover:text-red-600">
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
