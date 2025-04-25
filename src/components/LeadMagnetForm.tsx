
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";

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
  const [success, setSuccess] = useState(false);
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
    
    // Simulate ConvertKit integration
    setTimeout(() => {
      console.log("Submitted lead:", { name, email });
      setLoading(false);
      setSuccess(true);
      
      toast({
        title: "Success!",
        description: "Your free guide is on its way to your inbox!",
      });
      
      // Close dialog after 2 seconds if in modal mode
      if (setDialogOpen) {
        setTimeout(() => {
          setDialogOpen(false);
          // Reset form after dialog closes
          setTimeout(() => {
            setSuccess(false);
            setEmail("");
            setName("");
          }, 300);
        }, 2000);
      }
    }, 1500);
  };

  return (
    <div className={inline ? "" : "px-6 py-8"}>
      <div className={inline ? "" : "text-center mb-6"}>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      {success ? (
        <div className="flex flex-col items-center justify-center space-y-4 my-8 text-center">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h4 className="text-xl font-medium text-gray-900">Success!</h4>
          <p className="text-gray-600">
            Your free guide is on its way to your inbox! 
            <br />
            (Check spam folder if you don't see it)
          </p>
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
