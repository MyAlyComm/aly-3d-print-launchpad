
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProviders } from "@/components/AppProviders";
import { mainRoutes } from "@/routes/mainRoutes";
import { ebookRoutes } from "@/routes/ebookRoutes";
import { aiHubRoutes } from "@/routes/aiHubRoutes";
import { TeamBypassProvider } from "@/hooks/useTeamBypass";
import { TeamAccessBanner } from "@/components/TeamAccessBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const App = () => {
  return (
    <React.StrictMode>
      <AppProviders>
        <BrowserRouter>
          <TeamBypassProvider>
            <TeamAccessBanner />
            <div className="pt-10"> {/* Add padding for the banner */}
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
              </Routes>
            </div>
          </TeamBypassProvider>
        </BrowserRouter>
      </AppProviders>
    </React.StrictMode>
  );
};

export default App;
