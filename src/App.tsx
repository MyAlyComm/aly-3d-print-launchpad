
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AppProviders } from "@/components/AppProviders";
import { mainRoutes } from "@/routes/mainRoutes";
import { ebookRoutes } from "@/routes/ebookRoutes";
import { TeamBypassProvider } from "@/hooks/useTeamBypass";
import { TeamAccessBanner } from "@/components/TeamAccessBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ErrorBoundary from "@/components/ErrorBoundary";
import InsideBlueprintPage from "@/components/inside-blueprint/InsideBlueprintPage";

const RouteWithErrorBoundary = ({ element }: { element: React.ReactNode }) => (
  <ErrorBoundary>
    {element}
  </ErrorBoundary>
);

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
          {/* Add the explicit inside-blueprint route */}
          <Route 
            path="/inside-blueprint" 
            element={<RouteWithErrorBoundary element={<InsideBlueprintPage />} />} 
          />
          
          {/* Render all main routes */}
          {mainRoutes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              element={<RouteWithErrorBoundary element={route.element} />} 
            />
          ))}
          
          {/* Render all ebook routes */}
          {ebookRoutes.map((route, index) => (
            <Route 
              key={`ebook-${index}`} 
              path={route.path} 
              element={<RouteWithErrorBoundary element={route.element} />} 
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
