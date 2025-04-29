
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface TeamBypassContextType {
  isTeamBypassActive: boolean;
  activateTeamBypass: () => void;
  deactivateTeamBypass: () => void;
}

const TeamBypassContext = createContext<TeamBypassContextType>({
  isTeamBypassActive: false,
  activateTeamBypass: () => {},
  deactivateTeamBypass: () => {},
});

export const TeamBypassProvider = ({ children }: { children: ReactNode }) => {
  const [isTeamBypassActive, setIsTeamBypassActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check for bypass token in localStorage first
    const storedBypass = localStorage.getItem('team_bypass_active');
    if (storedBypass === 'true') {
      setIsTeamBypassActive(true);
    }
    
    // Then check for bypass parameter in URL
    const queryParams = new URLSearchParams(location.search);
    const teamBypassParam = queryParams.get('team_access');

    if (teamBypassParam === 'true') {
      setIsTeamBypassActive(true);
      localStorage.setItem('team_bypass_active', 'true');
      // Remove the parameter from URL for cleaner navigation
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  }, [location.search]);

  const activateTeamBypass = () => {
    setIsTeamBypassActive(true);
    localStorage.setItem('team_bypass_active', 'true');
  };

  const deactivateTeamBypass = () => {
    setIsTeamBypassActive(false);
    localStorage.removeItem('team_bypass_active');
  };

  return (
    <TeamBypassContext.Provider
      value={{ isTeamBypassActive, activateTeamBypass, deactivateTeamBypass }}
    >
      {children}
    </TeamBypassContext.Provider>
  );
};

export const useTeamBypass = () => {
  const context = useContext(TeamBypassContext);
  
  if (context === undefined) {
    throw new Error('useTeamBypass must be used within a TeamBypassProvider');
  }
  
  return context;
};
