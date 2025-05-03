
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { Globe, Instagram, Upload } from "lucide-react";

// Update to use a more generic User type
interface ProfileFormProps {
  user: {
    id?: string;
    email?: string;
    created_at?: string;
    user_metadata?: Record<string, any>;
    [key: string]: any;
  };
}

export const ProfileForm = ({ user }: ProfileFormProps) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<{
    avatar_url: string | null;
    business_website: string | null;
    instagram_handle: string | null;
  }>({
    avatar_url: null,
    business_website: null,
    instagram_handle: null,
  });

  useEffect(() => {
    // In a real implementation, we would fetch profile data from Supabase
    // For now, we'll just simulate it with user_metadata if available
    const userProfile = {
      avatar_url: user.user_metadata?.avatar_url || null,
      business_website: user.user_metadata?.website || null,
      instagram_handle: user.user_metadata?.instagram_handle || null
    };
    
    setProfile(userProfile);
  }, [user]);

  const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const file = event.target.files?.[0];
      if (!file) return;

      // In a real implementation, we would upload to Supabase storage
      // For now, we'll just create a data URL for demo purposes
      const reader = new FileReader();
      reader.onload = (e) => {
        const avatarUrl = e.target?.result as string;
        setProfile(prev => ({ ...prev, avatar_url: avatarUrl }));
        toast.success('Profile photo updated successfully');
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error('Error uploading profile photo');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real implementation, we would update the profile in Supabase
      // For now, we'll just simulate it with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Error updating profile');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={updateProfile} className="space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src={profile.avatar_url || undefined} />
          <AvatarFallback>{user.email?.[0].toUpperCase() || 'U'}</AvatarFallback>
        </Avatar>
        <div>
          <Input
            type="file"
            accept="image/*"
            onChange={uploadAvatar}
            disabled={loading}
            className="hidden"
            id="avatar-upload"
          />
          <Label
            htmlFor="avatar-upload"
            className="cursor-pointer inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Photo
          </Label>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="website">Business Website</Label>
          <div className="relative">
            <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="website"
              type="url"
              value={profile.business_website || ''}
              onChange={(e) => setProfile(prev => ({ ...prev, business_website: e.target.value }))}
              placeholder="https://your-website.com"
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="instagram">Instagram Handle</Label>
          <div className="relative">
            <Instagram className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="instagram"
              value={profile.instagram_handle || ''}
              onChange={(e) => setProfile(prev => ({ ...prev, instagram_handle: e.target.value }))}
              placeholder="@yourusername"
              className="pl-10"
            />
          </div>
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
};
