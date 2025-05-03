
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      path
    );
  }, [path]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <p className="text-2xl text-gray-600 mb-1">Page Not Found</p>
          <p className="text-sm text-gray-500 mb-6">
            The page <span className="font-mono text-red-500">{path}</span> doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={handleGoBack}
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 flex items-center justify-center"
            asChild
          >
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
          
          <div className="pt-4 text-sm text-gray-500">
            Looking for help? Check our 
            <Link to="/dashboard/3d-blueprint/resources" className="text-primary hover:text-primary/80 ml-1">
              resources page
            </Link>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
