
import { useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import NavBar from '@/components/NavBar';

const Auth = () => {
  const { user, isLoading, authError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const errorParam = searchParams.get('error');
  const from = location.state?.from?.pathname || "/dashboard";
  
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
    
    // Don't redirect while auth is still loading
    if (isLoading) return;
    
    if (user) {
      // If user is already authenticated, redirect them to dashboard
      console.log("User is authenticated, redirecting to:", from);
      navigate(from, { replace: true });
    }
  }, [user, navigate, location, isLoading, authError, errorParam, from]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="pt-16 container mx-auto px-4 py-8">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
