
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';

const Auth = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Since authentication is no longer required, redirect to dashboard immediately
    navigate('/dashboard', { replace: true });
  }, [navigate]);

  return (
    <div>
      <NavBar />
      <div className="pt-16 container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Redirecting to dashboard...</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
