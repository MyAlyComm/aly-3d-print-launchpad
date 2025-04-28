
import * as React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({ 
  user: null, 
  session: null,
  isLoading: true,
  signOut: async () => {} 
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [session, setSession] = React.useState<Session | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  // Sign out helper method
  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  React.useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        // Handle auth state changes
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
        
        // For debugging
        if (event) {
          console.log('Auth event:', event);
          
          // Redirect to dashboard after email verification or any sign in
          if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
            // Always redirect to dashboard when signed in
            if (window.location.pathname !== '/dashboard') {
              console.log('User signed in, redirecting to dashboard');
              window.location.href = '/dashboard';
            }
          }
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);

      // If we have a session but we're not on the dashboard, redirect
      if (session && window.location.pathname !== '/dashboard') {
        console.log('Session found, redirecting to dashboard');
        window.location.href = '/dashboard';
      }
    });

    // Check for email verification token in URL
    const checkForAuthRedirect = () => {
      const hasAuthParams = window.location.hash.includes('access_token') || 
                            window.location.search.includes('token=') ||
                            window.location.search.includes('error=');
      
      if (hasAuthParams) {
        // If we have auth parameters in the URL, let Supabase handle it
        // It will trigger the onAuthStateChange event above
        console.log('Auth parameters detected in URL');
      }
    };
    
    // Run the check immediately
    checkForAuthRedirect();

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, isLoading, signOut }}>
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
