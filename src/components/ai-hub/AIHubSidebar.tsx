
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  SparkleIcon, 
  Tag, 
  Image, 
  MessageSquare,
  Home,
  CalendarRange,
  Hash,
  MessagesSquare
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    label: "Dashboard",
    icon: Home,
    path: "/ai-hub",
    exact: true
  },
  {
    label: "Product Development",
    icon: SparkleIcon,
    path: "/ai-hub/product-development",
    subItems: [
      { label: "Idea Generator", path: "/ai-hub/product-development/idea-generator" },
      { label: "Market Validator", path: "/ai-hub/product-development/market-validator" },
      { label: "Specification Builder", path: "/ai-hub/product-development/spec-builder" }
    ]
  },
  {
    label: "Product Listing",
    icon: Tag,
    path: "/ai-hub/listing-creator",
    subItems: [
      { label: "Description Writer", path: "/ai-hub/listing-creator/description" }
    ]
  },
  {
    label: "Visual Marketing",
    icon: Image,
    path: "/ai-hub/visual-marketing",
    subItems: [
      { label: "Background Remover", path: "/ai-hub/visual-marketing/background-remover" }
    ]
  },
  {
    label: "Social Media",
    icon: MessageSquare,
    path: "/ai-hub/social-media",
    subItems: [
      { label: "Content Calendar", path: "/ai-hub/social-media/content-calendar", icon: CalendarRange },
      { label: "Post Creator", path: "/ai-hub/social-media/post-creator", icon: MessagesSquare },
      { label: "Hashtag Research", path: "/ai-hub/social-media/hashtag-research", icon: Hash },
      { label: "Engagement Helper", path: "/ai-hub/social-media/engagement-helper", icon: MessageSquare }
    ]
  }
];

interface AIHubSidebarProps {
  className?: string;
  isCollapsed?: boolean;
}

export const AIHubSidebar = ({ className, isCollapsed = false }: AIHubSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const toggleExpand = (path: string) => {
    if (expandedItems.includes(path)) {
      setExpandedItems(expandedItems.filter(item => item !== path));
    } else {
      setExpandedItems([...expandedItems, path]);
    }
  };

  const isActive = (path: string, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };
  
  const isSubItemActive = (path: string) => {
    return location.pathname === path || 
           (path.includes('/social-media/') && location.pathname.includes(path));
  };

  React.useEffect(() => {
    // Auto-expand the section containing the active path
    menuItems.forEach(item => {
      if (item.subItems && item.subItems.some(subItem => 
        location.pathname === subItem.path || 
        (location.pathname.includes('/social-media/') && subItem.path.includes('/social-media/'))
      )) {
        if (!expandedItems.includes(item.path)) {
          setExpandedItems(prev => [...prev, item.path]);
        }
      }
    });
  }, [location.pathname]);

  return (
    <div className={cn("w-full overflow-y-auto py-4", className)}>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-3 text-lg font-semibold">3D Print Business AI Hub</h2>
        <div className="space-y-1">
          {menuItems.map((item) => (
            <React.Fragment key={item.path}>
              <Button
                variant={isActive(item.path, item.exact) ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start mb-1",
                  isActive(item.path, item.exact) ? "bg-primary/10" : ""
                )}
                onClick={() => {
                  if (item.subItems) {
                    toggleExpand(item.path);
                  } else {
                    navigate(item.path);
                  }
                }}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
                {item.subItems && (
                  <span className="ml-auto">
                    {expandedItems.includes(item.path) ? "−" : "+"}
                  </span>
                )}
              </Button>
              
              {item.subItems && expandedItems.includes(item.path) && (
                <div className="pl-6 space-y-1 mt-1 mb-2">
                  {item.subItems.map((subItem) => (
                    <Button
                      key={subItem.path}
                      variant={isSubItemActive(subItem.path) ? "secondary" : "ghost"}
                      size="sm"
                      className={cn(
                        "w-full justify-start text-sm",
                        isSubItemActive(subItem.path) ? "bg-primary/10" : ""
                      )}
                      onClick={() => navigate(subItem.path)}
                    >
                      {subItem.icon && <subItem.icon className="mr-2 h-4 w-4" />}
                      <span>{subItem.label}</span>
                      {subItem.path.includes("/social-media") && 
                       subItem.path.endsWith("engagement-helper") && (
                        <Badge variant="default" className="ml-auto text-xs">New</Badge>
                      )}
                    </Button>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
