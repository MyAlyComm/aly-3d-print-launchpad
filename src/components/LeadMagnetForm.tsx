
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    
    try {
      // Store the user's name in localStorage so we can use it after authentication
      localStorage.setItem("lead_capture_name", name);
      
      // Using Supabase's magic link functionality behind the scenes
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          // Use port 5173 for local development
          emailRedirectTo: window.location.origin,
          data: {
            name: name,
            requestType: "guide",
          }
        }
      });

      if (error) throw error;

      toast.success("Success! Please check your email for the guide.", {
        description: "If you don't see it, please check your spam folder.",
      });

      // Close dialog if it exists
      if (setDialogOpen) {
        setDialogOpen(false);
      }

      // Clear form
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
