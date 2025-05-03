
import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  authError: Error | null;
  signOut: () => Promise<void>;
}

// Create a default user object for public access with a valid UUID format
const defaultUser = {
  id: '00000000-0000-0000-0000-000000000000', // Valid UUID format
  email: 'public@example.com',
  created_at: new Date().toISOString(),
  app_metadata: {},
  user_metadata: {},
  aud: 'authenticated',
} as User;

// Create a mock session for public access
const mockSession = {
  user: defaultUser,
  access_token: 'mock-token',
  refresh_token: 'mock-refresh-token',
  expires_in: 3600,
  expires_at: Math.floor(Date.now() / 1000) + 3600,
  token_type: 'bearer'
} as Session;

const AuthContext = createContext<AuthContextType>({ 
  user: defaultUser, 
  session: mockSession,
  isLoading: false,
  authError: null,
  signOut: async () => {} 
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(defaultUser);
  const [session, setSession] = useState<Session | null>(mockSession);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<Error | null>(null);

  React.useEffect(() => {
    // Check for Supabase auth errors in console
    const handleError = (event: ErrorEvent) => {
      if (event.error?.message?.includes('AuthApiError')) {
        console.warn('Auth error detected, using default mock user');
      }
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  // Mock sign out function that does nothing
  const signOut = async () => {
    console.log('Sign out attempted, but authentication is disabled');
    // For a real implementation, we would use supabase.auth.signOut()
  };

  const contextValue = {
    user,
    session,
    isLoading,
    authError,
    signOut
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
