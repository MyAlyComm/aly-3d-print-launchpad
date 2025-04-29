
import { useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

const Auth = () => {
  const { user, isLoading, authError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const errorParam = searchParams.get('error');
  
  useEffect(() => {
    // Handle error parameter from URL
    if (errorParam) {
      toast.error("Authentication Error", {
        description: errorParam === 'session_error' ? 
          "There was a problem with your session. Please sign in again." :
          "There was a problem with authentication. Please try again.",
      });
    }
    
    // Handle auth errors
    if (authError) {
      toast.error("Authentication Error", {
        description: authError.message || "There was a problem signing in. Please try again.",
      });
    }
    
    // Don't do anything while auth is still loading
    if (isLoading) return;
    
    if (user) {
      // If they came from somewhere specific, go back there
      // Otherwise redirect to dashboard by default
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from);
    }
  }, [user, navigate, location, isLoading, authError, errorParam]);

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
