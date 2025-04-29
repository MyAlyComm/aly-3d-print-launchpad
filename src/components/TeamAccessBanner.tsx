
import { useTeamBypass } from "@/hooks/useTeamBypass";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TeamAccessBanner = () => {
  const { isTeamBypassActive, deactivateTeamBypass } = useTeamBypass();

  if (!isTeamBypassActive) {
    return null;
  }

  return (
    <div className="bg-amber-500 text-white py-2 px-4 fixed top-0 left-0 right-0 z-[100] flex items-center justify-between">
      <div>
        <span className="font-semibold">🔓 Team Access Mode Active</span> - Authentication bypass enabled for team members
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-white hover:bg-amber-600" 
        onClick={deactivateTeamBypass}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};
