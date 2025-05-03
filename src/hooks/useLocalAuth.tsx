
import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

// Define types for our auth context
interface User {
  id: string;
  email: string;
  created_at: string;
  user_metadata: Record<string, any>;
}

interface Session {
  user: User;
  expires_at: number;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Create a default mock user
const mockUser: User = {
  id: '123e4567-e89b-12d3-a456-426614174000',
  email: 'demo@example.com',
  created_at: new Date().toISOString(),
  user_metadata: { name: 'Demo User' }
};

// Initialize context with default values
const LocalAuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {}
});

// Storage keys
const USER_STORAGE_KEY = 'local_auth_user';
const SESSION_STORAGE_KEY = 'local_auth_session';

// Simple mock users database in localStorage
const getStoredUsers = (): Record<string, { email: string, password: string }> => {
  const users = localStorage.getItem('local_auth_users');
  return users ? JSON.parse(users) : {
    'demo@example.com': { email: 'demo@example.com', password: 'password' }
  };
};

export const LocalAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load session from localStorage on startup
  useEffect(() => {
    const loadSession = () => {
      const storedUser = localStorage.getItem(USER_STORAGE_KEY);
      const storedSession = localStorage.getItem(SESSION_STORAGE_KEY);
      
      if (storedUser && storedSession) {
        const parsedSession = JSON.parse(storedSession);
        
        // Check if session is expired
        if (parsedSession.expires_at > Date.now()) {
          setUser(JSON.parse(storedUser));
          setSession(parsedSession);
        } else {
          // Clear expired session
          localStorage.removeItem(USER_STORAGE_KEY);
          localStorage.removeItem(SESSION_STORAGE_KEY);
        }
      }
      
      setIsLoading(false);
    };
    
    loadSession();
  }, []);

  // Sign in with email and password
  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Get stored users
      const users = getStoredUsers();
      
      // Check if user exists and password matches
      if (users[email] && users[email].password === password) {
        // Create user object
        const newUser: User = {
          id: btoa(email), // Simple encoding to create a unique ID
          email,
          created_at: new Date().toISOString(),
          user_metadata: { name: email.split('@')[0] }
        };
        
        // Create session (valid for 7 days)
        const newSession: Session = {
          user: newUser,
          expires_at: Date.now() + (7 * 24 * 60 * 60 * 1000)
        };
        
        // Save to state and localStorage
        setUser(newUser);
        setSession(newSession);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
        localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newSession));
        
        toast.success('Signed in successfully');
        return;
      }
      
      throw new Error('Invalid email or password');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign up with email and password
  const signUp = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Get stored users
      const users = getStoredUsers();
      
      // Check if user already exists
      if (users[email]) {
        throw new Error('User already exists');
      }
      
      // Add new user
      users[email] = { email, password };
      localStorage.setItem('local_auth_users', JSON.stringify(users));
      
      // Create user object
      const newUser: User = {
        id: btoa(email),
        email,
        created_at: new Date().toISOString(),
        user_metadata: { name: email.split('@')[0] }
      };
      
      // Create session (valid for 7 days)
      const newSession: Session = {
        user: newUser,
        expires_at: Date.now() + (7 * 24 * 60 * 60 * 1000)
      };
      
      // Save to state and localStorage
      setUser(newUser);
      setSession(newSession);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newSession));
      
      toast.success('Signed up successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign up');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    setUser(null);
    setSession(null);
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(SESSION_STORAGE_KEY);
    toast.success('Signed out successfully');
  };

  return (
    <LocalAuthContext.Provider value={{
      user,
      session,
      isLoading,
      signIn,
      signUp,
      signOut
    }}>
      {children}
    </LocalAuthContext.Provider>
  );
};

export const useLocalAuth = () => {
  const context = useContext(LocalAuthContext);
  if (context === undefined) {
    throw new Error('useLocalAuth must be used within a LocalAuthProvider');
  }
  return context;
};
