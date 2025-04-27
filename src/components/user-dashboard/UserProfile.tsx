
import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { ProfileForm } from "./ProfileForm";

interface UserProfileProps {
  user: User;
}

export const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Profile Information</h2>
        <p className="text-gray-500">Update your profile information and social links</p>
      </div>
      
      <ProfileForm user={user} />
    </div>
  );
};
