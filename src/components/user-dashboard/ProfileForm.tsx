
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/components/ui/sonner";
import { Globe, Instagram, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ProfileFormProps {
  user: User;
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
    getProfile();
  }, [user]);

  const getProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('avatar_url, business_website, instagram_handle')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      if (data) setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const file = event.target.files?.[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const filePath = `${user.id}/${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('profile-photos')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('profile-photos')
        .getPublicUrl(filePath);

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id);

      if (updateError) throw updateError;

      setProfile(prev => ({ ...prev, avatar_url: publicUrl }));
      toast.success('Profile photo updated successfully');
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
      const { error } = await supabase
        .from('profiles')
        .update({
          business_website: profile.business_website,
          instagram_handle: profile.instagram_handle?.replace('@', ''),
        })
        .eq('id', user.id);

      if (error) throw error;
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
          <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
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
