import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface TeamBypassContextType {
  isTeamBypassActive: boolean;
  activateTeamBypass: () => void;
  deactivateTeamBypass: () => void;
}

const TeamBypassContext = createContext<TeamBypassContextType>({
  isTeamBypassActive: true, // Default to true
  activateTeamBypass: () => {},
  deactivateTeamBypass: () => {},
});

export const TeamBypassProvider = ({ children }: { children: ReactNode }) => {
  // Always set to true by default for full access
  const [isTeamBypassActive, setIsTeamBypassActive] = useState(true);

  // Always ensure team bypass is active on mount
  useEffect(() => {
    setIsTeamBypassActive(true);
    localStorage.setItem('team_bypass_active', 'true');
  }, []);

  const activateTeamBypass = () => {
    setIsTeamBypassActive(true);
    localStorage.setItem('team_bypass_active', 'true');
  };

  const deactivateTeamBypass = () => {
    // This function is kept for API compatibility but effectively does nothing
    // as we want to keep access open at all times
    console.log("Team bypass deactivation attempted but ignored - keeping full access");
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
