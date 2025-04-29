
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProviders } from "@/components/AppProviders";
import { mainRoutes } from "@/routes/mainRoutes";
import { ebookRoutes } from "@/routes/ebookRoutes";
import { aiHubRoutes } from "@/routes/aiHubRoutes";
import { TeamBypassProvider } from "@/hooks/useTeamBypass";
import { TeamAccessBanner } from "@/components/TeamAccessBanner";

const App = () => {
  return (
    <React.StrictMode>
      <AppProviders>
        <BrowserRouter>
          <TeamBypassProvider>
            <TeamAccessBanner />
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
          </TeamBypassProvider>
        </BrowserRouter>
      </AppProviders>
    </React.StrictMode>
  );
};

export default App;
