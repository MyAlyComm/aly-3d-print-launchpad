
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import React from "react";
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
import Chapter3 from "./pages/Chapter3";
import Chapter4 from "./pages/Chapter4";
import Chapter5 from "./pages/Chapter5";
import Chapter6 from "./pages/Chapter6";
import Chapter7 from "./pages/Chapter7";
import Chapter8 from "./pages/Chapter8";
import Chapter9 from "./pages/Chapter9";
import Chapter10 from "./pages/Chapter10";
import Chapter11 from "./pages/Chapter11";
import EbooksHub from "./pages/EbooksHub";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
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
                
                {/* New Ebooks Hub route */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <EbooksHub />
                  </ProtectedRoute>
                } />

                {/* 3D Blueprint Ebook routes - nested under /dashboard/3d-blueprint */}
                <Route path="/dashboard/3d-blueprint" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/new-chapter" element={
                  <ProtectedRoute>
                    <NewEbookChapter />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/resources" element={
                  <ProtectedRoute>
                    <Resources />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/chapter-1" element={
                  <ProtectedRoute>
                    <Chapter1 />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/chapter-2" element={
                  <ProtectedRoute>
                    <Chapter2 />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/chapter-3" element={
                  <ProtectedRoute>
                    <Chapter3 />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/chapter-4" element={
                  <ProtectedRoute>
                    <Chapter4 />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/chapter-5" element={
                  <ProtectedRoute>
                    <Chapter5 />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/chapter-6" element={
                  <ProtectedRoute>
                    <Chapter6 />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/chapter-7" element={
                  <ProtectedRoute>
                    <Chapter7 />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/chapter-8" element={
                  <ProtectedRoute>
                    <Chapter8 />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/chapter-9" element={
                  <ProtectedRoute>
                    <Chapter9 />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/chapter-10" element={
                  <ProtectedRoute>
                    <Chapter10 />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/3d-blueprint/chapter-11" element={
                  <ProtectedRoute>
                    <Chapter11 />
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
