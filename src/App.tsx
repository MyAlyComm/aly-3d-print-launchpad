
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import React from "react"; // Add this explicit import
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/PaymentSuccess";
import Dashboard from "./pages/Dashboard";
import NewEbookChapter from "./pages/NewEbookChapter";
import Resources from "./pages/Resources";
import ProtectedRoute from "./components/ProtectedRoute";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";

// Move queryClient creation inside the component to ensure it's only created once per render
const App = () => {
  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
      },
    }
  });
  
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/new-chapter" element={
                  <ProtectedRoute>
                    <NewEbookChapter />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/resources" element={
                  <ProtectedRoute>
                    <Resources />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/chapter-1" element={
                  <ProtectedRoute>
                    <Chapter1 />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/chapter-2" element={
                  <ProtectedRoute>
                    <Chapter2 />
                  </ProtectedRoute>
                } />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
