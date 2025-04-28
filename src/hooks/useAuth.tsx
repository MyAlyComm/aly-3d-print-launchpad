
// Make sure React is explicitly imported
import * as React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;  // Add loading state
  signOut: () => Promise<void>; // Add signOut method for convenience
}

const AuthContext = createContext<AuthContextType>({ 
  user: null, 
  session: null,
  isLoading: true,
  signOut: async () => {} 
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Explicitly use React.useState to avoid any potential reference issues
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
            const currentPath = window.location.pathname;
            
            // Check if we're on a non-dashboard page with a token in the URL
            if (currentPath !== '/dashboard' && window.location.search.includes('token=')) {
              // Redirect to dashboard if we detect a token parameter in URL
              console.log('Token detected in URL, redirecting to dashboard');
              window.location.href = '/dashboard';
            }
            // Or if we're just not on the dashboard already
            else if (currentPath !== '/dashboard') {
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
    });

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
