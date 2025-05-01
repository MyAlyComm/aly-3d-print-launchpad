
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

const App = () => {
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
    <ErrorBoundary>
      <AppProviders>
        <BrowserRouter>
          <TeamBypassProvider>
            <TeamAccessBanner />
            <div className={`${bannerDismissed ? 'pt-0' : 'pt-10'} transition-all duration-300`}>
              <Breadcrumbs />
              <Routes>
                {mainRoutes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}
                {ebookRoutes.map((route, index) => (
                  <Route key={`ebook-${index}`} path={route.path} element={route.element} />
                ))}
                {aiHubRoutes.map((route, index) => (
                  <Route key={`ai-${index}`} path={route.path} element={route.element} />
                ))}
                
                {/* Redirect /ebooks to /dashboard for backward compatibility */}
                <Route path="/ebooks" element={<Navigate to="/dashboard" replace />} />
                
                {/* Catch-all route for 404s */}
                <Route path="*" element={<Navigate to="/not-found" replace />} />
              </Routes>
            </div>
          </TeamBypassProvider>
        </BrowserRouter>
      </AppProviders>
    </ErrorBoundary>
  );
};

export default App;
