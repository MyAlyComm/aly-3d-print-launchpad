
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface NavBarUserDropdownProps {
  className?: string;
}

export const NavBarUserDropdown = ({ className = "" }: NavBarUserDropdownProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  const navigateTo = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const userInitial = user.email?.[0].toUpperCase() || "U";
  
  return (
    <div className={className}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className="rounded-full outline-none focus:ring-2 focus:ring-primary/50">
          <Avatar className="h-8 w-8 border border-gray-200">
            <AvatarImage src={user.user_metadata?.avatar_url} />
            <AvatarFallback>{userInitial}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white" align="end">
          <div className="py-2 px-3">
            <p className="text-sm font-medium">{user.email}</p>
            <p className="text-xs text-gray-500">
              {user.user_metadata?.full_name || "User"}
            </p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={() => navigateTo("/profile")}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" onClick={() => navigateTo("/account")}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
