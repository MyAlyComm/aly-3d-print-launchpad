
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import MagicLinkAuth from '@/components/auth/MagicLinkAuth';
import { useAuth } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const Auth = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [processingGuide, setProcessingGuide] = useState(false);

  useEffect(() => {
    if (user) {
      // Check if the user came here from a guide request
      const name = localStorage.getItem('lead_capture_name');
      const isGuideRequest = user.user_metadata?.requestType === 'guide' || (name && !user.app_metadata?.provider);
      
      if (isGuideRequest && !processingGuide) {
        setProcessingGuide(true);
        
        // Handle guide email sending
        const sendGuideEmail = async () => {
          try {
            const response = await fetch('https://gnzudunkcgbnmipshadn.functions.supabase.co/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                name: name || user.user_metadata?.name || 'there', 
                email: user.email 
              }),
            });
            
            if (!response.ok) throw new Error('Failed to send guide email');
            
            toast.success("Your guide has been sent to your email!", {
              description: "Check your inbox (and spam folder) for the download link.",
            });
            
            // Clean up
            localStorage.removeItem('lead_capture_name');
            
            // After processing, go to dashboard or home
            navigate("/");
          } catch (error) {
            console.error('Error sending guide email:', error);
            toast.error("We couldn't send your guide email", {
              description: "Please try again or contact support.",
            });
            navigate("/");
          } finally {
            setProcessingGuide(false);
          }
        };
        
        sendGuideEmail();
      } else if (!processingGuide) {
        // If they came from somewhere specific, go back there
        const from = location.state?.from?.pathname || "/dashboard";
        navigate(from);
      }
    }
  }, [user, navigate, location, processingGuide]);

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
