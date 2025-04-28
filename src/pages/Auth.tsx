import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { useAuth } from '@/hooks/useAuth';

const Auth = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Don't do anything while auth is still loading
    if (isLoading) return;
    
    if (user) {
      // If they came from somewhere specific, go back there
      // Otherwise redirect to dashboard by default
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from);
    }
  }, [user, navigate, location, isLoading]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <AuthForm />
    </div>
  );
};

export default Auth;
