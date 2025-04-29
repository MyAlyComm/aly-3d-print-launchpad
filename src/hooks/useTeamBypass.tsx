
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
  const [isTeamBypassActive, setIsTeamBypassActive] = useState(true); // Default to true
  const location = useLocation();

  useEffect(() => {
    // Always set team access to active by default
    setIsTeamBypassActive(true);
    localStorage.setItem('team_bypass_active', 'true');
    
    // Still check for parameters in case they want to explicitly disable it
    const queryParams = new URLSearchParams(location.search);
    const teamBypassParam = queryParams.get('team_access');

    if (teamBypassParam === 'false') {
      setIsTeamBypassActive(false);
      localStorage.removeItem('team_bypass_active');
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
