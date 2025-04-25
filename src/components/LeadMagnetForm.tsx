
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface LeadMagnetFormProps { 
  setDialogOpen?: (open: boolean) => void;
  inline?: boolean;
  title?: string;
  description?: string;
  buttonText?: string;
}

const LeadMagnetForm = ({ 
  setDialogOpen, 
  inline = false,
  title = "Get Your Free 3D Printing Guide",
  description = "Enter your details below for instant access",
  buttonText = "Get Free Guide Now"
}: LeadMagnetFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    
    try {
      localStorage.setItem("lead_capture_name", name);
      
      // First, trigger the magic link authentication
      const { error: authError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            name: name,
            requestType: "guide",
          }
        }
      });

      if (authError) throw authError;

      // Then, trigger our welcome email with the guide
      const response = await fetch('https://gnzudunkcgbnmipshadn.functions.supabase.co/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send guide email');
      }

      setSubmittedEmail(email);
      setIsSuccess(true);
      setEmail("");
      setName("");
      
    } catch (error: any) {
      toast.error("There was a problem sending the guide. Please try again.", {
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="px-6 py-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Check Your Email</h3>
        <div className="bg-green-50 w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Mail className="w-8 h-8 text-green-600" />
        </div>
        <div className="space-y-4">
          <p className="text-gray-600 text-lg mb-2">We've sent a verification link to:</p>
          <p className="font-medium text-gray-800">{submittedEmail}</p>
          <p className="text-gray-600">
            Click the link in the email to verify your address<br />and access the guide.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Can't find the email? Check your spam folder.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={inline ? "" : "px-6 py-8"}>
      <div className={inline ? "" : "text-center mb-6"}>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
            disabled={loading}
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            disabled={loading}
          />
        </div>
        <Button 
          type="submit"
          className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold"
          disabled={loading}
        >
          {loading ? (
            <>
              <Mail className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : buttonText}
        </Button>
        <p className="text-xs text-center text-gray-500 mt-4">
          We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
};

export default LeadMagnetForm;
