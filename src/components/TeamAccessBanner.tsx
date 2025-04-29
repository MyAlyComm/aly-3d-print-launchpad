
import { useTeamBypass } from "@/hooks/useTeamBypass";
import { Info } from "lucide-react";
import { useState, useEffect } from "react";

export const TeamAccessBanner = () => {
  const { isTeamBypassActive } = useTeamBypass();
  const [showHint, setShowHint] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  
  // Show hint briefly for new visitors
  useEffect(() => {
    const hasSeenHint = localStorage.getItem('has_seen_nav_hint');
    
    if (!hasSeenHint) {
      setShowHint(true);
      localStorage.setItem('has_seen_nav_hint', 'true');
      
      // Hide hint after 8 seconds
      const timer = setTimeout(() => {
        setShowHint(false);
      }, 8000);
      
      return () => clearTimeout(timer);
    }
    
    // Check if banner was previously dismissed
    const accessBannerDismissed = localStorage.getItem('access_banner_dismissed');
    if (accessBannerDismissed === 'true') {
      setBannerDismissed(true);
    }
  }, []);
  
  const dismissBanner = () => {
    setBannerDismissed(true);
    localStorage.setItem('access_banner_dismissed', 'true');
  };

  return (
    <>
      {isTeamBypassActive && !bannerDismissed && (
        <div className="bg-amber-500 text-white py-2 px-4 fixed top-0 left-0 right-0 z-[100] flex items-center justify-between">
          <div>
            <span className="font-semibold">🔓 Full Access Mode</span> - All pages accessible
          </div>
          <button 
            className="text-white hover:bg-amber-600 ml-2 flex-shrink-0 p-1 rounded" 
            onClick={dismissBanner}
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      )}
      
      {showHint && (
        <div className="bg-blue-500 text-white py-2 px-4 fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 z-[100] rounded-md shadow-lg flex items-center justify-between">
          <div className="flex items-center">
            <Info className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="text-sm">Use the Pages dropdown in the navigation bar to access all content.</span>
          </div>
          <button 
            className="text-white hover:bg-blue-600 ml-2 flex-shrink-0 p-1 rounded" 
            onClick={() => setShowHint(false)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};
