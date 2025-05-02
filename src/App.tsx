
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProviders } from "@/components/AppProviders";
import { mainRoutes } from "@/routes/mainRoutes";
import { ebookRoutes } from "@/routes/ebookRoutes";
import { aiHubRoutes } from "@/routes/aiHubRoutes";
import { TeamBypassProvider } from "@/hooks/useTeamBypass";
import { TeamAccessBanner } from "@/components/TeamAccessBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useAuth } from "@/hooks/useAuth";

// Protected route component that checks authentication
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  
  useEffect(() => {
    const checkBannerState = () => {
      const dismissed = localStorage.getItem('access_banner_dismissed') === 'true';
      setBannerDismissed(dismissed);
    };
    
    // Check on initial load
    checkBannerState();
    
    // Set up event listener for localStorage changes
    window.addEventListener('storage', checkBannerState);
    
    return () => {
      window.removeEventListener('storage', checkBannerState);
    };
  }, []);
  
  return (
    <>
      <TeamAccessBanner />
      <div className={`${bannerDismissed ? 'pt-0' : 'pt-10'} transition-all duration-300`}>
        <Breadcrumbs />
        <Routes>
          {mainRoutes.map((route, index) => {
            // Check if this route should be protected
            const isProtected = route.path === "/dashboard" || 
                               route.path === "/account" || 
                               route.path.startsWith("/chapter");
            
            if (isProtected) {
              return (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={<ProtectedRoute>{route.element}</ProtectedRoute>} 
                />
              );
            }
            
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
          
          {/* Protect all ebook routes */}
          {ebookRoutes.map((route, index) => (
            <Route 
              key={`ebook-${index}`} 
              path={route.path} 
              element={<ProtectedRoute>{route.element}</ProtectedRoute>} 
            />
          ))}
          
          {/* Protect all AI Hub routes */}
          {aiHubRoutes.map((route, index) => (
            <Route 
              key={`ai-${index}`} 
              path={route.path} 
              element={<ProtectedRoute>{route.element}</ProtectedRoute>} 
            />
          ))}
          
          {/* Redirect /ebooks to /dashboard for backward compatibility */}
          <Route path="/ebooks" element={<Navigate to="/dashboard" replace />} />
          
          {/* Catch-all route for 404s */}
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <AppProviders>
        <BrowserRouter>
          <TeamBypassProvider>
            <AppRoutes />
          </TeamBypassProvider>
        </BrowserRouter>
      </AppProviders>
    </ErrorBoundary>
  );
};

export default App;
