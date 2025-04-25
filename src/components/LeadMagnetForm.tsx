
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Check, Mail } from "lucide-react";

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
  const [verificationSent, setVerificationSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // Prepare for Supabase integration
      // const { error } = await supabase.auth.signUp({
      //   email,
      //   options: {
      //     data: {
      //       full_name: name,
      //     }
      //   }
      // });
      
      // if (error) throw error;

      // Simulating API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setVerificationSent(true);
      toast({
        title: "Verification Email Sent!",
        description: "Please check your inbox (and spam folder) to verify your email address.",
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending the verification email. Please try again.",
        variant: "destructive",
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

      {verificationSent ? (
        <div className="flex flex-col items-center justify-center space-y-4 my-8 text-center">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <Mail className="h-6 w-6 text-green-600" />
          </div>
          <h4 className="text-xl font-medium text-gray-900">Check Your Email</h4>
          <div className="text-gray-600 space-y-2">
            <p>We've sent a verification link to:</p>
            <p className="font-medium">{email}</p>
            <p className="text-sm">
              Click the link in the email to verify your address and access the guide.
              <br />
              Can't find the email? Check your spam folder.
            </p>
          </div>
        </div>
      ) : (
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
            {loading ? "Sending..." : buttonText}
          </Button>
          <p className="text-xs text-center text-gray-500 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </form>
      )}
    </div>
  );
};

export default LeadMagnetForm;
