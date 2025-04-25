
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import MagicLinkAuth from '@/components/auth/MagicLinkAuth';
import { useAuth } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Auth = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      // If they came from somewhere specific, go back there
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from);
    }
  }, [user, navigate, location]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="password" className="max-w-md mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="password">Email & Password</TabsTrigger>
          <TabsTrigger value="magic">Magic Link</TabsTrigger>
        </TabsList>
        <TabsContent value="password">
          <AuthForm />
        </TabsContent>
        <TabsContent value="magic">
          <MagicLinkAuth />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
