
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/hooks/useAuth";
import { TeamBypassProvider } from "@/hooks/useTeamBypass";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ReactNode } from "react";
import { TeamAccessBanner } from "@/components/TeamAccessBanner";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        retry: 1,
      },
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TeamBypassProvider>
          <TooltipProvider>
            <TeamAccessBanner />
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </TeamBypassProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
