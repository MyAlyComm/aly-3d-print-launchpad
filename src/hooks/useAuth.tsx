
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

// Create a default user object for public access
const defaultUser = {
  id: 'public-user',
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
  const [user] = useState<User | null>(defaultUser);
  const [session] = useState<Session | null>(mockSession);
  const [isLoading] = useState(false);
  const [authError] = useState<Error | null>(null);

  // Mock sign out function that does nothing
  const signOut = async () => {
    console.log('Sign out attempted, but authentication is disabled');
    // No actual sign out happens
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
