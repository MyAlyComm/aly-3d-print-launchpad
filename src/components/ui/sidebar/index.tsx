
import { useIsMobile } from "@/hooks/use-mobile"

// Export the context and hooks
export {
  SidebarProvider,
  useSidebar,
} from "./context"

// Export the core sidebar components
export {
  Sidebar,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
} from "./sidebar-components"

// Export the structure components
export {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarSeparator,
} from "./structure"

// Export the menu components
export {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  sidebarMenuButtonVariants,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./menu"

// Re-export the useIsMobile hook for convenience
export { useIsMobile }
