
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import { 
  Home, 
  BookOpen, 
  Book, 
  BookText, 
  ClipboardList, 
  Box, 
  Package, 
  Settings, 
  User, 
  LogOut 
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export function DashboardSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
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

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-primary">3DBlueprint.io</h2>
          <p className="text-xs text-gray-500">3D Printing Blueprint</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/dashboard")}
                  tooltip="Dashboard"
                >
                  <button onClick={() => navigate("/dashboard")}>
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/")}
                  tooltip="Home"
                >
                  <button onClick={() => navigate("/")}>
                    <Home className="h-4 w-4" />
                    <span>Home Page</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Blueprint Content</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/dashboard/3d-blueprint")}
                  tooltip="Blueprint Dashboard"
                >
                  <button onClick={() => navigate("/dashboard/3d-blueprint")}>
                    <Book className="h-4 w-4" />
                    <span>Blueprint Dashboard</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/dashboard/3d-blueprint/new-chapter")}
                  tooltip="Introduction"
                >
                  <button onClick={() => navigate("/dashboard/3d-blueprint/new-chapter")}>
                    <Book className="h-4 w-4" />
                    <span>Introduction</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={location.pathname.includes("chapter-1")}
                  tooltip="Chapter 1"
                >
                  <button onClick={() => navigate("/dashboard/3d-blueprint/chapter-1")}>
                    <BookText className="h-4 w-4" />
                    <span>Chapter 1: Arbitrage Windows</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={location.pathname.includes("chapter-2")}
                  tooltip="Chapter 2"
                >
                  <button onClick={() => navigate("/dashboard/3d-blueprint/chapter-2")}>
                    <BookText className="h-4 w-4" />
                    <span>Chapter 2: Knowing Yourself</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/dashboard/3d-blueprint/resources")}
                  tooltip="Resources"
                >
                  <button onClick={() => navigate("/dashboard/3d-blueprint/resources")}>
                    <BookOpen className="h-4 w-4" />
                    <span>Resources</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/dashboard/3d-blueprint/submissions")}
                  tooltip="Submissions"
                >
                  <button onClick={() => navigate("/dashboard/3d-blueprint/submissions")}>
                    <ClipboardList className="h-4 w-4" />
                    <span>My Submissions</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/dashboard/3d-blueprint/product-design")}
                  tooltip="Product Design"
                >
                  <button onClick={() => navigate("/dashboard/3d-blueprint/product-design")}>
                    <Box className="h-4 w-4" />
                    <span>Product Design Engine</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/dashboard/3d-blueprint/filament-guide")}
                  tooltip="Filament Guide"
                >
                  <button onClick={() => navigate("/dashboard/3d-blueprint/filament-guide")}>
                    <Package className="h-4 w-4" />
                    <span>Filament Guide</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-gray-200 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild 
              isActive={isActive("/account")}
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
    </Sidebar>
  );
}
